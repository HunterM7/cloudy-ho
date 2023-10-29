// Types
import { IHourlyForecastrResponse } from 'types'

// Components 'n UI
import { IHourlyForecast } from 'components'
import { getDateFromUnix } from 'utils'

export function getHourlyForecast(
  data: IHourlyForecastrResponse,
): IHourlyForecast[] {
  const {
    list,
    city: { timezone },
  } = data

  const hourlyForecast: IHourlyForecast[] = []

  for (const [index, data] of list.entries()) {
    const time = getDateFromUnix(data.dt, timezone)
    const currentDay = new Date().getUTCDate()
    const forecastDay = time.getUTCDate()
    const iconName = data.weather[0].icon

    if (index > 7 && currentDay !== forecastDay) break

    const condition = data.weather[0].main
    const temperature = data.main.temp
    const wind = {
      direction: data.wind.deg,
      speed: data.wind.speed,
    }

    hourlyForecast.push({ time, condition, temperature, wind, iconName })
  }

  return hourlyForecast
}
