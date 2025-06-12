import React from 'react'

export default function PaymentMethod({ paymentMethods, onAddPaymentMethod, onRemovePaymentMethod }) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-medium mb-3">Payment Methods</h3>
      <div className="bg-[var(--background-color)] p-4 rounded-lg">
        {/* List of current payment methods would go here */}
        {paymentMethods && paymentMethods.length > 0 ? (
          <div className="mb-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-[var(--card-color)] p-3 rounded-md mb-2 flex justify-between items-center">
                <span className="text-[13px] text-white">{method.name}</span>
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={() => onRemovePaymentMethod(method.id)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-gray-400 text-[13px] mb-4">
            No payment methods added yet
          </div>
        )}
        
        {/* Add Payment Method Button */}
        <button
          onClick={onAddPaymentMethod}
          className="w-full flex items-center justify-center px-4 py-2 border border-dashed border-gray-600 rounded-md text-[13px] text-[var(--sec-color)] hover:bg-[var(--card-color)] transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Payment Method
        </button>
        
        <p className="mt-3 text-xs text-gray-400">
          Adding multiple payment methods increases the chances of your ad being matched with traders.
        </p>
      </div>
    </div>
  )
}