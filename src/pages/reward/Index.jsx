import React from 'react'
import "../../styles/p2p/rewards.css"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Reward() {
    const navigate = useNavigate()
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean); 
  return (
    <div className='reward-section'>
        <div className='reward-header'>
            <div className='title'>
                <div className='title-details reward-hub'>REWARDS HUB</div>
                <div className='title-details points' >
                    <img src="/asset/twemoji_coin.png" alt="" />
                    910,215,106 
                    <span>Points</span>
                </div>
                <button className='title-details btn'>Claim Rewards</button>
            </div>
            <div className="btns">
                <button onClick={()=> navigate("/p2p/rewards")} className={`btn ${!pathSegments[2] ? "active" : ""} `}>
                    Daily Reward
                </button>
                <button onClick={()=> navigate("/p2p/rewards/task")} className={`btn ${pathSegments[2] === "task" ? "active" : ""} `}>
                    Task
                </button>
                <button onClick={()=> navigate("/p2p/rewards/socials")} className={`btn ${pathSegments[2] === "socials" ? "active" : ""} `}>
                    Social Verification
                </button>
                <button onClick={()=> navigate("/p2p/rewards/referral")} className={`btn ${pathSegments[2] === "referral" ? "active" : ""} `}>
                    Referral
                </button>
            </div>
        </div>
        <Outlet />
    </div>
  )
}