import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

// Components 'n UI
import { Button } from 'ui'

// Styles
import styles from './ErrorSection.module.scss'

export const ErrorSection: FC = () => {
  const navigate = useNavigate()

  function navigateHome() {
    navigate('/', { replace: true })
  }

  return (
    <section className={styles.error}>
      <h2 className={styles.heading}>404</h2>

      <p className={styles.message}>Page not found!</p>

      <Button primary onClick={navigateHome}>
        Go home
      </Button>
    </section>
  )
}

export default ErrorSection
