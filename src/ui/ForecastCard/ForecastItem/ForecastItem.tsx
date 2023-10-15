import { FC } from 'react'

// Utils
import { WeatherConditions } from 'utils'

// Styles
import styles from './ForecastItem.module.scss'

export interface IForecastItemProps {
  temperature: number
  condition: keyof typeof WeatherConditions
}

export const ForecastItem: FC<IForecastItemProps> = ({
  condition,
  temperature,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.leftSide}>
        <img
          className={styles.icon}
          src={WeatherConditions[condition].image.day}
          alt="Overcast Clouds"
        />

        <div className={styles.info}>
          <p className={styles.temperature}>{temperature}</p>
        </div>
      </div>

      <p className={styles.date}>17 Feb</p>

      <p className={styles.weekDay}>Friday</p>
    </li>
  )
}

export default ForecastItem
