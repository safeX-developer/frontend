import React, { useContext, useState } from 'react'
import TwoFa from './TwoFa'
import Loader from '../../component/loader'
import { AppContext } from '../../context/AppContext'
let twoFa = false
export default function SecuritySetting() {
    const { user, setUser, _app} = useContext(AppContext)
    const [isTab , setIsTab ] = useState(false)
    const [email, setEmail] = useState("")
    const [is2Fa, setIs2Fa] = useState(false)
    const [isLoad, setisLoad] = useState(false)
    const [isValid, setIsValid] = useState(null);

    const handle2FaSwitch = (()=>{
        twoFa =! twoFa
        setIs2Fa(twoFa)
    })

    // Email Validation Function
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
      return emailRegex.test(email);
    };
  
    const handleChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setIsValid(validateEmail(newEmail));
    };

    const handleSubmit = (async()=>{
        setisLoad(true)
        await _app?.securitySettings(email)
    })

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
                    <input type="email" value={email} onChange={handleChange} placeholder='New Email' />
                </div>
            </div>
            <div className="sc-ezbkAF kDuLvp input ">
                    <div className="input-label">Two Factor Authentication</div>
                    <div className="fullname-item">
                        <p>Show full name of currency in crypto list</p>

                        <div onClick={handle2FaSwitch} className={`sc-giYglK hRMjrF switch ${is2Fa ? "open" : ""} `}>
                            <div className="dot"></div>
                        </div>
                    </div>
            </div>
            <div className='contnu'>
                <button onClick={handleSubmit} disabled={!is2Fa || !isValid} className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div className="button-inner">
                        {isLoad ? 
                        <Loader height={0} color={"white"}/>
                        : "Continue"}                       
                    </div> 
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
 