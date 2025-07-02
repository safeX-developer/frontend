'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TradesLayout({ children }) {
 const router = useRouter();
  const [activeTab, setActiveTab] = useState('BUY');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Bank Transfer');
  const [amount, setAmount] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Dummy data for dropdowns
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];
  const coins = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];
  const paymentMethods = ['Bank Transfer', 'Credit Card', 'PayPal', 'Cash', 'Venmo'];

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Handle tab change and route navigation
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const route = tab === 'BUY' ? '/p2p/trades/buy' : '/p2p/trades/sell';
    router.push(route);
  };

  // Set initial route on component mount
  useEffect(() => {
    const route = activeTab === 'BUY' ? '/p2p/trades/buy' : '/p2p/trades/sell';
    router.push(route);
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* BUY & SELL Switch Buttons and Currency (on mobile) */}
      <div className="flex w-full mb-6 items-center">
        <div className={`${isMobile ? 'w-3/5' : 'w-full'} flex gap-2`}>
          <button
            className={`flex-1 py-2 text-center font-medium text-[13px] rounded-md cursor-pointer transition-colors ${
              activeTab === 'BUY'
                ? 'bg-[var(--active)] text-white'
                : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'
            }`}
            onClick={() => handleTabChange('BUY')}
          >
            Buy
          </button>
          <button
            className={`flex-1 py-2 text-center font-medium text-[13px] rounded-md cursor-pointer transition-colors ${
              activeTab === 'SELL'
                ? 'bg-[var(--active)] text-white'
                : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'
            }`}
            onClick={() => handleTabChange('SELL')}
          >
            Sell
          </button>
        </div>
        
        {/* Currency Dropdown - Only on mobile, next to tabs */}
        {isMobile && (
          <div className="w-2/5 pl-2">
            <div className="relative">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full text-[10px] py-1.5 px-2 rounded-full border border-gray-600 bg-[#232323] text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--active)]"
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency} className="bg-[#232323]">{currency}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Dropdowns for Desktop and Mobile */}
      <div className="flex flex-row flex-wrap">
        {/* Desktop Currency Dropdown */}
        {!isMobile && (
          <div className="w-1/4 pr-2">
            <label className="block text-xs font-medium text-gray-400 mb-1">CURRENCY</label>
            <div className="relative">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full h-10 text-[12px] px-2 rounded-md bg-[#232323] text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--active)]"
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency} className="bg-[#232323]">{currency}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-400">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Coin Dropdown */}
        <div className={`${isMobile ? 'w-1/3' : 'w-1/4'} ${isMobile ? 'px-0' : 'px-2'}`}>
          <label className={`block text-xs font-medium text-gray-400 mb-1 ${isMobile ? 'hidden' : ''}`}>COIN</label>
          <div className="relative">
            <select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              className={`w-full ${isMobile ? 'text-[10px] py-1.5 px-1 border-0 rounded-none bg-[#232323]' : 'h-10 text-[12px] px-2 rounded-md bg-[#232323]'} text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--active)]`}
            >
              {coins.map(coin => (
                <option key={coin} value={coin} className="bg-[#232323]">{coin}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-400">
              <svg className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Payment Method Dropdown */}
        <div className={`${isMobile ? 'w-1/3' : 'w-1/4'} ${isMobile ? 'px-0 border-l border-gray-700' : 'px-2'}`}>
          <label className={`block text-xs font-medium text-gray-400 mb-1 ${isMobile ? 'hidden' : ''}`}>PAYMENT METHOD</label>
          <div className="relative">
            <select
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className={`w-full ${isMobile ? 'text-[10px] py-1.5 px-1 border-0 rounded-none bg-[#232323]' : 'h-10 text-[12px] px-2 rounded-md bg-[#232323]'} text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--active)]`}
            >
              {paymentMethods.map(method => (
                <option key={method} value={method} className="bg-[#232323]">{method}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-400">
              <svg className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className={`${isMobile ? 'w-1/3' : 'w-1/4'} ${isMobile ? 'px-0 border-l border-gray-700' : 'pl-2'}`}>
          <label className={`block text-xs font-medium text-gray-400 mb-1 ${isMobile ? 'hidden' : ''}`}>AMOUNT</label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className={`w-full ${isMobile ? 'text-[10px] py-1.5 px-2 border-0 rounded-none bg-[#232323]' : 'h-10 text-[12px] px-2 rounded-md bg-[#232323]'} text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[var(--active)]`}
            />
          </div>
        </div>
      </div>
      <div className="pt-5 w-full"> 
        {children}
      </div>
    </div>
  );
}
