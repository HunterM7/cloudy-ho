import { FC } from 'react'

// Components 'n UI
import { AirCard, RiseAndSetCard } from 'ui'

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
      </div>
    </div>
  )
}

export default HighlightsCard
