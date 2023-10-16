import { FC } from 'react'
import { SvgIconComponent } from '@mui/icons-material'

// Styles
import styles from './InfoCard.module.scss'

export interface InfoCardProps {
  heading: string
  Icon: SvgIconComponent
  value: number | string
  units: {
    unit: string
    position?: 'up' | 'down'
  }
}

export const InfoCard: FC<InfoCardProps> = ({
  heading,
  Icon,
  value,
  units: { unit, position = 'down' },
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>{heading}</h3>

      <Icon className={styles.icon} />

      <p className={styles.value}>
        {value}
        {position === 'up' && <sup>{unit}</sup>}
        {position === 'down' && <sub>{unit}</sub>}
      </p>
    </div>
  )
}

export default InfoCard
