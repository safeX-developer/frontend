import { lazy } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/home/Welcome'));
const P2PTrades = lazy(() => import('../pages/p2p/P2pLayout'));
const MyAds = lazy(() => import('../pages/my-ads/MyAds'));
const Profile = lazy(() => import('../pages/profile/Profile'));

// // Trade related pages
// const TradeList = lazy(() => import('../pages/trades/TradeList'));
// const TradeDetails = lazy(() => import('../pages/trades/TradeDetails'));
// const CreateTrade = lazy(() => import('../pages/trades/CreateTrade'));

// Auth pages
// const Login = lazy(() => import('../pages/auth/Login'));
// const Register = lazy(() => import('../pages/auth/Register'));

const routes = [
  {
    path: '/',
    element: <HomePage  />,
  },
  {
    path: '/p2p/trades',
    element: <P2PTrades />,
  },
  {
    path: '/p2p/my-ads',
    element: <MyAds />,
  },
  {
    path: '/p2p/profile/:userId',
    element: <Profile />,
  },
  // {
  //   path: '/trades',
  //   element: <TradeList />,
  // },
  // {
  //   path: '/trades/:id',
  //   element: <TradeDetails />,
  // },
  // {
  //   path: '/trades/create',
  //   element: <CreateTrade />,
  // },
  // {
  //   path: '/auth',
  //   children: [
  //     {
  //       path: 'login',
  //       element: <Login />,
  //     },
  //     {
  //       path: 'register',
  //       element: <Register />,
  //     },
  //   ],
  // },
];

export default routes;