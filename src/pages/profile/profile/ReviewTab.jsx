import React, { useState } from 'react';

export default function ReviewTab() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [activeTab, setActiveTab] = useState('good');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data for reviews
  const allReviews = [
    { id: 1, username: 'AlexTrader', date: '2023-09-15', comment: 'Great trader, very responsive and professional. Would trade again!', isGood: true },
    { id: 2, username: 'BitcoinBob', date: '2023-09-10', comment: 'Fast transaction, no issues at all. Highly recommended!', isGood: true },
    { id: 3, username: 'CryptoCarol', date: '2023-09-05', comment: 'Excellent communication and very trustworthy.', isGood: true },
    { id: 4, username: 'DaveCoin', date: '2023-08-28', comment: 'Smooth transaction, will definitely trade again.', isGood: true },
    { id: 5, username: 'EtherEmma', date: '2023-08-22', comment: 'Very patient and helpful. Great experience!', isGood: true },
    { id: 6, username: 'FinanceFreak', date: '2023-08-15', comment: 'Quick responses and fair rates. Recommended!', isGood: true },
    { id: 7, username: 'GavinGold', date: '2023-08-10', comment: 'Trustworthy trader with competitive rates.', isGood: true },
    { id: 8, username: 'HodlHarry', date: '2023-08-05', comment: 'Excellent service and very professional.', isGood: true },
    { id: 9, username: 'InvestorIan', date: '2023-07-30', comment: 'Fast and reliable. Would trade again!', isGood: true },
    { id: 10, username: 'JanetJoin', date: '2023-07-25', comment: 'Great experience, very smooth transaction.', isGood: true },
    { id: 11, username: 'KryptoKate', date: '2023-07-20', comment: 'Responsive and trustworthy. Highly recommended!', isGood: true },
    { id: 12, username: 'LitecoinLarry', date: '2023-07-15', comment: 'Excellent trader, very fair and honest.', isGood: true },
    { id: 13, username: 'MinerMike', date: '2023-07-10', comment: 'Quick and easy transaction. Will trade again!', isGood: true },
    { id: 14, username: 'NakedNancy', date: '2023-07-05', comment: 'Very professional and reliable.', isGood: true },
    { id: 15, username: 'OptimistOliver', date: '2023-06-30', comment: 'Great rates and excellent communication.', isGood: true },
    { id: 16, username: 'PumpPaul', date: '2023-06-25', comment: 'Smooth transaction, no issues at all.', isGood: true },
    { id: 17, username: 'QuantQueen', date: '2023-06-20', comment: 'Very helpful and patient. Great trader!', isGood: true },
    { id: 18, username: 'RichardRipple', date: '2023-06-15', comment: 'Fast and reliable service. Recommended!', isGood: true },
    { id: 19, username: 'SatoshiSam', date: '2023-06-10', comment: 'Excellent experience, very trustworthy.', isGood: true },
    { id: 20, username: 'TokenTina', date: '2023-06-05', comment: 'Great communication and fair rates.', isGood: true },
    { id: 21, username: 'UnicornUma', date: '2023-06-01', comment: 'Very professional and quick responses.', isGood: true },
    { id: 22, username: 'VitalikVince', date: '2023-05-28', comment: 'Trustworthy trader, would recommend!', isGood: true },
    { id: 23, username: 'WalletWanda', date: '2023-05-25', comment: 'Excellent service, very satisfied!', isGood: true },
    { id: 24, username: 'XRPXavier', date: '2023-05-20', comment: 'Fast transaction and great communication.', isGood: true },
    { id: 25, username: 'YieldYolanda', date: '2023-05-15', comment: 'Very reliable and professional.', isGood: true },
    { id: 26, username: 'ZcashZack', date: '2023-05-10', comment: 'Great experience, would trade again!', isGood: true },
    { id: 27, username: 'AltcoinAmy', date: '2023-05-05', comment: 'Excellent trader, very fair and honest.', isGood: true },
    { id: 28, username: 'BlockchainBen', date: '2023-05-01', comment: 'Very responsive and professional.', isGood: true },
    { id: 29, username: 'CoinbaseCharlie', date: '2023-04-28', comment: 'Smooth transaction, highly recommended!', isGood: true },
    { id: 30, username: 'DeFiDiana', date: '2023-04-25', comment: 'Great rates and excellent service.', isGood: true },
    { id: 31, username: 'EthereumEric', date: '2023-04-20', comment: 'Very trustworthy and reliable.', isGood: true },
    { id: 32, username: 'FiatFiona', date: '2023-04-15', comment: 'Fast and easy transaction. Great!', isGood: true },
    { id: 33, username: 'GasGary', date: '2023-04-10', comment: 'Excellent communication and fair rates.', isGood: true },
    { id: 34, username: 'HashHelen', date: '2023-04-05', comment: 'Very professional and helpful.', isGood: true },
    { id: 35, username: 'ICOIan', date: '2023-04-01', comment: 'Great experience, would trade again!', isGood: true },
    { id: 36, username: 'JitoJane', date: '2023-03-28', comment: 'Trustworthy trader, highly recommended!', isGood: true },
    { id: 37, username: 'KeyKaren', date: '2023-03-25', comment: 'Fast transaction and excellent service.', isGood: true },
    { id: 38, username: 'LedgerLeo', date: '2023-03-20', comment: 'Very reliable and professional.', isGood: true },
    { id: 39, username: 'MoonMartin', date: '2023-03-15', comment: 'Great communication and fair rates.', isGood: true },
    { id: 40, username: 'NFTNick', date: '2023-03-10', comment: 'Excellent trader, would recommend!', isGood: true },
    { id: 41, username: 'OracleOlivia', date: '2023-03-05', comment: 'Very responsive and trustworthy.', isGood: true },
    { id: 42, username: 'PrivatePatrick', date: '2023-03-01', comment: 'Smooth transaction, great experience!', isGood: true },
    { id: 43, username: 'TroubleTrader', date: '2023-02-28', comment: 'Took too long to respond and was not clear about terms.', isGood: false },
  ];
  
  // Filter reviews based on active tab
  const filteredReviews = allReviews.filter(review => 
    activeTab === 'good' ? review.isGood : !review.isGood
  );
  
  // Calculate pagination
  const reviewsPerPage = 15;
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
  
  // Calculate rating percentage
  const goodReviews = allReviews.filter(review => review.isGood).length;
  const totalReviews = allReviews.length;
  const goodRatingPercentage = Math.round((goodReviews / totalReviews) * 100);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log({ rating, review });
    // Reset form
    setRating(0);
    setReview('');
  };
  
  // Function to generate gradient colors based on username
  const getGradientColor = (username) => {
    // Simple hash function to generate consistent colors
    const hash = username.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const h = Math.abs(hash % 360);
    return `linear-gradient(135deg, hsl(${h}, 80%, 50%), hsl(${(h + 40) % 360}, 80%, 60%))`;
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div>
      {/* Rating Summary */}
      <div className="mb-6 ">
        <h3 className="text-[12px] font-bold text-white">
          Current Good Rating <span className="text-green-400">{goodRatingPercentage}%</span>
        </h3>
      </div>
      
      {/* Tabs */}
      <div className="flex mb-6 bg-[var(--bg-color)]  rounded-lg p-1">
        <button
          onClick={() => { setActiveTab('good'); setCurrentPage(1); }}
          className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center transition-colors ${
            activeTab === 'good' 
              ? 'bg-[var(--sec1-color)] text-white' 
              : 'text-[var(--text-color)] hover:text-white'
          }`}
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          Good ({goodReviews})
        </button>
        <button
          onClick={() => { setActiveTab('bad'); setCurrentPage(1); }}
          className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center transition-colors ${
            activeTab === 'bad' 
              ? 'bg-[var(--sec1-color)] text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
          </svg>
          Bad ({totalReviews - goodReviews})
        </button>
      </div>
      
      {/* Reviews List */}
      <div className="space-y-4 mb-6">
        {currentReviews.length > 0 ? (
          currentReviews.map((review) => (
            <div key={review.id} className="bg-[var(--bg-color)] rounded-lg p-4 flex">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0 mr-4"
                style={{ background: getGradientColor(review.username) }}
              >
                {review.username.charAt(0)}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white text-sm font-medium">{review.username}</h4>
                    <p className="text-xs text-gray-400">{formatDate(review.date)}</p>
                  </div>
                  <div>
                    {review.isGood ? (
                      <span className="text-green-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-red-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mt-2 text-xs">{review.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-400">
            No reviews found in this category.
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? 'bg-[var(--sec-color)] text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      )}
      

    </div>
  );
}
