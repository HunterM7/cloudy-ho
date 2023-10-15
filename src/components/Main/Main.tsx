import { FC } from 'react'
import cn from 'classnames'

// Components 'n UI
import { CurrentWeatherCard, ForecastCard } from 'ui'

// Styles
import styles from './Main.module.scss'

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <div className="content-left">
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
      </article>
    </main>
  )
}

export default Main
