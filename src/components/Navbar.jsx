import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useActiveAccount, useReadContract, useConnect } from "thirdweb/react";
import { useApp, client } from '../context/app.context';
import { inAppWallet, createWallet } from "thirdweb/wallets";
import Register from '../modal/auth/register';
import confiq from "../utliz/confiq";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

const Navbar = ( {welcomeRoute} ) => {
  const wallet = useActiveAccount();
  const { connect, isConnecting, error } = useConnect();
  const { user, showLoginModal } = useApp();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Handle window resize to determine if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  if(welcomeRoute){
    return (
      <div></div>
    )
  }

  return (
    <>
      {showLoginModal && !user && <Register isOpen={showLoginModal} />}
      <nav className="fixed top-0 navbar-shadow left-0 w-full card z-50 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile menu button - on the left for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Left section with logo - only on larger screens */}
          <div className="hidden md:flex items-center justify-center w-[232px]">
            <Link to="/" className="font-bold text-xl">
              <img
                src="/asset/logo.png"
                alt="Logo"
                style={{ width: '120px', height: '40px' }}
              />
            </Link>
          </div>

          {/* Dashboard label - visible only on larger screens, positioned after where sidebar would end */}
          <div className="hidden md:flex items-center">
            <h1 className="text-lg font-semibold text-white">
              Dashboard
            </h1>
          </div>

          {/* Search input - visible on all screen sizes */}
          <div className="flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#232323] text-white rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-[var(--active)]"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Wallet section - shows connect button or wallet info */}
          <div>
            {wallet ? (
              <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <div className="relative">
                  <button className="text-white hover:text-gray-300 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    {/* Notification badge - can be conditionally rendered */}
                    <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
                      3
                    </span>
                  </button>
                </div>
                
                {/* User Profile Circle with Initial */}
                {/* Wallet Address */}
                <div className="bg-[#232323] text-white px-4 flex items-center gap-1 py-2 rounded-md text-sm">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {confiq.getProfileInitial(user)}
                  </div>
                  {confiq.truncateAddress(wallet.address)}
                </div>
              </div>
            ) : (
              <button
                onClick={() =>
                  connect(async () => {
                    // instantiate wallet
                    const wallet = createWallet("io.metamask");
                    // connect wallet
                    await wallet.connect({
                      client,
                    });
                    // return the wallet
                    return wallet;
                  })
                }
                className="bg-[var(--active)] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-sm md:text-base"
              >
                Create Wallet
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar - visible on larger screens by default, and on mobile when toggled */}
      {(!isMobile || sidebarVisible) && (
        <Sidebar onClose={() => setSidebarVisible(false)} />
      )}
    </>
  );
};

export default Navbar;
