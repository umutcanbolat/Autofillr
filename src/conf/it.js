import CodiceFiscale from 'codice-fiscale-js';
import { getName, getEmail, getDateOfBirth } from '../utils/faker';
import { getFormattedDate, getRandomDigits } from '../utils/utils';

function generate() {
  const { firstName, familyName, genderCode } = getName();
  const dateOfBirth = getDateOfBirth();

  const fiscalCode = new CodiceFiscale({
    name: firstName,
    surname: familyName,
    gender: genderCode,
    day: dateOfBirth.getDate(),
    month: 1 + dateOfBirth.getMonth(),
    year: dateOfBirth.getFullYear(),
    birthplace: 'Napoli', // TODO: make this dynamic
  }).toString();

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
      title: 'Fiscal Code',
      value: fiscalCode,
      ids: ['national_identification_number', 'nin'],
    },
    address: {
      title: 'Address',
      value: 'Piazza del Colosseo 1',
      ids: ['street_address'],
    },
    postalCode: {
      title: 'Postal Code',
      value: '00184',
      ids: ['postal_code'],
    },
    city: {
      title: 'City',
      value: 'Roma',
      ids: ['city'],
    },
    region: {
      title: 'Province',
      value: 'RM',
      ids: ['region'],
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy#Landline_service
    phone: {
      title: 'Phone',
      value: `+3906${getRandomDigits(8)}`, // 06 is the geographical code of Rome.
      ids: ['phone'],
    },
    dateOfBirth: {
      title: 'Date of Birth',
      value: getFormattedDate(dateOfBirth),
      ids: ['date_of_birth'],
    },
  };
}

export default {
  name: 'Italy',
  generate,
};
