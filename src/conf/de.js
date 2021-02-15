import { getName, getEmail, getDateOfBirth } from '../utils/faker';
import { getFormattedDate, getRandomDigits } from '../utils/utils';

function generate() {
  const { firstName, familyName, prefix } = getName();

  return {
    firstName: {
      title: 'First Name',
      value: firstName,
      ids: ['given_name'],
    },
    familyName: {
      title: 'Family Name',
      value: familyName,
      ids: ['family_name'],
    },
    email: {
      title: 'Email',
      value: getEmail(firstName, familyName),
      ids: ['email'],
    },
    title: {
      title: 'Title', // way so many titles :))
      value: prefix,
      ids: ['5cdd013a-1db1-4f89-9cd4-b8bd9807c732'],
    },
    address: {
      title: 'Address',
      value: 'Panoramastraße 1A',
      ids: ['street_address'],
    },
    postalCode: {
      title: 'Postal Code',
      value: '10178',
      ids: ['postal_code'],
    },
    city: {
      title: 'City',
      value: 'Berlin',
      ids: ['city'],
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Germany#Geographic_numbering
    phone: {
      title: 'Phone',
      value: `+4930${getRandomDigits(8)}`, // 30 is the geographic area code of Berlin.
      ids: ['phone'],
    },
    dateOfBirth: {
      title: 'Date of Birth',
      value: getFormattedDate(getDateOfBirth()),
      ids: ['date_of_birth'],
    },
  };
}

export default {
  name: 'Germany',
  generate,
};
