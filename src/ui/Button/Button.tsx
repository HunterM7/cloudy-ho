import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'

// Styles
import { SvgIconComponent } from '@mui/icons-material'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  StartIcon?: SvgIconComponent
}

export const Button: FC<IButtonProps> = ({ StartIcon, children, ...rest }) => {
  return (
    <button
      data-current-location-btn
      className={`has-state ${styles.button}`}
      {...rest}
    >
      {StartIcon && <StartIcon className={styles.startIcon} />}

      <span className={styles.text}>{children}</span>
    </button>
  )
}

export default Button
