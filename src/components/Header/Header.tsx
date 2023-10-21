import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MyLocationRounded as MyLocationRoundedIcon,
  SearchRounded as SearchRoundedIcon,
} from '@mui/icons-material'

// Zustand
import { useSearch } from 'store'

// Types 'n utils
import { useMediaQueries } from 'hooks'

// Components 'n UI
import { Button, Logo } from 'ui'
import { SearchBar } from '../SearchBar/SearchBar'

// Styles
import styles from './Header.module.scss'

export const Header: FC = () => {
  const navigate = useNavigate()
  const { sm, xl } = useMediaQueries()

  // Zustand
  const { toggle } = useSearch()

  function handleCurrentLocationClick() {
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
            // disabled
            hasState
            primary
            data-current-location-btn
            StartIcon={MyLocationRoundedIcon}
            onClick={handleCurrentLocationClick}
          >
            {sm && 'Current location'}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
