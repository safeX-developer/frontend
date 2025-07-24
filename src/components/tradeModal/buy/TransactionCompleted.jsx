import React from 'react'
import Header from './components/Header'
import TransactionInfo from './components/TransactionInfo'
import PaymentMethod from './components/PaymentMethod'
import TransactionInfoCard from './components/TransactionInfoCard'

export default function Transactioncompleted({
  duration,
  coin, 
  amount, 
  price, 
  fiat,
  totalQuantity, 
  transactionFee,
  orderNo,
  orderTime, 
  name,
  bankAccountNumber,
  bankBranch,
  bankName
}) {
  return (
    <>
      <Header
        title='The coin will be released in'
        isCountdown={true}
        duration={duration}
      />
      <div className="p-3 overflow-y-auto flex-1 text-sm">
        <div className="rounded-lg mb-2">
          <div className="pl-0 text-gray-400 text-[11px]">
            <div>The coin you've bought will be released in 10:00</div>
          </div>
        </div>

        <TransactionInfo 
          coin={coin} 
          amount={amount} 
          price={price} 
          fiat={fiat}
          totalQuantity={totalQuantity} 
          transactionFee={transactionFee}
          orderNo={orderNo}
          orderTime={orderTime}
        />

        <PaymentMethod 
          name={name} 
          bankAccountNumber={bankAccountNumber}
          bankBranch={bankBranch}
          bankName={bankName}
        />

        <TransactionInfoCard />
              {/* Action Buttons */}
        <div className="flex gap-3 my-4 ">
          <button className="flex-1 cursor-pointer py-2 rounded-md text-white border border-gray-600 text-sm font-medium hover:bg-gray-700 transition-colors">
            Order Dispute?
          </button>
          <button className="flex-1 cursor-pointer py-2 rounded-md text-white border border-gray-600 text-sm font-medium hover:bg-gray-700 transition-colors">
            Cancel Order
          </button>
        </div>
      </div>
    </>
  )
}
