import React, { useState, useEffect } from 'react'
import { FaTimes, FaArrowLeft } from 'react-icons/fa';

export default function Header({
    title = "" , 
    isCloseBtn = false,
    onClose, 
    isBackBtn = false,
    onBack,
    isCountdown = false,
    duration = 15, 

}) {
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
    <div className="p-4 sticky top-0 rounded-t-lg navbar-shadow bg-[#2b2a2a] z-10 flex items-center">
        {isBackBtn && (
            <button
                onClick={onBack}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer mr-3"
            >
            <FaArrowLeft />
        </button>
        )}
        <h2 className="text-[14px] font-bold text-white flex-1 text-center">{title}</h2>
        
        {isCloseBtn && (
            <button onClick={onClose}  className="text-gray-400 hover:text-white transition-colors absolute right-5 top-4 cursor-pointer" >
                <FaTimes />
            </button>
        )}
        {isCountdown && (
             <div className="flex items-center text-sm ">
                <div className="bg-[#1a1a1a] rounded px-3 py-2 text-white font-bold">
                    {minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-white mx-1 font-bold">:</span>
                <div className="bg-[#1a1a1a] rounded px-3 py-2 text-white font-bold">
                    {seconds.toString().padStart(2, '0')}
                </div>
            </div>
        )}
    </div>
  );
}
