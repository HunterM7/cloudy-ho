import { ICoords } from '.'

export interface IAirPollutionResponse {
  coord: ICoords // Coordinates from the specified location (latitude, longitude)
  list: IAirPollution[]
}

export interface IAirPollution {
  main: {
    aqi: TAirQualityIndex // Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor. If you want to recalculate Air Quality indexes according UK, Europe, USA and Mainland China scales please use "Air Pollution Index levels scale" page
  }
  components: {
    co: number // Сoncentration of CO (Carbon monoxide), μg/m3
    no: number // Сoncentration of NO (Nitrogen monoxide), μg/m3
    no2: number // Сoncentration of NO2 (Nitrogen dioxide), μg/m3
    o3: number // Сoncentration of O3 (Ozone), μg/m3
    so2: number // Сoncentration of SO2 (Sulphur dioxide), μg/m3
    pm2_5: number // Сoncentration of PM2.5 (Fine particles matter), μg/m3
    pm10: number // Сoncentration of PM10 (Coarse particulate matter), μg/m3
    nh3: number // Сoncentration of NH3 (Ammonia), μg/m3
  }
  dt: number // Time of data calculation, unix, UTC
}

export type TAirQualityIndex = 1 | 2 | 3 | 4 | 5
