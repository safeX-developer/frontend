import React, { useState, useEffect } from 'react';
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import 'animate.css';


export default function BuyConfirmation({ onClose , handleConfirm}) {
  const [isVisible, setIsVisible] = useState(false);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  useEffect(() => {
    // Set visible after component mounts to trigger animation
    setIsVisible(true);
    
    // Add animate.css to head if not already present
    if (!document.querySelector('link[href*="animate.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      onClose();
    }, 500);
  };



  return (
    <div className="fixed inset-x-0 bottom-0 z-34550 flex justify-center bg-[#0000009d] bg-opacity-70">
      <div 
        className={`bg-[#232323] rounded-t-lg w-full max-w-md shadow-lg ${
          isVisible 
            ? 'animate__animated animate__slideInUp' 
            : 'animate__animated animate__slideOutDown'
        }`}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="p-4 sticky top-0 rounded-t-lg navbar-shadow bg-[#2b2a2a] z-10 flex justify-between items-center">
          <h2 className="text-[13px] font-semibold text-white">Confirmation</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Warning Card */}
          <div className="bg-amber-900/30 rounded-lg p-3 mb-2">
            <div className="flex items-start text-[12px]">
              <FaExclamationTriangle className="text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-amber-400 ">
                To avoid account suspension, do not tap "Confirm Payment" without having paid.
              </p>
            </div>
          </div>

          {/* Confirmation Text */}
          <p className="text-white text-[12px] mb-1">
            Confirm you have made payment to the following:
          </p>

          {/* Seller Details Card */}
          <div className="bg-[#1a1a1a] rounded-lg p-3 mb-4">
            <div className="text-white font-medium mb-2">Bank Transfer</div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Name:</span>
                <span className="text-white">Abdulsedj abubakej</span>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Bank Account number:</span>
                <span className="text-white">098789287343</span>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Bank Branch:</span>
                <span className="text-white">Paycom</span>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Bank Name:</span>
                <span className="text-white">Opay</span>
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 mb-4">
            <label className="flex items-start cursor-pointer">
              <input 
                type="checkbox" 
                className="mt-1 mr-3 h-3 w-3 accent-[#F56630]" 
                checked={checkBox1}
                onChange={() => setCheckBox1(!checkBox1)}
              />
              <span className="text-gray-400 text-[11px]">
                I understand completing the transfer requires leaving the platform and that Safex does not automatically process the payment.
              </span>
            </label>
            
            <label className="flex items-start cursor-pointer">
              <input 
                type="checkbox" 
                className="mt-1 mr-3 h-3 w-3 accent-[#F56630]" 
                checked={checkBox2}
                onChange={() => setCheckBox2(!checkBox2)}
              />
              <span className="text-gray-400 text-[11px]">
                I confirm that I will pay using an account with my legal name.
              </span>
            </label>
          </div>

          {/* Confirm Button */}
          <button 

          onClick={handleConfirm}
            className={`w-full py-3 rounded-md text-white text-sm font-medium transition-opacity ${
              checkBox1 && checkBox2 
                ? 'bg-[#F56630] hover:opacity-90' 
                : 'bg-gray-600 cursor-not-allowed opacity-70'
            }`}
            disabled={!checkBox1 || !checkBox2}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
