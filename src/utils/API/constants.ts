// Endpoints
export const BASE_API_URL = 'https://api.openweathermap.org/'
export const API_URL = `${BASE_API_URL}data/2.5/`
export const GEO_URL = `${BASE_API_URL}geo/1.0/`

export const WEATHER_API_URL = `${API_URL}weather?`
export const FORECAST_API_URL = `${API_URL}forecast?`
export const AIR_POLLUTION_API_URL = `${API_URL}air_pollution?`

export const GEO_API_URL = `${GEO_URL}direct?`
export const REVERSE_GEO_API_URL = `${GEO_URL}reverse?`

export interface IWeekDay {
  fullName: string
  shortName: string
}

export const weekDayNames: IWeekDay[] = [
  { fullName: 'воскресенье', shortName: 'вс' },
  { fullName: 'понедельник', shortName: 'пн' },
  { fullName: 'вторник', shortName: 'вт' },
  { fullName: 'среда', shortName: 'ср' },
  { fullName: 'четверг', shortName: 'чт' },
  { fullName: 'пятница', shortName: 'пт' },
  { fullName: 'суббота', shortName: 'сб' },
]

export interface IMonth {
  fullName: string
  shortName: string
}

export const months: IMonth[] = [
  { fullName: 'январь', shortName: 'янв' },
  { fullName: 'февраль', shortName: 'февр' },
  { fullName: 'март', shortName: 'март' },
  { fullName: 'апрель', shortName: 'апр' },
  { fullName: 'май', shortName: 'май' },
  { fullName: 'июнь', shortName: 'июнь' },
  { fullName: 'июль', shortName: 'июль' },
  { fullName: 'август', shortName: 'авг' },
  { fullName: 'сентябрь', shortName: 'сент' },
  { fullName: 'октябрь', shortName: 'окт' },
  { fullName: 'ноябрь', shortName: 'нояб' },
  { fullName: 'декабрь', shortName: 'дек' },
]

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. Formate: "Sunday 10, Jan"
 */
export function getDate(dateUnix: number, timezone: number): string {
  const date = new Date((dateUnix + timezone) * 1000)

  const weekDayName = weekDayNames[date.getUTCDay()].fullName
  const formattedWeekDayName =
    weekDayName.slice(0, 1).toUpperCase() + weekDayName.slice(1)

  const monthName = months[date.getUTCMonth()].shortName
  const formattedMonthName =
    monthName.slice(0, 1).toUpperCase() + monthName.slice(1)

  return `${formattedWeekDayName} ${date.getUTCDate()}, ${formattedMonthName}`
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
