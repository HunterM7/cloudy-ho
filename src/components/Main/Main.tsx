import { FC } from 'react'

// Assets
import { Icon01d } from 'assets/images'

// Styles
import styles from './Main.module.scss'

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <div className="content-left">
          {/* Current weather */}
          <section
            className={`currentWeather ${styles.section}`}
            aria-label="current weather"
            data-current-weather
          >
            <div className="card card-lg current-weather-card">
              <h2 className="title-2 card-title">Now</h2>

              <div className={styles.wrapper}>
                <p className="heading">
                  25&deg;<sup>c</sup>
                </p>

                <img
                  src={Icon01d}
                  alt="Overcast icon"
                  width="64"
                  height="64"
                  className="wheater-icon"
                />
              </div>

              <p className="body-3">Overcast clouds</p>

              <ul className="meta-list">
                <li className="meta-item">
                  <span className="m-icon">calendar_today</span>

                  <p className="title-3 meta-text">Thursday 16, Feb</p>
                </li>

                <li className="meta-item">
                  <span className="m-icon">location_on</span>

                  <p className="title-3 meta-text">London, GB</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Main
