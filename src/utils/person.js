import { FAMILY_NAMES, FEMALE_FIRST_NAMES, MALE_FIRST_NAMES } from './names';

const pick = (list) => list[Math.floor(Math.random() * list.length)];

const toEmailPart = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '');

// The gender is drawn per name rather than taken as an argument: no caller has
// ever needed to ask for one, and it only exists so that the first name and the
// genderCode the codice fiscale is built from agree with each other.
export const getName = () => {
  const isMale = Math.random() < 0.5;

  return {
    firstName: pick(isMale ? MALE_FIRST_NAMES : FEMALE_FIRST_NAMES),
    familyName: pick(FAMILY_NAMES),
    genderCode: isMale ? 'M' : 'F',
  };
};

export const getEmail = (firstName, familyName) => {
  const name = firstName && familyName ? { firstName, familyName } : getName();
  return `${toEmailPart(name.firstName)}.${toEmailPart(name.familyName)}@gmail.com`;
};

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
