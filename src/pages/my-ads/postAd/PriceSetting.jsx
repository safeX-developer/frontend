import React, { useState } from 'react'

function PriceSetting({
  priceType,
  setPriceType,
  fixedPrice,
  setFixedPrice,
  premium,
  setPremium,
  currency = "NGN"
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <>     
      {/* Price Setting Section */}
      <div className="mb-6">
        <h3 className="text-white font-medium mb-3">Price Setting</h3>
        <div className="bg-[var(--background-color)] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Fixed Price Radio */}
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    className="sr-only"
                    name="priceType"
                    checked={priceType === 'fixed'}
                    onChange={() => setPriceType('fixed')}
                  />
                  <div className={`w-5 h-5 rounded-full ${priceType === 'fixed' ? 'border' : 'border-inactive'}`}>
                    {priceType === 'fixed' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-[var(--sec-color)] rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                <span className="ml-2 text-[13px] text-white">Fixed Price</span>
              </label>
              
              {/* Float Price Radio with Tooltip */}
              <div className="relative">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      className="sr-only"
                      name="priceType"
                      checked={priceType === 'float'}
                      onChange={() => setPriceType('float')}
                    />
                    <div className={`w-5 h-5 rounded-full ${priceType === 'float' ? 'border' : 'border-inactive'}`}>
                      {priceType === 'float' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-[var(--sec-color)] rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-[13px] text-white">Float Price</span>
                  
                  {/* Info Icon */}
                  <button
                    type="button"
                    className="ml-1 text-gray-400 hover:text-gray-300 focus:outline-none"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTooltip(!showTooltip);
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </label>
                
                <div className="absolute left-33 -top-4 mt-2 w-75 rounded-md shadow-lg z-10">
                  <div className="relative">
                    {/* Triangle pointer */}
                    <div className="absolute top-2 -left-1 w-4 h-4 bg-[var(--card-color)] transform rotate-45"></div>
                    <div className="relative bg-[var(--card-color)] text-[12px] text-gray-300 px-3 py-2 rounded">
                      Floating Price = Reference Price × Premium
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-xs text-gray-400">
            {priceType === 'fixed'
              ? "A fixed price does not fluctuate based on market movements."
              : "Your floating offer price is calculated by multiplying the premium and the reference price."}
          </div>
          
          {/* Dynamic Input Field Based on Price Type */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {priceType === 'fixed' ? 'Fixed' : 'Premium'}
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type={priceType === 'fixed' ? 'number' : 'text'}
                className="block w-full bg-[var(--card-color)] rounded-md py-2 pl-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={priceType === 'fixed' ? 'Enter price' : '80%-120%'}
                value={priceType === 'fixed' ? fixedPrice : premium}
                onChange={(e) => {
                  if (priceType === 'fixed') {
                    setFixedPrice(e.target.value);
                  } else {
                    setPremium(e.target.value);
                  }
                }}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-400 sm:text-sm">
                  {priceType === 'fixed' ? currency : '%'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Price Information Note */}
          <div className="mt-3 p-3 bg-[var(--card-color)] rounded-md">
            <p className="text-[12px] text-gray-300 mb-1">
              Traded Price: {currency}/USDT
            </p>
            <p className="text-[12px] text-gray-300">
              Reference Price: 0.74 {currency}/USDT
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceSetting