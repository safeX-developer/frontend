import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { ThirdwebProvider } from "thirdweb/react";
import { AppContextProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThirdwebProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ThirdwebProvider>
)
