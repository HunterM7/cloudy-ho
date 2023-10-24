import { IWeatherData } from 'store'
import { ICurrentWeatherResponse, TCountryData } from 'types'

// Utils
import { getCurrentWeather } from '.'

export function formalizeWeatherInfo(
  data1: ICurrentWeatherResponse,
  data2: TCountryData,
): IWeatherData {
  const currentWeather = getCurrentWeather(data1, data2)

  return { currentWeather }
}
