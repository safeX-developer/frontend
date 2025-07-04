import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaComment } from 'react-icons/fa'
import BuyConfirmation from './buyConfirmation';
import Header from './components/Header';

export default function PaymentCompleted({onBack, duration = 15 }) {
  const [showBuyConfirmation, setShowBuyConfirmation] = useState(false);

  
  return (
    <>
      <Header 
        title='Complete your payment within:'
        isCloseBtn={false}
        onBack={onBack}            
        isBackBtn={true}
        isCountdown={true}
        duration={duration}
      />
      <div className="p-3 overflow-y-auto flex-1 text-sm">
        <div className="rounded-lg mb-2">
          <div className="pl-0 text-gray-400 text-[11px]">
            <div>Please complete the payment within {duration}:00</div>
            <div>Otherwise the order will automatically be canceled</div>
          </div>
        </div>
        
        {/* Warning Card with Yellow Background */}
        <div className="bg-amber-900/30 rounded-lg p-3 mb-4">
          <ul className="text-[11px] text-gray-400 ">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 mr-2 flex-shrink-0"></div>
              <div>
                Please use <span className="text-amber-400 font-bold text-sm">Victor Otung</span> when making payment
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 mr-2 flex-shrink-0"></div>
              <div>
                Make sure not to remark sensitive words such as "BTC/USDT purchase" when transferring fiat, otherwise the transfer may fail
              </div>
            </li>
          </ul>
        </div>
        
        {/* Bank Transfer Card */}
        <div className="border-1 border-[#F56630] relative rounded-lg p-3 mb-4">
          {/* Title with active indicator and chat icon */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="relative mr-2 ml-1.5">
                <div className="w-2 h-2 bg-[#F56630] rounded-full"></div>
                <div className="w-4 h-4 border border-[#F56630] rounded-full absolute -top-1 -left-1"></div>
              </div>
              <h3 className="text-white font-medium px-2">Bank Transfer</h3>
            </div>
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
                    </button>
                </div>
          </div>
          
          {/* Steps with vertical dotted line */}
          <div className="relative pl-6 pb-2  ">
            {/* Vertical dotted line */}
            <div className="absolute left-[9px] top-[18px] bottom-[18px] border-l border-dashed border-gray-600"></div>
            
            {/* Step 1 */}
            <div className="relative mb-4">
              <div className="absolute left-[-21px] top-[4px] w-3 h-3 rounded-full border border-gray-500 bg-[#1a1a1a]"></div>
              <div>
                <span className="text-white text-[12px]">1. Log into your account: Bank Transfer</span>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative mb-4">
              <div className="absolute left-[-21px] top-[4px] w-3 h-3 rounded-full border border-gray-500 bg-[#1a1a1a]"></div>
              <div>
                <span className="text-white text-[12px]">2. Transfer to the seller</span>
                <div className="text-green-500 font-bold text-base mt-1 ">9,034 USD</div>
                
                {/* Seller details card */}
                <div className="bg-[#000000] rounded-md p-2 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white">Adululs Josea</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Bank account number:</span>
                    <span className="text-white">9027673682</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Bank Branch:</span>
                    <span className="text-white">Paycom</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Bank Name:</span>
                    <span className="text-white">Opay</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Order no.</span>
                    <span className="text-white">39276370989828</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute left-[-21px] top-[4px] w-3 h-3 rounded-full border border-gray-500 bg-[#1a1a1a]"></div>
              <div>
                <span className="text-white text-[12px]">3. Click on the "Payment Completed" Button</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Completed Button */}
        <button onClick={()=> setShowBuyConfirmation(true)} className="w-full py-3 rounded-md bg-[#F56630] text-white text-sm font-medium hover:opacity-90 transition-opacity mt-2">
          Payment Completed
        </button>
        {showBuyConfirmation && <BuyConfirmation onClose={()=> setShowBuyConfirmation(false)}/>}
      </div>

    </>
  );
}
