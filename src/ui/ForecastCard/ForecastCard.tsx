import { FC } from 'react'

// Nested components
import ForecastItem, { IForecastItemProps } from './ForecastItem/ForecastItem'

// Styles
import styles from './ForecastCard.module.scss'

export const ForecastCard: FC = () => {
  const tableData: IForecastItemProps[] = [
    {
      condition: 'clear',
      temperature: 23,
    },
    {
      condition: 'lightRain',
      temperature: 18,
    },
    {
      condition: 'partlyCloudy',
      temperature: 21,
    },
    {
      condition: 'snow',
      temperature: -12,
    },
    {
      condition: 'thunderstorm',
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
