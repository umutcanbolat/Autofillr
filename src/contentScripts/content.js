let filledInputs = new Set();

const clearFilledInputs = () => {
  filledInputs.forEach((target) => {
    target.dispatchEvent(new Event('focus', { bubbles: true }));

    target.value = '';
    target.dispatchEvent(new Event('input', { bubbles: true }));
  });

  filledInputs = new Set();
};

const setInput = (target, value) => {
  target.dispatchEvent(new Event('focus', { bubbles: true }));

  target.value = value;
  target.dispatchEvent(new Event('input', { bubbles: true }));
  target.dispatchEvent(new Event('blur', { bubbles: true }));
};

const fillAvailableFields = (request, _sender, sendResponse) => {
  // Clear the previously filled inputs. This is required because some forms remove the autocomplete attribute, after input value is modified.
  // This behaviour is there to prevent browsers from overriding the manually put inputs.
  clearFilledInputs();

  Object.values(request).forEach(({ value, autocomplete }) => {
    // A substring match, because the attribute may carry a section or address
    // type in front of the field name, e.g. `autocomplete="shipping tel"`.
    const target = document.querySelector(`input[autocomplete*='${autocomplete}']`);
    if (!target) return;

    setInput(target, value);
    filledInputs.add(target);
  });

  sendResponse('Autofillr successfully filled the form.');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
