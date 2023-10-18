import { FC } from 'react'
import {
  SearchRounded as SearchRoundedIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
} from '@mui/icons-material'
import cn from 'classnames'

// Components 'n UI
import { Button } from 'ui'

// Styles
import styles from './SearchBar.module.scss'

export const SearchBar: FC = () => {
  return (
    <div
      className={cn(
        styles.search,
        // styles.active,
        //
      )}
      data-search-view
    >
      <div className={cn(styles.wrapper)}>
        <input
          type="search"
          name="search"
          placeholder="Search city..."
          autoComplete="off"
          className={cn(
            styles.input,
            // styles.searching,
            //
          )}
          data-search-field
        />

        <SearchRoundedIcon sx={{ fontSize: '2.4rem' }} />

        <Button
          hasState
          aria-label="close search"
          data-search-toggler
          StartIcon={ArrowBackRoundedIcon}
          className={styles.leadingIcon}
          onClick={() => console.log('arrow click')}
        />
      </div>

      <div className={styles.result} data-search-result>
        <ul className={styles.list} data-search-list>
          <li className={styles.list__item}>
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
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
