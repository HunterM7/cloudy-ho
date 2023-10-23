import { create } from 'zustand'

// Types 'n utils
import { TPromiseStatus, ICurrentWeatherResponse } from 'types'
import { fetchData, formalizeWeatherInfo } from 'utils'

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
  getData: (url: string) => Promise<void>
}

export const useWeather = create<IWeatherStore>((set) => ({
  status: undefined,
  data: null,

  // Search status
  setStatus(status: TPromiseStatus) {
    set({ status })
  },

  // Data
  getData: async (url: string) => {
    set({ status: 'pending' })

    fetchData(url)
      .then((response) => {
        const data = response as ICurrentWeatherResponse

        const formalizedData = formalizeWeatherInfo(data)

        set({
          status: 'fullfilled',
          data: formalizedData,
        })
      })
      .catch(() => set({ status: 'rejected' }))
  },
}))
