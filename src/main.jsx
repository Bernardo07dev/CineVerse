import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, Routes, CreateBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateBrowserRouter><CreateBrowserRouter/>
    <App />
  </StrictMode>,
)
