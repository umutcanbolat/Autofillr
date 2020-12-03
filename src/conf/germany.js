import defaultConfig from './default';

export default function getConfig() {
  return {
    ...defaultConfig(),
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
