import React from 'react'

export default function PaymentMethod({ paymentMethods, onAddPaymentMethod }) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-medium mb-3">Payment Method</h3>
      <div className="bg-[var(--background-color)] p-4 rounded-lg">
        {/* List of current payment methods would go here */}
        {paymentMethods && paymentMethods.length > 0 ? (
       <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id || method._id}
            className={`bg-black rounded-lg overflow-hidden flex flex-col ${
              method.isDefault ? 'border-l-2 border-[var(--sec-color)]' : 'hidden'
            }`}
            style={{borderLeft: method.isDefault ? '2px solid var(--sec-color)' : ""}}
          > 
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Name</p>
                <p className="text-white text-xs">{method.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Bank Account Number</p>
                <p className="text-white text-xs">{method.accountNumber}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Bank Branch</p>
                <p className="text-white text-xs" >{method.bankBranch}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Bank Name</p>
                <p className="text-white text-xs">{method.bankName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        ) : (
          <div className="text-center py-4 text-gray-400 text-[13px] mb-4">
            No payment methods added yet
          </div>
        )}
        
        {/* Add Payment Method Button */}
        {paymentMethods.length === 0 && (
          <button
            onClick={onAddPaymentMethod}
            className="w-full flex items-center justify-center px-4 py-2 border border-dashed border-gray-600 rounded-md text-[13px] text-[var(--sec-color)] hover:bg-[var(--card-color)] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Payment Method
          </button>
        )}

        <p className="mt-3 text-xs text-gray-400">
          Adding multiple payment methods increases the chances of your ad being matched with traders.
        </p>
      </div>
    </div>
  )
}