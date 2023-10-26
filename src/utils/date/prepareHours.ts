/**
 * @param {Date} date Date
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export const prepareHours = function (date: Date): string {
  const hours = date.getUTCHours()
  const period = hours >= 12 ? 'PM' : 'AM'

  return `${hours % 12 || 12} ${period}`
}
