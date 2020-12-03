import defaultConfig from './default';

const generatePno = require('personal-number-generator');

export default function getConfig() {
  return {
    ...defaultConfig(),
    nationalId: {
      title: 'National ID',
      value: generatePno(),
      ids: ['national_identification_number', 'nin'],
    },
    address: {
      title: 'Address',
      value: 'Centrumvägen 33',
      ids: ['street_address'],
    },
    postalCode: {
      title: 'Postal Code',
      value: '952 33',
      ids: ['postal_code'],
    },
    city: {
      title: 'City',
      value: 'Kalix',
      ids: ['city'],
    },
    phone: {
      title: 'Phone',
      value: '+468123456',
      ids: ['phone'],
    },
  };
}
