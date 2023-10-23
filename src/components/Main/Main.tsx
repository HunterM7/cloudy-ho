import { FC } from 'react'
import cn from 'classnames'

// Types 'n utils
import { ICurrentWeatherResponse } from 'types'
import { getDate } from 'utils'

// Components 'n UI
import {
  CurrentWeatherCard,
  ForecastCard,
  HighlightsCard,
  Footer,
  ErrorSection,
  ICurrentWeatherCardProps,
} from 'ui'
import { HourlyForecast } from 'components'

// Styles
import styles from './Main.module.scss'

export interface MainProps {
  weather: ICurrentWeatherResponse
}

export const Main: FC<MainProps> = ({ weather }) => {
  const CurrentWeatherInfo: ICurrentWeatherCardProps = {
    temperature: weather.main.temp,
    iconName: weather.weather[0].icon,
    description: weather.weather[0].description,
    date: getDate(weather.dt, weather.timezone),
    city: weather.name,
    country: weather.sys.country,
  }

  return (
    <article className={styles.container}>
      <div className={styles.leftSection}>
        {/* Current weather */}
        <section
          className={cn(styles.currentWeather, styles.section)}
          aria-label="current weather"
          data-current-weather
        >
          <CurrentWeatherCard {...CurrentWeatherInfo} />
        </section>

        {/* Forecast */}
        <section
          className={cn(styles.forecast, styles.section)}
          aria-labelledby="forecast-label"
          data-5-day-forecast
        >
          <h2 id="forecast-label" className={styles.forecast__heading}>
            Прогноз на 5 дней
          </h2>

          <ForecastCard />
        </section>
      </div>

      <div className={styles.rightSection}>
        <section
          className={cn(styles.highlights, styles.section)}
          aria-labelledby="highlights-label"
          data-highlights
        >
          <HighlightsCard />
        </section>

        <section
          className={styles.hourlyForecast}
          aria-label="Hourly forecast"
          data-hourly-forecast
        >
          <h2 id="forecast-label" className={styles.hourlyForecast__heading}>
            Today at
          </h2>

          <HourlyForecast />
        </section>
      </div>

      <Footer />

      <ErrorSection />
    </article>
  )
}

export default Main
