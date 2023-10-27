import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Utils
import { TWeatherConditionCodes } from 'types'
import { WeatherConditions, months, weekDayNames } from 'utils'

// Styles
import styles from './ForecastItem.module.scss'

export interface IFiveDayForecast {
  temperature: number
  condition: TWeatherConditionCodes
  date: Date
}

export interface IForecastItemProps
  extends HTMLAttributes<HTMLTableRowElement> {
  info: IFiveDayForecast
}

export const ForecastItem: FC<IForecastItemProps> = ({ info, className }) => {
  const formattedDate = `${info.date.getDate()} ${
    months[info.date.getMonth()].shortName
  }`
  const formattedWeekDay = weekDayNames[info.date.getDay()].fullName

  return (
    <tr className={cn(styles.row, className)}>
      <td>
        <div className={styles.condition}>
          <img
            className={styles.condition__icon}
            src={WeatherConditions[info.condition].image.day}
            alt="Overcast Clouds"
          />

          <div className={styles.condition__info}>
            <p className={styles.temperature}>
              {info.temperature}°<sup>c</sup>
            </p>
          </div>
        </div>
      </td>

      <td>
        <p className={styles.date}>
          {formattedDate}
          {/* 17 Feb */}
        </p>
      </td>

      <td>
        <p className={styles.weekDay}>
          {formattedWeekDay}
          {/* Friday */}
        </p>
      </td>
    </tr>
  )
}

export default ForecastItem
