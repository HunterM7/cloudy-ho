import { ICoords, ICurrentWeatherResponse } from '.'

export interface IForecastItem
  extends Omit<ICurrentWeatherResponse, 'sys' | 'timezone'> {
  sys: {
    pod: 'd' | 'n' // Part of the day (n - night, d - day)
  }
  pop: 0 // Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
  dt_txt: string // Time of data forecasted, ISO, UTC. Example: '2023-10-26 12:00:00'
}

export interface IHourlyForecastrResponse {
  cnt: 40 // Number of timestamps returned in the API response
  list: IForecastItem[]
  city: ICity

  // cod: string // Internal parameter
  // message: number // Internal parameter
}

export interface ICity {
  id: number // City ID
  name: string // City name
  coord: ICoords
  country: string // Country code (GB, JP etc.)
  population: number // City population
  timezone: number // Shift in seconds from UTC
  sunrise: number // Sunrise time, Unix, UTC
  sunset: number // Sunset time, Unix, UTC
}
