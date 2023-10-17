import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Nested components
import { SunCard } from './SunCard/SunCard'

// Styles
import styles from './RiseAndSetCard.module.scss'

export interface RiseAndSetCardProps extends HTMLAttributes<HTMLDivElement> {
  //
}

export const RiseAndSetCard: FC<RiseAndSetCardProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      <h3 className={styles.heading}>Sunrise & Sunset</h3>

      <SunCard type="sunrise" time="6:30 AM" />
      <SunCard type="sunset" time="5:54 PM" />
    </div>
  )
}

export default RiseAndSetCard
