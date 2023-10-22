import { create } from 'zustand'

// Types 'n utils
import { TCountryData, TPromiseStatus } from 'types'
import { fetchData } from 'utils'

export interface ISearchStore {
  searchQuery: string
  searchStatus?: TPromiseStatus
  isOpen: boolean
  data: TCountryData[] | null

  // Search status
  changeSearchQuery: (newQuery: string) => void

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
        const data = response as TCountryData[]

        set({ searchStatus: 'fullfilled', data })
      })
      .catch(() => set({ searchStatus: 'rejected' }))
  },
}))
