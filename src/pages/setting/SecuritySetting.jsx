import React, { useState } from 'react'
import TwoFa from './TwoFa'

export default function SecuritySetting() {
    const [isTab , setIsTab ] = useState(false)
  return (
    <div className='Jjhsjkues KSesshs'>
        {isTab ? <TwoFa /> : ""}
        <div className="profile-Jskj">
        <div className="ljOosmie">
            <div className="head-title">Security</div>
            <div className="lojUSne">Secure your account and change Mail here</div>
        </div>
        
        <div className="dialog-body Kjsoerqw">
            <div className="sc-ezbkAF kDuLvp input ">
                <div className="input-label">New Email</div>
                <div className="input-control">
                    <input type="text" placeholder='New Email' />
                </div>
            </div>
            <div className="sc-ezbkAF kDuLvp input ">
                    <div className="input-label">2FA</div>
                    <div class="fullname-item">
                        <p>Show full name of currency in crypto list</p>
                        <div class="sc-giYglK hRMjrF switch  open">
                            <div class="dot"></div>
                        </div>
                    </div>
            </div>
            <div className='contnu'>
                <button  className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div className="button-inner">Continue</div> 
                </button>
            </div>

        </div>
        </div>
    </div>
  )
}
 