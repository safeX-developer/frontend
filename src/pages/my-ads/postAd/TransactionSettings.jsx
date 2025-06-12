import React from 'react'

function TransactionSettings({
  paymentDuration,
  setPaymentDuration,
  totalQuantity,
  setTotalQuantity,
  minAmount,
  setMinAmount,
  maxAmount,
  setMaxAmount,
  coin = "USDT",
  fiat = "NGN",
  maxQuantity = 0
}) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-medium mb-3">Transaction Settings</h3>
      <div className="bg-[var(--background-color)] p-4 rounded-lg">
        {/* Payment Duration Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Payment Duration
          </label>
          <div className="flex items-center space-x-4">
            {/* 30 Minutes Radio */}
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  className="sr-only"
                  name="paymentDuration"
                  checked={paymentDuration === 30}
                  onChange={() => setPaymentDuration(30)}
                />
                <div className={`w-5 h-5 rounded-full ${paymentDuration === 30 ? 'border' : 'border-inactive'}`}>
                  {paymentDuration === 30 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-[var(--sec-color)] rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
              <span className="ml-2 text-[13px] text-white">30 Minutes</span>
            </label>
            
            {/* 15 Minutes Radio */}
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  className="sr-only"
                  name="paymentDuration"
                  checked={paymentDuration === 15}
                  onChange={() => setPaymentDuration(15)}
                />
                <div className={`w-5 h-5 rounded-full ${paymentDuration === 15 ? 'border' : 'border-inactive'}`}>
                  {paymentDuration === 15 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-[var(--sec-color)] rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
              <span className="ml-2 text-[13px] text-white">15 Minutes</span>
            </label>
          </div>
        </div>
        
        {/* Total Quantity Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Total Quantity
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              className="block w-full bg-[var(--card-color)] rounded-md py-2 pl-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter"
              value={totalQuantity}
              onChange={(e) => setTotalQuantity(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-400 sm:text-sm">
                {coin}
              </span>
            </div>
          </div>
          
          {/* Max and Min Values */}

          <div className="flex justify-between mt-1 mb-4">
            <span className="text-[12px] text-gray-400">Max: {maxQuantity}{coin}</span>
            <span className="text-[12px] text-[var(--sec-color)] cursor-pointer" onClick={() => setTotalQuantity(maxQuantity)}>
              Max
            </span>
          </div>
        </div>
        
        {/* Min and Max Transaction Amount Inputs */}
        <div className="flex space-x-4">
          {/* Min Transaction Amount */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Min. Transaction Amount
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-400 sm:text-sm">
                  {fiat}
                </span>
              </div>
              <input
                type="number"
                className="block w-full bg-[var(--card-color)] rounded-md py-2 pl-12 pr-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="2"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-[12px] text-[var(--sec-color)] px-2 py-0.5 rounded-sm">
                Min
              </span>
            </div>
          </div>
          
          {/* Max Transaction Amount */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Max. Transaction Amount
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                className="block w-full bg-[var(--card-color)] rounded-md py-2 pl-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="40,000"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-400 sm:text-sm">
                  {fiat}
                </span>
              </div>
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-[12px] text-[var(--sec-color)] px-2 py-0.5 rounded-sm">
                Max
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSettings
