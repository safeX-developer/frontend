import React, { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext';
import { toast } from "sonner"

export default function AddpaymentMethodForm({setShowAddForm, setPaymentMethods, paymentMethods}) {
    const [newMethod, setNewMethod] = useState({
        type: 'bank',
        name: '',
        accountNumber: '',
        bankName: '',
        bankBranch: '',
    })
    const { user , api} = useApp();
    const [fullName, setFullName] = useState("")
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (user) {
            setFullName(`${user.firstName} ${user.lastName}`);
            setUserId(user.userId);
        }
    }, [user]);

    const handleAddMethod = async (e)=>{
        e.preventDefault();
        const data = {
            ...newMethod,
            userId,
            name: fullName,
        }
       const response = await api.addPaymentMethod(data)
        if(response.success){
            let newP = response?.paymentMethod
            const newId = Math.max(...paymentMethods.map(m => m.id), 0) + 1;
            setPaymentMethods([
                ...paymentMethods,
                { ...newP, id: newId, isDefault: paymentMethods.length === 0 } // Make first method default
            ]);

            toast.success(response.message)
            setShowAddForm(false)
        }
    }

  return (
    <div className="fixed inset-0 bg-[var(--backdrop)] bg-opacity-75 flex items-center justify-center z-500">
        <div className="bg-[var(--card-color)] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-white">Add Payment Method</h3>
            <button onClick={() => setShowAddForm(false)} className="text-[var(--text-color)] hover:text-white">
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
                <option value="crypto">PayMe</option>
                <option value="mobile">NETELLER</option>
            </select>
            </div>
            
            <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 bg-[var(--bg-color)] border-inactive border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[var(--sec-color)]"
                    placeholder="e.g., JOHN DOE"
                    value={fullName}
                    readOnly
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
  )
}
