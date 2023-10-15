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
    <tr className={styles.row}>
      <td>
        <div className={styles.condition}>
          <img
            className={styles.condition__icon}
            src={WeatherConditions[condition].image.day}
            alt="Overcast Clouds"
          />

          <div className={styles.condition__info}>
            <p className={styles.temperature}>
              {temperature}&deg;<sup>c</sup>
            </p>
          </div>
        </div>
      </td>

      <td>
        <p className={styles.date}>17 Feb</p>
      </td>

      <td>
        <p className={styles.weekDay}>Friday</p>
      </td>
    </tr>
  )
}

export default ForecastItem
