import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './styles/index.scss'

// Components
import { App } from 'components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
