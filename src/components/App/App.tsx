import { FC, useEffect } from 'react'

// Utils
// import { fetchData, getUrl } from 'utils'

// Components 'n UI
import { Header, Main } from 'components'

// Styles
import './App.css'

export const App: FC = () => {
  useEffect(() => {
    const { VITE_WEATHER_API_KEY } = import.meta.env

    console.log('Token: ', VITE_WEATHER_API_KEY)
  }, [])
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
