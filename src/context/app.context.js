'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useActiveAccount } from "thirdweb/react";
import ApiService from '../api/api';
import { createThirdwebClient,getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

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


  // All other hooks
  const wallet = useActiveAccount();
  const api = new ApiService();

  useEffect(() => {
    async function getUserInfo(){
      try {
        const data = await api.getUserByAddress(wallet.address)
        setUser(data)
      } catch (error) {
        if(error?.code === 3){
          setShowLoginModal(true)
        }
        // console.error("Error initializing contract:", error?.code);
      }
    }
    getUserInfo()
  }, [wallet]);


  // Context value
  const value = {
    user,
    isAuthenticated: !!user,
    showLoginModal,
    api,
    contract: contractInstance,
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
