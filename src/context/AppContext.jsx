import React, { createContext, useContext, useState, useEffect } from 'react';
import { useActiveAccount } from "thirdweb/react";
import ApiService from '../api/api';
// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // User state
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const api = new ApiService()
  const wallet = useActiveAccount()
  // Screen state
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768
  });

  useEffect(()=>{
    async function getUser(){
      if(wallet){
      const userEl = await api.getUserByAddress(wallet.address)
        if(userEl){
          setUser(userEl)
        }else{
          setShowLoginModal(true)
        }
      }
    }
    getUser()
  },[wallet])
  
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  
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
  
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Register function
  const onRegister = async (formData) => {
    if(wallet && formData){
      const data = {userId: wallet.address, ...formData}
      const user = await api.register(data)
      if(user){
        console.log(user);
        setUser(user)
      }
    }
  };
  
  // Login function
  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  
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
    login,
    logout,
    toggleSidebar,
    setSidebarOpen,
    onRegister,
    api
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