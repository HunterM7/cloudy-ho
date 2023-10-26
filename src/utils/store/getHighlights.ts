import {
  IAirPollutionResponse,
  ICurrentWeatherResponse,
  TCountryData,
} from 'types'
import { HighlightsCardProps, ISunInfo } from 'ui'
import { toFixed } from '../other/common'
import { getDateFromUnix } from 'utils'

export function getHighlights(
  data1: ICurrentWeatherResponse,
  _data2: TCountryData,
  data3: IAirPollutionResponse,
): HighlightsCardProps {
  // AQI
  const [
    {
      main: { aqi },
      components: { pm2_5, so2, no2, o3 },
    },
  ] = data3.list

  const airInfo = { pm2_5, so2, no2, o3, aqi }

  // SunInfo
  const {
    timezone,
    sys: { sunset, sunrise },
  } = data1

  const sunInfo: ISunInfo = {
    sunrise: getDateFromUnix(sunrise, timezone),
    sunset: getDateFromUnix(sunset, timezone),
  }

  // Other info
  const humidity = data1.main.humidity
  const pressure = data1.main.pressure
  const visibility = toFixed(data1.visibility / 1000)
  const feelsLike = data1.main.feels_like

  return {
    airInfo,
    sunInfo,
    humidity,
    pressure,
    visibility,
    feelsLike,
  }
}
