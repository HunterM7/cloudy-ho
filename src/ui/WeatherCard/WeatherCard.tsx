import { FC } from 'react'

// Types 'n utils
import { WeatherConditions } from 'utils'

// Assets
import { DirectionIcon } from 'assets/images'

// Styles
import styles from './WeatherCard.module.scss'

interface WindProps {
  type: 'wind'
  speed: number
  direction: string
}

interface TemperatureProps {
  type: 'temperature'
  temperature: number
  condition: keyof typeof WeatherConditions
}

interface WeatherProps {
  time: string
}

export type WeatherCardProps = WeatherProps & (WindProps | TemperatureProps)

export const WeatherCard: FC<WeatherCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.time}>{props.time}</p>

      <img
        src={
          props.type === 'temperature'
            ? WeatherConditions[props.condition].image.day
            : DirectionIcon
        }
        alt="Overcast icon"
        loading="lazy"
        className={styles.icon}
      />

      <p className={styles.info}>
        {props.type === 'temperature' && (
          <>
            {props.temperature}°<sup>c</sup>
          </>
        )}
        {props.type === 'wind' && <>{props.speed} km/h</>}
      </p>
    </div>
  )
}

export default WeatherCard