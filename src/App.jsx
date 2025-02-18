import { useState } from 'react'
import Loader from './component/loader'
import { Routes, Route, Navigate } from 'react-router';
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

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div id="root" >
        <div className="sc-lhMiDA ePAxUv">
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Navigate to="welcome" />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/welcome/select' element={<Select />} />
                <Route path='p2p' element={<P2P />}>
                  <Route path="trade" element={ <P2pLayout />} >
                      <Route path='buy' element={<Buy />} />
                      <Route path='sell' element={<Sell />} />
                  </Route>
                  <Route path='profile/:userId' element={<Profile />}/> 
                  <Route path='rewards' element={<Reward />}/> 
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
