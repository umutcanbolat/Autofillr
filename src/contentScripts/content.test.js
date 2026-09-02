import { beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * The content script registers its listener on import, so each test imports a
 * fresh copy: the set of filled fields is module state that must not leak from
 * one fill to the next.
 */
let fill;

beforeEach(async () => {
  vi.resetModules();
  globalThis.chrome = {
    runtime: {
      onMessage: {
        addListener: (listener) => {
          fill = listener;
        },
      },
    },
  };

  await import('./content');
});

const render = (html) => {
  document.body.innerHTML = html;
};

/** Records the events a field receives from here on. */
const watch = (field) => {
  const seen = [];
  ['focus', 'input', 'change', 'blur'].forEach((type) =>
    field.addEventListener(type, () => seen.push(type)),
  );
  return seen;
};

describe('fillAvailableFields', () => {
  it('fills the field marked by the autocomplete attribute', () => {
    render(`<input autocomplete="given-name" /><input autocomplete="tel-country-code" />`);

    fill(
      {
        firstName: { value: 'Elin', autocomplete: 'given-name' },
        phone: { value: '+46812345678', autocomplete: 'tel' },
      },
      null,
      () => {},
    );

    const [name, tel] = document.querySelectorAll('input');
    expect(name.value).toBe('Elin');
    expect(tel.value).toBe('');
  });

  it('fills marked textareas and dropdowns with matching options', () => {
    render(`
      <textarea autocomplete="address-line1"></textarea>
      <select autocomplete="address-level1">
        <option value="">-</option>
        <option value="RM">Roma</option>
      </select>
    `);

    fill(
      {
        address: { value: 'Piazza del Colosseo 1', autocomplete: 'address-line1' },
        region: { value: 'RM', autocomplete: 'address-level1' },
      },
      null,
      () => {},
    );

    expect(document.querySelector('textarea').value).toBe('Piazza del Colosseo 1');
    expect(document.querySelector('select').value).toBe('RM');
  });

  it('can match a dropdown by option text', () => {
    render(`
      <select autocomplete="address-level1">
        <option value="">-</option>
        <option value="RM">Roma</option>
      </select>
    `);

    fill({ region: { value: 'Roma', autocomplete: 'address-level1' } }, null, () => {});

    expect(document.querySelector('select').value).toBe('RM');
  });

  it('leaves a dropdown alone when its options do not include the value', () => {
    render(`
      <select autocomplete="address-level1">
        <option value="">-</option>
        <option value="ZZ">Else</option>
      </select>
    `);
    const select = document.querySelector('select');
    const request = { region: { value: 'RM', autocomplete: 'address-level1' } };
    const seen = watch(select);

    fill(request, null, () => {});

    expect(select.value).toBe('');
    expect(seen).toEqual([]);

    fill(request, null, () => {});
    expect(seen).toEqual([]);
  });

  it('leaves disabled fields alone', () => {
    render(`
      <input autocomplete="given-name" disabled />
      <textarea autocomplete="address-line1" disabled></textarea>
      <select autocomplete="address-level1" disabled>
        <option value="">-</option>
        <option value="RM">Roma</option>
      </select>
    `);

    fill(
      {
        firstName: { value: 'Elin', autocomplete: 'given-name' },
        address: { value: 'Piazza del Colosseo 1', autocomplete: 'address-line1' },
        region: { value: 'RM', autocomplete: 'address-level1' },
      },
      null,
      () => {},
    );

    expect(document.querySelector('input').value).toBe('');
    expect(document.querySelector('textarea').value).toBe('');
    expect(document.querySelector('select').value).toBe('');
  });

  it('uses the native value setter so framework-tracked inputs notice the change', () => {
    render(`<input autocomplete="email" />`);
    const input = document.querySelector('input');
    const native = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    const ownSetter = vi.fn();

    Object.defineProperty(input, 'value', {
      configurable: true,
      get: () => native.get.call(input),
      set: ownSetter,
    });

    fill({ email: { value: 'elin@example.com', autocomplete: 'email' } }, null, () => {});

    expect(ownSetter).not.toHaveBeenCalled();
    expect(input.value).toBe('elin@example.com');
  });

  it('does not select a disabled dropdown option', () => {
    render(`
      <select autocomplete="address-level1">
        <option value="">-</option>
        <option value="RM" disabled>Roma</option>
      </select>
    `);

    fill({ region: { value: 'RM', autocomplete: 'address-level1' } }, null, () => {});

    expect(document.querySelector('select').value).toBe('');
  });

  it('does not clear a dropdown to its first real option', () => {
    render(`
      <select autocomplete="address-level1">
        <option value="RM">Roma</option>
        <option value="MI">Milano</option>
      </select>
    `);
    const select = document.querySelector('select');

    fill({ region: { value: 'MI', autocomplete: 'address-level1' } }, null, () => {});
    fill({ region: { value: 'Napoli', autocomplete: 'address-level1' } }, null, () => {});

    expect(select.value).toBe('');
  });

  it('leaves an input alone when the browser rejects the value', () => {
    render(`<input type="number" autocomplete="postal-code" value="12345" />`);
    const number = document.querySelector('input');
    const request = { postalCode: { value: '115 21', autocomplete: 'postal-code' } };
    const seen = watch(number);

    fill(request, null, () => {});

    expect(number.value).toBe('12345');
    expect(seen).toEqual(['focus', 'blur']);

    fill(request, null, () => {});
    expect(seen).toEqual(['focus', 'blur', 'focus', 'blur']);
  });

  it('clears the fields it did fill before filling again', () => {
    render(`<input autocomplete="given-name" />`);
    const input = document.querySelector('input');

    fill({ firstName: { value: 'Elin', autocomplete: 'given-name' } }, null, () => {});

    const seen = watch(input);
    fill({ firstName: { value: 'Marco', autocomplete: 'given-name' } }, null, () => {});

    expect(seen).toContain('input');
    expect(input.value).toBe('Marco');
  });
});
