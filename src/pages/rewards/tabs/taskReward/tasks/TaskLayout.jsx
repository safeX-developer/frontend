import React, { useState, useEffect } from 'react';
import { Close, ArrowForward, PlayCircleOutline, CheckCircle, Warning } from '@mui/icons-material';
import { useApp } from '../../../../../context/app.context';
import { useLocation, useNavigate } from 'react-router-dom';
import YoutubeTask from './YoutubeTask';


export default function TaskLayout({  onComplete }) {
  const [username, setUsername] = useState('');
  const [task, setTask] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const { api, user } = useApp()
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Handle window resize to detect desktop vs mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get('task');
    const type = queryParams.get('type');

  useEffect(()=>{
    async function fetchData() {
      try {
        const response = await api.getSingleTask(taskId);
        if(response.success){
            setTask(response.data)
        }

      } catch (error) {
        console.error('Error fetching username:', error);
      }
    }
    fetchData();
  }, [api, user]);

  // Handle opening the task link
  const handleOpenTask = () => {
    window.open(task?.link, '_blank');
  };

  // Handle task completion confirmation
  const handleConfirmCompletion = () => {
    setShowConfirmation(true);
  };

  // Handle final task completion
  const handleCompleteTask = () => {
    if (onComplete) {
      onComplete(task, username);
    }
    setShowConfirmation(false);
    onClose();
  };

  const onClose = (()=>{
    navigate(location.pathname)
  })

  return (
    <div className="fixed inset-0 z-534560 flex items-center justify-center bg-[#000000bc] bg-opacity-75">
      <div className={`relative card text-white rounded-xl overflow-hidden
        ${isDesktop ? 'w-[90%] max-w-6xl h-[80vh]' : 'w-[95%] h-[90vh]'}`}>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <Close />
        </button>

        <div className={`flex flex-col ${isDesktop ? 'flex-row' : ''} h-full`}>
          {/* Left side - Task description */}
          <div className={`${isDesktop ? 'w-1/2 border-r border-gray-700' : 'w-full'} p-6 overflow-y-auto`}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{task?.type?.charAt(0).toUpperCase() + task?.type?.slice(1)} Task</h2>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
                </svg>
                <span className="text-yellow-500 font-medium">{task?.rewardAmount} points reward</span>
              </div>
            </div>

            <div className="mb-6 bg-[#3c3c3c69] rounded-lg p-2">
              <h3 className="text-lg font-medium mb-3">Task Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {task?.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">How to Complete</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 text-xs">
                <li>Click the {task?.type === 'youtube' ? 'Play Video' : 'Perform Task'} button on the right</li>
                <li>{task?.type === 'youtube' ? 'Watch the video completely' : `Complete the required action on ${task?.type}`}</li>
                <li>Enter your {task?.type} username below</li>
                <li>Click "Complete Task" to claim your points</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-sm">Important Notes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-xs">
                <li>Make sure you're logged in to your {task?.type} account</li>
                <li>You can only complete this task once</li>
                <li>Falsely claiming completion may result in penalties</li>
                <li>Points will be added to your balance after verification</li>
              </ul>
            </div>
          </div>

          {/* Right side - Task action */}
          <div className={`${isDesktop ? 'w-1/2' : 'w-full'} p-6 flex flex-col`}>
            <div className="flex-grow flex flex-col items-center justify-center">
              {task?.type === 'youtube' ? (
              <YoutubeTask youtubeUrl={task?.link} />
              ) : (
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-[var(--card-color)] mx-auto flex items-center justify-center mb-4">
                    {getTaskIcon(task?.type)}
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ready to earn {task?.rewardAmount} points?</h3>
                  <button
                    onClick={handleOpenTask}
                    className="px-6 py-3 bg-[var(--sec-color)] hover:bg-opacity-90 rounded-lg font-medium flex items-center justify-center transition-colors mx-auto"
                  >
                    Perform Task <ArrowForward className="ml-2" />
                  </button>
                </div>
              )}
             {task?.type != 'youtube' && (
              <div className="w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-300 mb-2">
                    Your {task?.type} Username | Link
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={`@ ${task?.type} username`}
                    className="w-full bg-[var(--card-color)] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--sec-color)]"
                  />
                </div>

                <button
                  onClick={handleConfirmCompletion}
                  disabled={!username.trim()}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${
                    username.trim() 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  } transition-colors`}
                >
                  <CheckCircle className="mr-2" /> Complete Task
                </button>
              </div>
             )}
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#000000bc] bg-opacity-75">
            <div className="bg-[var(--card-color)] rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center mb-4 text-yellow-500">
                <Warning className="text-3xl mr-2" />
                <h3 className="text-xl font-bold">Confirmation Required</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Are you sure you've completed this task correctly? Falsely claiming completion may affect your earnings and account status.
              </p>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCompleteTask}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition-colors"
                >
                  Yes, I've Completed It
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to get task icon based on type
function getTaskIcon(type) {
  switch (type) {
    case 'youtube':
      return (
        <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h9.6v-7.7h-2.6v-3h2.6V9.2c0-2.6,1.6-4,3.9-4c1.1,0,2.1,0.1,2.3,0.1v2.7h-1.6c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5.1c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.46,6c-0.77,0.35-1.6,0.58-2.46,0.69c0.88-0.53,1.56-1.37,1.88-2.38c-0.83,0.5-1.75,0.85-2.72,1.05C18.37,4.5,17.26,4,16,4c-2.35,0-4.27,1.92-4.27,4.29c0,0.34,0.04,0.67,0.11,0.98C8.28,9.09,5.11,7.38,3,4.79c-0.37,0.63-0.58,1.37-0.58,2.15c0,1.49,0.75,2.81,1.91,3.56c-0.71,0-1.37-0.2-1.95-0.5c0,0.02,0,0.03,0,0.05c0,2.08,1.48,3.82,3.44,4.21c-0.36,0.1-0.74,0.15-1.13,0.15c-0.27,0-0.54-0.03-0.8-0.08c0.54,1.69,2.11,2.95,3.98,2.98c-1.46,1.16-3.31,1.84-5.33,1.84c-0.34,0-0.68-0.02-1.02-0.06C3.44,20.29,5.7,21,8.12,21C16,21,20.33,14.46,20.33,8.79c0-0.19,0-0.37-0.01-0.56C21.22,7.78,21.9,6.96,22.46,6z" />
        </svg>
      );
    case 'discord':
      return (
        <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.54,0c1.356,0,2.46,1.104,2.46,2.472v21.528l-2.58-2.28l-1.452-1.344l-1.536-1.428l0.636,2.22h-13.608c-1.356,0-2.46-1.104-2.46-2.472v-16.224c0-1.368,1.104-2.472,2.46-2.472h16.08zm-4.632,15.672c2.652-0.084,3.672-1.824,3.672-1.824c0-3.864-1.728-6.996-1.728-6.996c-1.728-1.296-3.372-1.26-3.372-1.26l-0.168,0.192c2.04,0.624,2.988,1.524,2.988,1.524c-1.248-0.684-2.472-1.02-3.612-1.152c-0.864-0.072-1.692-0.036-2.424,0.036c-0.072,0-0.132,0.012-0.204,0.012c-0.42,0.036-1.44,0.192-2.724,0.756c-0.444,0.204-0.708,0.348-0.708,0.348s0.996-0.948,3.156-1.572l-0.12-0.144c0,0-1
            -0.144c0,0-1.644-0.036-3.372,1.26c0,0-1.728,3.132-1.728,6.996c0,0,1.008,1.74,3.66,1.824c0,0,0.444-0.54,0.804-0.996c-1.524-0.456-2.1-1.416-2.1-1.416l0.336,0.204l0.048,0.036l0.047,0.027l0.014,0.006l0.047,0.027c0.3,0.168,0.6,0.3,0.876,0.408c0.492,0.192,1.08,0.384,1.764,0.516c0.9,0.168,1.956,0.228,3.108,0.012c0.564-0.096,1.14-0.264,1.74-0.516c0.42-0.156,0.888-0.384,1.38-0.708c0,0-0.6,0.984-2.172,1.428c0.36,0.456,0.792,0.972,0.792,0.972zm-5.58-5.604c-0.684,0-1.224,0.6-1.224,1.332c0,0.732,0.552,1.332,1.224,1.332c0.684,0,1.224-0.6,1.224-1.332c0.012-0.732-0.54-1.332-1.224-1.332zm4.38,0c-0.684,0-1.224,0.6-1.224,1.332c0,0.732,0.552,1.332,1.224,1.332c0.684,0,1.224-0.6,1.224-1.332c0-0.732-0.54-1.332-1.224-1.332z" />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z" />
        </svg>
      );
  }
}
