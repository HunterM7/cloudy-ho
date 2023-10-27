// Types 'n utils
import {
  IForecastItem,
  IHourlyForecastrResponse,
  TWeatherConditionCodes,
} from 'types'

// Components 'n UI
import { IFiveDayForecast } from 'ui/ForecastCard/ForecastItem/ForecastItem'
import { getDateFromUnix } from 'utils'

export function getFiveDayForecast(
  data: IHourlyForecastrResponse,
): IFiveDayForecast[] {
  // const forecast: IFiveDayForecast[] = []

  const currentDay = new Date().getUTCDay()

  const weatherByDays = data.list.reduce<Record<number, IForecastItem[]>>(
    (acc, forecast) => {
      const day = getDateFromUnix(forecast.dt, data.city.timezone).getUTCDate()

      if (currentDay !== day) {
        acc[day] ? acc[day].push(forecast) : (acc[day] = [forecast])
      }

      return acc
    },
    {},
  )

  console.log('Days: ', weatherByDays)

  const forecast: IFiveDayForecast[] = Object.values(weatherByDays).map(
    (forecast) => {
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
    },
  )

  return forecast
}
