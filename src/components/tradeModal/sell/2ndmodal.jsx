import React, { useState } from 'react';
import { FaArrowLeft, FaStar, FaQuestionCircle, FaThumbsUp } from 'react-icons/fa';

export default function UserProfileModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('info');

  if (!isOpen) {
    return null;
  }

  const renderInfoTab = () => (
    <div className="px-6 pb-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span style={{ color: 'var(--text-color)' }}>Completed Order(s) in 30 Days</span>
          <span style={{ color: 'var(--foreground)' }}>975 Order(s)</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--text-color)' }}>Completion Rate Within 30 Days</span>
            <FaQuestionCircle size={16} style={{ color: 'var(--text-color)' }} />
          </div>
          <span style={{ color: 'var(--foreground)' }}>91 %</span>
        </div>

        <div className="flex justify-between items-center">
          <span style={{ color: 'var(--text-color)' }}>Avg. Release Time</span>
          <span style={{ color: 'var(--foreground)' }}>3 Minute(s)</span>
        </div>

        <div className="flex justify-between items-center">
          <span style={{ color: 'var(--text-color)' }}>Avg. Payment Time</span>
          <span style={{ color: 'var(--foreground)' }}>5 Minute(s)</span>
        </div>

        <div className="flex justify-between items-center">
          <span style={{ color: 'var(--text-color)' }}>All Completed Orders</span>
          <div className="text-right">
            <div style={{ color: 'var(--foreground)' }}>3250</div>
            <div className="text-sm" style={{ color: 'var(--text-color)' }}>
              Buy 2358 Sell 892
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--text-color)' }}>Good Rating %</span>
            <FaQuestionCircle size={16} style={{ color: 'var(--text-color)' }} />
          </div>
          <div className="text-right">
            <div style={{ color: 'var(--foreground)' }}>87 %</div>
            <div className="text-sm" style={{ color: 'var(--text-color)' }}>
              6 / 10
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span style={{ color: 'var(--text-color)' }}>Day(s) Since Account Creation</span>
          <span style={{ color: 'var(--foreground)' }}>115 Day(s)</span>
        </div>

        <div className="flex justify-between items-center">
          <span style={{ color: 'var(--text-color)' }}>Day(s) From First Trade</span>
          <span style={{ color: 'var(--foreground)' }}>115 Day(s)</span>
        </div>
      </div>

      <div className="flex gap-4 mt-12">
        <button 
          className="flex-1 py-3 rounded-lg text-sm"
          style={{ 
            backgroundColor: 'var(--card-color)',
            color: 'var(--foreground)'
          }}
        >
          Block him/her
        </button>
        <button 
          className="flex-1 py-3 rounded-lg text-sm"
          style={{ 
            backgroundColor: 'var(--card-color)',
            color: 'var(--foreground)'
          }}
        >
          Report User
        </button>
      </div>
    </div>
  );

  const renderAdvertisementTab = () => (
    <div className="px-6 pb-6">
      <div className="mb-6">
        <h3 className="mb-4" style={{ color: 'var(--foreground)' }}>Sell to this buyer</h3>
        
        {/* First USDT Option */}
        <div 
          className="rounded-lg p-4 mb-4"
          style={{ backgroundColor: 'var(--card-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
              >
                ₮
              </div>
              <span style={{ color: 'var(--foreground)' }}>USDT</span>
            </div>
            <button 
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ 
                backgroundColor: 'var(--red-700-normal)',
                color: 'white'
              }}
            >
              Sell
            </button>
          </div>
          <div className="mb-2">
            <span className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
              ₦ 1,687.42
            </span>
          </div>
          <div className="space-y-1 text-sm" style={{ color: 'var(--text-color)' }}>
            <div>Quantity 20,000 USDT</div>
            <div>Limits 23.00M - 23.00M NGN</div>
            <div style={{ color: 'var(--primary-color)' }}>| Bank Transfer</div>
          </div>
        </div>

        {/* Second USDT Option */}
        <div 
          className="rounded-lg p-4"
          style={{ backgroundColor: 'var(--card-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
              >
                ₮
              </div>
              <span style={{ color: 'var(--foreground)' }}>USDT</span>
            </div>
            <button 
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ 
                backgroundColor: 'var(--red-700-normal)',
                color: 'white'
              }}
            >
              Sell
            </button>
          </div>
          <div className="mb-2">
            <span className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
              ₦ 1,500.00
            </span>
          </div>
          <div className="space-y-1 text-sm" style={{ color: 'var(--text-color)' }}>
            <div>Quantity 19,309.6927 USDT</div>
            <div>Limits 10,000.00 - 23.00M NGN</div>
            <div style={{ color: 'var(--primary-color)' }}>| Bank Transfer</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewTab = () => (
    <div className="px-6 pb-6">
      <div className="mb-6">
        <div className="mb-4">
          <span className="text-sm" style={{ color: 'var(--text-color)' }}>Current Good Rating </span>
          <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>99%</span>
        </div>
        
        <div className="flex gap-4 mb-6">
          <div 
            className="px-4 py-2 rounded text-sm"
            style={{ backgroundColor: 'var(--card-color)', color: 'var(--foreground)' }}
          >
            Good 247
          </div>
          <div 
            className="px-4 py-2 rounded text-sm"
            style={{ backgroundColor: 'var(--card-color)', color: 'var(--foreground)' }}
          >
            Bad 1
          </div>
          <FaQuestionCircle size={20} style={{ color: 'var(--text-color)' }} />
        </div>
      </div>

      <div className="space-y-4">
        {/* Review Item 1 */}
        <div className="flex gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: 'var(--text-color)' }}
          >
            A
          </div>
          <div className="flex-1">
            <div className="mb-1">
              <span style={{ color: 'var(--foreground)' }}>Anonymous User</span>
            </div>
            <div className="text-sm mb-2" style={{ color: 'var(--text-color)' }}>
              2025-08-01 22:26:48
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp size={16} style={{ color: 'var(--green-700-normal)' }} />

              <span className="text-sm" style={{ color: 'var(--green-700-normal)' }}>
                No past ratings to show.
              </span>
            </div>
          </div>
        </div>

        {/* Review Item 2 */}
        <div className="flex gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold"
            style={{ backgroundColor: 'var(--active)' }}
          >
            U
          </div>
          <div className="flex-1">
            <div className="mb-1">
              <span style={{ color: 'var(--foreground)' }}>User3463Tx91HM</span>
            </div>
            <div className="text-sm mb-2" style={{ color: 'var(--text-color)' }}>
              2025-07-31 08:24:04
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp size={16} style={{ color: 'var(--green-700-normal)' }} />
              <span className="text-sm" style={{ color: 'var(--green-700-normal)' }}>
                Fast Response
              </span>
            </div>
          </div>
        </div>

        {/* Review Item 3 */}
        <div className="flex gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold"
            style={{ backgroundColor: 'var(--active)' }}
          >
            O
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span style={{ color: 'var(--foreground)' }}>OLASCO01</span>
              <span style={{ color: 'var(--red-700-normal)' }}>🔥</span>
            </div>
            <div className="text-sm mb-2" style={{ color: 'var(--text-color)' }}>
              2025-07-24 03:47:49
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp size={16} style={{ color: 'var(--green-700-normal)' }} />
              <span className="text-sm" style={{ color: 'var(--green-700-normal)' }}>
                Fast Response
              </span>
            </div>
          </div>
        </div>

        {/* Review Item 4 */}
        <div className="flex gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold"
            style={{ backgroundColor: 'var(--active)' }}
          >
            B
          </div>
          <div className="flex-1">
            <div className="mb-1">
              <span style={{ color: 'var(--foreground)' }}>bmaikudi</span>
            </div>
            <div className="text-sm mb-2" style={{ color: 'var(--text-color)' }}>
              2025-07-17 20:06:52
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp size={16} style={{ color: 'var(--green-700-normal)' }} />
              <span className="text-sm" style={{ color: 'var(--green-700-normal)' }}>
                Fast Response
              </span>
            </div>
          </div>
        </div>

        {/* Review Item 5 */}
        <div className="flex gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: 'var(--text-color)' }}
          >
            A
          </div>
          <div className="flex-1">
            <div className="mb-1">
              <span style={{ color: 'var(--foreground)' }}>Anonymous User</span>
            </div>
            <div className="text-sm mb-2" style={{ color: 'var(--text-color)' }}>
              2025-07-14 17:16:52
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp size={16} style={{ color: 'var(--green-700-normal)' }} />
              <span className="text-sm" style={{ color: 'var(--green-700-normal)' }}>
                Good Rates
              </span>
            </div>
          </div>
        </div>

        
        <div className="flex gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: 'var(--text-color)' }}
          >
            A
          </div>
          <div className="flex-1">
            <div className="mb-1">
              <span style={{ color: 'var(--foreground)' }}>Anonymous User</span>
            </div>
            <div className="text-sm mb-2" style={{ color: 'var(--text-color)' }}>
              2025-07-12 06:05:48
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp size={16} style={{ color: 'var(--green-700-normal)' }} />
              <span className="text-sm" style={{ color: 'var(--green-700-normal)' }}>
                No past ratings to show.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--backdrop)' }}
    >
      <div 
        className="w-full max-w-md rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: '#2b2b2b' }}
      >
        {/* Header with darker background */}
        <div className="flex items-center justify-between p-6 pb-4" style={{ backgroundColor: '#141414' }}>
          <button 
            onClick={onClose}
            className="p-1"
            style={{ color: 'var(--foreground)' }}
          >
            <FaArrowLeft size={24} />
          </button>
          <div className="w-6"></div>
        </div>

        {/* User info section with darker background */}
        <div className="px-6 pb-6" style={{ backgroundColor: '#141414' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: 'var(--active)' }}
              >
                {activeTab === 'info' ? 'U' : 'F'}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                    {activeTab === 'info' ? 'user9701vu8zAB' : 'FASTPAYTAP'}
                  </span>
                  <span style={{ color: 'var(--red-700-normal)' }}>🔥</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--text-color)' }}>
                  {activeTab === 'info' ? '1m ago' : '7m ago'}
                </div>
              </div>
            </div>
            <FaStar size={24} style={{ color: 'var(--text-color)' }} />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--green-700-normal)' }}
              ></div>
              <span className="text-sm" style={{ color: 'var(--text-color)' }}>Email</span>
            </div>
            <div className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--green-700-normal)' }}
              ></div>
              <span className="text-sm" style={{ color: 'var(--text-color)' }}>SMS</span>
            </div>
            <div className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--green-700-normal)' }}
              ></div>
              <span className="text-sm" style={{ color: 'var(--text-color)' }}>Identity Verification</span>
            </div>
            <div className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--green-700-normal)' }}
              ></div>
              <span className="text-sm" style={{ color: 'var(--text-color)' }}>Deposit</span>
            </div>
          </div>
        </div>

        {/* Tabs section with darker background */}
        <div className="px-6 mb-6" style={{ backgroundColor: '#141414' }}>
          <div className="flex border-b" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => setActiveTab('info')}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'info' ? '' : ''
              }`}
              style={{ 
                borderColor: activeTab === 'info' ? 'var(--active)' : 'transparent',
                color: activeTab === 'info' ? 'var(--foreground)' : 'var(--text-color)'
              }}
            >
              Info
            </button>
            <button
              onClick={() => setActiveTab('advertisement')}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'advertisement' ? '' : ''
              }`}
              style={{ 
                borderColor: activeTab === 'advertisement' ? 'var(--active)' : 'transparent',
                color: activeTab === 'advertisement' ? 'var(--foreground)' : 'var(--text-color)'
              }}
            >
              Advertisement
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'review' ? '' : ''
              }`}
              style={{ 
                borderColor: activeTab === 'review' ? 'var(--active)' : 'transparent',
                color: activeTab === 'review' ? 'var(--foreground)' : 'var(--text-color)'
              }}
            >
              Leave A Review
            </button>
          </div>
        </div>

       
        {activeTab === 'info' && renderInfoTab()}
        {activeTab === 'advertisement' && renderAdvertisementTab()}
        {activeTab === 'review' && renderReviewTab()}

        
        {/* Bottom indicator with darker background */}
       
        </div>
      </div>
   
  );
}