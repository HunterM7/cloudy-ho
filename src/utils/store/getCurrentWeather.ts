import { ICurrentWeatherResponse } from 'types'
import { ICurrentWeatherCardProps } from 'ui'
import { getDateFromUnix } from 'utils'

export function getCurrentWeather(
  data: ICurrentWeatherResponse,
): ICurrentWeatherCardProps {
  const temperature = data.main.temp
  const iconName = data.weather[0].icon
  const description = data.weather[0].description
  const date = getDateFromUnix(data.dt, data.timezone)
  const city = data.name
  const country = data.sys.country

  return {
    temperature,
    iconName,
    description,
    date,
    city,
    country,
  }
}
