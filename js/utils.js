/**
 * Date Formatting Utilities
 */

/**
 * Get the ordinal suffix for a day number (st, nd, rd, th)
 * @param {number} day - The day of the month (1-31)
 * @returns {string} The ordinal suffix
 */
function getOrdinalSuffix(day) {
  // Handle special cases: 11th, 12th, 13th (not 11st, 12nd, 13rd)
  if (day > 3 && day < 21) return 'th';

  // Handle other cases based on last digit
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/**
 * Format a date object into "Day Month Date, Year" format
 * Example: "Sat Mar 28th, 2026"
 * @param {Date} date - The date to format
 * @returns {string} The formatted date string
 */
function formatDate(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const suffix = getOrdinalSuffix(day);

  return `${dayOfWeek} ${month} ${day}${suffix}, ${year}`;
}
