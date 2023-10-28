import { FC, HTMLAttributes } from 'react'
import {
  LightModeRounded as LightModeRoundedIcon,
  DarkModeRounded as DarkModeRoundedIcon,
} from '@mui/icons-material'
import cn from 'classnames'

// Styles
import styles from './SunCard.module.scss'

export interface SunCardProps extends HTMLAttributes<HTMLDivElement> {
  type: 'sunrise' | 'sunset'
  time: string
}

export const SunCard: FC<SunCardProps> = ({
  type,
  time,
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      {type === 'sunrise' && <LightModeRoundedIcon className={styles.icon} />}
      {type === 'sunset' && <DarkModeRoundedIcon className={styles.icon} />}

      <p className={styles.title}>
        {type === 'sunrise' && 'Рассвет'}
        {type === 'sunset' && 'Закат'}
      </p>
      <p className={styles.value}>{time}</p>
    </div>
  )
}

export default SunCard
