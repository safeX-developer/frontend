import React from 'react';
import { FaComment, FaCopy } from 'react-icons/fa';
export default function TransactionInfo({
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
      <div className="bg-[#1a1a1a] rounded-lg mt-4 py-2 overflow-hidden relative">
        {/* Header with title and contact seller button */}
        <div className="flex items-center p-2">
          <h3 className="text-white font-medium">Buy {coin}</h3>
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
            <span className="text-green-500 font-bold text-base">{(((Number(amount)).toFixed(2)).toLocaleString())} {fiat}</span>
          </div>
          
          <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Price:</span>
            <span className="text-white">{(((Number(price)).toFixed(2)).toLocaleString())} {fiat}</span>
          </div>
          
          <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Total Quantity:</span>
            <span className="text-white">{(Number(totalQuantity)).toFixed(4)} {coin}</span>
          </div>
          
          <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Transaction fee:</span>
            <span className="text-white">{transactionFee} {coin}</span>
          </div>
          
          <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Order No.</span>
            <div className="flex items-center">
              <span className="text-white mr-2">{orderNo}</span>
              <FaCopy className="text-gray-400 cursor-pointer hover:text-[var(--active)]" />
            </div>
          </div>
          
          <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Order time:</span>
            <span className="text-white">{orderTime}</span>
          </div>
        </div>
      </div>
    </>
  );
}
