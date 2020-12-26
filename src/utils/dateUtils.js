/* eslint-disable import/prefer-default-export */

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
