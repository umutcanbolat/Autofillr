import generatePno from 'personal-number-generator';
import { getName, getEmail } from '../utils/person';
import { getRandomDigits } from '../utils/utils';

export function generate() {
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
    nationalId: {
      title: 'National ID',
      value: String(generatePno()).padStart(10, '0'),
      autocomplete: 'nin',
    },
    address: {
      title: 'Address',
      value: 'Galärvarvsvägen 14',
      autocomplete: 'address-line1',
    },
    postalCode: {
      title: 'Postal Code',
      value: '115 21',
      autocomplete: 'postal-code',
    },
    city: {
      title: 'City',
      value: 'Stockholm',
      autocomplete: 'address-level2',
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Sweden#Area_codes
    phone: {
      title: 'Phone',
      value: `+468${getRandomDigits(8)}`, // 8 is the are code of Stockholm.
      autocomplete: 'tel',
    },
  };
}
