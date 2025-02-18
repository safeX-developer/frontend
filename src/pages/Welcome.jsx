import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Welcome() {
    const navigate = useNavigate()
    const welcomeBadge = [
        {name: "Total Jobs", number: 100000, img: "/asset/total-jobs.png"},
        {name: "Total Talents", number: 387982, img: "/asset/total-talent.png"},
        {name: "Total Volume", number: 9899000, img: "/asset/total-volume.png"}
    ]
    
  return (
    <div className="KjheUb jKSlie">
    <div className="Lpppeejhis Kjhkd">
        <img src="/asset/logo.png" alt="" />
    </div>
    <section className="welcome-section">
        <div className="msije ksoiend">
            <img src="/asset/welcome.png" alt="" />
            <div className="Josehjs">
                Welcome to Safe-X
            </div>
            <div className="ppemkwii">
                Best on-chain secure p2p transactions
            </div>
        </div>
    </section>
    <section className="option-section">
        <div className="option-container">
            {welcomeBadge.map((item)=>(
                 <div key={item.number} className="Kkjen slksjle">
                     <div className="Kjkejskeii ">
                         <img src={item.img} alt="" />
                         <div className="Poiwnsnm">{item.name}</div>
                         <div className="Kppwdmd">{item.number}</div>
                     </div>
                 </div>   
            ))}
           
        </div>
        <div className="button-create">
            <button onClick={()=> navigate("/welcome/select")} className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal button">
                <div className="button-inner">Create Referral Code Now</div>
            </button>
        </div>
    </section>
</div>
  )
}
