import { FC } from 'react'

// Nested components
import ForecastItem, { IForecastItemProps } from './ForecastItem/ForecastItem'

// Styles
import styles from './ForecastCard.module.scss'

export const ForecastCard: FC = () => {
  const tableData: IForecastItemProps[] = [
    {
      condition: 'Clear',
      temperature: 23,
    },
    {
      condition: 'Rain',
      temperature: 18,
    },
    {
      condition: 'Clouds',
      temperature: 21,
    },
    {
      condition: 'Snow',
      temperature: -12,
    },
    {
      condition: 'Thunderstorm',
      temperature: 12,
    },
  ]
  return (
    <div className={styles.card}>
      <table className={styles.table}>
        <tbody>
          {tableData.map((row, index) => (
            <ForecastItem key={index} className={styles.table__row} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ForecastCard
