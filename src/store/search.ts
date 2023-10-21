import { create } from 'zustand'

export interface ISearchStore {
  searchQuery: string
  isOpen: boolean

  changeSearchQuery: (newQuery: string) => void
  toggle: () => void
}

export const useSearch = create<ISearchStore>((set) => ({
  searchQuery: '',
  isOpen: false,

  changeSearchQuery(newQuery) {
    set(() => ({ searchQuery: newQuery }))
  },

  toggle() {
    set((state) => {
      if (state.isOpen) return { isOpen: false, searchQuery: '' }

      return { isOpen: true }
    })
  },
}))
