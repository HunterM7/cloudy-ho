import { FC } from 'react'

// Components 'n UI
import { WeatherCard } from 'ui'

// Styles
import styles from './HourlyForecast.module.scss'

export const HourlyForecast: FC = () => {
  return (
    <div className={styles.slider}>
      <ul className={styles.slider__list} data-temp>
        {[...new Array(10)].map(() => (
          <li className={styles.slider__item}>
            <WeatherCard
              type="temperature"
              time="03 PM"
              condition="cloudy"
              temperature={25}
            />
          </li>
        ))}
      </ul>

      <ul className={styles.slider__list} data-wind>
        {[...new Array(10)].map(() => (
          <li className={styles.slider__item}>
            <WeatherCard type="wind" time="03 PM" direction="" speed={4} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HourlyForecast
