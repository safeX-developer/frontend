import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import TabsLayout from './profile/TabsLayout';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/common/LoadingSpinner';

export default function Profile() {
  const {api} = useApp()
  const [user, setUser] = useState(null)
  const { userId } = useParams();
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    setLoad(true)
    async function fetchUser(){
      const userEl = await api.getUserByAddress(userId)
      setUser(userEl)
      setLoad(false)
    }
    fetchUser()
  },[userId])
  
  // Determine user status - this would typically come from your API or context
  const isOnline = true; // Example value
  const lastActive = '3min ago'; // Example value
  
  // Verification status - these would typically come from your API or context
  const verifications = {
    email: user?.email ? true : false,
    socialMedia: user?.socialMedia?.length >= 3 ? true : false,
    tradingVolume: user?.totalTransactionValue?.amount >= 300000 ? true : false
  };

  console.log(user)
  return (
    <>
    {load ?  <LoadingSpinner /> : 
     
      <div className="container mx-auto mt-10 px-4 py-8">
        {/* User Profile Card */}
        <div className="bg-[var(--card-color)] rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            {/* User Info Section */}
            <div className="flex items-center">
              {/* Profile Image/Initial */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold mr-4"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #ec4899)' }}
              >
                {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
              </div>
              
              {/* User Details */}
              <div>
                <h2 className="text-l font-semibold text-white">
                  {user?.username || 'Username'}
                </h2>
                <p className="text-xs text-gray-400">
                  {user?.userId || 'ID: Unknown'}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {isOnline ? (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      Online
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
                      Active {lastActive}
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            {/* Verification Badges */}
            <div className="flex space-x-6">
              {/* Email Verification */}
              <div className="flex items-center">
                <svg
                  className={`w-3 h-3 mr-1.5 ${verifications.email ? 'text-green-500' : 'text-gray-400'}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs text-gray-300">Email</span>
              </div>
              
              {/* Social Media Verification */}
              <div className="flex items-center">
                <svg
                  className={`w-3 h-3 mr-1.5 ${verifications.socialMedia ? 'text-green-500' : 'text-gray-400'}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs text-gray-300">Social</span>
              </div>
              
              {/* Trading Volume Verification */}
              <div className="flex items-center">
                <svg
                  className={`w-3 h-3 mr-1.5 ${verifications.tradingVolume ? 'text-green-500' : 'text-gray-400'}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs text-gray-300">$300k Trade</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Cards */}
        <div className="bg-[var(--card-color)] rounded-lg shadow-lg p-6 mb-6">      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Recent Completed Orders Card */}
            <div 
              className="p-4 border-inactive rounded-lg bg-[var(--card-color)]" 
              style={{ boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="text-l font-bold text-white">2823</div>
              <div className="text-xs text-gray-400">
                completed Orders in 3 days
              </div>
            </div>
            
            {/* Total Completed Orders Card */}
            <div 
              className="p-4 border-inactive rounded-lg bg-[var(--card-color)]" 
              style={{ boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="text-l font-bold text-white">3178</div>
              <div className="text-xs text-gray-400">completed Orders</div>
            </div>
            
            {/* Completion Rate Card */}
            <div 
              className="p-4 border-inactive rounded-lg bg-[var(--card-color)]" 
              style={{ boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="text-l font-bold text-green-500">99%</div>
              <div className="text-xs text-gray-400">Completion rate</div>
            </div>
            
            {/* Rating Card */}
            <div 
              className="p-4 border-inactive rounded-lg bg-[var(--card-color)]" 
              style={{ boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="text-l font-bold text-yellow-500">64</div>
              <div className="text-xs text-gray-400">Good rating</div>
            </div>
          </div>
        </div>
        
        {/* Additional profile content would go here */}
        <TabsLayout />
      </div>
      }
    </>
  );
}
