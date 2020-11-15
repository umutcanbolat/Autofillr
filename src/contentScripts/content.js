const ids = {
  firstName: ['given_name'],
  familyName: ['family_name'],
  nationalId: ['national_identification_number'],
  email: ['email'],
  address: ['street_address'],
  postalCode: ['postal_code'],
  city: ['city'],
  phone: ['phone'],
};

const fillAvailableFields = (request, _sender, sendResponse) => {
  Object.entries(request).forEach(([key, value]) => {
    ids[key].forEach((fieldId) => {
      try {
        // fill any input tag whose id attribute contains `fieldId`
        const target = document.querySelectorAll(`input[id*='${fieldId}']`)[0];
        target.value = value;
        const event = document.createEvent('HTMLEvents');
        event.initEvent('input', true, true);
        target.dispatchEvent(event);
      } catch (e) {
        console.error(e);
      }
    });
  });

  sendResponse('the form is filled');
};

chrome.runtime.onMessage.addListener(fillAvailableFields);
