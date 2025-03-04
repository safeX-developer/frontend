import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Referral() {
    const { _app, rewardResults } = useContext(AppContext)

    function truncateMiddle(str) {
        if(!str) return false
        if (str.length <= 10) return str; // If string is short, no need to truncate
      
        return str.slice(0, 15) + "..." + str.slice(-15);
    }

  return (
    <div className='referral-page'>
        <div className="head-links">
            <div className="invite-ops">
                <div className="top-klSjkj">Invite Friends</div>
                <div className="buttom-oioiwjh"> <span>Earn</span>  more bounces with your friends when you invite them</div>
            </div>
            <div className="invite-links">
                <div className="link">{_app.referalUrl(rewardResults?.referalCode)}</div>
                <button className="icon" onClick={()=> _app.copyToClipboard(_app.referalUrl(rewardResults?.referalCode))}>
                    <img src="/asset/copy_btn.png" alt="" />
                </button>
            </div>
        </div>
        <div className="managements">
            <div className="status">
                <div className="box">Total</div>
                <div className="number">{rewardResults?.referals?.length}</div>
            </div>
            <div className="status">
                <div className="box complete">Completed</div>
                <div className="number">{rewardResults?.referals?.length}</div>
            </div>
            <div className="status">
                <div className="box pending">Pending</div>
                <div className="number">{rewardResults?.referalProp?.pending}</div>
            </div>
        </div>
        <div className="list-items-kjeooo">
            {rewardResults?.referals?.map((er)=>(
                <div key={er._id} className="lKLeihsue">
                    <div className="right">
                        <div className="numberings">{er?.number}</div>
                        <div className="user-info">
                            <div className="username">{er?.username}</div>
                            <div className="address">{truncateMiddle(er?.address)}</div>
                        </div>
                    </div>
                    <div className="left">
                        <div className="amount">
                            <img src="/asset/twemoji_coin.png" alt="" />
                            {er?.amount}
                        </div>
                        <div className='status'> completed</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
