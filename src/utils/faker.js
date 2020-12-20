import faker from 'faker';

export const getName = (gender = ['male', 'female'][Math.round(Math.random())]) => ({
  firstName: faker.name.firstName(gender),
  familyName: faker.name.lastName(gender),
  prefix: gender === 'male' ? 'Mr.' : 'Ms.',
});

export const getEmail = (firstName, familyName) =>
  firstName && familyName
    ? `${firstName}.${familyName}@gmail.com`.toLowerCase().replaceAll(/'/g, '')
    : faker.internet.email();
