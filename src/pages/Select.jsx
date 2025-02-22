import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Select() {
    const navigate = useNavigate()
    const welcomeBadge = [
        {name: "Total Jobs", title:"I’m exploring jobs in the", details: "Crypto | Blockchain | web3 space",img: "/asset/total-jobs.png", route: "jobs", color: "#080A17"},
        {name: "Total Talents",title:"I’m hiring for", details: "Crypto | Blockchain | web3 jobs", img: "/asset/total-talent.png", route: "client", color: "#101928"},
        {name: "Total Volume", title:"I’m trading on p2p", details: "Crypto | Blockchain | web3 space", img: "/asset/total-volume.png",  route: "p2p/trade/buy", color: "#1D2739"}
    ]


  return (
    <div className="KJkejojsn">
        <div className="Kownsdjj">
            {welcomeBadge.map((gio)=>(
                <div key={gio.name} className="Kjieojuebs center" style={{backgroundColor: gio.color}}>
                    <div className="kwqqqyiu">
                        <img src={gio.img} alt="" />
                        <div className="uyiuytf titile-text">{gio.title}</div>
                        <div className="_9jhuhk">{gio.details}</div>
                        <div className="button-createel">
                            <button onClick={()=> navigate(`/${gio.route}`)} className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal radius">
                                <div className="button-inner">Continue</div>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
