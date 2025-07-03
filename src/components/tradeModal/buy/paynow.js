'use client';
import React, { useState, useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaComment, FaCopy, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function PayNow({onCancel, onPaynow, onBack, duration = 15 }) {
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
    <>
      {/* Fixed header with title and close button */}
      <div className="p-4 sticky top-0 rounded-t-lg navbar-shadow bg-[#2b2a2a] z-10 flex items-center">
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer mr-3"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-[14px] font-bold text-white flex-1 text-center">Complete your payment within:</h2>
        <div className="flex items-center text-sm ">
          <div className="bg-[#1a1a1a] rounded px-3 py-2 text-white font-bold">
            {minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-white mx-1 font-bold">:</span>
          <div className="bg-[#1a1a1a] rounded px-3 py-2 text-white font-bold">
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      
      {/* Scrollable content */}
      <div className="p-4 overflow-y-auto flex-1 text-sm">
        {/* Payment instructions */}
        <div className="rounded-lg mb-4">
          <ul className="list-disc pl-5 text-gray-400 text-[11px]">
            <li>Please complete the payment within the allowed timeframe</li>
            <li>After making payment click on the payment completed button below</li>
            <li>
              Note: the order will automatically be cancelled if the button is not clicked by the deadline
            </li>
          </ul>
        </div>
        
        {/* Buy USDT Card */}
        <div className="bg-[#1a1a1a] rounded-lg mt-4 py-2 overflow-hidden relative">
          {/* Header with title and contact seller button */}
          <div className="flex items-center p-2">
            <h3 className="text-white font-medium">Buy USDT</h3>
            <div className="absolute right-0 top-2">
              <button
                className="flex items-center gap-1 text-[var(--active)] px-2 py-1 text-xs"
                style={{
                  background: 'transparent',
                  border: '1px solid',
                  borderImage: 'linear-gradient(to right, var(--active) 50%, transparent 100%)',
                  borderImageSlice: 1,
                  borderRadius: "30px 0px 0px 30px"
                }}
              >
                <FaComment className="text-[var(--active)]" />
                Contact Seller
              </button>
            </div>
          </div>
          
          {/* Transaction details */}
          <div className="px-3">
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Amount:</span>
              <span className="text-green-500 font-bold text-base">9,000.00 USD</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Price:</span>
              <span className="text-white">1,658.98 USD</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Total Quantity:</span>
              <span className="text-white">6.4493 USDT</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Transaction fee:</span>
              <span className="text-white">0 USDT</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Order No.</span>
              <div className="flex items-center">
                <span className="text-white mr-2">194378928029</span>
                <FaCopy className="text-gray-400 cursor-pointer hover:text-[var(--active)]" />
              </div>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Order time:</span>
              <span className="text-white">2025-07-03 18:45:22</span>
            </div>
          </div>
        </div>
        
        {/* Transaction Info Card */}
        <div className="bg-[#1a1a1a] rounded-lg mt-4 py-2 overflow-hidden">
          <div className="px-3 py-2">
            <h3 className="text-white font-medium mb-2">Transaction Info</h3>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Seller Username:</span>
              <a href="#" className="text-white flex items-center hover:text-[var(--active)]">
                usewer30 <FaArrowRight className="ml-1 text-xs" />
              </a>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
              <span className="text-gray-400">Verified:</span>
              <span className="text-white">Victor Manu</span>
            </div>
            
            {/* Green security notice */}
            <div className="bg-green-900/30 rounded-md p-3 mt-2">
              <ul className="text-[11px] text-green-400 space-y-1">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>The assets of the seller has been locked, you can make the transfer with confidence</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>Please chat within the platform, external record cannot be used as evidence in order disputes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 my-4 ">
          <button onClick={onCancel } className="flex-1 cursor-pointer py-2 rounded-md text-white border border-gray-600 text-sm font-medium hover:bg-gray-700 transition-colors">
            Cancel Order
          </button>
          <button onClick={onPaynow } className="flex-1 py-2 cursor-pointer rounded-md bg-[var(--active)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
}
