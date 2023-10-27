import { FC } from 'react'
import cn from 'classnames'

// Zustand
import { IWeatherData } from 'store'

// Components 'n UI
import {
  CurrentWeatherCard,
  ForecastCard,
  HighlightsCard,
  Footer,
  ErrorSection,
} from 'ui'
import { HourlyForecast } from 'components'

// Styles
import styles from './Main.module.scss'

export interface MainProps {
  weather: IWeatherData
}

export const Main: FC<MainProps> = ({ weather }) => {
  return (
    <article className={styles.container}>
      <div className={styles.leftSection}>
        {/* Current weather */}
        <section
          className={cn(styles.currentWeather, styles.section)}
          aria-label="current weather"
        >
          <CurrentWeatherCard {...weather.currentWeather} />
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

          <ForecastCard fiveDayForecast={weather.fiveDayForecast} />
        </section>
      </div>

      <div className={styles.rightSection}>
        <section
          className={cn(styles.highlights, styles.section)}
          aria-labelledby="highlights-label"
          data-highlights
        >
          <HighlightsCard {...weather.highlights} />
        </section>

        <section
          className={styles.hourlyForecast}
          aria-label="Hourly forecast"
          data-hourly-forecast
        >
          <h2 id="forecast-label" className={styles.hourlyForecast__heading}>
            Today at
          </h2>

          <HourlyForecast forecastList={weather.hourlyForecast} />
        </section>
      </div>

      <Footer />

      <ErrorSection />
    </article>
  )
}

export default Main
