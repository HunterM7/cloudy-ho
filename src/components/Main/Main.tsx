import { FC, useEffect } from 'react'
import cn from 'classnames'

// Zustand
import { useWeather } from 'store'

// Types 'n utils
import { useCoords } from 'hooks'
import { getUrl } from 'utils'

// Components 'n UI
import {
  CurrentWeatherCard,
  ForecastCard,
  HighlightsCard,
  Footer,
  Loader,
  ErrorSection,
} from 'ui'
import { HourlyForecast } from 'components'

// Styles
import styles from './Main.module.scss'

export const Main: FC = () => {
  const { lat, lon } = useCoords()

  const { status, getData } = useWeather()

  const isPending = status === 'pending'

  useEffect(() => {
    const url = getUrl.currentWeather(lat, lon)

    getData(url)
  }, [getData, lat, lon])

  return (
    <main className={styles.main}>
      <article
        className={styles.container}
        style={{
          ...(isPending && { overflow: 'hidden' }),
        }}
      >
        <div className={styles.leftSection}>
          {/* Current weather */}
          <section
            className={cn(styles.currentWeather, styles.section)}
            aria-label="current weather"
            data-current-weather
          >
            <CurrentWeatherCard temperature={25} condition="thunderstorm" />
          </section>

          {/* Forecast */}
          <section
            className={cn(styles.forecast, styles.section)}
            aria-labelledby="forecast-label"
            data-5-day-forecast
          >
            <h2 id="forecast-label" className={styles.forecast__heading}>
              5 Days Forecast
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

      {/* Loading section */}
      {isPending && <Loader />}
    </main>
  )
}

export default Main
