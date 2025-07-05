import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useState } from 'react';

const Sidebar = () => {
  const { user, sidebarOpen, toggleSidebar } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSwitch, setActiveSwitch] = useState('P2P');
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  const navItems = [
    { name: 'P2P', path: '/p2p/trades', icon: 'p2p' },
    { name: 'My Ads', path: '/p2p/my-ads', icon: 'ads' }, 
    { name: 'Reward', path: '/p2p/rewards', icon: 'reward' }, 
    // { name: 'Profile', path: '/profile', icon: 'user' },
    // { name: 'Settings', path: '/settings', icon: 'cog' },
  ];
 
  const isActive = (path) => {
    return location.pathname === path;
  };
 
  const handleSwitchChange = (switchName) => {
    setActiveSwitch(switchName);
    setDropdownOpen(false);
  };
 
  const navigateToProfile = () => {
    if (user && user.userId) {
      navigate(`/p2p/profile/${user.userId}`);
    }
  };
 
  return (
    <aside
      className="transition-all duration-300 ease-in-out h-screen bg-[var(--card-color)] text-white fixed left-0 top-0 z-40 flex flex-col"
      style={{ width: sidebarOpen ? '233px' : '72px' }}
    >
      <div className="flex-grow px-3 py-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          {sidebarOpen && (
            <Link to="/" className="flex items-center pl-2.5 mb-5">
              <img src="/asset/logo.png" alt="SafeX Logo" className="h-7 mr-3" />
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 ml-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center p-2 text-base font-normal rounded-lg ${
                  isActive(item.path)
                    ? 'bg-[var(--sec-color)] text-white'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                {item.icon === 'p2p' && (
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 20H22V18C22 15.79 20.21 14 18 14C17.5 14 17.03 14.1 16.6 14.28C17.45 15.22 18 16.5 18 18V20ZM9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6ZM15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12ZM9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM3 18V17.01C3.2 16.29 6.3 15 9 15C11.7 15 14.8 16.29 15 17V18H3ZM18 6C19.1 6 20 6.9 20 8C20 9.1 19.1 10 18 10C16.9 10 16 9.1 16 8C16 6.9 16.9 6 18 6ZM18 16C19.1 16 20 16.9 20 18H18V16Z" />
                  </svg>
                )}
                
                {item.icon === 'ads' && (
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM5 7H19V9H5V7ZM5 11H19V13H5V11ZM5 15H14V17H5V15Z" />
                  </svg>
                )}
                
                {item.icon === 'reward' && (
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                  </svg>
                )}
                
                {item.icon === 'user' && (
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
                
                {item.icon === 'cog' && (
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Switch Card and User Profile */}
      <div className="mt-auto px-3 pb-4">
        {/* Switch Card */}
        <div className="bg-[var(--background-color)] rounded-lg p-3 mb-3">
          {sidebarOpen ? (
            <>
              <p className="text-xs text-[var(--text-color)] mb-2">Switch Platform</p>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-white bg-[var(--card-color)] rounded-md hover:bg-gray-600 focus:outline-none"
                >
                  <span>{activeSwitch}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 bottom-full mb-1 z-10 bg-gray-700 rounded-md shadow-lg">
                    <div className="py-1">
                      {['P2P', 'TALENT', 'HIRING'].map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSwitchChange(option)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            activeSwitch === option
                              ? 'bg-[var(--sec-color)] text-white'
                              : 'text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 text-white bg-[var(--card-color)] rounded-md hover:bg-[var(--sec-color)] focus:outline-none"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path fillRule="evenodd" d="M0 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V5zm2 1v8h16V6H2z" clipRule="evenodd" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-16 bottom-28 z-10 bg-[var(--card-color)] rounded-md shadow-lg">
                  <div className="py-1">
                    {['P2P', 'TALENT', 'HIRING'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSwitchChange(option)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          activeSwitch === option
                                                      ? 'bg-[var(--sec-color)] text-white'
                            : 'text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* User Profile - Only show if user exists */}
        {user && (
          <div 
            onClick={navigateToProfile}
            className={`flex items-center ${sidebarOpen ? 'justify-start' : 'justify-center'} p-2 rounded-lg bg-[var(--background-color)] cursor-pointer transition-colors`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0" style={{
              background: 'linear-gradient(135deg, #3b82f6, #ec4899)'
            }}>
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-medium">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            
            {sidebarOpen && (
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-white truncate">
                  {user.username || 'User'}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {user.userId || 'Unknown'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

