import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyLocationRounded as MyLocationRoundedIcon } from '@mui/icons-material'

// Assets
import { LogoIcon } from 'assets/images'

// Components 'n UI
import { Button } from 'ui'

// Styles
import styles from './Header.module.scss'

export const Header: FC = () => {
  const navigate = useNavigate()

  function handleCurrentLocationClick() {
    navigate('current-location')
  }
  return (
    <header className={styles.header}>
      <div className="container">
        <a href="#" className="logo">
          <img
            src={LogoIcon}
            alt="Wheater App Logo"
            width="364px"
            height="58px"
          />
        </a>

        <div className={styles.search} data-search-view>
          <div className="search-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search city..."
              autoComplete="off"
              className="search-field"
              data-search-field
            />

            <span className="m-icon">search</span>

            <button
              className="icon-btn leading-icon has-state"
              aria-label="close search"
              data-search-toggler
            >
              <span className="m-icon">arrow_back</span>
            </button>
          </div>

          <div className="search-result" data-search-result>
            <ul className="view-list" data-search-list>
              <li className="view-item">
                <span className="m-icon">location_on</span>

                <div>
                  <p className="item-title">London</p>

                  <p className="label-2 item-subtitle">State of London, GB</p>
                </div>

                <a
                  href="#"
                  className="item-link has-state"
                  data-search-toggler
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="icon-btn has-state"
            aria-label="open search"
            data-search-toggler
          >
            <span className="m-icon icon">search</span>
          </button>

          <button
            onClick={handleCurrentLocationClick}
            className={`btn-primary has-state ${styles.current_location_btn}`}
            data-current-location-btn
            disabled
          >
            <span className="m-icon">my_location</span>

            <span className="span">Current location</span>
          </button>

          <Button
            // disabled
            StartIcon={MyLocationRoundedIcon}
          >
            Current location
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
