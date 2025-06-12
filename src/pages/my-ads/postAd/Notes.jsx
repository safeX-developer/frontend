import React, { useState } from 'react'

export default function Notes({ notes, setNotes, maxLength = 1000 }) {
  const handleChange = (e) => {
    const value = e.target.value
    if (value.length <= maxLength) {
      setNotes(value)
    }
  }

  return (
    <div className="mb-6">
      <h3 className="text-white font-medium mb-3">Notes</h3>
      <div className="bg-[var(--background-color)] p-4 rounded-lg">
        <div className="mb-1">
          <textarea
            className="w-full bg-[var(--card-color)] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm min-h-[100px] resize-none"
            placeholder="You may leave a remark for your counterpart below"
            value={notes}
            onChange={handleChange}
          />
          <div className="flex justify-end mt-1">
            <span className="text-[12px] text-gray-400">
              {notes.length}/{maxLength}
            </span>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gray-800 rounded-md">
          <p className="text-[13px] text-gray-300 leading-relaxed">
            <span className="font-medium">【Note】</span>Split payment is strictly not allowed. One order with one-time payment. Split payment is a violation, and your P2P trading function will be restricted if a violation is found.
            <br /><br />
            1. The name on the payment account should be the same as that on your Bybit account.
            <br />
            2. Please make sure that coin names such as USDT are not mentioned in your transfer note. Otherwise, the transfer may fail.
          </p>
        </div>
      </div>
    </div>
  )
}
