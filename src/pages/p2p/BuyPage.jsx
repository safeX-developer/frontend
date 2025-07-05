import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BuyModal from './modal/BuyModal';
import { useApp } from "../../context/AppContext";

export default function BuyPage() {
    const { socketService } = useApp();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedListing, setSelectedListing] = useState(null);
    const [tradeListings, setTradeListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch buy ads when component mounts
    useEffect(() => {
        fetchBuyAds();
        
        // Listen for real-time updates
        document.addEventListener('new-ad-created', handleAdUpdate);
        document.addEventListener('ad-updated', handleAdUpdate);
        document.addEventListener('ad-deleted', handleAdDeleted);
        document.addEventListener('ad-status-changed', handleAdUpdate);
        
        return () => {
            // Clean up event listeners
            document.removeEventListener('new-ad-created', handleAdUpdate);
            document.removeEventListener('ad-updated', handleAdUpdate);
            document.removeEventListener('ad-deleted', handleAdDeleted);
            document.removeEventListener('ad-status-changed', handleAdUpdate);
        };
    }, []);

    // Fetch ads when page changes
    useEffect(() => {
        fetchBuyAds();
    }, [currentPage]);

    // Handle ad updates (new or updated ads)
    const handleAdUpdate = (event) => {
        const updatedAd = event.detail;
        
        // Only process buy ads
        if (updatedAd.type === 'buy') {
            fetchBuyAds(); // Refresh the entire list
        }
    };

    // Handle ad deletions
    const handleAdDeleted = (event) => {
        const { adId } = event.detail;
        
        // Remove the deleted ad from the current listings
        setTradeListings(prevListings => 
            prevListings.filter(listing => listing.id !== adId)
        );
    };

    // Fetch buy ads from the socket service
    const fetchBuyAds = async () => {
        setLoading(true);
          try {
            // Get sell ads with pagination
            const response = await socketService.getAds({
                type: 'buy',
                page: currentPage,
                limit: 10,
                status: 'active' // Only get active ads
            });

            // Transform the data to match the component's expected format
            const formattedListings = response.map(ad => ({
                id: ad._id,
                advertiser: {
                    name: ad.createdBy.username || 'Anonymous',
                    userId: ad.createdBy.userId,
                    verified: ad.createdBy.isVerified || false,
                    orders: ad.createdBy.completedOrders || 0,
                    completionRate: ad.createdBy.completionRates || 0,
                    responseTime: ad.createdBy.responseTime || 15
                },
                price: ad.priceSetting === 'fixed' ? ad.fixedPrice : ad.fixedPrice,
                currency: ad.fiat,
                available: `${ad.totalQuantity.toFixed(4)} ${ad.coin}`,
                limits: `${formatNumber(ad.minTransactionAmount)} ~ ${formatNumber(ad.maxTransactionAmount)} ${ad.fiat}`,
                paymentMethod: getPaymentMethodNames(ad.paymentMethods[0]),
                rawData: ad // Keep the raw data for reference
            }));
            
            setTradeListings(formattedListings);
            setTotalPages(response.totalPages || 1);
            setError(null);
        } catch (err) {
            console.error("Error fetching sell ads:", err);
            setError("Failed to load sell offers. Please try again later.");
            setTradeListings([]);
        } finally {
            setLoading(false);
        }
    };

    // Calculate float price based on premium percentage and reference price
    const calculateFloatPrice = (ad) => {
        if (!ad.premium || !ad.referencePrice) return 0;
        
        // Parse premium (remove % if present)
        let premiumValue = ad.premium;
        if (typeof premiumValue === 'string' && premiumValue.includes('%')) {
            premiumValue = premiumValue.replace('%', '');
        }
        
        // Convert to number and calculate
        const premiumPercent = parseFloat(premiumValue);
        if (isNaN(premiumPercent)) return 0;
        
        return ad.referencePrice * (premiumPercent / 100);
    };

    // Format payment methods into a readable string
    const getPaymentMethodNames = (paymentMethods) => {
        if (!paymentMethods || !paymentMethods.length) return "Not specified";
        
        // If there's a default payment method, prioritize it
        const defaultMethod = paymentMethods.find(method => method.isDefault);
        if (defaultMethod) return formatPaymentMethodName(defaultMethod.type);
        
        // Otherwise return the first one
        return formatPaymentMethodName(paymentMethods[0].type);
    };

    // Format payment method name for display
    const formatPaymentMethodName = (type) => {
        const methodNames = {
            'bank': 'Bank Transfer',
            'paypal': 'PayPal',
            'payme': 'PayMe',
            'neteller': 'Neteller',
            'cash': 'Cash in Person',
            'wise': 'Wise'
        };
        
        return methodNames[type] || type;
    };

    // Format number with commas and currency symbol
    const formatNumber = (num) => {
        if (!num) return "0";
        return parseFloat(num).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    const handleProfile = (advertiser) => {
        navigate("/p2p/profile/" + advertiser?.userId);
    };

    // Open buy modal with selected listing
    const handleBuyClick = (listing) => {
        setSelectedListing(listing);
        setShowModal(true);
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

    // Handle pagination
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            {showModal && (
                <BuyModal 
                    handleCancelMedal={() => setShowModal(false)} 
                    listing={selectedListing}
                />
            )}
            
            <div className="py-6">
                {/* Hidden guide element */}
                <div id="guide-step-five" className="h-[150px] absolute top-0 right-0 w-[220px] z-[-1]"></div>
                
                {/* Loading state */}
                {loading && (
                    <div className="flex justify-center items-center py-16">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
                
                {/* Error state */}
                {!loading && error && (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="w-24 h-24 mb-4 text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Error Loading Data</h3>
                        <p className="text-[var(--text-color)] text-center max-w-md mb-6">{error}</p>
                        <button 
                            onClick={fetchBuyAds}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}
                
                {/* Trade table */}
                {!loading && !error && (
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
                                        <tr key={listing.id} className="relative">
                                            <td className="pl-8 py-5 w-[300px]">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative">
                                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarColor(listing.advertiser.name)} flex items-center justify-center text-white font-bold`}>
                                                            {listing.advertiser.name.charAt(0)}
                                                        </div>
                                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[var(--card-color)] rounded-full"></div>
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
                                                    onClick={() => handleBuyClick(listing)}
                                                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors"
                                                >
                                                    Buy {listing.rawData?.coin || 'USDT'}
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
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">No Buy Offers Available</h3>
                                <p className="text-[var(--text-color)] text-center max-w-md mb-6">
                                    There are currently no buy offers matching your criteria. Try adjusting your filters or check back later.
                                </p>
                            </div>
                        )}
                    </div>
                )}
                
                {/* Pagination - only show if there are listings and not loading */}
                {!loading && !error && tradeListings.length > 0 && (
                    <div className="flex justify-between items-center mt-6 px-8">
                        <ul className="flex items-center">
                            <li 
                                className={`h-6 w-6 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-color)] mr-2 ${
                                    currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-[var(--primary-color)]'
                                }`}
                                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                </svg>
                            </li>
                            
                            {/* Generate page numbers dynamically */}
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                // Calculate page number to display
                                let pageNum;
                                if (totalPages <= 5) {
                                    // If 5 or fewer pages, show all
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    // If near the start, show first 5 pages
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    // If near the end, show last 5 pages
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    // Otherwise show 2 before and 2 after current page
                                    pageNum = currentPage - 2 + i;
                                }
                                
                                return (
                                    <li
                                        key={pageNum}
                                        className={`h-6 min-w-6 px-2 flex items-center justify-center rounded mr-2 cursor-pointer ${
                                            pageNum === currentPage
                                                ? 'bg-[var(--primary-color)] text-white'
                                                : 'border border-[var(--border)] text-[var(--text-color)] hover:border-[var(--primary-color)]'
                                        }`}
                                        onClick={() => handlePageChange(pageNum)}
                                    >
                                        {pageNum}
                                    </li>
                                );
                            })}
                            
                            <li 
                                className={`h-6 w-6 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-color)] mr-2 ${
                                    currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-[var(--primary-color)]'
                                }`}
                                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                                </svg>
                            </li>
                        </ul>
                        
                        <div className="text-sm text-[var(--text-color)]">
                            Page {currentPage} of {totalPages}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

