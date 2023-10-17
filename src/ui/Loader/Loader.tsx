import { FC } from 'react'

// Styles
import styles from './Loader.module.scss'

export const Loader: FC = () => {
  return (
    <div className={styles.loader} data-loader>
      Loader
    </div>
  )
}

export default Loader
