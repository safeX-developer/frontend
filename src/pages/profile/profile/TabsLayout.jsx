import React, { useState } from 'react';
import ProfileTab from './ProfileTab';
import ReviewTab from './ReviewTab';
import PaymentMethodTab from './PaymentMethodTab';

export default function TabsLayout({user}) {
  const [activeTab, setActiveTab] = useState('profile');
  
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'review', label: 'Leave A Review ' + `(${user?.reviews?.length || 0})` },
    { id: 'payment', label: 'Payment Method' }
  ];
  
  return (
    <div className="bg-[var(--card-color)] rounded-lg shadow-lg overflow-hidden">
      {/* Tabs Header */}
      <div className="relative">
        <div className="flex" style={{borderBottom: "1px solid #98a2b329"}}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 relative ${
                activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--sec-color)]"
                  style={{ transform: 'translateY(50%)' }}
                ></span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'profile' && <ProfileTab user={user} />}
        {activeTab === 'review' && <ReviewTab user={user} />}
        {activeTab === 'payment' && <PaymentMethodTab user={user} />}
      </div>
    </div>
  );
}
