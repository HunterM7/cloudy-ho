import { create } from 'zustand'

// Types 'n utils
import {
  IReverseGeoResponse,
  TPromiseStatus,
  ICurrentWeatherResponse,
  IAirPollutionResponse,
  IHourlyForecastrResponse,
} from 'types'
import { fetchData, formalizeWeatherInfo, getUrl } from 'utils'

// Other
import { HighlightsCardProps, ICurrentWeatherCardProps } from 'ui'
import { IHourlyForecast } from 'components'
import { IFiveDayForecast } from 'ui/ForecastCard/ForecastItem/ForecastItem'

export interface IWeatherData {
  currentWeather: ICurrentWeatherCardProps
  highlights: HighlightsCardProps
  hourlyForecast: IHourlyForecast[]
  fiveDayForecast: IFiveDayForecast[]
}

export interface IWeatherStore {
  status?: TPromiseStatus
  data: IWeatherData | null

  // Search status
  setStatus: (status: TPromiseStatus) => void

  // Data
  getData: (lat: number, lon: number) => Promise<void>
}

export const useWeather = create<IWeatherStore>((set) => ({
  status: undefined,
  data: null,

  // Search status
  setStatus(status: TPromiseStatus) {
    set({ status })
  },

  // Data
  getData: async (lat, lon) => {
    set({ status: 'pending' })

    const currentWeatherURL = getUrl.currentWeather(lat, lon)
    const reverseGeoURL = getUrl.reverseGeo(lat, lon)
    const airPollutionURL = getUrl.airPollution(lat, lon)
    const hourlyForecastURL = getUrl.forecast(lat, lon)

    Promise.all([
      fetchData(currentWeatherURL),
      fetchData(reverseGeoURL),
      fetchData(airPollutionURL),
      fetchData(hourlyForecastURL),
    ])
      .then(([res1, res2, res3, res4]) => {
        const data1 = res1 as ICurrentWeatherResponse
        const data2 = (res2 as IReverseGeoResponse)[0]
        const data3 = res3 as IAirPollutionResponse
        const data4 = res4 as IHourlyForecastrResponse

        const formalizedData = formalizeWeatherInfo(data1, data2, data3, data4)

        set({
          status: 'fullfilled',
          data: formalizedData,
        })

        // console.log('Response: ', data3)
      })
      .catch((res) => {
        console.log('Res: ', res)
        set({ status: 'rejected' })
      })
  },
}))
