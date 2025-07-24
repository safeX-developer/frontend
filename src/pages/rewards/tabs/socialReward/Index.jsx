import React from 'react';
import { YouTube, Facebook, Twitter, Chat, Email, Telegram, LinkedIn, Instagram, Stars } from '@mui/icons-material';

function SocialReward() {

  const getTaskTypeIcon = (icon) => {
    switch (icon) {
      case 'youtube':
        return <YouTube className="text-red-600" />;
      case 'facebook':
        return <Facebook className="text-blue-600" />;
      case 'twitter':
        return <Twitter className="text-blue-400" />;
      case 'discord':
        return <Chat className="text-indigo-600" />;
      case 'email':
        return <Email className="text-gray-600" />;
      case 'telegram':
        return <Telegram className="text-blue-500" />;
      case 'linkedin':
        return <LinkedIn className="text-blue-700" />;
      case 'instagram':
        return <Instagram className="text-pink-500" />;
      default:
        return <Stars className="text-yellow-500" />;
    }
  };
  

  // Social media task data
  const socialTasks = [
    {
      id: 1,
      type: 'twitter',
      title: "Verify Twitter account",
      points: 300,
      isDone: false,
    },
    {
      id: 2,
      type: 'email',
      title: "Verify email address",
      points: 200,
      isDone: false,
    },
    {
      id: 3,
      type: 'telegram',
      title: "Verify Telegram account",
      points: 300,
      isDone: false,
    },
    {
      id: 4,
      type: 'linkedin',
      title: "Verify LinkedIn account",
      points: 250,
      isDone: false,
    },
    {
      id: 5,
      type: 'instagram',
      title: "Verify Instagram account",
      points: 200,
      isDone: true,
    },
    {
      id: 6,
      type: 'youtube',
      title: "Verify YouTube account",
      points: 250,
      isDone: false,
    },
  ];

  return (
    <div className="space-y-3">
      {socialTasks.map(task => (
        <div 
          key={task.id} 
          className="w-full bg-[var(--background-color)] rounded-lg p-3 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--card-color)] flex items-center justify-center text-[var(--text-color)]">
              {getTaskTypeIcon(task.type)}
            </div>
            <div className="ml-3">
              <h4 className="text-white text-sm font-medium">{task.title}</h4>
              <div className="flex items-center mt-1">
                <Stars className="w-4 h-4 text-yellow-500 mr-1" />
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
          >
            {task.isDone ? 'Verified' : 'Verify'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SocialReward;
