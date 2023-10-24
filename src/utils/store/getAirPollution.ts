import { IAirPollutionResponse } from 'types'
import { IAirInfo } from 'ui'

export function getAirPollution(data: IAirPollutionResponse): IAirInfo {
  const { pm2_5, so2, no2, o3 } = data.list[0].components
  const aqi = data.list[0].main.aqi

  const airInfo = {
    pm2_5,
    so2,
    no2,
    o3,
    aqi,
  }

  return airInfo
}
