export interface ICurrentWeatherResponse {
  name: string // City name, etc. Moscow
  timezone: number // Shift in seconds from UTC, etc. 10800
  visibility: number // Visibility in meters. The maximum value of the visibility is 10 km

  coord: ICoords
  main: IMain
  wind: IWind
  rain?: IRain
  snow?: ISnow
  clouds: IClouds
  weather: IWeather[]
  sys: ISystemInfo

  // id: number // City ID
  // cod: number // Internal parameter
  // base: string // Internal parameter, etc. stations
  // dt: 1697973910 // Time of data calculation, unix, UTC
}

interface IMain {
  // For temperature - Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  temp: number // Temperature.
  feels_like: number // Temperature. This temperature parameter accounts for the human perception of weather.
  temp_min: number // Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas).
  temp_max: number // Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas).
  pressure: number // Atmospheric pressure on the sea level, hPa
  humidity: number // Humidity, %
  sea_level: number // Atmospheric pressure on the sea level, hPa
  grnd_level: number // Atmospheric pressure on the ground level, hPa
}

interface IWind {
  //Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
  speed: number // Wind speed
  deg: number // Wind direction, degrees
  gust: number // Wind gust
}

interface IRain {
  // Only mm as units of measurement are available for this parameter
  '1h'?: number //  Rain volume for the last 1 hour, mm.
  '3h'?: number // Rain volume for the last 3 hours, mm.
}

interface ISnow {
  // Only mm as units of measurement are available for this parameter
  '1h'?: number //  Snow volume for the last 1 hour, mm.
  '3h'?: number // Snow volume for the last 3 hours, mm.
}

interface ICoords {
  lon: number // Longitude of the location
  lat: number // Latitude of the location
}

interface IClouds {
  all: number // Cloudiness, %
}

interface ISystemInfo {
  country: 'RU' // Country code (GB, JP etc.)
  sunrise: number // Sunrise time, unix, UTC
  sunset: number // Sunset time, unix, UTC

  // id: 2000314 // Internal parameter
  // type: 2 // Internal parameter
  // message: string // Internal parameter
}

export interface IWeather {
  main: TWeatherConditionCodes // Group of weather parameters (Rain, Snow, Clouds etc.)
  description: string // Weather condition within the group.
  icon: string // Weather icon id

  // id: number // Weather condition id
}

export type TWeatherConditionCodes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Ash'
  | 'Squall'
  | 'Tornado'
  | 'Clear'
  | 'Clouds'
