const fillAvailableFields = (request, _sender, sendResponse) => {
  Object.values(request).forEach(({ value, ids }) => {
    ids.forEach((fieldId) => {
      try {
        // fill any input tag whose id attribute contains `fieldId`
        const target = document.querySelectorAll(`input[id*='${fieldId}']`)[0];
        target.dispatchEvent(new Event('focus', { bubbles: true }));
        target.value = value;
        target.dispatchEvent(new Event('input', { bubbles: true }));
        target.dispatchEvent(new Event('blur', { bubbles: true }));
      } catch (e) {
        // let's pretend like nothing has happened
      }
    });
  });

  sendResponse('the form is filled');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
