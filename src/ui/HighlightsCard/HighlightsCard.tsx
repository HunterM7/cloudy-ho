import { FC } from 'react'

// Styles
import styles from './HighlightsCard.module.scss'
import { AirCard } from '../AirCard/AirCard'

export const HighlightsCard: FC = () => {
  return (
    <div className={styles.card}>
      <h2 id="highlights-label" className={styles.heading}>
        Todays Highlights
      </h2>

      <div className={styles.list}>
        <AirCard />
      </div>
    </div>
  )
}

export default HighlightsCard
