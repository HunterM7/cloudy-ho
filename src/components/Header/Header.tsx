import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MyLocationRounded as MyLocationRoundedIcon,
  SearchRounded as SearchRoundedIcon,
} from '@mui/icons-material'
import cn from 'classnames'

// Components 'n UI
import { Button, Logo } from 'ui'

// Styles
import styles from './Header.module.scss'
import { SearchBar } from '../SearchBar/SearchBar'

export const Header: FC = () => {
  const navigate = useNavigate()

  function handleCurrentLocationClick() {
    navigate('current-location')
  }

  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        <SearchBar />

        <div className={styles.actions}>
          <Button
            hasState
            aria-label="open search"
            data-search-toggler
            StartIcon={SearchRoundedIcon}
            onClick={handleCurrentLocationClick}
          />

          <Button
            // disabled
            hasState
            primary
            data-current-location-btn
            StartIcon={MyLocationRoundedIcon}
            onClick={handleCurrentLocationClick}
          >
            Current location
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
