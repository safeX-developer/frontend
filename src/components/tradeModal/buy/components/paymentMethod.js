import React from 'react';

export default function PaymentMethod({
    name = "", 
    bankAccountNumber = "",
    bankBranch = "",
    bankName="",
}) {

  return (
    <>
    <div className="bg-[#1a1a1a] rounded-lg mt-2 py-2 overflow-hidden relative">
        {/* Header with title and contact seller button */}
        <div className="flex items-center p-2">
            <h3 className="text-white font-medium">Payment Method</h3>
            <div className="absolute right-0 top-2"></div>
        </div>
        
        {/* Transaction details */}
        <div className="px-3">
            <span className='text-[10px] bg-[#2d2a2171] py-[5px] rounded text-yellow-600 px-[10px]'>
                Bank Transfer    
            </span>
            <div className="flex justify-between py-1 text-xs">
                <span className="text-gray-400">Name:</span>
                <span className="text-white"> {name}</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
                <span className="text-gray-400">Bank Account Number:</span>
                <span className="text-white">{bankAccountNumber}</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
                <span className="text-gray-400">Bank Branch:</span>
                <span className="text-white">{bankBranch}</span>
            </div>
            
            <div className="flex justify-between py-1 text-xs">
                <span className="text-gray-400">Bank Name:</span>
                <span className="text-white">{bankName}</span>
            </div>
        </div>
        </div>
    </>
  );
}
