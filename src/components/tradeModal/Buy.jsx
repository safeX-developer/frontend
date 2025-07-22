import React, { useState } from 'react';
import { FaTimes, FaClock } from 'react-icons/fa';

const BuyModal = ({ 
  isOpen, 
  onClose, 
  coin = "USDT", 
  fiat = 'USD', 
  price = 1550, 
  quantity = 3.2934, 
  paymentMethod = 'Bank transfer', 
  duration = 15 
}) => {
  const [activeTab, setActiveTab] = useState('fiat');
  const [fiatAmount, setFiatAmount] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');
  
  if (!isOpen) return null;
  
  const handleSetMaxAmount = () => {
    if (activeTab === 'fiat') {
      setFiatAmount(quantity.toString());
    } else {
      setCryptoAmount(quantity.toString());
    }
  };
  
  // Calculate how much USDT the user will receive based on the fiat amount
  const calculateReceiveAmount = () => {
    if (!fiatAmount) return 0;
    return (parseFloat(fiatAmount) / price).toFixed(4);
  };
  
  // Calculate how much USD the user will pay based on the crypto amount
  const calculatePayAmount = () => {
    if (!cryptoAmount) return 0;
    return (parseFloat(cryptoAmount) * price).toFixed(2);
  };
  
  return (
    <div className="fixed inset-0 bg-[#0000009d] bg-opacity-70 flex items-center justify-center z-650 p-4">
      <div className="bg-[#232323] navbar-shadow rounded-lg w-full max-w-md relative flex flex-col h-[500px]">
        {/* Fixed header with title and close button */}
        <div className="p-4 sticky top-0 rounded-t-lg navbar-shadow bg-[#2b2a2a] z-10">
          <h2 className="text-[16px] text-center font-semibold text-white">Buy {fiat}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors absolute right-5 top-4 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Scrollable content */}
        <div className="px-5 py-3 overflow-y-auto flex-1 text-sm">
          {/* Price with countdown */}
          <div className="mb-1 flex gap-2">
            <div className="flex text-green-600 text-[16px] items-baseline font-bold">
              <span>
                <span className="text-gray-400 mb-2 text-[11px] font-medium">price</span> {price.toLocaleString()} {coin}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span>{duration}mins</span>
            </div>
          </div>
          
          {/* Content items with labels beside values */}
          <div className="space-y-1 text-[12px] text-gray-200">
            {/* Quantity */}
            <div className="flex items-center gap-1">
              <span className="text-gray-400">Quantity</span>
              <span className="font-medium">{quantity.toLocaleString()} {coin}</span>
            </div>
            
            {/* Payment method */}
            <div className="flex items-center gap-1">
              <span className="text-gray-400">Payment</span>
              <span className="font-medium">{paymentMethod}</span>
            </div>
            
            {/* Payment duration */}
            <div className="flex items-center gap-1">
              <span className="text-gray-400">Payment Duration</span>
              <span className="font-medium">{duration}Mins(s)</span>
            </div>
          </div>
          
          {/* Card with tabs */}
          <div className="mt-4 bg-[#1a1a1a] rounded-lg p-4">
            {/* Tabs - Moved to left */}
            <div className="flex justify-start mb-4">
              <div className="flex text-[12px]">
                <button
                  className={`px-3 py-1 cursor-pointer ${activeTab === 'fiat' ? 'text-[var(--active)] border-b-2 border-[var(--active)]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('fiat')}
                >
                  With Fiat
                </button>
                <button
                  className={`px-3 py-1 cursor-pointer ${activeTab === 'crypto' ? 'text-[var(--active)] border-b-2 border-[var(--active)]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('crypto')}
                >
                  With Crypto
                </button>
              </div>
            </div>
            
            {/* Tab content - With Fiat */}
            {activeTab === 'fiat' && (
              <div>
                {/* Input with fiat and "All" button */}
                <div className="relative mb-3">
                  <input
                    type="text"
                    value={fiatAmount}
                    onChange={(e) => setFiatAmount(e.target.value)}
                    placeholder="Please enter amount"
                    className="w-full bg-[#232323] border border-gray-700 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[var(--active)]"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-400 text-xs">
                    <span>{fiat}</span>
                    <span className="mx-2">|</span>
                    <button
                      className="text-[var(--active)] hover:text-[var(--active)] hover:underline cursor-pointer"
                      onClick={handleSetMaxAmount}
                    >
                      All
                    </button>
                  </div>
                </div>
                
                {/* I will receive */}
                <div className="flex justify-between text-xs mb-4">
                  <span className="text-gray-400">I will receive</span>
                  <span className="text-white">{calculateReceiveAmount()} {coin}</span>
                </div>
                
                {/* Proceed button */}
                <button className="w-full bg-[var(--active)] text-white py-2 rounded-md hover:opacity-90 transition-opacity text-sm font-medium cursor-pointer">
                  Proceed
                </button>
                
                {/* Risk notice */}
                <p className="text-gray-400 text-[10px] mt-3 text-center">
                  If there is risk, withdrawal may be delayed by up to 24hours
                </p>
              </div>
            )}
            
            {/* Tab content - With Crypto */}
            {activeTab === 'crypto' && (
              <div>
                {/* Input with crypto and "All" button */}
                <div className="relative mb-3">
                  <input
                    type="text"
                    value={cryptoAmount}
                    onChange={(e) => setCryptoAmount(e.target.value)}
                    placeholder="Please enter amount"
                    className="w-full bg-[#232323] border border-gray-700 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[var(--active)]"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-400 text-xs">
                    <span>{coin}</span>
                    <span className="mx-2">|</span>
                    <button
                      className="text-[var(--active)] hover:text-[var(--active)] hover:underline cursor-pointer"
                      onClick={handleSetMaxAmount}
                    >
                      All
                    </button>
                  </div>
                </div>
                
                {/* I will pay */}
                <div className="flex justify-between text-xs mb-4">
                  <span className="text-gray-400">I will pay</span>
                  <span className="text-white">{calculatePayAmount()} {fiat}</span>
                </div>
                
                {/* Proceed button */}
                <button className="w-full bg-[var(--active)] text-white py-2 rounded-md hover:opacity-90 transition-opacity text-sm font-medium cursor-pointer">
                  Proceed
                </button>
                
                {/* Risk notice */}
                <p className="text-gray-400 text-[10px] mt-3 text-center">
                  If there is risk, withdrawal may be delayed by up to 24hours
                </p>
              </div>
            )}
          </div>
          
          {/* Card with Advertiser Terms and Transaction Info */}
          <div className="mt-4 bg-[#1a1a1a] rounded-lg p-4 mb-4">
            {/* Advertiser Terms */}
            <div className="mb-3">
              <h3 className="text-[13px] font-medium text-white mb-2">Advertiser Terms</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Good day boo, I am always active, I don't accept payment from thirparty or copany's account. drop your phone number afeter payment all is to know who I am trading with to avoid fraud money
              </p>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-700 my-3"></div>
            
            {/* Transaction Info */}
            <div>
              <h3 className="text-[13px] font-medium text-white mb-2">Transaction Info</h3>
              <div className="bg-[#232323] rounded p-3">
                <div className="flex justify-between items-center text-[11px] mb-2">
                  <span className="text-gray-400">Good rate</span>
                  <span className="text-white">78%</span>
                </div>
                <div className="flex justify-between items-center text-[11px] mb-2">
                  <span className="text-gray-400">Completed Order in 30days</span>
                  <span className="text-white">209 Order(s)</span>
                </div>
                <div className="flex justify-between items-center text-[11px] mb-2">
                  <span className="text-gray-400">30-days order completion rate (%)</span>
                  <span className="text-white">100%</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-gray-400">avg Release Time</span>
                  <span className="text-white">22mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
