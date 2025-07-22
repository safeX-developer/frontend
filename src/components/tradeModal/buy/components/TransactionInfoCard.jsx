import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaComment, FaCopy, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
export default function TransactionInfoCard({
    username = "",
    verified = false,
}) {
  return (
    <>
       <div className="bg-[#1a1a1a] rounded-lg mt-4 py-2 overflow-hidden">
        <div className="px-3 py-2">
        <h3 className="text-white font-medium mb-2">Transaction Info</h3>
        
        <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Seller Username:</span>
            <a href="#" className="text-white flex items-center hover:text-[var(--active)]">
            usewer30 <FaArrowRight className="ml-1 text-xs" />
            </a>
        </div>
        
        <div className="flex justify-between py-1 text-xs">
            <span className="text-gray-400">Verified:</span>
            <span className="text-white">Victor Manu</span>
        </div>
        
        {/* Green security notice */}
        <div className="bg-green-900/30 rounded-md p-3 mt-2">
            <ul className="text-[11px] text-green-400 space-y-1">
            <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-0.5 flex-shrink-0" />
                <span>The assets of the seller has been locked, you can make the transfer with confidence</span>
            </li>
            <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Please chat within the platform, external record cannot be used as evidence in order disputes</span>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </>
  );
}
