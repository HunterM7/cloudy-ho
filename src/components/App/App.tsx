import { FC, useEffect } from 'react'

// Utils
// import { fetchData, getUrl } from 'utils'

// Components 'n UI
import { Header, Main } from 'components'

// Styles
import './App.css'

export const App: FC = () => {
  useEffect(() => {
    // const url =
    // 'https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&units=metric'
    // `https://api.openweathermap.org/data/2.5/air_pollution?lat=23.7644025&lon=90.389015&units=metric`
    // fetchData(url).then((res) => console.log('Res: ', res))
  }, [])
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
