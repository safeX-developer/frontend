import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import PostAdsInput from './postAd/PostAdsInput';
import PriceSetting from './postAd/PriceSetting';
import TransactionSettings from './postAd/TransactionSettings';
import Notes from './postAd/Notes';
import PaymentMethod from './postAd/PaymentMethod';

const PostAdModal = ({ onClose }) => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [adType, setAdType] = useState('sell'); // 'sell' or 'buy'
  const [coin, setCoin] = useState('USDT');
  const [fiat, setFiat] = useState('NGN');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [priceType, setPriceType] = useState('fixed'); // 'fixed' or 'float'
  const [fixedPrice, setFixedPrice] = useState('');
  const [premium, setPremium] = useState('');
  const [paymentDuration, setPaymentDuration] = useState(30); // Default to 30 minutes
  const [totalQuantity, setTotalQuantity] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0); // Example value, adjust as needed
  const [notes, setNotes] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([]);
  
  
  // State for dropdown visibility
  const [coinDropdownOpen, setCoinDropdownOpen] = useState(false);
  const [fiatDropdownOpen, setFiatDropdownOpen] = useState(false);
  
  const coins = [
    { value: 'USDT', label: 'USDT' },
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USDC', label: 'USDC' }
  ];
  
  const fiats = [
    { value: 'NGN', label: 'NGN (Nigerian Naira)' },
    { value: 'USD', label: 'USD (US Dollar)' },
    { value: 'EUR', label: 'EUR (Euro)' },
    { value: 'GBP', label: 'GBP (British Pound)' }
  ];
  
const handleCreateAd = () => {
  if (!termsAgreed) {
    alert('Please agree to the terms and conditions');
    return;
  }
  
  // Prepare data to pass to the create trade page
  const adData = {
    type: adType,
    coin,
    fiat,
    paymentMethod,
    priceType,
    price: priceType === 'fixed' ? fixedPrice : premium,
    paymentDuration,
    totalQuantity,
    minAmount,
    maxAmount,
    notes,
    // Convert to the format expected by backend
    tab: adType === 'sell' ? 0 : 1,
    priceSetting: priceType === 'fixed' ? 0 : 1,
  };
  
  // Navigate to the create trade page with the initial data
  navigate('/trades/create', {
    state: {
      adData,
      userId: user?.id // Pass the user ID for backend authentication
    }
  });
  
  onClose();
};
  // Close dropdowns when clicking outside
  const handleClickOutside = () => {
      setCoinDropdownOpen(false);
      setFiatDropdownOpen(false);
    };

    const handleAddPaymentMethod = () => {
    // This would typically open a modal or form to add a new payment method
    // For now, let's just add a placeholder method
    const newMethod = {
      id: Date.now(),
      name: 'Bank Transfer',
      details: 'Example Bank'
    };
    
    setPaymentMethods([...paymentMethods, newMethod]);
  };

  const handleRemovePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };
    
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto"
      style={{ backgroundColor: '#000000b5' }}
      onClick={handleClickOutside}>
      <div className="my-8 mx-auto bg-[var(--card-color)] rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}>
        {/* Header - Fixed at the top */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border-color)]">
          <h2 className="text-xl font-semibold text-white">Create New Ad</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        
        {/* Body - Scrollable */}
        <div className="px-6 py-4 overflow-y-auto flex-grow">
          <p className="text-[var(--text-color)] text-[13px] mb-4">
            I want to:
          </p>
          
          {/* Buy/Sell Switch */}
          <div className="flex-shrink-0 mb-6">
            <div className="flex gap-2 p-1 bg-[var(--background-color)] rounded-lg overflow-hidden  border-[var(--border)] w-fit">
              <button
                onClick={() => setAdType('buy')}
                className={`px-8 py-2 text-[13px] rounded-md transition-all duration-200 ${
                  adType === 'buy'
                  ? 'bg-green-600 text-white'
                  : 'text-[var(--text-color)] hover:bg-[rgba(255,255,255,0.05)]'
                }`} >
                Buy
              </button>
              <button
                onClick={() => setAdType('sell')}
                className={`px-8 py-2 text-[13px] rounded-md transition-all duration-200 ${
                  adType === 'sell'
                  ? 'bg-red-700 text-white'
                  : 'text-[var(--text-color)] hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                Sell
              </button>
            </div>
          </div>
          
          <PostAdsInput 
            setCoinDropdownOpen={setCoinDropdownOpen} 
            setFiatDropdownOpen={setFiatDropdownOpen}
            coinDropdownOpen={coinDropdownOpen}
            setCoin={setCoin}
            fiatDropdownOpen={fiatDropdownOpen}
            coins={coins}
            coin={coin}
            fiat={fiat}
            fiats={fiats}
            setFiat={setFiat}
          />

          <PriceSetting 
            priceType={priceType} 
            setPriceType={setPriceType} 
            fixedPrice={fixedPrice}
            setFixedPrice={setFixedPrice}
            premium={premium}
            setPremium={setPremium}
            currency={fiat}
          />
        <TransactionSettings
          paymentDuration={paymentDuration}
          setPaymentDuration={setPaymentDuration}
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
          coin={coin}
          fiat={fiat}
          maxQuantity={maxQuantity}
        />
        <Notes
          notes={notes}
          setNotes={setNotes}
        />
        <PaymentMethod
          paymentMethods={paymentMethods}
          onAddPaymentMethod={handleAddPaymentMethod}
          onRemovePaymentMethod={handleRemovePaymentMethod}
        />

          <div className="bg-[var(--background-color)] p-4 rounded-lg mb-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                  className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-blue-500"
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-[13px] text-[var(--text-color)]">
                I have read and agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </label>
            </div>
          </div>
          
          <div className="bg-[var(--background-color)] bg-opacity-20  rounded-lg p-4">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-[var(--text-color)] mt-0.5 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-[var(--text-color)]">
                After clicking "Continue", you'll be able to set your price, transaction limits, and other details.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer - Fixed at the bottom */}
        <div className="px-6 py-4 border-t border-[var(--border-color)] flex justify-end space-x-3 bg-[var(--card-color)]">
          <button onClick={onClose} className="px-4 py-2 bg-transparent border-inactive text-white text-[12px] rounded-lg border-gray-600 hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateAd}
            className={`px-4 py-2 text-white text-sm rounded-lg transition-colors ${
              termsAgreed
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-600 opacity-50 cursor-not-allowed'
            }`}
            disabled={!termsAgreed}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostAdModal;
