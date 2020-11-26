import faker from 'faker';
import generatePno from 'personal-number-generator';

const generate = () => {};

export const generateNew = () => {
  const firstName = faker.name.firstName();
  const familyName = faker.name.lastName();
  const email = `${firstName}.${familyName}@gmail.com`.toLowerCase();

  return {
    firstName,
    familyName,
    nationalId: generatePno(),
    email,
    address: 'Centrumvägen 33',
    postalCode: '952 33',
    city: 'Kalix',
    phone: '+468123456',
  };
};

export default generate;
