import React from 'react'
export default function SocialVerification() {
    const tasks = [
        {id: 1, display: "Watch video on YouTube.", icon: "/asset/youtube.png", amount: 90000, isClaimed: false, canClaim: true}, 
        {id: 2, display: "Watch video on YouTube.", icon: "/asset/youtube.png", amount: 90000, isClaimed: true, canClaim: false}, 
        {id: 3, display: "Watch video on YouTube.", icon: "/asset/youtube.png", amount: 90000, isClaimed: false, canClaim: false}, 
        {id: 4, display: "Watch video on YouTube.", icon: "/asset/youtube.png", amount: 90000, isClaimed: false, canClaim: false}, 
    ]
  return (
   <div className='task-page'>  
        <div className="task-items">
            {tasks.map((item)=>(
                <div key={item.id} className="jKSJeljsl">
                    <div className="icon">
                        <img src={item.icon} alt="" />
                    </div>
                    <div className="text-item">
                        <div className="head">
                            {item.display}
                        </div>
                        <div className="amount">
                            <img src="/asset/twemoji_coin.png" alt="" />
                            {item.amount}
                        </div>
                    </div>
                    <button disabled={!item.canClaim} className='claim-btn'>{item.isClaimed ? "Claimed" :  "Start"}</button>
                </div>
            ))}
        </div>
   </div>
  )
}
