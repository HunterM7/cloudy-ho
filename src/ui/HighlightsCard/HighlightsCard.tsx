import { FC } from 'react'
import {
  WaterDropRounded as WaterDropRoundedIcon,
  WaterRounded as WaterRoundedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
  ThermostatRounded as ThermostatRoundedIcon,
} from '@mui/icons-material'

// Components 'n UI
import { AirCard, RiseAndSetCard, InfoCard } from 'ui'

// Styles
import styles from './HighlightsCard.module.scss'

export const HighlightsCard: FC = () => {
  return (
    <div className={styles.card}>
      <h2 id="highlights-label" className={styles.heading}>
        Подробная информация
      </h2>

      <div className={styles.list}>
        <AirCard className={styles.aqi} />

        <RiseAndSetCard className={styles.sun} />

        {/* Humidity */}
        <InfoCard
          heading="Humidity"
          value={35}
          Icon={WaterDropRoundedIcon}
          units={{ unit: '%' }}
          className={styles.humidity}
        />

        {/* Pressure */}
        <InfoCard
          heading="Pressure"
          value={1019}
          Icon={WaterRoundedIcon}
          units={{ unit: 'hPa' }}
          className={styles.pressure}
        />

        {/* Visibility */}
        <InfoCard
          heading="Visibility"
          value={10}
          Icon={VisibilityOutlinedIcon}
          units={{ unit: 'km' }}
          className={styles.visibility}
        />

        {/* Feels Like */}
        <InfoCard
          heading="Feels Like"
          value={`${25}°`}
          Icon={ThermostatRoundedIcon}
          units={{ unit: 'c', position: 'up' }}
          className={styles.feelslike}
        />
      </div>
    </div>
  )
}

export default HighlightsCard
