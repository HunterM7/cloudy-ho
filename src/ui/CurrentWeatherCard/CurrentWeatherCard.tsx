import { FC } from 'react'
import {
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
} from '@mui/icons-material'

// Types 'n utils
import { TWeatherIcon } from 'types'
import { getIcon, prepareDate } from 'utils'

// Styles
import styles from './CurrentWeatherCard.module.scss'

export interface ICurrentWeatherCardProps {
  temperature: number
  description: string
  iconName: TWeatherIcon
  country: string
  city: string
  date: Date
}

export const CurrentWeatherCard: FC<ICurrentWeatherCardProps> = ({
  temperature,
  description,
  iconName,
  country,
  city,
  date,
}) => {
  const icon = getIcon(iconName)
  const formattedTemperature = +temperature.toFixed()

  const preparedDate = prepareDate(date)

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Сейчас</h2>

      <div className={styles.weather}>
        <p className={styles.weather__heading}>
          {formattedTemperature}&deg;<sup>c</sup>
        </p>

        <img src={icon} alt="Overcast icon" className={styles.weather__icon} />
      </div>

      <p className={styles.overcast}>{description}</p>

      <ul className={styles.meta}>
        <li className={styles.meta__item}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: '2.2rem' }} />

          <p className={styles.meta__text}>{preparedDate}</p>
        </li>

        <li className={styles.meta__item}>
          <FmdGoodOutlinedIcon sx={{ fontSize: '2.4rem' }} />

          <p className={styles.meta__text}>
            {city}, {country}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default CurrentWeatherCard
