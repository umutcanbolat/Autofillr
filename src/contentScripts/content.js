let filledFields = new Set();

const TAGS = ['input', 'textarea', 'select'];

const fire = (target, type) => target.dispatchEvent(new Event(type, { bubbles: true }));

const isSelect = (target) => target.tagName === 'SELECT';

const setValue = (target, value) => {
  const descriptor = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

  if (descriptor?.set) {
    descriptor.set.call(target, value);
    return;
  }

  target.value = value;
};

const clearFilledFields = () => {
  filledFields.forEach((target) => {
    fire(target, 'focus');

    if (isSelect(target)) {
      setValue(target, '');
      fire(target, 'input');
      fire(target, 'change');
      return;
    }

    setValue(target, '');
    fire(target, 'input');
  });

  filledFields = new Set();
};

/**
 * A dropdown cannot take arbitrary text, so the generated value has to be found
 * among the options -- by value or by label, e.g. "RM" or "Roma". One that
 * offers neither is left alone rather than set to something untrue.
 */
const selectOption = (select, value) => {
  const wanted = value.trim().toLowerCase();
  const options = [...select.options];

  return options.find(
    (option) =>
      !option.disabled &&
      [option.value, option.textContent]
        .map((optionValue) => optionValue?.trim().toLowerCase())
        .includes(wanted),
  );
};

/**
 * @returns {boolean} whether the field took the value.
 */
const setField = (target, value) => {
  if (target.disabled) return false;

  if (isSelect(target)) {
    const option = selectOption(target, value);
    if (!option) return false;

    fire(target, 'focus');
    setValue(target, option.value);
    fire(target, 'input');
    fire(target, 'change');
    fire(target, 'blur');
    return true;
  }

  const previousValue = target.value;

  fire(target, 'focus');
  setValue(target, value);

  // An input sanitises what it will hold: `input[type=number]` turns "115 21"
  // and "+468..." into "". Reporting that as filled would both lie to the caller
  // and leave the field to be cleared on the next run.
  if (target.value !== value) {
    setValue(target, previousValue);
    fire(target, 'blur');
    return false;
  }

  fire(target, 'input');
  fire(target, 'blur');
  return true;
};

const fillAvailableFields = (request, _sender, sendResponse) => {
  // Clear the previously filled fields. This is required because some forms
  // remove the autocomplete attribute after a value is modified.
  // This behaviour is there to prevent browsers from overriding manually put
  // inputs.
  clearFilledFields();

  Object.values(request).forEach(({ value, autocomplete }) => {
    // `~=` matches one whitespace-separated token, so `autocomplete="shipping tel"`
    // still counts as `tel` while `tel-country-code` -- a field of its own, which
    // must not receive a whole phone number -- does not.
    const selector = TAGS.map((tag) => `${tag}[autocomplete~='${autocomplete}']`).join(', ');
    const target = [...document.querySelectorAll(selector)]
      .filter((field) => !filledFields.has(field))
      .find((field) => setField(field, value));
    if (target) filledFields.add(target);
  });

  sendResponse('Autofillr successfully filled the form.');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
