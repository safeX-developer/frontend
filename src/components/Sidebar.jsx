import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useActiveAccount } from "thirdweb/react";
import { useApp } from '../context/app.context';
import confiq from '../utliz/confiq';

const Sidebar = ({ onClose }) => {
  const wallet = useActiveAccount();
  const { user } = useApp();
  const location = useLocation();
  let isOnline = true;
  
  const [activeMode, setActiveMode] = useState('p2p');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // Define all navigation links in one place
  const navigationLinks = [
    {
      to: '/p2p/trades/buy',
      label: 'P2P',
      icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      // Custom isActive function to check if path includes '/p2p/trades'
      isActive: (path) => path.includes('/p2p/trades')
    },
    {
      to: '/p2p/my-ads',
      label: 'My Ads',
      icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      to: '/p2p/wallet',
      label: 'Wallet',
      icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      to: '/p2p/rewards',
      label: 'Rewards',
      icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const bottomLinks = [
    {
      to: '/p2p/support',
      label: 'Support',
      icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      to: '/p2p/settings',
      label: 'Settings',
      icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  // Mode options
  const modeOptions = [
    { id: 'talent', label: 'Talent' },
    { id: 'hiring', label: 'Hiring' },
    { id: 'p2p', label: 'P2P' },
  ];

  // Check if we're on mobile
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

  // Function to handle link clicks
  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Function to handle mode selection
  const handleModeSelect = (mode) => {
    setActiveMode(mode);
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (!isMobile || !onClose) return;
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, onClose]);

  // Set active mode based on URL path
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes('/p2p')) {
      setActiveMode('p2p');
    } else if (pathname.includes('/talent')) {
      setActiveMode('talent');
    } else if (pathname.includes('/hiring')) {
      setActiveMode('hiring');
    }
  }, [location]);

  return (
    <aside
      ref={sidebarRef}
      className="fixed left-0 top-[0px] sm:top-[61px] h-[calc(100vh-61px)] navbar-shadow w-full sm:w-[232px] bg-[#141414] z-400 flex flex-col"
    >
      {/* Close button - only visible on mobile */}
      {isMobile && (
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      
      {/* Main Navigation links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => {
                  // Use custom isActive function if provided, otherwise use default behavior
                  const active = link.isActive 
                    ? link.isActive(location.pathname) 
                    : isActive;
                  
                  return `flex items-center px-3 py-2 rounded-md transition-colors ${
                    active
                      ? 'bg-[var(--active)] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a1a1a]'
                  }`;
                }}
                onClick={handleLinkClick}
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Support and Settings links */}
      <div className="px-4 pb-3">
        <ul className="space-y-2 border-t border-gray-800 pt-3">
          {bottomLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[var(--active)] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a1a1a]'
                  }`
                }
                onClick={handleLinkClick}
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mode Switch Dropdown */}
      <div className="px-4 pb-2">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between bg-[#232323] text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition-colors"
          >
            <span>{modeOptions.find(mode => mode.id === activeMode)?.label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                dropdownOpen ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {dropdownOpen && (
            <div className="absolute bottom-full left-0 w-full mb-1 bg-[#232323] rounded-md shadow-lg overflow-hidden z-10">
              <div className="py-1">
                {modeOptions.map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => handleModeSelect(mode.id)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeMode === mode.id
                        ? 'bg-[var(--active)] text-white'
                        : 'text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* User profile section - at the bottom */}
      {user && wallet && (
        <div className="p-4 border-t border-gray-800 mt-auto">
          <div className="flex items-center">
            {/* User avatar with first letter */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-xl">
                {user?.username.charAt(0)}
              </div>
              {/* Online indicator */}
              {isOnline && (
                   <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#141414]"></div>
              )}
            </div>
            
            {/* Username and wallet address */}
            <div className="ml-3">
              <p className="text-white font-medium">{user?.username}</p>
              <p className="text-gray-400 text-xs truncate max-w-[140px]">{confiq.truncateAddress(wallet?.address)}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

