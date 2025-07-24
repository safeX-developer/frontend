import { lazy } from 'react';
import { Navigate } from 'react-router';

const Welcome = lazy(() => import('./pages/Welcome/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TradesLayout = lazy(() => import('./pages/trades/Dashboard'));
const BuyTrades = lazy(() => import('./pages/trades/buy'));
const SellTrades = lazy(() => import('./pages/trades/sell'));
const RewardLayout = lazy(() => import('./pages/rewards/Index'));

export const routes = [
  {
    path: '/',
    element: <Navigate to="/welcome" />,
    name: 'Home',
    showInNav: false,
  },
  {
    path: '/welcome',
    element: <Welcome />,
    name: 'Home',
    showInNav: false,
  },
  {
    path: '/p2p/trades',
    element: <TradesLayout />,
    name: 'P2P Trades',
    showInNav: true,
    children: [
      {
        path: '', // Default route
        element: <Navigate to="buy" />,
      },
      {
        path: 'buy',
        element: <BuyTrades />,
        name: 'Buy',
      },
      {
        path: 'sell',
        element: <SellTrades />,
        name: 'Sell',
      },
    ],
  },
    {
    path: '/p2p/rewards',
    element: <RewardLayout />,
    name: 'P2P Rewards',
    showInNav: true,
    children: [
      {
        path: '', // Default route
        element: <Navigate to="daily" />,
      },
      {
        path: 'buy',
        element: <BuyTrades />,
        name: 'Buy',
      },
      {
        path: 'sell',
        element: <SellTrades />,
        name: 'Sell',
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
    name: 'Not Found',
    showInNav: false,
  },
];
