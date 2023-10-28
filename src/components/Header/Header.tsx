import { FC } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  MyLocationRounded as MyLocationRoundedIcon,
  SearchRounded as SearchRoundedIcon,
} from '@mui/icons-material'

// Zustand
import { useSearch, useWeather } from 'store'

// Types 'n utils
import { useMediaQueries } from 'hooks'

// Components 'n UI
import { Button, Logo } from 'ui'

// Nested components
import { SearchBar } from '../SearchBar/SearchBar'

// Styles
import styles from './Header.module.scss'

export const Header: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { sm, xl } = useMediaQueries()

  const { setStatus } = useWeather()

  const isCurrentLocation = location.pathname.startsWith('/current-location')

  // Zustand
  const { toggle } = useSearch()

  // Handlers
  function handleCurrentLocationClick() {
    setStatus('pending')
    navigate('current-location')
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        <SearchBar />

        <div className={styles.actions}>
          {!xl && (
            <Button
              hasState
              aria-label="open search"
              data-search-toggler
              StartIcon={SearchRoundedIcon}
              onClick={toggle}
            />
          )}

          <Button
            disabled={isCurrentLocation}
            hasState
            primary
            data-current-location-btn
            StartIcon={MyLocationRoundedIcon}
            onClick={handleCurrentLocationClick}
          >
            {sm && 'Рядом со мной'}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
