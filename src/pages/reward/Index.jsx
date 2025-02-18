import React from 'react'
import "../../styles/p2p/rewards.css"

export default function Reward() {
  return (
    <div className='reward-section'>
        <div className='reward-header'>
            <div className='title'>
                <div className='title-details reward-hub'>REWARDS HUB</div>
                <div className='title-details points' >
                    <img src="/asset/twemoji_coin.png" alt="" />
                    910,215,106 <span>Points</span>
                </div>
                <button className='title-details btn'>Claim Rewards</button>
            </div>
            <div className="btns">
                <button className="btn active">
                    Daily Reward
                </button>
                <button className="btn ">
                    Task
                </button>
                <button className="btn">
                    Social Verification
                </button>
                <button className="btn">
                    Referral
                </button>
            </div>
        </div>
        <div className="reward-body">
                <div className="reward-frio">
                    <div>DAILY REWARDS</div>
                    <span>Do not miss your streak or else you will restart from day 1</span>
                </div>
                <div className="hgjgerx">
                    <div className="day">
                        <div className="head">
                            Day 1
                        </div>
                        <div className=''>
                            <img src="/asset/logo.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}
