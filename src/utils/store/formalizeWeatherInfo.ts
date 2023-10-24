import { IWeatherData } from 'store'
import {
  IAirPollutionResponse,
  ICurrentWeatherResponse,
  TCountryData,
} from 'types'

// Utils
import { getCurrentWeather, getHighlights } from 'utils'

export function formalizeWeatherInfo(
  data1: ICurrentWeatherResponse,
  data2: TCountryData,
  data3: IAirPollutionResponse,
): IWeatherData {
  const currentWeather = getCurrentWeather(data1, data2)
  const highlights = getHighlights(data1, data2, data3)

  return {
    currentWeather,
    highlights,
  }
}
