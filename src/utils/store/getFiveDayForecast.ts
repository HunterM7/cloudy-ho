// Types 'n utils
import {
  IForecastItem,
  IHourlyForecastrResponse,
  TWeatherConditionCodes,
} from 'types'
import { getDateFromUnix } from 'utils'

// Components 'n UI
import { IFiveDayForecast } from 'ui/ForecastCard/ForecastItem/ForecastItem'

export function getFiveDayForecast(
  data: IHourlyForecastrResponse,
): IFiveDayForecast[] {
  const currentDay = new Date().getUTCDate()

  const weatherByDays = data.list.reduce<
    { day: number; forecast: IForecastItem[] }[]
  >((acc, forecast) => {
    const day = getDateFromUnix(forecast.dt, data.city.timezone).getUTCDate()

    if (currentDay !== day) {
      const index = acc.findIndex((el) => el.day === day)

      index !== -1
        ? acc[index].forecast.push(forecast)
        : acc.push({ day, forecast: [forecast] })
    }

    return acc
  }, [])

  const forecast: IFiveDayForecast[] = weatherByDays.map(({ forecast }) => {
    const length = forecast.length

    const condition: TWeatherConditionCodes =
      length > 5
        ? forecast[4].weather[0].main
        : forecast[length - 1].weather[0].main

    const temperature = +(
      forecast.reduce((acc, forecast) => (acc += forecast.main.temp), 0) /
      length
    ).toFixed(0)

    const date = getDateFromUnix(forecast[length - 1].dt, data.city.timezone)

    return {
      condition,
      temperature,
      date,
    }
  })

  return forecast
}
