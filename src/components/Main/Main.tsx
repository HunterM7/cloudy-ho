import { FC } from 'react'
import cn from 'classnames'

// Components 'n UI
import { CurrentWeatherCard, ForecastCard } from 'ui'

// Styles
import styles from './Main.module.scss'
import { HighlightsCard } from '../../ui/HighlightsCard/HighlightsCard'

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
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
            <h2 id="forecast-label" className={styles.forecastHeading}>
              5 Days Forecast
            </h2>

            <ForecastCard />
          </section>
        </div>

        <div className="content-right">
          <section
            className={cn(styles.highlights, styles.section)}
            aria-labelledby="highlights-label"
            data-highlights
          >
            <HighlightsCard />
          </section>
        </div>
      </article>
    </main>
  )
}

export default Main
