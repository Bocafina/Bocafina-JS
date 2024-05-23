import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* app pris en compte ds application ds react router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
