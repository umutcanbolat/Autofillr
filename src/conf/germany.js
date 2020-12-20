import { getName, getEmail } from '../utils/faker';

export default function getConfig() {
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
      title: 'title', // way so many titles :))
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
      value: '10178 1A',
      ids: ['postal_code'],
    },
    city: {
      title: 'City',
      value: 'Berlin',
      ids: ['city'],
    },
    phone: {
      title: 'Phone',
      value: '+4930247575875',
      ids: ['phone'],
    },
  };
}
