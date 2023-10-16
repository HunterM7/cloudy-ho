import { ButtonHTMLAttributes, FC } from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import cn from 'classnames'

// Styles
import styles from './Button.module.scss'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: true
  hasState?: true
  StartIcon?: SvgIconComponent
}

export const Button: FC<IButtonProps> = ({
  primary = false,
  hasState = false,
  StartIcon,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      data-current-location-btn
      className={cn(
        styles.button,
        primary && styles.primary,
        hasState && styles.hasState,
        !children && styles.withoutText,
        className,
      )}
      {...rest}
    >
      {StartIcon && <StartIcon className={styles.startIcon} />}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  )
}

export default Button
