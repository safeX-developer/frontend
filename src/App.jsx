import { Toaster } from 'sonner'
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import P2P from "./p2p/Index"
import P2pLayout from "./p2p/trade/P2pLayout"
import Buy from './p2p/trade/buy';
import Sell from './p2p/trade/Sell';
import "./styles/page.css"
import Welcome from './pages/Welcome';
import Select from './pages/Select';
import Profile from './p2p/profile/Profile';
import MyAds from './pages/MyAds/MyAds';
import Listed from './pages/MyAds/Listed';
import AllMyAds from './pages/MyAds/All';
import Create from './pages/MyAds/create';
import Reward from './pages/reward/Index';
import Register from './pages/register/Register';
import DailyReward from './pages/reward/DailyReward';
import Referral from './pages/reward/Referral';
import Task from './pages/reward/Task';
import SocialVerification from './pages/reward/social-verification';


function App() {
  return (
    <>
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
                  <Route path='buy' element={<Buy />} />
                  <Route path='sell' element={<Sell />} />
              </Route>
              <Route path='profile/:userId' element={<Profile />}/> 
              <Route path='rewards' element={<Reward />} >
                <Route index element={<DailyReward />} />
                <Route path='referral' element={<Referral />} />
                <Route path='task' element={<Task />} />
                <Route path='socials' element={<SocialVerification />} />
              </Route> 
                  <Route path='create-ad' element={<Create />}/> 
                  <Route path='my-ads' element={<MyAds />} >
                    <Route index element={<Listed />}/> 
                    <Route path='all' element={<AllMyAds />}/> 
                  </Route> 
                </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

    </>
  )
}

export default App
