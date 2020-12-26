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

/**
 * Returns a random date between the given ages.
 *
 * @remarks
 * The function will still work correctly even when minAge > maxAge.
 *
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {Date} a random date between the given ages.
 *
 */
export const getDateOfBirth = (minAge = 18, maxAge = 60) => {
  const now = new Date();
  const minEpoch = new Date(now).setFullYear(now.getFullYear() - maxAge);
  const maxEpoch = new Date(now).setFullYear(now.getFullYear() - minAge);

  // find a random date between the min and max epochs
  const randomDate = new Date(Math.random() * (maxEpoch - minEpoch) + minEpoch);

  return randomDate;
};
