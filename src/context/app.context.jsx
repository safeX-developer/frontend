
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useActiveAccount } from "thirdweb/react";
import ApiService from '../api/api';
import { createThirdwebClient, getContract } from "thirdweb";
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
  const [appLoad, setAppLoad] = useState(false)
  // All other hooks
  const wallet = useActiveAccount();
  const api = new ApiService();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const refCode = urlParams.get('ref');
      
      if (refCode) {
        // Store in localStorage
        localStorage.setItem('referralCode', refCode);
        setReferralCode(refCode);
        console.log('Referral code detected:', refCode);
      } else {
        // Check if we have a stored referral code
        const storedCode = localStorage.getItem('referralCode');
        if (storedCode) {
          setReferralCode(storedCode);
          console.log('Using stored referral code:', storedCode);
        }
      }
    }
  }, []);
  
  useEffect(() => {
    async function getUserInfo() {
      if (!wallet?.address) return;
      try {
        setAppLoad(true)
        const data = await api.getUserByAddress(wallet.address);
        if (!data) {
          setShowLoginModal(true);
          return;
        }
        setUser(data);
        setShowLoginModal(false);
        setAppLoad(false)
      } catch (error) {
        if (error?.code === 3) {
          setShowLoginModal(true);
        }
        // console.error("Error initializing contract:", error?.code);
      }
    }
    
    getUserInfo();
  }, [wallet]);
  
  const register = async(formData) => {
    try {
      // Get referral code from state (which was loaded from localStorage)
      const storedReferralCode = localStorage.getItem('referralCode') || referralCode;
      
      // Create registration data with wallet address and referral code
      const registrationData = {
        ...formData,
        userId: wallet?.address,
        referredBy: storedReferralCode
      };
      
      // Call API to register user
      const response = await api.register(registrationData);
      
      // Update user state with the response
      setUser(response);
      
      // Close login modal
      setShowLoginModal(false);
      
      return response;
    } catch (error) {
      console.error("Registration error:", error);
      throw error; // Re-throw to allow handling in the component
    }
  };
  
  // Context value
  const value = {
    user,
    isAuthenticated: !!user,
    showLoginModal,
    setShowLoginModal,
    api,
    wallet,
    register,
    contract: contractInstance,
    referralCode,
    appLoad
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
