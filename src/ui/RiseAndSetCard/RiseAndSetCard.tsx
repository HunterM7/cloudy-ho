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

      <ul className={styles.list}>
        <li className={styles.list__item}>
          <LightModeRoundedIcon sx={{ fontSize: '4.8rem' }} />
          <p className={styles.list__title}>Sunrise</p>
          <p className={styles.list__value}>6:30 AM</p>
        </li>

        <li className={styles.list__item}>
          <DarkModeRoundedIcon sx={{ fontSize: '4.8rem' }} />
          <p className={styles.list__title}>Sunset</p>
          <p className={styles.list__value}>5:54 PM</p>
        </li>
      </ul>
    </div>
  )
}

export default RiseAndSetCard
