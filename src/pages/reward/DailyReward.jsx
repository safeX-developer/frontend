import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

export default function DailyReward() {
    const {getRewards, user} = useContext(AppContext)

    const [rewards, setrewards] = useState([])
    useEffect(()=>{
        const fetchRewards = async ()=>{
            const {result} = await getRewards()
            setrewards(result)
        }
        fetchRewards()
    },[])

  return (
    <div className="reward-body">
        <div className="reward-frio">
            <div>DAILY REWARDS</div>
            <span>Do not miss your streak or else you will restart from day 1</span>
        </div>
        <div className="hgjgerx sc-bjeSbO cFDYcT grid-list">
            {rewards.map((er)=>(
                <div key={er.day} className="day">
                    <div className="head">
                        Day {er.day}
                    </div>
                    <div className='img'>
                        <img src="/asset/logo.png" alt="" />
                    </div>
                    <button className="points">
                        <h4>CLAIM</h4>
                        <span>{er.rewards} points</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
