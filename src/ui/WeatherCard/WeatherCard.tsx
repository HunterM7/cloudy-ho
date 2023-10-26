import { FC } from 'react'

// Types 'n utils
import { TWeatherConditionCodes } from 'types'
import { WeatherConditions, prepareHours } from 'utils'

// Assets
import { DirectionIcon } from 'assets/images'

// Styles
import styles from './WeatherCard.module.scss'

interface WindProps {
  type: 'wind'
  speed: number
  direction: number
}

interface TemperatureProps {
  type: 'temperature'
  temperature: number
  condition: TWeatherConditionCodes
}

interface WeatherProps {
  time: Date
}

export type WeatherCardProps = WeatherProps & (WindProps | TemperatureProps)

export const WeatherCard: FC<WeatherCardProps> = (props) => {
  const preparedTime = prepareHours(props.time)

  return (
    <div className={styles.card}>
      <p className={styles.time}>{preparedTime}</p>

      <img
        src={
          props.type === 'temperature'
            ? WeatherConditions[props.condition].image.day
            : DirectionIcon
        }
        alt="Overcast icon"
        loading="lazy"
        className={styles.icon}
        style={{
          ...(props.type === 'wind' && {
            rotate: `${props.direction}deg`,
          }),
        }}
      />

      <p className={styles.info}>
        {props.type === 'temperature' && (
          <>
            {props.temperature}°<sup>c</sup>
          </>
        )}
        {props.type === 'wind' && <>{props.speed.toFixed()} м/с</>}
      </p>
    </div>
  )
}

export default WeatherCard
