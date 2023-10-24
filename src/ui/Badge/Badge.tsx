import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Types 'n Utils
import { TAirQualityIndex } from 'types'
import { AirQualityList } from 'utils'

// Styles
import styles from './Badge.module.scss'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  index: TAirQualityIndex
}

export const Badge: FC<BadgeProps> = ({
  index,
  className,
  children,
  ...rest
}) => {
  return (
    <span
      className={cn(
        styles.badge,
        styles[AirQualityList[index - 1].type],
        className,
      )}
      {...rest}
    >
      {children ?? AirQualityList[index - 1].ru}
    </span>
  )
}

export default Badge
