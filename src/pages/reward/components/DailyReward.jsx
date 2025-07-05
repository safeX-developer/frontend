import React, { useState, useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import { toast } from 'sonner';

function DailyReward({setDailyTaskData, dailyTaskData, loading, fetchDailyTaskData}) {
  const { user, api } = useApp();
  const [claimingDay, setClaimingDay] = useState(null);

  // Get current date to determine which days have passed
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  // Generate array of days for the current month (up to 30 days max)
  const days = Array.from({ length: Math.min(daysInMonth, 30) }, (_, i) => i + 1);

  // Function to perform daily task
  const performDailyTask = async (day) => {
    if (!user?.userId) {
      toast.error('Please connect your wallet to claim rewards');
      return;
    }

    try {
      setClaimingDay(day);
      const response = await api.performTask(user.userId);
      
      // Update local state with new data
      setDailyTaskData(response);
      
      // Show success message
      toast.success(`Successfully claimed ${response.pointsEarned} points!`);
      
      // Refresh data
      fetchDailyTaskData();
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Failed to claim daily reward');
    } finally {
      setClaimingDay(null);
    }
  };

  // Check if a day has been claimed based on API data
  const isDayClaimed = (day) => {
    if (!dailyTaskData || !dailyTaskData.monthlyHistory) return false;
    
    return dailyTaskData.monthlyHistory.some(task => {
      const taskDate = new Date(task.date);
      return taskDate.getDate() === day && task.taskType === 'daily';
    });
  };

  // Calculate completed days from API data
  const completedDays = dailyTaskData?.monthlyHistory?.filter(task => task.taskType === 'daily').length || 0;
  
  // Calculate monthly points from API data
  const monthlyPoints = dailyTaskData?.monthlyPoints || 0;

  return (
    <div className="space-y-6">
      {/* Daily Login and Monthly Progress */}
      <div className="space-y-4">
        <div className="bg-[var(--background-color)] p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-white font-medium">Monthly Progress</h3>
              <p className="text-[var(--text-color)] text-sm">
                Login {completedDays} days out of {daysInMonth} this month
              </p>
            </div>
            <span className="text-yellow-500 font-medium">+{monthlyPoints} points</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-[var(--card-color)] rounded-full h-2.5">
            <div
              className="bg-[var(--sec-color)] h-2.5 rounded-full"
              style={{ width: `${(completedDays / daysInMonth) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-[var(--text-color)]">
            <span>1</span>
            <span>{daysInMonth}</span>
          </div>
        </div>
      </div>
      
      {/* Monthly Calendar Rewards */}
      <div>
        <h3 className="text-white font-medium mb-3">Monthly Login Rewards</h3>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[var(--sec-color)]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {days.map((day) => {
              // Determine the status of the day based on API data
              const isPast = day < currentDay;
              const isToday = day === currentDay;
              const isFuture = day > currentDay;
              const isClaimedFromAPI = isDayClaimed(day);
              const canClaim = isToday && !isClaimedFromAPI && !dailyTaskData?.isTodayTaskDone;
              
              return (
                <div
                  key={day}
                  className={`bg-[var(--background-color)] rounded-lg p-3 flex flex-col items-center ${
                    isToday ? 'border-2 border-[var(--primary-color)]' : ''
                  }`}
                >
                  <span className="text-white font-medium mb-1">Day {day}</span>
                  
                  <div className="w-14 h-14 my-2">
                    <img
                      src="/asset/logo.png"
                      alt="SafeX Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div 
                    className={`text-center w-full py-1 px-2 rounded text-xs font-medium ${
                      isPast || isClaimedFromAPI
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : canClaim
                          ? 'bg-[var(--sec-color)] text-white cursor-pointer hover:bg-opacity-90'
                          : 'bg-[var(--card-color)] text-[var(--text-color)] cursor-not-allowed'
                    }`}
                    onClick={() => canClaim && performDailyTask(day)}
                  >
                    {claimingDay === day ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Claiming
                      </span>
                    ) : isPast || isClaimedFromAPI ? (
                      <span>10 CLAIMED</span>
                    ) : canClaim ? (
                      <span>10 CLAIM</span>
                    ) : (
                      <span>10 LOCKED</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyReward;
