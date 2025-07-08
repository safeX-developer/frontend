'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaComment, FaCopy, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Header from './components/Header';
import TransactionInfo from './components/TransactionInfo';
import TransactionInfoCard from './components/TransactionInfoCard';

export default function PayNow({
    onCancel, 
    onPaynow, 
    onBack, 
    duration = 15,
    coin, 
    amount, 
    price, 
    fiat,
    totalQuantity, 
    transactionFee,
    orderNo,
    orderTime 
 }) {

 
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
        
        <TransactionInfo 
          coin={coin} 
          amount={amount} 
          price={price} 
          fiat={fiat}
          totalQuantity={totalQuantity} 
          transactionFee={transactionFee}
          orderNo={orderNo}
          orderTime={orderTime}
        />
        
        {/* Transaction Info Card */}
        <TransactionInfoCard
          
        
        />
        
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
