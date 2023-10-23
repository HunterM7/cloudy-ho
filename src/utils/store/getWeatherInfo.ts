import { IWeatherData } from 'store'
import { ICurrentWeatherResponse } from 'types'

// Utils
import { getCurrentWeather } from '.'

export function getWeatherInfo(data: ICurrentWeatherResponse): IWeatherData {
  const currentWeather = getCurrentWeather(data)

  return { currentWeather }
}
