import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../styles/p2p/setting.css"
import { useNavigate } from 'react-router-dom'

export default function SettingIndex() {
  const navigate = useNavigate()
  return (
    <div className='Lsjkjeis'>
        <div className="LOjesljsn">
          <div className="tab-section">
            <div className="tap-con">
              <div onClick={()=> navigate("/p2p/setting")} className="tab-btns">Personal Details</div>
              <div onClick={()=> navigate("/p2p/setting/security")} className="tab-btns">Security</div>
              <div onClick={()=> navigate("/p2p/setting/deactivate")} className="tab-btns deactivate">Deactivate Account</div>
            </div>
          </div>
          <div className="body-second">
            <Outlet />
          </div>
        </div>
    </div>
  )
}
