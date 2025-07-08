'use client';

import React from 'react';
import { FaCheckCircle, FaUniversity, FaClock } from 'react-icons/fa';

const TradeCard = ({
  username,
  completedTrades,
  tradeActivity,
  paymentMethod,
  minLimit,
  maxLimit,
  volume,
  price,
  paymentTime = '2mins',
  type = 'buy',
  onButtonClick,
  fiat= "NGN"
}) => {
  // Generate a color based on username for the avatar background
  const generateGradientColor = (name) => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-teal-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-red-500 to-pink-500',
      'from-indigo-500 to-purple-500'
    ];
    
    // Simple hash function to pick a color based on the username
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  // Get payment method icon
  const getPaymentIcon = (method) => {
    switch (method.toLowerCase()) {
      case 'bank transfer':
        return <FaUniversity className="text-gray-400" />;
      // Add more cases for different payment methods
      default:
        return <FaUniversity className="text-gray-400" />;
    }
  };

  const gradientClass = generateGradientColor(username);
  const firstLetter = username.charAt(0).toUpperCase();

  // Determine button text based on trade type
  const buttonText = type.toLowerCase() === 'sell' ? 'Sell' : 'Buy';

  return (
    <div className="w-full bg-[#232323] rounded-lg p-4 mb-4">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between">
        {/* Left section - User info */}
        <div className="flex items-start">
          {/* Avatar circle with gradient */}
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradientClass} flex items-center justify-center text-white font-bold text-xl mr-3`}>
            {firstLetter}
          </div>
          
          <div>
            {/* Username and verified badge */}
            <div className="flex items-center">
              <span className="font-medium text-white">{username}</span>
              <FaCheckCircle className="ml-1 text-green-500 text-sm" />
            </div>
            
            {/* Trade stats */}
            <div className="flex items-center text-xs text-gray-400 mt-1">
              <span>Completed {completedTrades}</span>
              <span className="mx-1">•</span>
              <span>Trade Activity {tradeActivity}%</span>
            </div>
            
            {/* Payment method */}
            <div className="flex items-center text-xs text-gray-400 mt-2">
              <span className="mr-1">{getPaymentIcon(paymentMethod)}</span>
              <span>Payment method</span>
              <span className="ml-1 text-white">{paymentMethod}</span>
            </div>
          </div>
        </div>
        
        {/* Middle section - Trade details */}
        <div className="text-center">
          <div className="text-xs text-gray-400 whitespace-nowrap">
            <span>Limit</span>
            <span className="ml-1 text-white">{minLimit.toLocaleString()} - {maxLimit.toLocaleString()}</span>
            <span className="mx-2">|</span>
            <span>Volume</span>
            <span className="ml-1 text-white">{volume.toLocaleString()} USDT</span>
          </div>
          <div className="text-xl font-bold text-white mt-2">
            {price.toLocaleString()} {fiat}
          </div>
        </div>
        
        {/* Right section - Buy/Sell button and payment time */}
        <div className="flex flex-col items-center">
          <button 
            className="bg-[var(--active)] cursor-pointer text-white px-8 py-2 rounded-full hover:opacity-90 transition-opacity font-medium w-full"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
          <div className="flex items-center text-xs text-gray-400 mt-2">
            <FaClock className="mr-1" />
            <span>Payment Time</span>
            <span className="ml-1 text-white">{paymentTime}</span>
          </div>
        </div>
      </div>

      {/* Mobile layout - Square card with stacked info */}
      <div className="md:hidden">
        <div className="flex items-start mb-3">
          {/* Avatar and username */}
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradientClass} flex items-center justify-center text-white font-bold text-lg mr-2`}>
            {firstLetter}
          </div>
          
          <div>
            <div className="flex items-center">
              <span className="font-medium text-white">{username}</span>
              <FaCheckCircle className="ml-1 text-green-500 text-sm" />
            </div>
            
            <div className="flex items-center text-xs text-gray-400">
              <span>Completed {completedTrades}</span>
              <span className="mx-1">•</span>
              <span>Trade Activity {tradeActivity}%</span>
            </div>
          </div>
        </div>
        
        {/* Trade details */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <div>
              <span>Limit: </span>
              <span className="text-white">{minLimit.toLocaleString()} - {maxLimit.toLocaleString()}</span>
            </div>
            <div>
              <span>Volume: </span>
              <span className="text-white">{volume.toLocaleString()} USDT</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <div className="text-lg font-bold text-white">
              ${price.toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <FaClock className="mr-1" />
              <span>Payment Time: </span>
              <span className="text-white ml-1">{paymentTime}</span>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-400 mb-3">
            <span className="mr-1">{getPaymentIcon(paymentMethod)}</span>
            <span>Payment method: </span>
            <span className="ml-1 text-white">{paymentMethod}</span>
          </div>
        </div>
        
        {/* Buy/Sell button */}
        <button 
          className="bg-[var(--active)] text-white py-2 rounded-full hover:opacity-90 cursor-pointer transition-opacity font-medium w-full"
          onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TradeCard;
