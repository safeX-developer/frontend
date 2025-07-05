import React, { useState } from 'react'

export default function BuyModal({ handleCancelMedal, listing }) {
    const [paymentMethod, setPaymentMethod] = useState('fiat') // 'fiat' or 'crypto'
    const [payAmount, setPayAmount] = useState('')
    const [receiveAmount, setReceiveAmount] = useState('')
  
  // Calculate receive amount based on pay amount and price
  const handlePayAmountChange = (e) => {
    const amount = e.target.value
    setPayAmount(amount)
    
    // Calculate receive amount based on price (if listing is available)
    if (listing && listing.price) {
      const calculated = parseFloat(amount) / listing.price
      setReceiveAmount(calculated ? calculated.toFixed(6) : '')
    }
  }
  
  // Calculate pay amount based on receive amount and price
  const handleReceiveAmountChange = (e) => {
    const amount = e.target.value
    setReceiveAmount(amount)
    
    // Calculate pay amount based on price (if listing is available)
    if (listing && listing.price) {
      const calculated = parseFloat(amount) * listing.price
      setPayAmount(calculated ? calculated.toFixed(2) : '')
    }
  }

  return (
    <div className="fixed inset-0 z-520 flex items-center justify-center overflow-y-auto"  style={{ backgroundColor: '#000000b5' }}>
      <div className="bg-[var(--card-color)] rounded-lg shadow-xl w-full max-w-md mx-4 my-8 max-h-[90vh] overflow-y-auto">
        {/* Modal Header with Close Button */}
        <div className="p-4 border-b border-[var(--border)] flex justify-between items-center sticky top-0 bg-[var(--card-color)] z-10">
          <h2 className="text-xl font-bold text-white">Buy</h2>
          <button 
            onClick={handleCancelMedal}
            className="text-[var(--text-color)] hover:text-white transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-4">
          {/* Payment Method Tabs */}
          <div className="flex bg-[var(--background-color)] rounded-lg p-1 mb-6">
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                paymentMethod === 'fiat'
                  ? 'bg-[var(--sec-color)] text-white'
                  : 'text-[var(--text-color)] hover:text-white'
              }`}
              onClick={() => setPaymentMethod('fiat')}
            >
              With Fiat
            </button>
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                paymentMethod === 'crypto'
                  ? 'bg-[var(--sec-color)] text-white'
                  : 'text-[var(--text-color)] hover:text-white'
              }`}
              onClick={() => setPaymentMethod('crypto')}
            >
              With Crypto
            </button>
          </div>
          
          {/* Pay Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
              I will pay ({paymentMethod === 'fiat' ? listing?.currency : 'USDC'})
            </label>
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-[var(--text-color)]">
                  {paymentMethod === 'fiat' ? listing?.currency : 'USDC'}
                </span>
              </div>
              <input
                type="number"
                className="block w-full pl-16 pr-20 py-3 bg-[var(--background-color)] border-inactive rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                placeholder="0.00"
                value={payAmount}
                onChange={handlePayAmountChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button 
                  className="text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] text-sm font-medium"
                  onClick={() => {
                    // Set max amount logic would go here
                    if (listing) {
                      const maxAmount = parseFloat(listing.limits.split('~')[1].trim().split(' ')[0].replace(/,/g, ''))
                      setPayAmount(maxAmount.toString())
                      handlePayAmountChange({ target: { value: maxAmount.toString() } })
                    }
                  }}
                >
                  All
                </button>
              </div>
            </div>
          </div>
          
          {/* Receive Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
              I will receive ({listing?.rawData?.coin || 'USDT'})
            </label>
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-[var(--text-color)]">
                  {listing?.rawData?.coin || 'USDT'}
                </span>
              </div>
              <input
                type="number"
                className="block w-full pl-16 pr-20 py-3 bg-[var(--background-color)] border-inactive  rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[var(--sec-color)] focus:border-[var(--sec-color)]"
                placeholder="0.00"
                readOnly
                value={receiveAmount}
              />
            </div>
          </div>
          
          {/* Payment Details Card */}
          <div className="bg-[var(--background-color)] rounded-lg p-4 mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--text-color)]">Account name:</span>
                <span className="text-white">Okongwu udochukwu lemmy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-color)]">Account Number:</span>
                <span className="text-white">8109988767</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-color)]">Bank:</span>
                <span className="text-white">Opay</span>
              </div>
            </div>
          </div>
          
          {/* Buy Button (without Cancel button) */}
          <div className="mb-4">
            <button
              className="w-full py-3 bg-[var(--sec-color)] hover:bg-[var(--sec1-color)] text-white font-medium rounded-md transition-colors"
              onClick={() => {
                // Buy logic would go here
                alert('Buy order placed successfully!')
                handleCancelMedal()
              }}
            >
              Buy
            </button>
          </div>
          
          {/* Note */}
          <div className="text-xs text-[var(--text-color)] mb-2">
            Please wait for the counterparty to make payment. The tokens for this sale will be transferred out of your Funding Account.
          </div>
        </div>
      </div>
    </div>
  )
}
