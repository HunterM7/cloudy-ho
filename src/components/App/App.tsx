import { FC, useEffect } from 'react'

// Types 'n utils
import { useCoords } from 'hooks'
import { getUrl } from 'utils'

// Zustand
import { useWeather } from 'store'

// Components 'n UI
import { Loader } from 'ui'
import { Header, Main } from 'components'

// Styles
import styles from './App.module.scss'

export const App: FC = () => {
  const { lat, lon } = useCoords()

  const { status, getData } = useWeather()

  const isPending = status === 'pending'

  useEffect(() => {
    const url = getUrl.currentWeather(lat, lon)

    getData(url)
  }, [getData, lat, lon])

  return (
    <>
      <Header />

      <main className={styles.main}>
        {isPending && <Loader />}
        {!isPending && <Main />}
      </main>
    </>
  )
}

export default App
