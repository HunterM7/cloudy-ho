import { FC } from 'react'

// Assets
import { LogoIcon } from 'assets/images'

// Styles
import styles from './Logo.module.scss'

export const Logo: FC = () => {
  return <img className={styles.logo} src={LogoIcon} alt="Weather App Logo" />
}

export default Logo
