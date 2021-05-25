const clearInputs = () => {
  const inputs = document.querySelectorAll('input[autocomplete]');
  inputs.forEach((target) => {
    target.dispatchEvent(new Event('focus', { bubbles: true }));
    // eslint-disable-next-line no-param-reassign
    target.value = '';
    target.dispatchEvent(new Event('input', { bubbles: true }));
    target.dispatchEvent(new Event('blur', { bubbles: true }));
  });
};

const fillAvailableFields = (request, _sender, sendResponse) => {
  clearInputs();
  Object.values(request).forEach(({ value, autocomplete }) => {
    try {
      // fill any input tag whose id attribute contains `fieldId`
      const target = document.querySelectorAll(`input[autocomplete*='${autocomplete}']`)[0];
      target.dispatchEvent(new Event('focus', { bubbles: true }));
      target.value = '';
      target.dispatchEvent(new Event('input', { bubbles: true }));
      target.value = value;
      target.dispatchEvent(new Event('input', { bubbles: true }));
      target.dispatchEvent(new Event('blur', { bubbles: true }));
    } catch (e) {
      // let's pretend like nothing has happened
    }
  });

  sendResponse('the form is filled');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
