import React, { useState, useEffect } from 'react';
import tabsData from './data/tabsData';
import DailyReward from './components/DailyReward';
import TaskReward from './components/TaskReward';
import SocialReward from './components/SocialReward';
import RewardInfo from './components/RewardInfo';
import { useApp } from '../../context/AppContext';
import { toast } from 'sonner';

function Reward() {

  const { user, api } = useApp();
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

  // Function to render the appropriate component based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'daily':
        return <DailyReward setDailyTaskData={setDailyTaskData} dailyTaskData={dailyTaskData} loading={loading} fetchDailyTaskData={fetchDailyTaskData} />;
      case 'task':
        return <TaskReward />;
      case 'social':
        return <SocialReward />;
      default:
        return <DailyReward />;
    }
  };

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-sm font-medium text-white mb-4">Reward</h2>
      {/* Main Card */}
      <div className="w-full bg-[var(--card-color)] rounded-lg shadow-lg p-6 mb-6">
        {/* Points Display */}
        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex items-center mb-2">
            <svg  className="w-6 h-6 text-yellow-500 mr-2" 
              fill="currentColor"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
            </svg>
            <span className="text-4xl font-bold text-white">{dailyTaskData?.totalPoints || 0}</span>
            <span className="text-lg font-medium text-yellow-500 ml-2">points</span>
          </div>
          <p className="text-[var(--text-color)] text-sm">
            Earn more points by completing tasks and daily rewards
          </p>
        </div>
        
        {/* Tabs - Centered and Dynamic */}
        <div className="border-b border-[var(--border)]">
          <div className="flex justify-center -mb-px">
            {tabsData.map((tab) => (
              <button key={tab.id} className={`py-2 px-6 text-sm font-medium rounded-full focus:outline-none ${
                  activeTab === tab.id
                  ? 'bg-[var(--sec-color)] text-white'
                  : 'text-[var(--text-color)] hover:text-white'
                }`} onClick={() => setActiveTab(tab.id)} >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="py-4">
          {renderTabContent()}
        </div>
      </div>

      
      {/* Information Section */}
      <RewardInfo />
    </div>
  );
}

export default Reward;
