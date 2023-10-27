import { IWeatherData } from 'store'
import {
  IAirPollutionResponse,
  ICurrentWeatherResponse,
  IHourlyForecastrResponse,
  TCountryData,
} from 'types'

// Utils
import {
  getCurrentWeather,
  getFiveDayForecast,
  getHighlights,
  getHourlyForecast,
} from 'utils'

export function formalizeWeatherInfo(
  data1: ICurrentWeatherResponse,
  data2: TCountryData,
  data3: IAirPollutionResponse,
  data4: IHourlyForecastrResponse,
): IWeatherData {
  const currentWeather = getCurrentWeather(data1, data2)
  const highlights = getHighlights(data1, data2, data3)
  const hourlyForecast = getHourlyForecast(data4)
  const fiveDayForecast = getFiveDayForecast(data4)

  return {
    currentWeather,
    highlights,
    hourlyForecast,
    fiveDayForecast,
  }
}
