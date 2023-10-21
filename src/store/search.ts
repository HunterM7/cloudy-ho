import { create } from 'zustand'

// Types 'n utils
import { debouncedFetchData } from 'utils'
import { TCountriesList } from 'types'

export type TSearchStatus = 'pending' | 'fullfilled' | 'rejected'

export interface TDataType {
  lat: number
  lon: number
  name: string
  state: string
  country: string
  local_names: TCountriesList
}

export interface ISearchStore {
  searchQuery: string
  searchStatus?: TSearchStatus
  changeSearchQuery: (newQuery: string) => void
  setSearchStatus: (searchStatus: TSearchStatus) => void

  isOpen: boolean
  toggle: () => void

  data: TDataType[] | null
  getData: (url: string) => Promise<void>
}

export const useSearch = create<ISearchStore>((set) => ({
  // Search status
  searchQuery: '',
  searchStatus: undefined,

  changeSearchQuery(newQuery) {
    set(() => ({ searchQuery: newQuery }))
  },
  setSearchStatus(searchStatus: TSearchStatus) {
    set({ searchStatus })
  },

  // Search view
  isOpen: false,

  toggle() {
    set((state) => {
      if (state.isOpen) return { isOpen: false, searchQuery: '', data: null }

      return { isOpen: true }
    })
  },

  // Data
  data: null,

  getData: async (url: string) => {
    set({ searchStatus: 'pending' })

    debouncedFetchData(url)
      .then((res) => {
        const response = res as TDataType[]

        set({ searchStatus: 'fullfilled', data: response })
      })
      .catch(() => set({ searchStatus: 'rejected' }))
  },
}))
