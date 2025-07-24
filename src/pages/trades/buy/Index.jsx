import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TradeCard from '../../../components/TradeCard';
import BuyModal from '../../../components/tradeModal/buy/BuyModal';

// Loading fallback component
const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div 
        className="animate-spin rounded-full h-12 w-12" 
        style={{borderTop: "2px solid var(--active)", borderBottom: "2px solid var(--active)"}}
      ></div>
    </div>
  );
};

function BuyPageContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTrade, setSelectedTrade] = useState(null);
  
  // Parse search params
  const searchParams = new URLSearchParams(location.search);
  const modal = searchParams.get('modal');
  const tab = searchParams.get('tab');
  
  // Sample trade data
  const trades = [
    {
      username: 'CryptoKing',
      completedTrades: 6321,
      tradeActivity: 98,
      paymentMethod: 'Bank Transfer',
      minLimit: 10000,
      maxLimit: 13000000,
      volume: 12000,
      price: 1652,
      type: 'buy',
      coin: 'USDT',
      fiat: 'NGN',
      quantity: 3.2934,
      duration: 15,
      bankAccountNumber: "0123456789",
      bankBranch: "Main Branch",
      bankName: "Valiant Bank",
    },
    {
      username: 'BitcoinMaster',
      completedTrades: 4532,
      tradeActivity: 95,
      paymentMethod: 'Bank Transfer',
      minLimit: 5000,
      maxLimit: 8000000,
      volume: 9500,
      price: 1650,
      type: 'buy',
      fiat: 'NGN',
      coin: 'USDT',
      quantity: 2.5678,
      duration: 15,
      bankAccountNumber: "0123456789",
      bankBranch: "Main Branch",
      bankName: "Valiant Bank",
    },
    {
      username: 'CryptoTrader',
      completedTrades: 2145,
      tradeActivity: 92,
      paymentMethod: 'Bank Transfer',
      minLimit: 2000,
      maxLimit: 5000000,
      volume: 7800,
      price: 1655,
      type: 'buy',
      fiat: 'NGN',
      coin: 'USDT',
      quantity: 1.9876,
      duration: 15,
      bankAccountNumber: "0123456789",
      bankBranch: "Main Branch",
      bankName: "Valiant Bank",
    }
  ];

  const handleBuyClick = (trade) => {
    setSelectedTrade(trade);
    navigate('?modal=buy&tab=initialize-buy');
  };

  const handleCloseModal = () => {
    navigate('/p2p/trades/buy');
  };

  // When the component mounts, check if there's a modal in the URL but no selectedTrade
  useEffect(() => {
    if (modal === 'buy' && !selectedTrade && trades.length > 0) {
      // If there's no selected trade but modal is in URL, select the first trade
      setSelectedTrade(trades[0]);
    }
  }, [modal, selectedTrade, trades]);

  return (
    <div className="w-full mt-6">
      {/* List of trade cards */}
      <div className="space-y-4">
        {trades.map((trade, index) => (
          <TradeCard
            key={index}
            username={trade.username}
            completedTrades={trade.completedTrades}
            tradeActivity={trade.tradeActivity}
            paymentMethod={trade.paymentMethod}
            minLimit={trade.minLimit}
            maxLimit={trade.maxLimit}
            volume={trade.volume}
            price={trade.price}
            type={trade.type}
            fiat={trade.fiat}
            onButtonClick={() => handleBuyClick(trade)}
          />
        ))}
      </div>
      
      {/* Buy Modal */}
      {selectedTrade && modal === 'buy' && (
        <BuyModal
          isOpen={true}
          onClose={handleCloseModal}
          coin={selectedTrade.coin}
          price={selectedTrade.price}
          username={selectedTrade?.username}
          quantity={selectedTrade.quantity}
          paymentMethod={selectedTrade.paymentMethod}
          duration={selectedTrade.duration}
          completedTrades={selectedTrade?.completedTrades}
          minLimit={selectedTrade?.minLimit}
          maxLimit={selectedTrade.maxLimit}
          volume={selectedTrade.volume}
          fiat={selectedTrade.fiat}
          bankAccountNumber={selectedTrade?.bankAccountNumber}
          bankBranch={selectedTrade.bankBranch}
          bankName={selectedTrade.bankName}
        />
      )}
    </div>
  );
}

function BuyPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BuyPageContent />
    </Suspense>
  );
}

export default BuyPage;
