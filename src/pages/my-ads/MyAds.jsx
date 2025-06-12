import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostAdModal from './PostAdModal'

function MyAds() {
  const navigate = useNavigate()
  const [ads, setAds] = useState([])
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'active', 'inactive'
  const [showPostAdModal, setShowPostAdModal] = useState(false)
  
  // Load dummy data
  useEffect(() => {
    // Simulating API call with dummy data
    const dummyAds = [
      {
        id: '1',
        type: 'Sell',
        coin: 'USDT',
        fiat: 'NGN',
        price: 1650.00,
        available: '1,500 USDT',
        minLimit: '10,000 NGN',
        maxLimit: '1,000,000 NGN',
        paymentMethods: ['Bank Transfer', 'Cash'],
        status: 'Active',
        createdAt: '2023-09-15T10:30:00Z'
      },
      {
        id: '2',
        type: 'Buy',
        coin: 'USDT',
        fiat: 'NGN',
        price: 1645.50,
        available: '2,000 USDT',
        minLimit: '5,000 NGN',
        maxLimit: '500,000 NGN',
        paymentMethods: ['Bank Transfer'],
        status: 'Active',
        createdAt: '2023-09-14T14:20:00Z'
      },
      {
        id: '3',
        type: 'Sell',
        coin: 'BTC',
        fiat: 'NGN',
        price: 65000000.00,
        available: '0.05 BTC',
        minLimit: '50,000 NGN',
        maxLimit: '3,000,000 NGN',
        paymentMethods: ['Bank Transfer', 'Cash'],
        status: 'Inactive',
        createdAt: '2023-09-10T08:15:00Z'
      }
    ]
    
    setAds(dummyAds)
  }, [])

  const handlePostAd = () => {
    setShowPostAdModal(true)
  }
  
  const handleCloseModal = () => {
    setShowPostAdModal(false)
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  
  // Filter ads based on status
  const filteredAds = filterStatus === 'all' 
    ? ads 
    : ads.filter(ad => ad.status.toLowerCase() === filterStatus)

  return (
    <div className="container mx-auto px-0 py-12">
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

      {/* Status filter */}
      {ads.length > 0 && (
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

      {/* Content area */}
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
                    <div className={`text-sm font-medium ${ad.type === 'Sell' ? 'text-green-500' : 'text-red-500'}`}>
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
                        : 'bg-[var(--border)] text-white]'
                    }`}>
                      {ad.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-indigo-400 hover:text-indigo-300">
                        Edit
                      </button>
                      <button className="text-red-400 hover:text-red-300">
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
          <p className="text-[var(--text-color)] text-center max-w-md mb-6">
            {filterStatus === 'all' 
              ? "You haven't created any ads yet. Create your first ad to start trading on the P2P marketplace."
              : `You don't have any ${filterStatus} ads. Switch to a different filter or create a new ad.`
            }
          </p>
         
        </div>
      )}
      
      {/* Post Ad Modal */}
      {showPostAdModal && (
        <PostAdModal onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default MyAds
