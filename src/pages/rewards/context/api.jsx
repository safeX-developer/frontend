
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useApp } from '../../../context/app.context';
import { toast } from 'sonner';

// Create context
const RewardContext = createContext();

// Provider component
export const RewardProvider = ({ children }) => {
    const { user, api } = useApp();
  // All useState hooks must be called in the same order every time
    const [activeTab, setActiveTab] = useState('daily');
    const [dailyTaskData, setDailyTaskData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch daily task data when component mounts
  useEffect(() => {
    if (user?.userId) {
      fetchDailyTaskData();
    }
  }, [user]);
 
  // Function to fetch daily task data
  const fetchDailyTaskData = async () => {
    try {
      setLoading(true);
      const response = await api.dailyReward(user.userId);
      setDailyTaskData(response);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load daily rewards data');
      setLoading(false);
    }
  };
  
  // Context value
  const value = {
    activeTab, setActiveTab,
    dailyTaskData, setDailyTaskData,
    fetchDailyTaskData
  };
  
  return (
    <RewardContext.Provider value={value}>
      {children}
    </RewardContext.Provider>
  );
};

// Custom hook for using the context
export const useReward = () => {
  const context = useContext(RewardContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default RewardProvider;
