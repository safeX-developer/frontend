import React from 'react'

export default function DailyReward() {
    const rewards = [
        {id:1, day: 1, isClaimed: true, points: 10},
        {id:2, day: 2, isClaimed: true, points: 10},
        {id:3, day: 3, isClaimed: false, points: 10},
        {id:4, day: 4, isClaimed: false, points: 10},
        {id:5, day: 5, isClaimed: false, points: 10},
        {id:6, day: 6, isClaimed: false, points: 10},
        {id:8, day: 6, isClaimed: false, points: 10},
        {id:9, day: 6, isClaimed: false, points: 10},
        {id:11, day: 6, isClaimed: false, points: 10},
        {id:12, day: 6, isClaimed: false, points: 10},
        {id:32, day: 6, isClaimed: false, points: 10},
        {id:13, day: 6, isClaimed: false, points: 10},
        {id:14, day: 6, isClaimed: false, points: 10},
        {id:16, day: 6, isClaimed: false, points: 10},
        {id:28, day: 6, isClaimed: false, points: 10},
        {id:19, day: 6, isClaimed: false, points: 10},
        {id:20, day: 6, isClaimed: false, points: 10},
        {id:21, day: 6, isClaimed: false, points: 10},
    ]

  return (
    <div className="reward-body">
        <div className="reward-frio">
            <div>DAILY REWARDS</div>
            <span>Do not miss your streak or else you will restart from day 1</span>
        </div>
        <div className="hgjgerx sc-bjeSbO cFDYcT grid-list">
            {rewards.map((er)=>(
                <div key={er.id} className="day">
                    <div className="head">
                        Day {er.day}
                    </div>
                    <div className='img'>
                        <img src="/asset/logo.png" alt="" />
                    </div>
                    <button disabled={er.isClaimed} className="points">
                        <h4>CLAIM</h4>
                        <span>30 points</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
