import { getName, getEmail } from '../utils/faker';
import { getRandomDigits } from '../utils/utils';

const generatePno = require('personal-number-generator');

function generate() {
  const { firstName, familyName } = getName();

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
    nationalId: {
      title: 'National ID',
      value: generatePno(),
      ids: ['national_identification_number', 'nin'],
    },
    address: {
      title: 'Address',
      value: 'Galärvarvsvägen 14',
      ids: ['street_address'],
    },
    postalCode: {
      title: 'Postal Code',
      value: '115 21',
      ids: ['postal_code'],
    },
    city: {
      title: 'City',
      value: 'Stockholm',
      ids: ['city'],
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Sweden#Area_codes
    phone: {
      title: 'Phone',
      value: `+468${getRandomDigits(8)}`, // 8 is the are code of Stockholm.
      ids: ['phone'],
    },
  };
}

export default {
  name: 'Sweden',
  generate,
};
