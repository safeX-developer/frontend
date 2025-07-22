import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThirdwebProvider } from "thirdweb/react";
import { AppProvider } from "./context/app.context";

createRoot(document.getElementById('root')).render(
  <ThirdwebProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ThirdwebProvider>,
)
