import React, { useContext, useState } from 'react';
import "../../styles/register.css";
import { toast } from 'sonner';
import { AppContext } from '../../context/AppContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const { wallet, register, user } = useContext(AppContext)
    const [ allInputs, setAllIputs ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    if(user){
        navigate("/p2p/trade/buy")
    }

    const handleSubmit = (async()=>{
        if(allInputs.Fname && allInputs.Fname.length < 9 || !allInputs.Fname){
            return toast.error("Invalid full name")
        }
        if(allInputs.username && allInputs.username.length < 2 || !allInputs.username){
            return toast.error("Invalid Username")
        }
        if(allInputs.country && allInputs.country.length < 2 || !allInputs.country){
            return toast.error("Invalid Country")
        }
        if(allInputs.address && allInputs.address.length < 10 || !allInputs.address){
            return toast.error("Invalid Address")
        }
        await register({...allInputs, userId:wallet})
        
    })


  return (
    <div className='register sc-bkkeKt kBjSXI'>
        <div className="register-section">
            <div className="dialogEl">
                <div className="title">
                    Tell us a bit about you
                </div>
                <button onClick={()=> history.back()} className="sc-ieecCq fLASqZ close-icon dialog-close">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon">
                        <use xlinkHref="#icon_Close"></use>
                    </svg>
                </button>
                <div className="subtitle">Just basic information to help you get started</div>
                <div className="dialog-body">
                    <div className="sc-ezbkAF kDuLvp input ">
                        <div className="input-label">Full Name</div>
                        <div className="input-control">
                            <input type="text" placeholder='Full name' onChange={(e)=> setAllIputs(prev=>({...prev, Fname: e.target.value}))}/>
                        </div>
                    </div>
                    <div className="sc-ezbkAF kDuLvp input ">
                        <div className="input-label">Username</div>
                        <div className="input-control">
                            <input type="text" placeholder='Username' onChange={(e)=> setAllIputs(prev=>({...prev, username: e.target.value}))}/>
                        </div>
                    </div>
                    <div className="sc-ezbkAF kDuLvp input ">
                        <div className="input-label">Country</div>
                        <div className="input-control">
                            <input type="text" placeholder='Country' onChange={(e)=> setAllIputs(prev=>({...prev, country: e.target.value}))}/>
                        </div>
                    </div>
                    <div className="sc-ezbkAF kDuLvp input ">
                        <div className="input-label">Address</div>
                        <div className="input-control">
                            <input type="text" placeholder='address' onChange={(e)=> setAllIputs(prev=>({...prev, address: e.target.value}))}/>
                        </div>
                    </div>
                    <div className='contnu'>
                        <button disabled={loading} onClick={handleSubmit} className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                            <div className="button-inner">Continue</div> 
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
