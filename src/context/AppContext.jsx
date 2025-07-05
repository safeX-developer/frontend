import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useActiveAccount } from "thirdweb/react";
import ApiService from '../api/api';
import { createThirdwebClient,getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { readContract } from "thirdweb";

export const client = createThirdwebClient({
    clientId: "c872f44da560205986e0c8b12472681c",
});

export const contract = getContract({
  client,
  chain: defineChain(11155111),
  address: "0xbE6C642d84d1363ac34035B34e774A68D826A22D",
});

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // All useState hooks must be called in the same order every time
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [contractInstance, setContractInstance] = useState(null);
  const [referralCode, setReferralCode] = useState(null);
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768
  });
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [socketConnected, setSocketConnected] = useState(false);
  const [ownerData, setOwnerData] = useState(null);
  const [ownerLoading, setOwnerLoading] = useState(false);
  const [ownerError, setOwnerError] = useState(null);

  // const { contract, isLoading: contractLoading, error: contractError } = useContract(MarketAddress, MarketAddressABI);
  // console.log(contract)

  // All other hooks
  const wallet = useActiveAccount();
  const api = new ApiService();

  useEffect(() => {
    async function getUserInfo(){
      try {
        const data = await readContract({
          contract,
          method:
            "function getUserBasicInfo(address userId) view returns (string username, string firstName, string lastName, string country, string state, string city)",
          params: [wallet.address],
        });
        console.log(data)
      } catch (error) {
        if(error?.code === 3){
          setShowLoginModal(true)
        }
        // console.error("Error initializing contract:", error?.code);
      }
    }
    getUserInfo()
  }, [wallet]);



  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreen({
        width,
        height,
        isMobile: width < 768
      });
      // Auto-close sidebar on mobile
      if (width < 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);


  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Context value
  const value = {
    user,
    isAuthenticated: !!user,
    screen,
    sidebarOpen,
    showLoginModal,
    toggleSidebar,
    setSidebarOpen,
    api,
    contract: contractInstance,
    ownerData,
    ownerLoading,
    ownerError,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
