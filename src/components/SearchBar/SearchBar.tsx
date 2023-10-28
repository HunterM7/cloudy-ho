import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SearchRounded as SearchRoundedIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
} from '@mui/icons-material'
import cn from 'classnames'

// Types 'n utils
import { debounce, getUrl } from 'utils'
import { useKeyPress } from 'hooks'

// Zustand
import { useSearch } from 'store'

// Components 'n UI
import { Button } from 'ui'

// Styles
import styles from './SearchBar.module.scss'

export const SearchBar: FC = () => {
  // Zustand
  const {
    searchStatus,
    searchQuery,
    changeSearchQuery,
    isOpen,
    toggle,
    closeSearch,
    data,
    getData,
  } = useSearch()

  const debouncedGetData = useMemo(() => debounce(getData, 1000), [getData])

  // Result
  const [isResultOpen, setIsResultOpen] = useState(!!data)

  useEffect(() => {
    if (data) setIsResultOpen(true)
  }, [data])

  // Esc handler
  useKeyPress('Escape', closeSearch)

  // Focus on search
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    isOpen && searchRef.current?.focus()
  }, [isOpen])

  // Handlers
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value
    const url = newQuery ? getUrl.geo(newQuery) : null

    changeSearchQuery(newQuery)

    if (url) {
      debouncedGetData(url)
    }
  }

  function handleSearchItemClick() {
    toggle()
  }

  function onClickLink() {
    setIsResultOpen(false)
  }

  return (
    <div className={cn(styles.search, isOpen && styles.active)}>
      <div className={cn(styles.wrapper)}>
        <input
          autoFocus
          ref={searchRef}
          type="search"
          name="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search city..."
          autoComplete="off"
          className={cn(
            styles.input,
            searchStatus === 'pending' && styles.searching,
          )}
        />

        <SearchRoundedIcon
          className={styles.searchIcon}
          sx={{ fontSize: '2.4rem' }}
        />

        <Button
          // hasState
          aria-label="close search"
          StartIcon={ArrowBackRoundedIcon}
          className={styles.leadingIcon}
          onClick={toggle}
        />
      </div>

      <div className={cn(styles.result, isResultOpen && styles.active)}>
        <ul className={styles.list}>
          {data?.map((item, index) => (
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
                <p className={styles.list__title}>
                  {item.local_names?.ru || item.name}
                </p>

                <p className={styles.list__subtitle}>
                  {`${item.state || ''} ${item.country}`}
                </p>
              </div>

              <Link
                to={{
                  pathname: '/weather',
                  search: `?lat=${item.lat}&lon=${item.lon}`,
                }}
                onClick={onClickLink}
                aria-label={`${item.name} weather`}
                className={`${styles.list__link}`}
              ></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
