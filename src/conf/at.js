import { getName, getEmail, getDateOfBirth } from '../utils/faker';
import { getFormattedDate, getRandomDigits } from '../utils/utils';

function generate() {
  const { firstName, familyName } = getName();

  return {
    firstName: {
      title: 'First Name',
      value: firstName,
      autocomplete: 'given-name',
    },
    familyName: {
      title: 'Family Name',
      value: familyName,
      autocomplete: 'family-name',
    },
    email: {
      title: 'Email',
      value: getEmail(firstName, familyName),
      autocomplete: 'email',
    },
    address: {
      title: 'Address',
      value: 'Friedrich-Schmidt-Platz 1',
      autocomplete: 'address-line1',
    },
    postalCode: {
      title: 'Postal Code',
      value: '1010',
      autocomplete: 'postal-code',
    },
    city: {
      title: 'City',
      value: 'Wien',
      autocomplete: 'address-level2',
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Austria
    phone: {
      title: 'Phone',
      value: `+431${getRandomDigits(7)}`, // 1 is the geographic area code of Vienna.
      autocomplete: 'tel',
    },
    dateOfBirth: {
      title: 'Date of Birth',
      value: getFormattedDate(getDateOfBirth()),
      autocomplete: 'bday',
    },
  };
}

export default {
  name: 'Austria',
  generate,
};
