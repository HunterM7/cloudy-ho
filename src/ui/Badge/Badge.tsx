import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

// Types 'n Utils
import { BadgeTypeEnum } from 'utils'

// Styles
import styles from './Badge.module.scss'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  type: keyof typeof BadgeTypeEnum
}

export const Badge: FC<BadgeProps> = ({ type, children, ...rest }) => {
  return (
    <span className={cn(styles.badge, styles[type])} {...rest}>
      {children ?? BadgeTypeEnum[type]}
    </span>
  )
}

export default Badge
