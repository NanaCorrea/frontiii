import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import App from './App'
import Componente from './Componente'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Componente />
    <App />
  </React.StrictMode>,
)
