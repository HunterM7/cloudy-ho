import { FC } from 'react'
import {
  WaterDropRounded as WaterDropRoundedIcon,
  WaterRounded as WaterRoundedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
} from '@mui/icons-material'

// Components 'n UI
import { AirCard, RiseAndSetCard, InfoCard } from 'ui'

// Styles
import styles from './HighlightsCard.module.scss'

export const HighlightsCard: FC = () => {
  return (
    <div className={styles.card}>
      <h2 id="highlights-label" className={styles.heading}>
        Todays Highlights
      </h2>

      <div className={styles.list}>
        <AirCard />
        <RiseAndSetCard />

        {/* Humidity */}
        <InfoCard
          heading="Humidity"
          value={35}
          Icon={WaterDropRoundedIcon}
          units={{ unit: '%' }}
        />

        {/* Pressure */}
        <InfoCard
          heading="Pressure"
          value={1019}
          Icon={WaterRoundedIcon}
          units={{ unit: 'hPa' }}
        />

        {/* Visibility */}
        <InfoCard
          heading="Visibility"
          value={10}
          Icon={VisibilityOutlinedIcon}
          units={{ unit: 'km' }}
        />

        {/* Feels Like */}
        <InfoCard
          heading="Feels Like"
          value={`${25}°`}
          Icon={VisibilityOutlinedIcon}
          units={{ unit: 'c', position: 'up' }}
        />
      </div>
    </div>
  )
}

export default HighlightsCard
