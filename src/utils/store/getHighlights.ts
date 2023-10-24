import {
  IAirPollutionResponse,
  ICurrentWeatherResponse,
  TCountryData,
} from 'types'
import { HighlightsCardProps } from 'ui'
import { toFixed } from '../other/common'

export function getHighlights(
  data1: ICurrentWeatherResponse,
  data2: TCountryData,
  data3: IAirPollutionResponse,
): HighlightsCardProps {
  // AQI
  const { pm2_5, so2, no2, o3 } = data3.list[0].components
  const aqi = data3.list[0].main.aqi

  const airInfo = {
    pm2_5,
    so2,
    no2,
    o3,
    aqi,
  }

  // Data
  const humidity = data1.main.humidity
  const pressure = data1.main.pressure
  const visibility = toFixed(data1.visibility / 1000)
  const feelsLike = data1.main.feels_like

  return {
    airInfo,
    humidity,
    pressure,
    visibility,
    feelsLike,
  }
}
