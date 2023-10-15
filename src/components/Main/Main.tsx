import { FC } from 'react'

// Components 'n UI
import { CurrentWeatherCard } from 'ui'

// Styles
import styles from './Main.module.scss'

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <div className="content-left">
          {/* Current weather */}
          <section
            className={`currentWeather ${styles.section}`}
            aria-label="current weather"
            data-current-weather
          >
            <CurrentWeatherCard temperature={25} condition="thunderstorm" />
          </section>
        </div>
      </article>
    </main>
  )
}

export default Main
