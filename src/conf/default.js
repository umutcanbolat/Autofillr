import faker from 'faker';

export default function getConfig() {
  const firstName = faker.name.firstName();
  const familyName = faker.name.lastName();
  const email = `${firstName}.${familyName}@gmail.com`.toLowerCase();

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
      value: email,
      ids: ['email'],
    },
  };
}
