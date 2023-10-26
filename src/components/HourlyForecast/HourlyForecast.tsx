import { FC } from 'react'

// Types 'n utils
import { TWeatherConditionCodes } from 'types'

// Components 'n UI
import { WeatherCard } from 'ui'

// Styles
import styles from './HourlyForecast.module.scss'

export interface IHourlyForecast {
  time: Date
  condition: TWeatherConditionCodes
  temperature: number
  wind: {
    direction: number
    speed: number
  }
}

export interface HourlyForecastProps {
  forecastList: IHourlyForecast[]
}

export const HourlyForecast: FC<HourlyForecastProps> = ({ forecastList }) => {
  return (
    <div className={styles.slider}>
      <ul className={styles.slider__list} data-temp>
        {forecastList.map((el, index) => (
          <li key={index} className={styles.slider__item}>
            <WeatherCard
              type="temperature"
              time={el.time}
              condition={el.condition}
              temperature={+el.temperature.toFixed()}
            />
          </li>
        ))}
      </ul>

      <ul className={styles.slider__list} data-wind>
        {forecastList.map((el, index) => (
          <li key={index} className={styles.slider__item}>
            <WeatherCard
              type="wind"
              time={el.time}
              direction={el.wind.direction}
              speed={el.wind.speed}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HourlyForecast
