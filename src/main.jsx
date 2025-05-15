import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx' //kl import fe wara export ya3ni abl ma ne3ml import lal app kena 3mlynlo export la 2e2der esta3emlo
//ma fene e3ml import la wala shy mish ma3melo export
createRoot(document.getElementById('root')).render( //render ya3ni notba3 mnotba3 le bil app b2lb l div le l id ela root
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
  
)
