import React, { useContext, useEffect, useState } from 'react'
import "../../styles/register.css";
import { AppContext } from '../../context/AppContext';
import Loader from '../../component/loader';
import { toast } from 'sonner';

export default function ProfileSetting() {
    const { user, setUser, _app} = useContext(AppContext)
    const [ allInputs, setAllIputs ] = useState({})
    const [btnLoad, setBtnLoad ] = useState(false)

    useEffect(()=>{
        setAllIputs(user)
    },[user])
    const getFirstCharUpper = (str) => {
        if(!str) return false
        return str ? str.charAt(0).toUpperCase() : "";
    };
    
    const handleSubmit = (async()=>{
        setBtnLoad(true)
        if(allInputs.Fname && allInputs.Fname.length < 9 || !allInputs.Fname){
            setBtnLoad(false)
            return toast.error("Invalid full name")
        }
        if(allInputs.username && allInputs.username.length < 2 || !allInputs.username){
            setBtnLoad(false)
            return toast.error("Invalid Username")
        }
        if(allInputs.country && allInputs.country.length < 2 || !allInputs.country){
            setBtnLoad(false)
            return toast.error("Invalid Country")
        }
        if(allInputs.address && allInputs.address.length < 10 || !allInputs.address){
            setBtnLoad(false)
            return toast.error("Invalid Address")
        }
       const {load, response} = await _app.resetProfileDetails(allInputs)
       setBtnLoad(load)
       if(response){
        setUser(response)
       }
    })
    
  return (
    <div className='Jjhsjkues KSesshs'>
        <div className="profile-Jskj">
          <div className="ljOosmie">
            <div className="head-title">Profile details</div>
            <div className="lojUSne">Setup your personal details--</div>
            <div className="profile-img">
              <div className="text-img">{getFirstCharUpper(allInputs?.username)}</div>
              {/* <img src="" alt="" className="Isjendl" /> */}
            </div>
          </div>
          <div className="dialog-body">
              <div className="sc-ezbkAF kDuLvp input ">
                  <div className="input-label">Full Name</div>
                  <div className="input-control">
                      <input type="text" value={allInputs?.Fname} placeholder='Full name' onChange={(e)=> setAllIputs(prev=>({...prev, Fname: e.target.value}))} />
                  </div>
              </div>
              <div className="sc-ezbkAF kDuLvp input ">
                  <div className="input-label">Username</div>
                  <div className="input-control">
                      <input type="text" placeholder='Username' value={allInputs?.username} onChange={(e)=> setAllIputs(prev=>({...prev, username: e.target.value}))} />
                  </div>
              </div>
              <div className="sc-ezbkAF kDuLvp input ">
                  <div className="input-label">Country</div>
                  <div className="input-control">
                      <input type="text" placeholder='Country' value={allInputs?.country} onChange={(e)=> setAllIputs(prev=>({...prev, country: e.target.value}))} />
                  </div>
              </div>
              <div className="sc-ezbkAF kDuLvp input ">
                  <div className="input-label">Address</div>
                  <div className="input-control">
                      <input type="text" placeholder='address' value={allInputs?.address} onChange={(e)=> setAllIputs(prev=>({...prev, address: e.target.value}))}/>
                  </div>
              </div>
              <div className='contnu'>
                  <button onClick={handleSubmit} className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                      <div className="button-inner">
                        {btnLoad ? 
                        <Loader height={2} color={"white"}/>
                        : "Update"
                        }
                        </div> 
                  </button>
              </div>
          </div>
        </div>
    </div>
  )
}

