import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InitiateTransaction from './initiateTransaction';
import PayNow from './paynow';
import PaymentCompleted from './paymentCompleted';
import Transactioncompleted from './transactionCompleted';

const BuyModal = ({
  isOpen,
  onClose,
  username = "Valiant Joe",
  coin = "USDT",
  fiat = 'USD',
  price = 1550,
  quantity = 3.2934,
  paymentMethod = 'Bank transfer',
  duration = 15,
  amount = 1500,
  transactionFee = 0,
  orderNo = "28098320928983092",
  orderTime = "2025-07-02 18:19:22",
  bankAccountNumber = "0123456789",
  bankBranch = "Main Branch",
  bankName = "Valiant Bank",
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Parse search params
  const searchParams = new URLSearchParams(location.search);
  const modal = searchParams.get('modal');
  const tab = searchParams.get('tab');

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save the current overflow style
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const seller = {
    name: "Valiant Joe",
    bankAccountNumber: "0123456789",
    bankBranch: "Main Branch",
    bankName: "Valiant Bank",
  };

  if (!isOpen) return null;

  // Helper function to navigate back
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {modal === "buy" && (
        <div className="fixed inset-0 bg-[#0000009d] bg-opacity-70 flex items-center justify-center z-650 p-0 sm:p-4">
          <div className="bg-[#232323] navbar-shadow rounded-lg w-full max-w-md relative flex flex-col h-full sm:h-[500px]">
            {tab === 'initialize-buy' && (
              <InitiateTransaction
                onClose={onClose}
                coin={coin}
                fiat={fiat}
                price={price}
                quantity={quantity}
                paymentMethod={paymentMethod}
                duration={duration}
              />
            )}
            
            {tab === 'pay-now' && (
              <PayNow
                onBack={handleBack}
                duration={duration}
                onCancel={onClose}
                coin={coin}
                amount={amount}
                price={price}
                fiat={fiat}
                totalQuantity={quantity}
                transactionFee={transactionFee}
                orderNo={orderNo}
                orderTime={orderTime}
                onPaynow={() => navigate('?modal=buy&tab=payment-completed')}
              />
            )}
            
            {tab === 'payment-completed' && (
              <PaymentCompleted
                onBack={handleBack}
                handleConfirm={() => navigate('?modal=buy&tab=payment-success')}
              />
            )}
            
            {tab === 'payment-success' && (
              <Transactioncompleted
                duration={10}
                coin={coin}
                amount={amount}
                price={price}
                fiat={fiat}
                totalQuantity={quantity}
                transactionFee={transactionFee}
                orderNo={orderNo}
                orderTime={orderTime}
                name={username}
                bankAccountNumber={bankAccountNumber}
                bankBranch={bankBranch}
                bankName={bankName}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BuyModal;
