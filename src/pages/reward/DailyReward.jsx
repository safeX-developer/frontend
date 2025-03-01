import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'

export default function DailyReward() {
    const { rewardResults, claimRecord , getRewards, wallet} = useContext(AppContext)
    const handleClaimReward = ((reward)=> {
        claimRecord(reward)
    })

    useEffect(()=>{
        const fetchRewards = async ()=>{
         await getRewards(wallet)
        }
        fetchRewards()
    },[wallet])

  return (
    <div className="reward-body">
        <div className="reward-frio">
            <div>DAILY REWARDS</div>
            <span>Do not miss your streak or else you will restart from day 1</span>
        </div>
        <div className="hgjgerx sc-bjeSbO cFDYcT grid-list">
            {rewardResults?.reward?.map((er)=>(
                <div key={er?.day} className="day">
                    <div className="head">
                        Day {er.day}
                    </div>
                    <div className='img'>
                        <img src="/asset/logo.png" alt="" />
                    </div>
                    <button onClick={()=> handleClaimReward(er)} disabled={er.isClaimed || !er?.canClaim} className={`points ${!er.isClaimed && er?.canClaim ? "active" : ""} `}>
                        <h4>{er.isClaimed ? "CLAIMED" : "CLAIM"}</h4>
                        <span>{`${er.isClaimed ? "" : er.rewards +" points"}`}</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
