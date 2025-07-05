import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import PostAdsInput from './postAd/PostAdsInput';
import PriceSetting from './postAd/PriceSetting';
import TransactionSettings from './postAd/TransactionSettings';
import Notes from './postAd/Notes';
import PaymentMethod from './postAd/PaymentMethod';
import AddpaymentMethodForm from '../profile/AddpaymentMethodForm';
import {toast} from "sonner"

const PostAdModal = ({ onClose }) => {
  const { user, socketService } = useApp(); // Extract socketService here
  const navigate = useNavigate();
  
  // Ad type state
  const [adType, setAdType] = useState('sell'); // 'sell' or 'buy'
  
  // Coin and fiat state
  const [coin, setCoin] = useState('USDT');
  const [fiat, setFiat] = useState('NGN');
  const [coinDropdownOpen, setCoinDropdownOpen] = useState(false);
  const [fiatDropdownOpen, setFiatDropdownOpen] = useState(false);
  const [referencePrice, setReferencePrice] = useState(0);
  const [tradedPrice, setTradedPrice] = useState(0);
  
  // Price settings state
  const [priceType, setPriceType] = useState('fixed'); // 'fixed' or 'float'
  const [fixedPrice, setFixedPrice] = useState('');
  const [premium, setPremium] = useState('');
  
  // Transaction settings state
  const [paymentDuration, setPaymentDuration] = useState(30); // Default to 30 minutes
  const [totalQuantity, setTotalQuantity] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0); // Example value, adjust as needed
  const [minAmount, setMinAmount] = useState(''); // Added missing state
  const [maxAmount, setMaxAmount] = useState(''); // Added missing state
  
  // Notes state
  const [notes, setNotes] = useState('');
  
  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  
  // Counterparty requirements
  const [counterpartyRequirements, setCounterpartyRequirements] = useState([]);
  
  // Form validation state
  const [isFormValid, setIsFormValid] = useState(false);
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  ];

  // Validate form whenever relevant inputs change
  useEffect(() => {
    validateForm();
  }, [
    priceType,
    fixedPrice,
    premium,
    totalQuantity,
    minAmount,
    maxAmount,
    paymentMethods,
    termsAgreed
  ]);

  // Form validation function
  const validateForm = () => {
    // Check if price is set
    const isPriceValid = priceType === 'fixed'
      ? !!fixedPrice && fixedPrice > 0
      : !!premium && premium > 0;
    
    // Check if quantity is set
    const isQuantityValid = !!totalQuantity && totalQuantity > 0;
    
    // Check if min and max amounts are set
    const isMinAmountValid = !!minAmount && minAmount > 0;
    const isMaxAmountValid = !!maxAmount && maxAmount > 0;
    const isAmountRangeValid = isMinAmountValid && isMaxAmountValid && parseFloat(minAmount) < parseFloat(maxAmount);
    
    // Check if at least one payment method is set as default
    const hasDefaultPaymentMethod = paymentMethods.some(method => method.isDefault);
    
    // Check if terms are agreed
    const isTermsAgreed = termsAgreed;
    
    // Set form validity
    setIsFormValid(
      isPriceValid &&
      isQuantityValid &&
      isAmountRangeValid &&
      hasDefaultPaymentMethod &&
      isTermsAgreed
    );
  };

  useEffect(()=>{
    setPaymentMethod(user?.paymentMethods)
  }, [user])

  // Close dropdowns when clicking outside
  const handleClickOutside = () => {
    setCoinDropdownOpen(false);
    setFiatDropdownOpen(false);
  };

  useEffect(()=> {
    if(user?.paymentMethods){
      setPaymentMethods(user?.paymentMethods)
    }
  }, [user])

  const handleRemovePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const handleCreateAd = async () => {
    if (!isFormValid) {
      // Show validation messages or alert
      alert('Please fill in all required fields');
      return;
    }
    
    // Set submitting state to show loading indicator
    setIsSubmitting(true);
    
    try {
      // Extract payment method IDs for the backend
      const paymentMethodIds = paymentMethods.map(method => method._id || method.id);
      
      // Prepare data to match the backend schema
      const adData = {
        // Type settings
        type: adType,
        coin,
        fiat,
        
        // Pricing settings
        priceSetting: priceType === 'fixed' ? 'fixed' : 'floating',
        fixedPrice: priceType === 'fixed' ? parseFloat(fixedPrice) : undefined,
        premium: priceType === 'float' ? parseFloat(premium) : undefined,
        
        // Transaction settings
        paymentDuration: paymentDuration.toString(), // Convert to string as expected by backend
        totalQuantity: parseFloat(totalQuantity),
        minTransactionAmount: parseFloat(minAmount),
        maxTransactionAmount: parseFloat(maxAmount),
        
        // Requirements for counterparty
        counterpartyRequirements: counterpartyRequirements,
        
        // Notes
        notes,
        
        // Payment methods - sending IDs as expected by backend
        paymentMethods: paymentMethods,
        
        // Status and metadata
        status: 'active',
        createdBy: user, // User ID for reference
        
        // Reference price at time of creation
        referencePrice: referencePrice,
        
        // Terms agreement
        termsAgreed: termsAgreed
      };
      
      // Use the socketService to create the ad
      const createdAd = await socketService.createAd(adData);

      
      // Show success message
      toast.success('Ad created successfully!');
      
      // Close the modal
      onClose();
      
    } catch (error) {
      console.error('Error creating ad:', error);
      toast.error('Failed to create ad:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showAddForm && (
        <AddpaymentMethodForm
          setShowAddForm={setShowAddForm}
          setPaymentMethods={setPaymentMethods}
          paymentMethods={paymentMethods}
        />
      )}
      
      <div
        className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto"
        style={{ backgroundColor: '#000000b5' }}
        onClick={handleClickOutside}
      >
        <div
          className="my-8 mx-auto bg-[var(--card-color)] rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Fixed at the top */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border-color)]">
            <h2 className="text-xl font-semibold text-white">Create New Ad</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <svg
                className="w-5 h-5"
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
              <div className="flex gap-2 p-1 bg-[var(--background-color)] rounded-lg overflow-hidden border-[var(--border)] w-fit">
                <button
                  onClick={() => setAdType('buy')}
                  className={`px-8 py-2 text-[13px] rounded-md transition-all duration-200 ${
                    adType === 'buy'
                    ? 'bg-green-600 text-white'
                    : 'text-[var(--text-color)] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
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
              referencePrice={referencePrice}
              setReferencePrice={setReferencePrice}
              tradedPrice={tradedPrice}
              setTradedPrice={setTradedPrice}
              setPremium={setPremium}
              currency={fiat}
              coin={coin}
            />
            
            <TransactionSettings
              paymentDuration={paymentDuration}
              setPaymentDuration={setPaymentDuration}
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
              minAmount={minAmount}
              setMinAmount={setMinAmount}
              maxAmount={maxAmount}
              setMaxAmount={setMaxAmount}
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
              onAddPaymentMethod={() => setShowAddForm(true)}
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
            
            <div className="bg-[var(--background-color)] bg-opacity-20 rounded-lg p-4">
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
                  After clicking "Continue", your ad will be created and visible to other users.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer - Fixed at the bottom */}
          <div className="px-6 py-4 border-t border-[var(--border-color)] flex justify-end space-x-3 bg-[var(--card-color)]">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-transparent border-inactive text-white text-[12px] rounded-lg border-gray-600 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateAd}
              className={`px-4 py-2 text-white text-sm rounded-lg transition-colors flex items-center justify-center min-w-[100px] ${
                isFormValid
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-600 opacity-50 cursor-not-allowed'
              }`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostAdModal;
