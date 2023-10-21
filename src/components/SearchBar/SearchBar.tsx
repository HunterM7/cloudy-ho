import { FC } from 'react'
import {
  SearchRounded as SearchRoundedIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
} from '@mui/icons-material'
import cn from 'classnames'

// Zustand
import { useSearch } from 'store'

// Components 'n UI
import { Button } from 'ui'

// Styles
import styles from './SearchBar.module.scss'

export const SearchBar: FC = () => {
  // Zustand
  const { searchQuery, changeSearchQuery, isOpen, toggle } = useSearch()

  // Handlers
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value

    changeSearchQuery(newQuery)
  }

  function handleSearchItemClick() {
    toggle()
  }

  return (
    <div
      className={cn(styles.search, isOpen && styles.active)}
      data-search-view
    >
      <div className={cn(styles.wrapper)}>
        <input
          type="search"
          name="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search city..."
          autoComplete="off"
          className={cn(
            styles.input,
            // styles.searching,
            //
          )}
          // data-search-field
        />

        <SearchRoundedIcon
          className={styles.searchIcon}
          sx={{ fontSize: '2.4rem' }}
        />

        <Button
          hasState
          aria-label="close search"
          data-search-toggler
          StartIcon={ArrowBackRoundedIcon}
          className={styles.leadingIcon}
          onClick={toggle}
        />
      </div>

      <div className={cn(styles.result, styles.active)} data-search-result>
        <ul className={styles.list} data-search-list>
          {[...new Array(5)].map((_item, index) => (
            <li
              key={index}
              className={styles.list__item}
              onClick={handleSearchItemClick}
            >
              <FmdGoodOutlinedIcon
                className={styles.list__icon}
                sx={{ fontSize: '2.4rem' }}
              />

              <div>
                <p className={styles.list__title}>London</p>

                <p className={styles.list__subtitle}>State of London, GB</p>
              </div>

              <a
                href="#"
                className={`${styles.list__link}`}
                data-search-toggler
              ></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
