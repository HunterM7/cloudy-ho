import axios from 'axios'

// Constants
import {
  WEATHER_API_URL,
  FORECAST_API_URL,
  AIR_POLLUTION_API_URL,
  REVERSE_GEO_API_URL,
  GEO_API_URL,
} from './constants'

/**
 * Fetch data
 * @param {string} URL API url
 */
export async function fetchData<T>(URL: string) {
  const { VITE_WEATHER_API_KEY: API_KEY } = import.meta.env

  return await axios.get<T>(`${URL}&appid=${API_KEY}`).then((res) => res.data)
}

export const getUrl = {
  currentWeather(lat: number, lon: number) {
    return `${WEATHER_API_URL}lat=${lat}&lon=${lon}&units=metric&lang=ru`
  },
  forecast(lat: number, lon: number) {
    return `${FORECAST_API_URL}lat=${lat}&lon=${lon}&units=metric&lang=ru`
  },
  airPollution(lat: number, lon: number) {
    return `${AIR_POLLUTION_API_URL}lat=${lat}&lon=${lon}&units=metric&lang=ru`
  },
  reverseGeo(lat: number, lon: number) {
    return `${REVERSE_GEO_API_URL}lat=${lat}&lon=${lon}&limit=5&lang=ru`
  },
  /**
   * Method that returns something
   * @param {string} query - Search query (city name, state code, country code). E.g. "London", "New York", "Moscow"
   * @returns Combined URL
   */
  geo(query: string) {
    return `${GEO_API_URL}q=${query}&limit=5&lang=ru`
  },
}
