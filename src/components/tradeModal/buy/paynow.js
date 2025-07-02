'use client';

import React, { useState, useEffect } from 'react';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';

export default function PayNow({ onClose, onBack, duration = 15 }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds

  useEffect(() => {
    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up timer on unmount
    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 bg-[#00000072] bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#232323] navbar-shadow rounded-lg w-full max-w-md relative flex flex-col h-[500px]">
        {/* Fixed header with title and close button */}
        <div className="p-4 sticky top-0 rounded-t-lg navbar-shadow bg-[#2b2a2a] z-10 flex items-center">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer mr-3"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-[16px] font-semibold text-white flex-1 text-center">Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="px-5 py-6 overflow-y-auto flex-1 text-sm">
          {/* Countdown timer */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-medium">Complete your payment within:</h3>
            <div className="flex items-center">
              <div className="bg-[#1a1a1a] rounded px-3 py-2 text-white font-bold">
                {minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-white mx-1 font-bold">:</span>
              <div className="bg-[#1a1a1a] rounded px-3 py-2 text-white font-bold">
                {seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Payment instructions */}
          <div className="bg-[#1a1a1a] rounded-lg p-4 mb-4">
            <ul className="list-disc pl-5 text-gray-300 space-y-3 text-[13px]">
              <li>Please complete the payment within the allowed timeframe</li>
              <li>After making payment click on the payment completed button below</li>
              <li className="text-yellow-400">
                Note: the order will automatically be cancelled if the button is not clicked by the deadline
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
