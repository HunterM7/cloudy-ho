import { FC } from 'react'

// Types 'n utils
import { WeatherConditions } from 'utils'

// Styles
import styles from './CurrentWeatherCard.module.scss'

export interface ICurrentWeatherCardProps {
  temperature: number
  condition: keyof typeof WeatherConditions
}

export const CurrentWeatherCard: FC<ICurrentWeatherCardProps> = ({
  temperature,
  condition,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Now</h2>

      <div className={styles.weather}>
        <p className={styles.weather__heading}>
          {temperature}&deg;<sup>c</sup>
        </p>

        <img
          src={WeatherConditions[condition].image.day}
          alt="Overcast icon"
          width="64"
          height="64"
          className={styles.weather__icon}
        />
      </div>

      <p className="body-3">Overcast clouds</p>

      <ul className="meta-list">
        <li className="meta-item">
          <span className="m-icon">calendar_today</span>

          <p className="title-3 meta-text">Thursday 16, Feb</p>
        </li>

        <li className="meta-item">
          <span className="m-icon">location_on</span>

          <p className="title-3 meta-text">London, GB</p>
        </li>
      </ul>
    </div>
  )
}

export default CurrentWeatherCard
