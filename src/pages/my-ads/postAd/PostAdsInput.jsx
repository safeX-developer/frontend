import React from 'react'

function PostAdsInput({setCoinDropdownOpen, 
    setFiatDropdownOpen,coinDropdownOpen,setCoin,
    fiatDropdownOpen,coins,coin,fiat,fiats, setFiat }) {
  return (
    <>
        {/* Coin and Fiat Dropdowns */}
          <div className="flex space-x-4 mb-3">
            {/* Coin Dropdown */}
            <div className="relative flex-1">
              <div className="text-xs text-gray-400 px-1 mb-1">Coin</div>
              <div className="flex justify-between items-center p-3 bg-[var(--background-color)] rounded-lg cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setCoinDropdownOpen(!coinDropdownOpen);
                  setFiatDropdownOpen(false);
                }} >
                <div>
                  <div className="text-white text-[13px] font-medium">{coin}</div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${coinDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {coinDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-[var(--background-color)] rounded-lg shadow-lg py-1 max-h-48 overflow-y-auto">
                  {coins.map((option) => (
                    <div
                      key={option.value}
                      className={`px-4 py-2 text-[13px] cursor-pointer hover:bg-[var(--card-color)] ${
                        coin === option.value ? 'bg-[var(--card-color)]' : ''
                      }`}
                      onClick={() => {
                        setCoin(option.value);
                        setCoinDropdownOpen(false);
                      }}
                    >
                      <span className="text-white">{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Fiat Dropdown */}
            <div className="relative flex-1">
              <div className="text-xs text-gray-400 px-1 mb-1">Fiat</div>
              <div
                className="flex justify-between items-center bg-[var(--background-color)] p-3 rounded-lg cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setFiatDropdownOpen(!fiatDropdownOpen);
                  setCoinDropdownOpen(false);
                }}
              >
                <div>
                  <div className="text-white text-[13px] font-medium">{fiat}</div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${fiatDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {fiatDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-[var(--background-color)] rounded-lg shadow-lg py-1 max-h-48 overflow-y-auto">
                  {fiats.map((option) => (
                    <div
                      key={option.value}
                      className={`px-4 py-2 cursor-pointer hover:bg-[var(--card-color)] ${
                        fiat === option.value ? 'bg-[var(--card-color)]' : ''
                      }`}
                      onClick={() => {
                        setFiat(option.value);
                        setFiatDropdownOpen(false);
                      }}
                    >
                      <span className="text-white text-[13px]">{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

                {/* Fees Card */}
          <div
            className="flex items-center rounded-lg p-3 mb-6 text-[13px]"
            style={{ backgroundColor: '#f9541666' }}
          >
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-medium">Fee:</span>
              <span className="text-white ml-2">0% of transaction amount</span>
            </div>
            <div className="ml-auto">
              <svg
                className="w-4 h-4 text-white cursor-pointer hover:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
    </>
  )
}

export default PostAdsInput
