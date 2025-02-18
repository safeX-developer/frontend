import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { ThirdwebProvider } from "thirdweb/react";

createRoot(document.getElementById('root')).render(
  <ThirdwebProvider>
    <App />
  </ThirdwebProvider>
)
