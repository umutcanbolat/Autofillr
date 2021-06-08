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
      title: 'Fiscal Code',
      value: fiscalCode,
      autocomplete: 'nin',
    },
    address: {
      title: 'Address',
      value: 'Piazza del Colosseo 1',
      autocomplete: 'address-line1',
    },
    postalCode: {
      title: 'Postal Code',
      value: '00184',
      autocomplete: 'postal-code',
    },
    city: {
      title: 'City',
      value: 'Roma',
      autocomplete: 'address-level2',
    },
    region: {
      title: 'Province',
      value: 'RM',
      autocomplete: 'address-level1',
    },
    // https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy#Landline_service
    phone: {
      title: 'Phone',
      value: `+3906${getRandomDigits(8)}`, // 06 is the geographical code of Rome.
      autocomplete: 'tel',
    },
    dateOfBirth: {
      title: 'Date of Birth',
      value: getFormattedDate(dateOfBirth),
      autocomplete: 'bday',
    },
  };
}

export default {
  name: 'Italy',
  generate,
};
