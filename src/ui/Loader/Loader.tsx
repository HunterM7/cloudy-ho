import { FC } from 'react'

// Styles
import styles from './Loader.module.scss'

export const Loader: FC = () => {
  return <section className={styles.loader} data-loader></section>
}

export default Loader
