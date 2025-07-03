'use client';
import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import InitiateTransaction from './initiateTransaction';
import PayNow from './paynow';
import PaymentCompleted from './paymentCompleted';

const BuyModal = ({ isOpen, onClose, coin="USDT", fiat = 'USD', price = 1550, quantity = 3.2934, paymentMethod = 'Bank transfer', duration = 15 }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modal = searchParams.get('modal')
  const tab = searchParams.get('tab')
  
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
  
  if (!isOpen) return null;
  
  return (
    <>
    {modal === "buy" &&
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
                    onBack={()=> router.back()}
                    duration={duration}
                    onCancel={onClose}
                    onPaynow={()=> router.push('?modal=buy&tab=payment-completed')}
                />
            )}
            
            {tab === 'payment-completed' && (
                <PaymentCompleted
                    onBack={()=> router.back()}
                />
            )}
        </div>
      </div>
    }
    </>
  );
};

export default BuyModal;
