import React, { useState, useEffect } from 'react'

function PriceSetting({
  priceType,
  setPriceType,
  fixedPrice,
  setFixedPrice,
  premium,
  setPremium,
  currency = "NGN",
  coin = "USDT",
  referencePrice,
  setReferencePrice,
  tradedPrice,
  setTradedPrice
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const [priceError, setPriceError] = useState('');
  
  // Fetch reference price when currency or coin changes
  useEffect(() => {
    fetchReferencePrice();
  }, [currency, coin]);
  
  // Update traded price when price type, fixed price, premium, or reference price changes
  useEffect(() => {
    calculateTradedPrice();
  }, [priceType, fixedPrice, premium, referencePrice]);
  
  // Validate price when it changes
  useEffect(() => {
    if (priceType === 'fixed' && fixedPrice && referencePrice > 0) {
      validateFixedPrice(parseFloat(fixedPrice));
    } else if (priceType === 'float' && premium && referencePrice > 0) {
      validateFloatPrice(premium);
    } else {
      setPriceError('');
    }
  }, [fixedPrice, premium, referencePrice, priceType]);
  
  // Function to fetch the reference price (market rate)
  const fetchReferencePrice = async () => {
    try {
      // In a real implementation, you would fetch this from an API
      // For example: const response = await fetch(`https://api.example.com/price/${coin}/${currency}`);
      
      // For now, we'll use a mock value
      // In a real app, you'd replace this with an actual API call
      const mockPrices = {
        "USDT": {
          "NGN": 1550,
          "USD": 1.0,
          "EUR": 0.92,
          "GBP": 0.79
        },
        "BTC": {
          "NGN": 67000000,
          "USD": 43000,
          "EUR": 39500,
          "GBP": 34000
        },
        "ETH": {
          "NGN": 4500000,
          "USD": 2900,
          "EUR": 2650,
          "GBP": 2300
        },
        "USDC": {
          "NGN": 1545,
          "USD": 1.0,
          "EUR": 0.92,
          "GBP": 0.79
        }
      };
      
      // Get the reference price for the selected coin and currency
      const price = mockPrices[coin]?.[currency] || 0;
      setReferencePrice(price);
    } catch (error) {
      console.error("Error fetching reference price:", error);
      setReferencePrice(0);
    }
  };
  
  // Validate if fixed price is within acceptable range (90%-110% of reference price)
  const validateFixedPrice = (price) => {
    const minAcceptablePrice = referencePrice * 0.9;
    const maxAcceptablePrice = referencePrice * 1.1;
    
    if (price < minAcceptablePrice) {
      setPriceError(`Price is too low. Minimum recommended price is ${formatNumber(minAcceptablePrice)} ${currency}`);
    } else if (price > maxAcceptablePrice) {
      setPriceError(`Price is too high. Maximum recommended price is ${formatNumber(maxAcceptablePrice)} ${currency}`);
    } else {
      setPriceError('');
    }
  };
  
  // Validate if float price premium is within acceptable range (90% to 110%)
  const validateFloatPrice = (premiumValue) => {
    // Parse premium (remove % if present)
    let cleanPremium = premiumValue;
    if (typeof premiumValue === 'string' && premiumValue.includes('%')) {
      cleanPremium = premiumValue.replace('%', '');
    }
    
    // Convert to number
    const premiumPercent = parseFloat(cleanPremium);
    
    if (isNaN(premiumPercent)) {
      setPriceError('Please enter a valid percentage value');
      return;
    }
    
    // Check if premium is within acceptable range (90% to 110%)
    if (premiumPercent < 90) {
      setPriceError('Premium is too low. Minimum recommended premium is 90%');
    } else if (premiumPercent > 110) {
      setPriceError('Premium is too high. Maximum recommended premium is 110%');
    } else {
      setPriceError('');
    }
  };
  
  // Calculate the traded price based on price type
  const calculateTradedPrice = () => {
    if (priceType === 'fixed') {
      // For fixed price, the traded price is simply the fixed price
      setTradedPrice(fixedPrice || 0);
    } else {
      // For float price, calculate based on premium percentage
      if (!premium) {
        setTradedPrice(0);
        return;
      }
      
      // Parse premium (remove % if present)
      let premiumValue = premium;
      if (typeof premium === 'string' && premium.includes('%')) {
        premiumValue = premium.replace('%', '');
      }
      
      // Convert to number and calculate
      // For float price, 100% means exactly the reference price
      const premiumPercent = parseFloat(premiumValue);
      if (!isNaN(premiumPercent)) {
        const calculatedPrice = referencePrice * (premiumPercent / 100);
        setTradedPrice(calculatedPrice.toFixed(2));
      } else {
        setTradedPrice(0);
      }
    }
  };
  
  // Format number with commas for display
  const formatNumber = (num) => {
    if (!num) return "0";
    return parseFloat(num).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

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
                
                {showTooltip && (
                  <div className="absolute left-33 -top-4 mt-2 w-75 rounded-md shadow-lg z-10">
                    <div className="relative">
                      {/* Triangle pointer */}
                      <div className="absolute top-2 -left-1 w-4 h-4 bg-[var(--card-color)] transform rotate-45"></div>
                      <div className="relative bg-[var(--card-color)] text-[12px] text-gray-300 px-3 py-2 rounded">
                        Floating Price = Reference Price × (Premium/100)
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-xs text-gray-400">
            {priceType === 'fixed'
              ? "A fixed price does not fluctuate based on market movements."
              : "Your floating offer price is calculated by multiplying the reference price by the premium percentage."}
          </div>
          
          {/* Dynamic Input Field Based on Price Type */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {priceType === 'fixed' ? 'Fixed' : 'Premium'}
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type={priceType === 'fixed' ? 'number' : 'text'}
                className={`block w-full bg-[var(--card-color)] rounded-md py-2 pl-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-1 ${
                  priceError ? 'focus:ring-red-500 focus:border-red-500 border-red-500' : 'focus:ring-blue-500 focus:border-blue-500'
                } sm:text-sm`}
                placeholder={priceType === 'fixed' ? 'Enter price' : '90% - 110%'}
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
            
            {/* Error message */}
            {priceError && (
              <p className="mt-1 text-sm text-red-500">
                {priceError}
              </p>
            )}
          </div>
          
          {/* Price Information Note */}
          <div className="mt-3 p-3 bg-[var(--card-color)] rounded-md">
            <p className="text-[12px] text-gray-300 mb-1">
              Traded Price: {formatNumber(tradedPrice)} {currency}/{coin}
            </p>
            <p className="text-[12px] text-gray-300">
              Reference Price: {formatNumber(referencePrice)} {currency}/{coin}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceSetting
