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
      value: 'Museumplein 6',
      autocomplete: 'address-line1',
    },
    postalCode: {
      title: 'Postal Code',
      value: '1071 DJ',
      autocomplete: 'postal-code',
    },
    city: {
      title: 'City',
      value: 'Amsterdam',
      autocomplete: 'address-level2',
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands#Geographical_telephone_numbers
    phone: {
      title: 'Phone',
      value: `+3120${getRandomDigits(7)}`, // 20 is Amsterdam's geographical number.
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
  name: 'Netherlands',
  generate,
};
