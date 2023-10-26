import { FC } from 'react'
import {
  WaterDropRounded as WaterDropRoundedIcon,
  WaterRounded as WaterRoundedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
  ThermostatRounded as ThermostatRoundedIcon,
} from '@mui/icons-material'

// Components 'n UI
import { AirCard, RiseAndSetCard, InfoCard, IAirInfo, ISunInfo } from 'ui'

// Styles
import styles from './HighlightsCard.module.scss'

export interface HighlightsCardProps {
  sunInfo: ISunInfo
  airInfo: IAirInfo
  humidity: number
  pressure: number
  visibility: number
  feelsLike: number
}

export const HighlightsCard: FC<HighlightsCardProps> = ({
  airInfo,
  sunInfo,
  humidity,
  pressure,
  visibility,
  feelsLike,
}) => {
  return (
    <div className={styles.card}>
      <h2 id="highlights-label" className={styles.heading}>
        Подробная информация
      </h2>

      <div className={styles.list}>
        <AirCard airInfo={airInfo} className={styles.aqi} />

        <RiseAndSetCard sunInfo={sunInfo} className={styles.sun} />

        {/* Humidity */}
        <InfoCard
          heading="Humidity"
          value={humidity}
          Icon={WaterDropRoundedIcon}
          units={{ unit: ' %' }}
          className={styles.humidity}
        />

        {/* Pressure */}
        <InfoCard
          heading="Pressure"
          value={pressure}
          Icon={WaterRoundedIcon}
          units={{ unit: ' hPa' }}
          className={styles.pressure}
        />

        {/* Visibility */}
        <InfoCard
          heading="Visibility"
          value={visibility}
          Icon={VisibilityOutlinedIcon}
          units={{ unit: ' km' }}
          className={styles.visibility}
        />

        {/* Feels Like */}
        <InfoCard
          heading="Feels Like"
          value={`${feelsLike}°`}
          Icon={ThermostatRoundedIcon}
          units={{ unit: 'c', position: 'up' }}
          className={styles.feelslike}
        />
      </div>
    </div>
  )
}

export default HighlightsCard
