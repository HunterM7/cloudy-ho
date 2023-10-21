// Endpoints
export const BASE_API_URL = 'https://api.openweathermap.org/'
export const API_URL = `${BASE_API_URL}data/2.5/`
export const GEO_URL = `${BASE_API_URL}geo/1.0/`

export const WEATHER_API_URL = `${API_URL}weather?`
export const FORECAST_API_URL = `${API_URL}forecast?`
export const AIR_POLLUTION_API_URL = `${API_URL}air_pollution?`

export const GEO_API_URL = `${GEO_URL}direct?`
export const REVERSE_GEO_API_URL = `${GEO_URL}reverse?`

export const weekDayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. Formate: "Sunday 10, Jan"
 */
export function getDate(dateUnix: number, timezone: number): string {
  const date = new Date((dateUnix + timezone) * 1000)
  const weekDayName = weekDayNames[date.getUTCDay()]
  const monthName = monthNames[date.getUTCMonth()]

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export function getTime(timeUnix: number, timezone: number): string {
  const date = new Date((timeUnix + timezone) * 1000)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const period = hours >= 12 ? 'PM' : 'AM'

  return `${hours % 12 || 12}:${minutes} ${period}`
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */
export function getHours(timeUnix: number, timezone: number): string {
  const date = new Date((timeUnix + timezone) * 1000)
  const hours = date.getUTCHours()
  const period = hours >= 12 ? 'PM' : 'AM'

  return `${hours % 12 || 12} ${period}`
}

/**
 * @param {number} mps Metter per seconds
 * @returns {number} Kilometer per hours
 */
export function mps_to_kmh(mps: number): number {
  const mph = mps * 3600
  return mph / 1000
}

export const aqiText = {
  1: {
    level: 'Good',
    message:
      'Air quality is considered satisfactory, and air pollution poses little or no risk',
  },
  2: {
    level: 'Fair',
    message:
      'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
  },
  3: {
    level: 'Moderate',
    message:
      'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
  },
  4: {
    level: 'Poor',
    message:
      'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
  },
  5: {
    level: 'Very Poor',
    message:
      'Health warnings of emergency conditions. The entire population is more likely to be affected.',
  },
}
