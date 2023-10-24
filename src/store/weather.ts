import { create } from 'zustand'

// Types 'n utils
import {
  IReverseGeoResponse,
  TPromiseStatus,
  ICurrentWeatherResponse,
} from 'types'
import { fetchData, formalizeWeatherInfo, getUrl } from 'utils'

// Other
import { ICurrentWeatherCardProps } from 'ui'

export interface IWeatherData {
  currentWeather: ICurrentWeatherCardProps
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

    Promise.all([fetchData(currentWeatherURL), fetchData(reverseGeoURL)])
      .then(([response1, response2]) => {
        const data1 = response1 as ICurrentWeatherResponse
        const data2 = (response2 as IReverseGeoResponse)[0]

        const formalizedData = formalizeWeatherInfo(data1, data2)

        set({
          status: 'fullfilled',
          data: formalizedData,
        })

        console.log('Response2: ', data2)
      })
      .catch(() => set({ status: 'rejected' }))

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
