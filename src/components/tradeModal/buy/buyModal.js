'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import InitiateTransaction from './initiateTransaction';
import PayNow from './paynow';

const BuyModal = ({ isOpen, onClose, coin="USDT", fiat = 'USD', price = 1550, quantity = 3.2934, paymentMethod = 'Bank transfer', duration = 15 }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'initialize-buy';

  if (!isOpen) return null;

  const handleProceed = () => {
    router.push('?modal=buy&tab=paynow');
  };

  const handleBack = () => {
    router.push('?modal=buy&tab=initialize-buy');
  };

  return (
    <>
      {tab === 'initialize-buy' && (
        <InitiateTransaction
          onClose={onClose}
          coin={coin}
          fiat={fiat}
          price={price}
          quantity={quantity}
          paymentMethod={paymentMethod}
          duration={duration}
          onProceed={handleProceed}
        />
      )}
      
      {tab === 'paynow' && (
        <PayNow 
          onClose={onClose}
          onBack={handleBack}
          duration={duration}
        />
      )}
    </>
  );
};

export default BuyModal;
