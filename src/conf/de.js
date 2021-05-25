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
      value: 'Panoramastraße 1A',
      autocomplete: 'address-line1',
    },
    postalCode: {
      title: 'Postal Code',
      value: '10178',
      autocomplete: 'postal-code',
    },
    city: {
      title: 'City',
      value: 'Berlin',
      autocomplete: 'address-level2',
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Germany#Geographic_numbering
    phone: {
      title: 'Phone',
      value: `+4930${getRandomDigits(8)}`, // 30 is the geographic area code of Berlin.
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
  name: 'Germany',
  generate,
};
