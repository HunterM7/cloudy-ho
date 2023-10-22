import { countries } from 'utils'

type TCountriesUnion = (typeof countries)[number]

export type TCountriesList = Record<TCountriesUnion, string>

export interface TCountryData {
  lat: number
  lon: number
  name: string
  state: string
  country: string
  local_names: TCountriesList & { feature_name: string }
}
