import { describe, expect, it } from 'vitest';
import configs, { generateFor } from './index';

const countryCodes = Object.keys(configs);

describe.each(countryCodes)('%s', (countryCode) => {
  it('has a display name', () => {
    expect(configs[countryCode].name).toEqual(expect.any(String));
  });

  it('generates fields that all carry a title, a value and an autocomplete hint', async () => {
    const fields = await generateFor(countryCode);

    expect(Object.keys(fields).length).toBeGreaterThan(0);
    Object.entries(fields).forEach(([key, { title, value, autocomplete }]) => {
      expect(title, key).toEqual(expect.any(String));
      expect(value, key).toEqual(expect.any(String));
      expect(value, key).not.toHaveLength(0);
      expect(autocomplete, key).toEqual(expect.any(String));
    });
  });

  it('generates an email that matches the generated name', async () => {
    const { firstName, familyName, email } = await generateFor(countryCode);

    expect(email.value).toBe(
      `${firstName.value.toLowerCase().replace(/[^a-z0-9]/g, '')}.` +
        `${familyName.value.toLowerCase().replace(/[^a-z0-9]/g, '')}@gmail.com`,
    );
  });
});

describe('it', () => {
  it('derives the fiscal code from the generated date of birth', async () => {
    const { nationalId, dateOfBirth } = await generateFor('it');
    const [, , year] = dateOfBirth.value.split('.');

    // Characters 7-8 of a codice fiscale are the last two digits of the birth year.
    expect(nationalId.value).toHaveLength(16);
    expect(nationalId.value.slice(6, 8)).toBe(year.slice(-2));
  });
});

describe('se', () => {
  it('generates a 10 digit personnummer', async () => {
    const { nationalId } = await generateFor('se');
    expect(nationalId.value).toMatch(/^\d{10}$/);
  });
});
