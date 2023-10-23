import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Utils
import { TWeatherConditionCodes } from 'types'
import { WeatherConditions } from 'utils'

// Styles
import styles from './ForecastItem.module.scss'

export interface IForecastItemProps
  extends HTMLAttributes<HTMLTableRowElement> {
  temperature: number
  condition: TWeatherConditionCodes
}

export const ForecastItem: FC<IForecastItemProps> = ({
  condition,
  temperature,
  className,
}) => {
  return (
    <tr className={cn(styles.row, className)}>
      <td>
        <div className={styles.condition}>
          <img
            className={styles.condition__icon}
            src={WeatherConditions[condition].image.day}
            alt="Overcast Clouds"
          />

          <div className={styles.condition__info}>
            <p className={styles.temperature}>
              {temperature}°<sup>c</sup>
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
