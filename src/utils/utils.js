/**
 * Returns a date string in DD.MM.YYYY format.
 *
 * @param {Date} date
 * @returns {string} the formatted date
 *
 */
export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${day}.${month}.${year}`;
};

/**
 *
 * @param {number} length
 * @returns {string} generated random digits in the given length
 *
 */
export const getRandomDigits = (length = 7) => {
  let digits = '';

  for (let i = 0; i < length; i += 1) {
    digits += Math.floor(Math.random() * 10);
  }

  return digits;
};
