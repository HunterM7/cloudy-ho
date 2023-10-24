import { create } from 'zustand'

// Types 'n utils
import {
  IReverseGeoResponse,
  TPromiseStatus,
  ICurrentWeatherResponse,
  IAirPollutionResponse,
} from 'types'
import { fetchData, formalizeWeatherInfo, getUrl } from 'utils'

// Other
import { IAirInfo, ICurrentWeatherCardProps } from 'ui'

export interface IWeatherData {
  currentWeather: ICurrentWeatherCardProps
  airPollution: IAirInfo
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

    Promise.all([
      fetchData(currentWeatherURL),
      fetchData(reverseGeoURL),
      fetchData(airPollutionURL),
    ])
      .then(([res1, res2, res3]) => {
        const data1 = res1 as ICurrentWeatherResponse
        const data2 = (res2 as IReverseGeoResponse)[0]
        const data3 = res3 as IAirPollutionResponse

        const formalizedData = formalizeWeatherInfo(data1, data2, data3)

        console.log('Data: ', formalizedData)

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

    // fetchData(currentWeatherURL)
    //   .then((response) => {
    //     const data = response as ICurrentWeatherResponse

    //     const formalizedData = formalizeWeatherInfo(data)

    //     set({
    //       status: 'fullfilled',
    //       data: formalizedData,
    //     })
    //   })
    //   .catch(() => set({ status: 'rejected' }))

    // fetchData(reverseGeoURL).then((res) => console.log('ReverseGeo: ', res))
  },
}))
