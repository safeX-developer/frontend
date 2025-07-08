import React, { useState, useEffect } from 'react';
import YouTubeTask from './tasks/YoutubeTask';
import { useApp } from '@/context/app.context';

function RewardInfo() {
    const { user, api } = useApp();
  const [activeTask, setActiveTask] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [tweetLiked, setTweetLiked] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  
  // YouTube video URL
  const youtubeUrl = "https://youtu.be/2MWVuCsVdiw?si=gvtPGiEyifLIWy3Q";
  
  // Fetch user invite code on component mount
  useEffect(() => {
    setInviteCode(user?.referralCode);
  }, [user]);

  // Task data
  const tasks = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      title: "Watch YouTube video",
      points: 50,
      isDone: videoCompleted,
      type: "youtube"
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      title: "Like pinned tweet on X.com",
      points: 100,
      isDone: tweetLiked,
      type: "twitter"
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "Join CZE on Discord",
      points: 75,
      isDone: false,
    },
    {
      id: 5,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 7 7-7 7z" />
        </svg>
      ),
      title: "Complete a trade to earn",
      points: 200,
      isDone: false,
    },
    {
      id: 6,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      title: "Invite a friend to earn",
      points: 40,
      isDone: false,
      type: "invite"
    }
  ];

  const handleStartTask = (task) => {
    if (task.isDone) return;
    
    setActiveTask(task);
    
    if (task.type === "youtube") {
      setShowVideo(true);
    } else if (task.type === "invite") {
      setShowInviteModal(true);
    }
  };

  const handleVideoComplete = () => {
    setVideoCompleted(true);
    console.log("completed video task");
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setActiveTask(null);
  };

  const handleCloseInviteModal = () => {
    setShowInviteModal(false);
    setActiveTask(null);
    setCopySuccess(false);
  };

  const copyInviteLink = () => {
    const inviteLink = `${window.location.origin}/?invite=${inviteCode}`;
    navigator.clipboard.writeText(inviteLink)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="bg-[var(--card-color)] rounded-lg p-4">
      <h3 className="text-white font-medium mb-4">Tasks to Earn Points</h3>
      
      {showVideo && (
        <YouTubeTask
          youtubeUrl={youtubeUrl}
          requiredWatchPercent={80}
          points={tasks[0].points}
          onComplete={handleVideoComplete}
          onClose={handleCloseVideo}
        />
      )}
      
      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-[var(--backdrop)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--card-color)] rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-medium">Invite Friends</h3>
              <button 
                onClick={handleCloseInviteModal}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            
            <p className="text-gray-300 mb-4">
              Share this link with your friends and earn {tasks.find(t => t.type === "invite")?.points} points for each friend who joins!
            </p>
            
            <div className="bg-[var(--background-color)] p-3 rounded-lg mb-4 flex items-center">
              <input
                type="text"
                value={`${window.location.origin}/?invite=${inviteCode}`}
                className="bg-transparent text-white flex-1 outline-none truncate"
                readOnly
              />
            </div>
            
            <button
              onClick={copyInviteLink}
              className={`w-full py-2 rounded-lg font-medium transition-colors ${
                copySuccess 
                  ? 'bg-green-600 text-white' 
                  : 'bg-[var(--sec-color)] text-white hover:bg-opacity-90'
              }`}
            >
              {copySuccess ? 'Copied!' : 'Copy Invite Link'}
            </button>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {tasks.map(task => (
          <div
            key={task.id}
            className="w-full bg-[var(--background-color)] rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--card-color)] flex items-center justify-center text-[var(--text-color)]">
                {task.icon}
              </div>
              <div className="ml-3">
                <h4 className="text-white text-sm font-medium">{task.title}</h4>
                <div className="flex items-center mt-1">
                  <svg
                    className="w-4 h-4 text-yellow-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
                  </svg>
                  <span className="text-yellow-500 text-xs">{task.points} points</span>
                </div>
              </div>
            </div>
            
            <button
              className={`px-4 py-1.5 rounded text-sm font-medium ${
                task.isDone
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-[var(--sec-color)] text-white hover:bg-opacity-90 transition-colors'
              }`}
              disabled={task.isDone}
              onClick={() => handleStartTask(task)}>
              {task.isDone ? 'Claimed' : task.type === 'invite' ? 'Invite' : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardInfo;
