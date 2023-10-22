import { useSearchParams } from 'react-router-dom'

interface UseCoordsReturnType {
  lat: number
  lon: number
}

export function useCoords(): UseCoordsReturnType {
  const [searchParams] = useSearchParams()

  let lat = null
  let lon = null

  // If there's query params
  const paramsLat = searchParams.get('lat')
  const paramsLon = searchParams.get('lon')

  if (paramsLat && paramsLon) {
    lat = +paramsLat
    lon = +paramsLon

    return { lat, lon }
  }

  // If there's coords in LocalStorage
  const storageLat = localStorage.getItem('lat')
  const storageLon = localStorage.getItem('lon')

  if (storageLat && storageLon) {
    lat = +storageLat
    lon = +storageLon

    return { lat, lon }
  }

  // Default coords - Moscow
  return { lat: 55.7504461, lon: 37.6174943 }
}
