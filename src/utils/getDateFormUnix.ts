/**
 * Function, that return date from unix considering timeshift
 * @param {number} dateUnix Date in unix format (seconds), etc. 1698082261
 * @param {number} timezone Timeshift relative to UTC in seconds, etc. 10800
 * @returns {Date} Date in JS Date format
 */
export function getDateFromUnix(dateUnix: number, timezone: number): Date {
  const date = new Date((dateUnix + timezone) * 1000)

  return date
}
