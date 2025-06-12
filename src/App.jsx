import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './router/AppLayout';
import { AppProvider } from './context/AppContext';
import { ThirdwebProvider } from "thirdweb/react";

function App() {
  return (
    <ThirdwebProvider >
      <AppProvider>
        <Router>
          <AppLayout />
        </Router>
      </AppProvider>
    </ThirdwebProvider>
  );
}
export default App;