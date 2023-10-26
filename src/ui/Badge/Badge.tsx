import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Types 'n Utils
import { TAirQualityIndex } from 'types'
import { aqiText } from 'utils'

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
      title={aqiText[index].message.ru}
      className={cn(styles.badge, styles[aqiText[index].type], className)}
      {...rest}
    >
      {children ?? aqiText[index].level.ru}
    </span>
  )
}

export default Badge
