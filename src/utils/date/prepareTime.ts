/**
 * @param {Date} date Date
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export const prepareTime = function (date: Date): string {
  const rawTime = {
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
  }
  const hours = rawTime.hours
  const minutes = rawTime.minutes <= 9 ? `0${rawTime.minutes}` : rawTime.minutes
  const period = hours >= 12 ? 'PM' : 'AM'

  return `${hours % 12 || 12}:${minutes} ${period}`
}
