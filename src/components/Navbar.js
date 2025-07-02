'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
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

  return (
    <>
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
            <Link href="/" className="font-bold text-xl">
              <Image
                src="/asset/logo.png"
                alt="Logo"
                width={120}
                height={40}
                priority
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

          {/* Create Wallet button - visible on all screen sizes */}
          <div>
            <button className="bg-[var(--active)] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-sm md:text-base">
              Create Wallet
            </button>
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
