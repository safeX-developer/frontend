'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('BUY');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Bank Transfer');
  const [amount, setAmount] = useState('');
  const [isMobile, setIsMobile] = useState(false);



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

    </div>
  );
}
