import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-grey">
      <Navbar welcomeRoute={location.pathname === "/welcome"} /> 
      <main className={`pt-[60px] pl-0 ${location.pathname != "/welcome" && "sm:pl-[232px]"}  mx-auto px-4 py-8`}>
        <Outlet  />
      </main>
    </div>
  );
};

export default Layout;