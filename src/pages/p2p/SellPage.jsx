import React, { useState } from 'react';
import SellModal from "./modal/SellModal";
import { useNavigate } from "react-router-dom";

export default function Sell() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    
    // Sample data for the trade listings
    const tradeListings = [
        // Your existing trade listings data
    ];

    const handleProfile = (advertiser) => {
        navigate("/p2p/profile/280987389738902820-10902893");
    };

    // Function to generate a consistent color based on the name
    const getAvatarColor = (name) => {
        // Define a set of nice gradient combinations
        const gradients = [
            'from-purple-500 to-indigo-600',
            'from-blue-500 to-teal-400',
            'from-green-500 to-teal-400',
            'from-yellow-400 to-orange-500',
            'from-pink-500 to-rose-500',
            'from-indigo-500 to-purple-600',
            'from-red-500 to-pink-500',
            'from-amber-500 to-orange-600',
            'from-teal-400 to-cyan-500',
            'from-fuchsia-500 to-purple-600'
        ];
        
        // Use the sum of character codes to pick a consistent gradient
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }
        
        return gradients[sum % gradients.length];
    };

    return (
        <>
            {showModal && <SellModal handleCancelMedal={() => setShowModal(false)} />}
            
            <div className="py-6">
                {/* Hidden guide element */}
                <div id="guide-step-five" className="h-[150px] absolute top-0 right-0 w-[220px] z-[-1]"></div>
                
                {/* Trade table */}
                <div className="w-full overflow-x-auto">
                    {tradeListings.length > 0 ? (
                        <table className="w-full min-w-full">
                            <thead>
                                <tr className="text-xs leading-[48px] relative">
                                    <th className="text-left text-[var(--text-color)] pl-8">Advertiser</th>
                                    <th className="text-left text-[var(--text-color)]">Price</th>
                                    <th className="text-left text-[var(--text-color)]">
                                        Available<span className="px-2 text-[var(--border)]">|</span>Limits
                                    </th>
                                    <th className="text-left text-[var(--text-color)]">Payment Method</th>
                                    <th className="text-left text-[var(--text-color)]">
                                        <div className="inline-flex items-center gap-1 rounded px-1 py-0.5 text-xs leading-[18px] h-[18px] bg-[rgba(0,80,255,0.1)] text-primary">
                                            Taker 0 Fees
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="relative">
                                {tradeListings.map((listing) => (
                                    <tr key={listing.id} className="relative border-b border-[var(--border)]">
                                        <td className="pl-8 py-5 w-[300px]">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarColor(listing.advertiser.name)} flex items-center justify-center text-white font-bold`}>
                                                        {listing.advertiser.name.charAt(0)}
                                                    </div>
                                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-700 border-2 border-[var(--card-color)] rounded-full"></div>
                                                </div>
                                                
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-1">
                                                        <div 
                                                            className="text-white font-semibold text-base cursor-pointer hover:text-primary transition-colors"
                                                            onClick={() => handleProfile(listing.advertiser)}
                                                        >
                                                            <span className="max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                                {listing.advertiser.name}
                                                            </span>
                                                        </div>
                                                        
                                                        {listing.advertiser.verified && (
                                                            <div className="inline-block">
                                                                <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    <div className="text-[var(--text-color)] text-xs mt-1">
                                                        <span>{listing.advertiser.orders} Order(s)</span>
                                                        <span className="px-2 text-[var(--border)]">|</span>
                                                        <span className="text-[var(--text-color)]">{listing.advertiser.completionRate}%</span>
                                                    </div>
                                                    
                                                    <div className="flex items-baseline gap-4 mt-1.5">
                                                        <span className="text-[var(--text-color)] text-xs flex items-center">
                                                            <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                                            </svg>
                                                            {listing.advertiser.responseTime} Min(s)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td className="py-5 min-w-[120px] max-w-[180px]">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-white font-semibold text-lg">
                                                    {listing.price.toLocaleString()} 
                                                    <span className="text-[var(--text-color)] text-xs font-normal ml-1">
                                                        {listing.currency}
                                                    </span>
                                                </span>
                                            </div>
                                        </td>
                                        
                                        <td className="py-5 min-w-[220px]">
                                            <div className="flex flex-col gap-1.5">
                                                <div className="text-white font-semibold">
                                                    {listing.available}
                                                </div>
                                                <div className="text-[var(--text-color)] text-sm">
                                                    {listing.limits}
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td className="py-5 w-[196px]">
                                            <div className="inline-block bg-[var(--card-primary-color)] rounded px-2 py-1 text-xs text-[var(--text-color)]">
                                                {listing.paymentMethod}
                                            </div>
                                        </td>
                                        
                                        <td className="py-5">
                                            <button 
                                                onClick={() => setShowModal(true)} 
                                                className="px-4 py-2 bg-red-700 text-white text-sm font-medium rounded hover:bg-red-800 transition-colors"
                                            >
                                                Sell USDT
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16">
                            <div className="w-24 h-24 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-gray-400">
                                    <path d="M21 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                    <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No Sell Offers Available</h3>
                            <p className="text-[var(--text-color)] text-center max-w-md mb-6">
                                There are currently no sell offers matching your criteria. Try adjusting your filters or check back later.
                            </p>
                        </div>
                    )}
                </div>
                
                {/* Pagination - only show if there are listings */}
                {tradeListings.length > 0 && (
                    <div className="flex justify-between items-center mt-6 px-8">
                        <ul className="flex items-center">
                            <li className="h-6 w-6 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-color)] mr-2 cursor-not-allowed opacity-50">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                </svg>
                            </li>
                            
                            {[1, 2, 3, 4, 5].map((page) => (
                                <li 
                                    key={page} 
                                    className={`h-6 min-w-6 px-2 flex items-center justify-center rounded mr-2 cursor-pointer ${
                                        page === 1 
                                            ? 'bg-primary text-white' 
                                            : 'border border-[var(--border)] text-[var(--text-color)] hover:border-primary'
                                    }`}
                                >
                                    {page}
                                </li>
                            ))}
                            
                            <li className="h-6 w-6 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-color)] mr-2 cursor-pointer">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                                </svg>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
