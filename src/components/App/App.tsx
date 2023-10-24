import { FC, useEffect } from 'react'

// Types 'n utils
import { useCoords } from 'hooks'

// Zustand
import { useWeather } from 'store'

// Components 'n UI
import { Loader } from 'ui'
import { Header, Main } from 'components'

// Styles
import styles from './App.module.scss'

export const App: FC = () => {
  const { lat, lon } = useCoords()

  const { status, data, getData } = useWeather()

  const isPending = status === 'pending'
  const isRejected = status === 'rejected'

  useEffect(() => {
    getData(lat, lon)
  }, [getData, lat, lon])

  return (
    <>
      <Header />

      <main className={styles.main}>
        {isPending && <Loader />}
        {data && !isPending && <Main weather={data} />}
        {isRejected && <h1>Ошибка...</h1>}
      </main>
    </>
  )
}

export default App
