import { FC } from 'react'
import {
  LightModeRounded as LightModeRoundedIcon,
  DarkModeRounded as DarkModeRoundedIcon,
} from '@mui/icons-material'

// Styles
import styles from './RiseAndSetCard.module.scss'

export const RiseAndSetCard: FC = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Sunrise & Sunset</h3>

      <div className={styles.sunrise}>
        <LightModeRoundedIcon sx={{ fontSize: '4.8rem' }} />
        <p className={styles.title}>Sunrise</p>
        <p className={styles.value}>6:30 AM</p>
      </div>

      <div className={styles.sunset}>
        <DarkModeRoundedIcon sx={{ fontSize: '4.8rem' }} />
        <p className={styles.title}>Sunset</p>
        <p className={styles.value}>5:54 PM</p>
      </div>
    </div>
  )
}

export default RiseAndSetCard
