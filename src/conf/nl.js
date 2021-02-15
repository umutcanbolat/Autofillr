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
      value: 'Museumplein 6',
      ids: ['street_address'],
    },
    postalCode: {
      title: 'Postal Code',
      value: '1071 DJ',
      ids: ['postal_code'],
    },
    city: {
      title: 'City',
      value: 'Amsterdam',
      ids: ['city'],
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands#Geographical_telephone_numbers
    phone: {
      title: 'Phone',
      value: `+3120${getRandomDigits(7)}`, // 20 is Amsterdam's geographical number.
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
  name: 'Netherlands',
  generate,
};
