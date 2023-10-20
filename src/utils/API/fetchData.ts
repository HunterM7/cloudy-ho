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
 * Fetch
 * @param {string} URL API url
 */

export function fetchData(URL: string) {
  const { VITE_WEATHER_API_KEY: API_KEY } = import.meta.env

  return axios.get(`${URL}&appid=${API_KEY}`).then((res) => res.data)
}

export const getUrl = {
  currentWeather(lat: string, lon: string) {
    return `${WEATHER_API_URL}lat=${lat}&lon=${lon}&units=metric`
  },
  forecast(lat: string, lon: string) {
    return `${FORECAST_API_URL}lat=${lat}&lon=${lon}&units=metric`
  },
  airPollution(lat: string, lon: string) {
    return `${AIR_POLLUTION_API_URL}lat=${lat}&lon=${lon}&units=metric`
  },
  reverseGeo(lat: string, lon: string) {
    return `${REVERSE_GEO_API_URL}lat=${lat}&lon=${lon}&limit=5`
  },
  /**
   * Method that returns something
   * @param {string} query - Search query (city name, state code, country code). E.g. "London", "New York", "Moscow"
   * @returns Combined URL
   */
  geo(query: string) {
    return `${GEO_API_URL}q=${query}&limit=5`
  },
}
