import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {  createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import Register from '../authForm/Register';

const client = createThirdwebClient({
    clientId: "6d3bbd638121ead90345bff8365907d8",
});

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


const Navbar = () => {
  const { sidebarOpen,user, toggleSidebar, showLoginModal, onRegister } = useApp();

  return (
    <>
    {showLoginModal && !user && <Register isOpen={showLoginModal} onRegister={onRegister} />}
      
    <nav
      className="border-b border-gray-200 px-4 py-2.5 fixed right-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-color)',
        left: sidebarOpen ? '233px' : '72px',
        boxShadow: '0 2px 4px #383b4387'
      }}
    > 
  
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          >
            <span className="sr-only">Toggle sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center">
            <div className="flex space-x-2">
              <ConnectButton
                  client={client}
                  wallets={wallets}
                  theme={darkTheme({
                      colors: {
                        primaryButtonBg: "hsl(16, 91%, 57%)",
                        primaryButtonText: "hsl(0, 0%, 100%)",
                      }
                  })}
                  connectModal={{ size: "wide" }}
              />
            </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;