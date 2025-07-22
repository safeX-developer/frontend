import React from 'react';
import TradeCard from '../../../components/TradeCard';

function SellPage() {

  // Sample trade data for selling
  const trades = [
    {
      username: 'USDTBuyer',
      completedTrades: 8765,
      tradeActivity: 99,
      paymentMethod: 'Bank Transfer',
      minLimit: 15000,
      maxLimit: 20000000,
      volume: 18000,
      price: 1648,
      paymentTime: '2hrs',
      type: 'sell'
    },
    {
      username: 'CryptoCollector',
      completedTrades: 5421,
      tradeActivity: 97,
      paymentMethod: 'Bank Transfer',
      minLimit: 8000,
      maxLimit: 10000000,
      volume: 15000,
      price: 1645,
      paymentTime: '3hrs',
      type: 'sell'
    },
    {
      username: 'StableCoinTrader',
      completedTrades: 3254,
      tradeActivity: 94,
      paymentMethod: 'Bank Transfer',
      minLimit: 5000,
      maxLimit: 7000000,
      volume: 9000,
      price: 1642,
      paymentTime: '4hrs',
      type: 'sell'
    }
  ];

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
            paymentTime={trade.paymentTime}
            type={trade.type}
            onButtonClick={() => console.log(`Sell clicked for ${trade.username}`)}
            fiat="NGN"
          />
        ))}
      </div>
    </div>
  );
}

export default SellPage;
