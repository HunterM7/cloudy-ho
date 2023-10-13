import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './styles/index.scss'

// Components
import { App } from 'components'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
