import { FC } from 'react'
import {
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
} from '@mui/icons-material'

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
          className={styles.weather__icon}
        />
      </div>

      <p className={styles.overcast}>Overcast clouds</p>

      <ul className={styles.meta}>
        <li className={styles.meta__item}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: '2.2rem' }} />

          <p className={styles.meta__text}>Thursday 16, Feb</p>
        </li>

        <li className={styles.meta__item}>
          <FmdGoodOutlinedIcon sx={{ fontSize: '2.4rem' }} />

          <p className={styles.meta__text}>London, GB</p>
        </li>
      </ul>
    </div>
  )
}

export default CurrentWeatherCard
