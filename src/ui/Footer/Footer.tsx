import { FC } from 'react'

// Assets
import { OpenWeatherLogo } from 'assets/images'

// Styles
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Designed by{' '}
        <a
          href="https://youtube.com/@codewithsadee"
          target="_blank"
          title="Designed by codewithsadee"
          rel="noopener"
          className={styles.copyright__link}
        >
          codewithsadee
        </a>
        .
      </p>
      <p className={styles.poweredBy}>
        Powered by
        <a
          target="_blank"
          href="https://openweathermap.org/api"
          title="Free OpenWeather API"
          rel="noopener"
          className={styles.poweredBy__link}
        >
          <img
            src={OpenWeatherLogo}
            alt="Powered by OpenWeather"
            loading="lazy"
            className={styles.poweredBy__logo}
          />
        </a>
      </p>
    </footer>
  )
}

export default Footer
