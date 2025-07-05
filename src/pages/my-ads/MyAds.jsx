import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostAdModal from './PostAdModal'
import { useApp } from '../../context/AppContext';
import LoadingSpinner from '../../components/common/LoadingSpinner';

function MyAds() {
  const navigate = useNavigate()
  const { user, socketService } = useApp();
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'active', 'inactive'
  const [showPostAdModal, setShowPostAdModal] = useState(false)
  
  // Fetch user's ads when component mounts or user changes
  useEffect(() => {
    if (user && user.userId) {
      fetchUserAds();
      
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
    }
  }, [user]);

  // Handle ad updates (new or updated ads)
  const handleAdUpdate = (event) => {
    const updatedAd = event.detail;
    
    // Only update if it's the current user's ad
    if (updatedAd.createdBy === user.userId) {
      fetchUserAds(); // Refresh the entire list
    }
  };

  // Handle ad deletions
  const handleAdDeleted = (event) => {
    const { adId } = event.detail;
    
    // Remove the deleted ad from the current listings
    setAds(prevAds => 
      prevAds.filter(ad => ad.id !== adId)
    );
  };

  // Fetch user's ads from the socket service
  const fetchUserAds = async () => {
    try {
      // Get user's ads
      const response = await socketService.getUserAds(user.userId);

      // Transform the data to match the component's expected format
      const formattedAds = response.map(ad => ({
        id: ad._id,
        type: ad.type === 'buy' ? 'Buy' : 'Sell',
        coin: ad.coin,
        fiat: ad.fiat,
        price: ad.priceSetting === 'fixed' ? ad.fixedPrice : calculateFloatPrice(ad),
        available: `${ad.totalQuantity.toFixed(4)} ${ad.coin}`,
        minLimit: `${formatNumber(ad.minTransactionAmount)} ${ad.fiat}`,
        maxLimit: `${formatNumber(ad.maxTransactionAmount)} ${ad.fiat}`,
        paymentMethods: getPaymentMethodNames(ad.paymentMethods),
        status: ad.status.charAt(0).toUpperCase() + ad.status.slice(1), // Capitalize first letter
        createdAt: ad.createdAt,
        rawData: ad // Keep the raw data for reference
      }));
      console.log(formattedAds)
      
      setAds(formattedAds);
      setError(null);
    } catch (err) {
      console.error("Error fetching user ads:", err);
      setError("Failed to load your ads. Please try again later.");
      setAds([]);
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

  // Format payment methods into an array of readable strings
  const getPaymentMethodNames = (paymentMethods) => {
    if (!paymentMethods || !paymentMethods.length) return ["Not specified"];
    
    return paymentMethods.map(method => {
      // If method is an object with type property
      if (method && typeof method === 'object' && method.type) {
        return formatPaymentMethodName(method.type);
      }
      // If method is a string (method type)
      else if (typeof method === 'string') {
        return formatPaymentMethodName(method);
      }
      return "Unknown";
    });
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

  // Format number with commas
  const formatNumber = (num) => {
    if (!num) return "0";
    return parseFloat(num).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handlePostAd = () => {
    setShowPostAdModal(true)
  }
  
  const handleCloseModal = () => {
    setShowPostAdModal(false)
    // Refresh ads after closing modal in case a new ad was created
    fetchUserAds();
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  
  // Handle ad status toggle
  const handleToggleStatus = async (ad) => {
    try {
      const newStatus = ad.status === 'Active' ? 'inactive' : 'active';
      await socketService.updateAdStatus(ad.id, newStatus);
      
      // Update local state
      setAds(prevAds => 
        prevAds.map(item => 
          item.id === ad.id 
            ? {...item, status: newStatus === 'active' ? 'Active' : 'Inactive'} 
            : item
        )
      );
    } catch (error) {
      console.error("Error updating ad status:", error);
      alert("Failed to update ad status. Please try again.");
    }
  };
  
  // Handle ad deletion
  const handleDeleteAd = async (adId) => {
    if (window.confirm("Are you sure you want to delete this ad?")) {
      try {
        await socketService.deleteAd(adId);
        // Remove from local state
        setAds(prevAds => prevAds.filter(ad => ad.id !== adId));
      } catch (error) {
        console.error("Error deleting ad:", error);
        alert("Failed to delete ad. Please try again.");
      }
    }
  };
  
  // Filter ads based on status
  const filteredAds = filterStatus === 'all'
    ? ads
    : ads.filter(ad => ad.status.toLowerCase() === filterStatus);

  return (
    <>
    {user ? (
      <div className="container mx-auto mt-3 px-0 py-12">
        {/* Header with title and button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">My Ads</h1>
          <button
            onClick={handlePostAd}
            className="flex items-center gap-1 px-3 py-1.5 bg-transparent text-white text-sm rounded-lg border border-[var(--sec-color)] hover:bg-[var(--sec-color)] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Post Ad
          </button>
        </div>
        
        {/* Loading state */}
        {loading && (
          <LoadingSpinner />
        )}
        
        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-16 bg-[var(--card-color)] rounded-lg shadow-sm">
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
              onClick={fetchUserAds}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
        
        {/* Status filter - only show if not loading and no error */}
        {!loading && !error && ads.length > 0 && (
          <div className="mb-6">
            <div className="inline-flex p-2 bg-[var(--card-color)] rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 text-sm font-medium  ${
                  filterStatus === 'all'
                    ?  'bg-[var(--sec-color)] text-white rounded'
                    : ' '
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus('active')}
                className={`px-4 py-2 text-sm font-medium ${
                  filterStatus === 'active'
                      ?  'bg-[var(--sec-color)] text-white rounded'
                                    : ' '
                }`}
              >
                Active
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus('inactive')}
                className={`px-4 py-2 text-sm font-medium  ${
                  filterStatus === 'inactive'
                ?  'bg-[var(--sec-color)] text-white rounded'
                                    : ' '
                }`}
              >
                Inactive
              </button>
            </div>
          </div>
        )}
        
        {/* Content area - only show if not loading and no error */}
        {!loading && !error && (
          <>
            {filteredAds.length > 0 ? (
              <div className="bg-[var(--card-color)] rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-[var(--border-color)]">
                  <thead className="bg-[var(--card-color)]">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-color)] uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-color)] uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-color)] uppercase tracking-wider">
                        Available/Limits
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-color)] uppercase tracking-wider">
                        Payment Method
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-color)] uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--text-color)] uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[var(--card-color)] divide-y divide-[var(--border-color)]">
                    {filteredAds.map((ad) => (
                      <tr key={ad.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-medium ${ad.type === 'Sell' ? 'text-red-500' : 'text-green-500'}`}>
                            {ad.type} {ad.coin}
                          </div>
                          <div className="text-xs text-[var(--text-color)]">
                            {formatDate(ad.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">
                            {ad.price.toLocaleString()} {ad.fiat}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">{ad.available}</div>
                          <div className="text-xs text-[var(--text-color)]">
                                                {ad.minLimit} - {ad.maxLimit}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {ad.paymentMethods.map((method, index) => (
                              <span
                                key={index}
                                className="inline-flex px-2 py-0.5 text-xs rounded-full bg-[var(--border)] text-gray-300"
                              >
                                {method}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                            ad.status === 'Active'
                              ? 'bg-green-900 text-green-300'
                              : 'bg-[var(--border)] text-white'
                          }`}>
                            {ad.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button 
                              className="text-yellow-400 hover:text-yellow-300"
                              onClick={() => handleToggleStatus(ad)}
                            >
                              {ad.status === 'Active' ? 'Deactivate' : 'Activate'}
                            </button>
                            <button 
                              className="text-red-400 hover:text-red-300"
                              onClick={() => handleDeleteAd(ad.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 bg-[var(--card-color)] rounded-lg shadow-sm">
                <div className="w-24 h-24 mb-4">
                  <svg
                    className="w-full h-full text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Ads Found</h3>
              
              </div>
            )}
          </>
        )}
        
        {/* Post Ad Modal */}
        {showPostAdModal && (
          <PostAdModal onClose={handleCloseModal} />
        )}
      </div>
    ) : (
      <div className='flex justify-center items-center w-full h-full py-20'>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Connect Wallet to Continue</h2>
          <p className="text-[var(--text-color)] mb-6">You need to connect your wallet to view and manage your ads.</p>
        </div>
      </div>
    )}
    </>
  )
}

export default MyAds

