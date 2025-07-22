import React, { useState, useEffect } from 'react';
import { useApp } from '../../../../context/app.context';
import { YouTube, Facebook, Twitter, Chat, EmojiEvents, TaskAlt } from '@mui/icons-material';
import { useNavigate , useLocation} from "react-router-dom"
import { toast } from "sonner"
import TaskLayout from './tasks/TaskLayout';

function RewardInfo() {
  const { user, api } = useApp();
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTask, setActiveTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const [performingTask, setPerformingTask] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        if (!user || !user.userId) return;
        
        const response = await api.getTasks(user.userId);
        
        if (response.data.tasks?.length > 0) {
          setTasks(response.data.tasks || []);
          setTotalPoints(response.data.totalPoints || 0);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }
    
    if (user) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [user, api]);

  // Get icon based on task type
  const getTaskTypeIcon = (type) => {
    switch (type) {
      case 'youtube':
        return <YouTube className="text-red-600" />;
      case 'facebook':
        return <Facebook className="text-blue-600" />;
      case 'twitter':
        return <Twitter className="text-blue-400" />;
      case 'discord':
        return <Chat className="text-indigo-600" />;
      default:
        return null;
    }
  };

  const handleStartTask = async (task) => {
    navigate(`?task=${task.taskId}&type=${task.type}`);
  };

    // Parse URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const taskIdFromUrl = queryParams.get('task');

  // Render loading state
  if (loading) {
    return (
      <div className="bg-[var(--card-color)] rounded-lg p-4">
        <h3 className="text-white font-medium mb-4">Tasks to Earn Points</h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--sec-color)]"></div>
        </div>
      </div>
    );
  }

  // Render when user is not logged in
  if (!user) {
    return (
      <div className="bg-[var(--card-color)] rounded-lg p-4">
        <h3 className="text-white font-medium mb-4">Tasks to Earn Points</h3>
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <TaskAlt className="text-gray-500 text-4xl mb-3" />
          <p className="text-gray-400 mb-2">Please log in to view and complete tasks</p>
        </div>
      </div>
    );
  }

  // Render when there are no tasks
  if (tasks.length === 0) {
    return (
      <div className="bg-[var(--card-color)] rounded-lg p-4">
        <h3 className="text-white font-medium mb-4">Tasks to Earn Points</h3>
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <EmojiEvents className="text-gray-500 text-4xl mb-3" />
          <p className="text-gray-400">No tasks available at the moment</p>
          <p className="text-gray-500 text-sm mt-1">Check back later for new opportunities</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--card-color)] rounded-lg p-4">
    {taskIdFromUrl &&  <TaskLayout />}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-medium">Tasks to Earn Points</h3>
      </div>
      
      <div className="space-y-3">
        {tasks.map(task => (
          <div
            key={task.taskId}
            className="w-full bg-[var(--background-color)] rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--card-color)] flex items-center justify-center text-[var(--text-color)]">
                {getTaskTypeIcon(task.type)}
              </div>
              <div className="ml-3">
                <h4 className="text-white text-sm font-medium">
                  {task.type.charAt(0).toUpperCase() + task.type.slice(1)} Task
                </h4>
                <div className="flex items-center mt-1">
                  <svg
                    className="w-4 h-4 text-yellow-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
                  </svg>
                  <span className="text-yellow-500 text-xs">{task.rewardAmount} points</span>
                </div>
              </div>
            </div>
            
            <button
              className={`px-4 py-1.5 rounded text-sm font-medium ${
                task.isDone
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : activeTask && activeTask.taskId === task.taskId
                    ? 'bg-gray-600 text-white'
                    : 'bg-[var(--sec-color)] text-white hover:bg-opacity-90 transition-colors'
              }`}
              disabled={task.isDone || performingTask}
              onClick={() => handleStartTask(task)}
            >
              {task.isDone 
                ? 'Claimed' 
                : activeTask && activeTask.taskId === task.taskId 
                  ? 'Processing...' 
                  : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardInfo;
