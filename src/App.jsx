import { Toaster } from 'sonner'
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import P2P from "./p2p/Index"
import P2pLayout from "./p2p/trade/P2pLayout"
const BuyPage = lazy(() => import("./p2p/trade/BuyPage"))
const SellPage = lazy(() => import("./p2p/trade/Sell"))
const MyAds = lazy(() => import('./pages/MyAds/MyAds'))
const Listed = lazy(() => import('./pages/MyAds/Listed'))
const AllMyAds = lazy(() => import('./pages/MyAds/All'));
const CreatePage = lazy(() => import('./pages/MyAds/CreatePage'));

import "./styles/page.css"
import Welcome from './pages/Welcome';
import Select from './pages/Select';
import Profile from './p2p/profile/Profile';
import Reward from './pages/reward/Index';
import Register from './pages/register/Register';
import DailyReward from './pages/reward/DailyReward';
import Referral from './pages/reward/Referral';
import Task from './pages/reward/Task';
import SocialVerification from './pages/reward/social-verification';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="bottom-right" expand={false} richColors  />
      <div id="root" >
        <div className="sc-lhMiDA ePAxUv">
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Navigate to="welcome" />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/welcome/select' element={<Select />} />
            <Route path='p2p' element={<P2P />}>
              <Route path='register' element={<Register />} />
              <Route path="trade" element={ <P2pLayout />} >
                  <Route path='buy' element={<BuyPage />} />
                  <Route path='sell' element={<SellPage />} />
              </Route>
              <Route path='profile/:userId' element={<Profile />}/> 
              <Route path='rewards' element={<Reward />} >
                <Route index element={<DailyReward />} />
                <Route path='referral' element={<Referral />} />
                <Route path='task' element={<Task />} />
                <Route path='socials' element={<SocialVerification />} />
              </Route> 
                  <Route path='create-ad' element={<CreatePage />}/> 
                  <Route path='my-ads' element={<MyAds />} >
                    <Route index element={<Listed />}/> 
                    <Route path='all' element={<AllMyAds />}/> 
                  </Route> 
                </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      </Suspense>
  )
}

export default App
