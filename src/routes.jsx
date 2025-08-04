import { lazy } from 'react';
import { Navigate } from 'react-router';
import Security from './pages/settings/Security';
import Deactivate from './pages/settings/Deactivate';


const Welcome = lazy(() => import('./pages/Welcome/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TradesLayout = lazy(() => import('./pages/trades/Dashboard'));
const BuyTrades = lazy(() => import('./pages/trades/buy/Index'));
const SellTrades = lazy(() => import('./pages/trades/sell/Index'));
const RewardLayout = lazy(() => import('./pages/rewards/Index'));
<<<<<<< HEAD
const BuyRewards = lazy(() => import('./pages/rewards/buy/Index'));
=======
const SettingsLayout = lazy(() => import('./pages/settings/SettingsLayout'));
const PersonalDetails = lazy(() => import('./pages/settings/PersonalDetails'));
>>>>>>> 972aec0477335bb5ba4d1dd2d7f9a1528c963449

export const routes = [
  {
    path: '/',
    element: <Navigate to="/welcome" />,
    name: 'Home',
    showInNav: false,
  },
{
    path: '/sellmodal',
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
    path: '/p2p/settings',
    element: <SettingsLayout />,
    name: 'Settings',
    showInNav: true,
    children: [
      {
        path: '', // Default route
        element: <Navigate to='personal' />,
      },
      {
        path: 'personal', // Default route
        element: < PersonalDetails />,
      },
      {
        path: 'security', // Default route
        element: < Security />,
      },
      {
        path: 'deactivate', // Default route
        element: < Deactivate />,
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
