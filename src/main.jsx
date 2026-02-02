import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigasi from './component/Navigasi.jsx'
import Header from './component/Header.jsx'
import CardBest from './component/CardBest.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigasi />
    <Header />
    <CardBest />
    <App />
  </StrictMode>,
)
