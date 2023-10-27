import { FC } from 'react'

// Nested components
import ForecastItem, { IFiveDayForecast } from './ForecastItem/ForecastItem'

// Styles
import styles from './ForecastCard.module.scss'

export interface ForecastCardProps {
  fiveDayForecast: IFiveDayForecast[]
}

export const ForecastCard: FC<ForecastCardProps> = ({ fiveDayForecast }) => {
  return (
    <div className={styles.card}>
      <table className={styles.table}>
        <tbody>
          {fiveDayForecast.map((row, index) => (
            <ForecastItem
              key={index}
              className={styles.table__row}
              info={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ForecastCard
