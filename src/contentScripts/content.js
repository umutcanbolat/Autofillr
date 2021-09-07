const setInput = (target, value) => {
  target.dispatchEvent(new Event('focus', { bubbles: true }));
  // eslint-disable-next-line no-param-reassign
  target.value = value;
  target.dispatchEvent(new Event('input', { bubbles: true }));
  target.dispatchEvent(new Event('blur', { bubbles: true }));
};

const fillAvailableFields = (request, _sender, sendResponse) => {
  Object.values(request).forEach(({ value, autocomplete }) => {
    try {
      const target = document.querySelectorAll(`input[autocomplete*='${autocomplete}']`)[0];

      // clear the input
      setInput(target, '');

      // set the input
      setInput(target, value);
    } catch (e) {
      // let's pretend like nothing has happened
    }
  });

  sendResponse('the form is filled');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
