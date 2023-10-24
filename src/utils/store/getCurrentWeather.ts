import { ICurrentWeatherResponse, TCountryData } from 'types'
import { ICurrentWeatherCardProps } from 'ui'
import { getDateFromUnix } from 'utils'

export function getCurrentWeather(
  data1: ICurrentWeatherResponse,
  data2: TCountryData,
): ICurrentWeatherCardProps {
  const temperature = data1.main.temp
  const iconName = data1.weather[0].icon
  const description = data1.weather[0].description
  const date = getDateFromUnix(data1.dt, data1.timezone)
  const city = data2.local_names?.ru || data2.name
  const country = data2.country

  return {
    temperature,
    iconName,
    description,
    date,
    city,
    country,
  }
}
