import React, { useState } from 'react';

export default function PaymentMethodTab() {
  const [paymentMethods, setPaymentMethods] = useState([
    { 
      id: 1, 
      type: 'bank', 
      name: 'VICTOR OTUNG', 
      accountNumber: '9063610647', 
      bankBranch: 'LAGOS NIGERIA', 
      bankName: 'OPAY', 
      isDefault: true 
    },
    { 
      id: 2, 
      type: 'bank', 
      name: 'JOHN DOE', 
      accountNumber: '1234567890', 
      bankBranch: 'ABUJA NIGERIA', 
      bankName: 'ACCESS BANK', 
      isDefault: false 
    },
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMethod, setNewMethod] = useState({
    type: 'bank',
    name: '',
    accountNumber: '',
    bankBranch: '',
    bankName: '',
  });
  
  const handleAddMethod = (e) => {
    e.preventDefault();
    const newId = Math.max(...paymentMethods.map(m => m.id), 0) + 1;
    setPaymentMethods([
      ...paymentMethods,
      { ...newMethod, id: newId, isDefault: false }
    ]);
    setNewMethod({ type: 'bank', name: '', accountNumber: '', bankBranch: '', bankName: '' });
    setShowAddForm(false);
  };
  
  const handleSetDefault = (id) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
  };
  
  const handleRemove = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };
  
  return (
    <div className="w-full">
      {/* Header with description and add button */}
      <div className="flex justify-between items-start mb-6">
        <div className="max-w-2xl">
          <h3 className="text-lg font-medium text-white mb-2">Payment Methods</h3>
          <p className="text-sm text-gray-400">
            The payment method you add will be displayed to the buyer when you sell your crypto via P2P. 
            Please utilize an account registered under your real name to ensure a successful transfer.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-[var(--sec-color)] hover:bg-[var(--sec1-color)] text-white rounded-md transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Now
        </button>
      </div>
      
      {/* Payment Methods List */}
      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`bg-black rounded-lg overflow-hidden flex flex-col ${
              method.isDefault ? 'border-l-2 border-[var(--sec-color)]' : ''
            }`}
            style={{borderLeft: method.isDefault ? '2px solid var(--sec-color)' : ""}}
          >
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-grey-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Bank Transfer</span>
                {method.isDefault && (
                  <span className="ml-2 text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded">Default</span>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="text-blue-400 hover:text-blue-300 text-xs"
                >
                  Update
                </button>
                <button
                  onClick={() => handleRemove(method.id)}
                  className="text-red-400 hover:text-red-300 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            
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
      
      {/* Add New Payment Method Form */}
      {showAddForm && (
        <div className="fixed inset-0 bg-[var(--backdrop)] bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[var(--card-color)] rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-white">Add Payment Method</h3>
              <button 
                onClick={() => setShowAddForm(false)}
                className="text-[var(--text-color)] hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleAddMethod} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Payment Type</label>
                <select
                  className="w-full px-3 py-2 bg-[var(--bg-color)] border-inactive border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[var(--sec-color)]"
                  value={newMethod.type}
                  onChange={(e) => setNewMethod({...newMethod, type: e.target.value})}
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="mobile">Mobile Money</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-black border-inactive border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[var(--sec-color)]"
                  placeholder="e.g., JOHN DOE"
                  value={newMethod.name}
                  onChange={(e) => setNewMethod({...newMethod, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Bank Account Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-inactive bg-[var(--bg-color)] border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[var(--sec-color)]"
                  placeholder="e.g., 1234567890"
                  value={newMethod.accountNumber}
                  onChange={(e) => setNewMethod({...newMethod, accountNumber: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Bank Branch</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-inactive bg-[var(--bg-color)] border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[var(--sec-color)]"
                  placeholder="e.g., LAGOS NIGERIA"
                  value={newMethod.bankBranch}
                  onChange={(e) => setNewMethod({...newMethod, bankBranch: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Bank Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-inactive bg-[var(--bg-color)] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[var(--sec-color)]"
                  placeholder="e.g., OPAY"
                  value={newMethod.bankName}
                  onChange={(e) => setNewMethod({...newMethod, bankName: e.target.value})}
                  required
                />
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--sec-color)] hover:bg-[var(--sec1-color)] text-white rounded-md transition-colors"
                >
                  Add Method
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
