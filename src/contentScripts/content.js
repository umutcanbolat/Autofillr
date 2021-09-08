let filledInputs = new Set();

const clearFilledInputs = () => {
  filledInputs.forEach((target) => {
    target.dispatchEvent(new Event('focus', { bubbles: true }));
    // eslint-disable-next-line no-param-reassign
    target.value = '';
    target.dispatchEvent(new Event('input', { bubbles: true }));
  });

  filledInputs = new Set();
};

const setInput = (target, value) => {
  target.dispatchEvent(new Event('focus', { bubbles: true }));
  // eslint-disable-next-line no-param-reassign
  target.value = value;
  target.dispatchEvent(new Event('input', { bubbles: true }));
  target.dispatchEvent(new Event('blur', { bubbles: true }));
};

const fillAvailableFields = (request, _sender, sendResponse) => {
  // Clear the previously filled inputs. This is required because some forms remove the autocomplete attribute, after input value is modified.
  // This behaviour is there to prevent browsers from overriding the manually put inputs.
  clearFilledInputs();

  Object.values(request).forEach(({ value, autocomplete }) => {
    try {
      const target = document.querySelectorAll(`input[autocomplete*='${autocomplete}']`)[0];
      // set the input
      setInput(target, value);
      filledInputs.add(target);
    } catch (e) {
      // let's pretend like nothing has happened
    }
  });

  sendResponse('Autofillr successfully filled the form.');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
