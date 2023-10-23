import { months, weekDayNames } from '../API'

export function prepareDate(date: Date) {
  const weekDayName = weekDayNames[date.getUTCDay()].fullName
  const formattedWeekDayName =
    weekDayName.slice(0, 1).toUpperCase() + weekDayName.slice(1)

  const monthName = months[date.getUTCMonth()].shortName
  const formattedMonthName =
    monthName.slice(0, 1).toUpperCase() + monthName.slice(1)

  return `${formattedWeekDayName} ${date.getUTCDate()}, ${formattedMonthName}`
}
