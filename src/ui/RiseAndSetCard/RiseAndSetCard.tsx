import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Nested components
import { SunCard } from './SunCard/SunCard'

// Styles
import styles from './RiseAndSetCard.module.scss'
import { prepareTime } from 'utils'

export interface ISunInfo {
  sunset: Date
  sunrise: Date
}

export interface RiseAndSetCardProps extends HTMLAttributes<HTMLDivElement> {
  sunInfo: ISunInfo
}

export const RiseAndSetCard: FC<RiseAndSetCardProps> = ({
  sunInfo,
  className,
  ...rest
}) => {
  const sunrise = prepareTime(sunInfo.sunrise)
  const sunset = prepareTime(sunInfo.sunset)

  return (
    <div className={cn(styles.card, className)} {...rest}>
      <h3 className={styles.heading}>Sunrise & Sunset</h3>

      <SunCard type="sunrise" time={sunrise} />
      <SunCard type="sunset" time={sunset} />
    </div>
  )
}

export default RiseAndSetCard
