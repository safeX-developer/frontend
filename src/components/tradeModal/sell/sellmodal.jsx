import React, { useState } from 'react';
import { FaArrowLeft, FaChevronDown, FaTimes, FaCheck } from "react-icons/fa";
import SecondModal from './2ndmodal';
import { FaArrowRight } from "react-icons/fa";

export default function SellUSDTModal({ isOpen, onClose, tradeData }) {
  const [activeTab, setActiveTab] = useState('crypto');
  const [amount, setAmount] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('Bank Transfer');
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center p-2 overflow-y-auto">
  <div className="w-full max-w-md bg-[#232323] rounded-xl overflow-hidden my-4 max-h-[95vh] overflow-y-auto text-white">
    
  
    <div className="flex items-center justify-between p-4 bg-[#2b2a2a]">
      <button onClick={onClose} className="text-white">
        <FaArrowLeft size={20} />
      </button>
      <h1 className="text-base font-semibold">Sell USDT</h1>
      <div className="w-6" />
    </div>

    <div className="bg-[#232323]">
     
      <div className="px-4 pt-3 pb-4 text-sm">
        <div className="flex items-center gap-2 text-[#00e676] font-semibold text-lg mb-1">
          <span>₦{tradeData?.price?.toLocaleString() || '1,540.99'}</span>
          <span className="text-gray-400 text-xs">43s</span>
        </div>
        <div className="text-xs text-gray-400 space-y-0.5">
          <div>Quantity {tradeData?.volume?.toLocaleString() || '190.327'} USDT</div>
          <div>Payment Method | {tradeData?.paymentMethod || 'Bank Transfer'}</div>
          <div>Payment Duration {tradeData?.paymentTime || '30Min(s)'}</div>
        </div>
      </div>

      
      <div className="bg-[#1a1a1a]">
        {/* Tabs */}
        <div className="px-4 py-3">
          <div className="flex text-sm">
            <button
              onClick={() => setActiveTab('crypto')}
              className={`flex-1 py-2 font-medium text-center ${
                activeTab === 'crypto'
                  ? 'text-white border-b-2 border-[#f26522]'
                  : 'text-gray-400'
              }`}
            >
              With Crypto
            </button>
            <button
              onClick={() => setActiveTab('fiat')}
              className={`flex-1 py-2 font-medium text-center ${
                activeTab === 'fiat'
                  ? 'text-white border-b-2 border-[#f26522]'
                  : 'text-gray-400'
              }`}
            >
              With Fiat
            </button>
          </div>
        </div>

      
        <div className="px-4 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Please enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full py-3 px-3 rounded-md bg-[#2b2b2b] text-white text-sm outline-none border border-[#333]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="text-gray-400 text-xs">USDT</span>
              <button className="text-xs px-2 py-1 rounded bg-[#f26522] text-white font-medium">All</button>
            </div>
          </div>
        </div>

       
        <div className="px-4 text-xs text-gray-400 mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-white">I will receive</span>
            <span>-- NGN</span>
          </div>
          <div className="flex justify-between">
            <span>Available for Sale</span>
            <span>0.0000 USDT</span>
          </div>
        </div>

    
        <div className="px-4 mb-4">
          <span className="text-white text-xs font-medium block mb-2">Payment Method</span>
          <button
            onClick={() => setShowPaymentModal(true)}
            className="w-full flex justify-between items-center bg-[#2b2b2b] px-3 py-3 rounded-md border border-[#333]"
          >
            <span className="text-sm">{selectedPayment}</span>
            <FaChevronDown size={14} className="text-gray-400" />
          </button>
        </div>

       
        <div className="px-4 mb-4">
          <button className="w-full py-3 rounded-md bg-[#f26522] text-white font-semibold text-sm">
            Sell
          </button>
          <p className="text-xs text-center mt-2 mb-3 text-gray-400">
            Please wait for the counterparty to make payment. The tokens for this sale will be transferred out of your Funding Account.
          </p>
        </div>
      </div>
    </div>

    
    <div className="h-2"></div>

    
    <div className="px-4 py-4 bg-[#1a1a1a] text-xs text-gray-400">
      <h3 className="text-white text-xs font-medium mb-2">Advertiser Terms</h3>
      <p>
        I AM PAYING FROM MY COMPANY ACCOUNT!! VTC-GBENJO MULTI PURPOSE VENTURES DUE TO DAILY LIMIT !!!! PLEASE Drop your phone number!!! no number no payment
      </p>
    </div>

   
    <div className="px-4 py-4 bg-[#1a1a1a] text-xs text-gray-400 space-y-2">
      <h3 className="text-white text-xs font-medium mb-2">Transaction Info</h3>

      <div className="bg-[#232323] px-3 py-2 rounded flex justify-between items-center">
        <span>Buyer Nickname</span>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setIsSecondModalOpen(true)}
        >
          <span className="text-white">{tradeData?.username || 'user9701vu8zAB'}</span>
          <FaArrowRight className="text-[#f26522]" size={12} />
          <span>25 s ago</span>
        </div>
      </div>

      <div className="bg-[#232323] px-3 py-2 rounded flex justify-between">
        <span>Good Rating %</span>
        <span className="text-white">87 %</span>
      </div>

      <div className="bg-[#232323] px-3 py-2 rounded flex justify-between">
        <span>Completed Orders</span>
        <span className="text-white">975 Order(s)</span>
      </div>
    </div>
  </div>

  
  <SecondModal isOpen={isSecondModalOpen} onClose={() => setIsSecondModalOpen(false)} />
</div>



    );
    }