import { create } from 'zustand'

// Types 'n utils
import { TPromiseStatus } from 'types'
import { ICurrentWeatherResponse, fetchData } from 'utils'

export interface IWeatherStore {
  status?: TPromiseStatus
  data: ICurrentWeatherResponse | null

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

        set({
          status: 'fullfilled',
          data,
        })
      })
      .catch(() => set({ status: 'rejected' }))
  },
}))
