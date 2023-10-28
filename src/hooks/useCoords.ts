import { useLayoutEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

interface ICoordsState {
  lat: number | null
  lon: number | null
}

const initialCoordsState: ICoordsState = { lat: null, lon: null }
const defaultCoordsValue: ICoordsState = { lat: 55.7504461, lon: 37.6174943 } // Moscow coordinates

export function useCoords(): ICoordsState {
  const [coords, setCoords] = useState<ICoordsState>(initialCoordsState)

  const [searchParams] = useSearchParams()
  const location = useLocation()

  useLayoutEffect(() => {
    const isCurrentLocation = location.pathname === '/current-location'

    const paramsLat = searchParams.get('lat')
    const paramsLon = searchParams.get('lon')

    const storageLat = localStorage.getItem('lat')
    const storageLon = localStorage.getItem('lon')

    if (isCurrentLocation) {
      // If user set current location
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setCoords({
            lat: coords.latitude,
            lon: coords.longitude,
          })
        },
        (error) => {
          console.log('Error: ', error)
        },
      )
    } else if (paramsLat && paramsLon) {
      // If there's query params
      setCoords({
        lat: +paramsLat,
        lon: +paramsLon,
      })
    } else if (storageLat && storageLon) {
      // If there's coords in LocalStorage
      setCoords({
        lat: +storageLat,
        lon: +storageLon,
      })
    } else {
      setCoords(defaultCoordsValue)
    }
  }, [location.pathname, searchParams])

  return coords
}
