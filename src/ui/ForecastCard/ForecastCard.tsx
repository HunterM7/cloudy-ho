import { FC } from 'react'

// Nested components
import ForecastItem from './ForecastItem/ForecastItem'

// Styles
import styles from './ForecastCard.module.scss'

export const ForecastCard: FC = () => {
  return (
    <div className={styles.card}>
      <ul>
        <ForecastItem temperature={20} condition="lightRain" />
        <ForecastItem temperature={5} condition="clear" />
        <ForecastItem temperature={0} condition="partlyCloudy" />
        <ForecastItem temperature={333} condition="snow" />
        <ForecastItem temperature={12} condition="thunderstorm" />
      </ul>
    </div>
  )
}

export default ForecastCard