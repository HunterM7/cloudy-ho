import { create } from 'zustand'

// Types 'n utils
import { TCountriesList } from 'types'
import { fetchData } from 'utils'

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
  isOpen: boolean
  data: TDataType[] | null

  // Search status
  changeSearchQuery: (newQuery: string) => void
  setSearchStatus: (searchStatus: TSearchStatus) => void

  // Search view
  openSearch: () => void
  closeSearch: () => void
  toggle: () => void

  // Data
  getData: (url: string) => Promise<void>
}

export const useSearch = create<ISearchStore>((set) => ({
  searchQuery: '',
  searchStatus: undefined,
  isOpen: false,
  data: null,

  // Search status
  changeSearchQuery(newQuery) {
    set(() => ({ searchQuery: newQuery }))
  },
  setSearchStatus(searchStatus: TSearchStatus) {
    set({ searchStatus })
  },

  // Search view
  openSearch() {
    set({ isOpen: true })
  },
  closeSearch() {
    set({ isOpen: false })
  },
  toggle() {
    set((state) => {
      if (state.isOpen) return { isOpen: false, searchQuery: '', data: null }

      return { isOpen: true }
    })
  },

  // Data
  getData: async (url: string) => {
    set({ searchStatus: 'pending' })

    fetchData(url)
      .then((response) => {
        const data = response as TDataType[]

        set({ searchStatus: 'fullfilled', data })
      })
      .catch(() => set({ searchStatus: 'rejected' }))
  },
}))
