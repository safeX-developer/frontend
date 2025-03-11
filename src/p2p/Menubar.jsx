import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { BsDatabaseGear } from "react-icons/bs";

export default function Menubar() {
    const { user} = useContext(AppContext)
    const navigate = useNavigate()
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean); 
    const handleRoutes = ((route)=>{
        navigate(route)
    })
    function truncateMiddle(str) {
        if(!str) return false
        if (str.length <= 10) return str; // If string is short, no need to truncate
      
        return str.slice(0, 6) + "..." + str.slice(-6);
    }
    const getFirstCharUpper = (str) => {
        if(!str) return false
        return str ? str.charAt(0).toUpperCase() : "";
    };
  return (
    <div className="KojhihKHun menu-box">
        <div onClick={()=> handleRoutes("/")} className="logo-holder">
            <img src="/asset/logo.png" alt="" />
        </div>
        <div className="Lkoejihsn">
            <div className="options">
                <button onClick={()=> handleRoutes("/p2p/trade/buy")} className={`flip-button ${pathSegments[1] === "trade" ? "active" : ""} `}>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon">
                        <use xlinkHref="#icon_p2p"></use>
                    </svg>
                    P2P
                </button>
            </div>
            <div className="options">
                <button onClick={()=> handleRoutes("/p2p/my-ads")} className={`flip-button ${pathSegments[1] === "my-ads" ? "active" : ""} `}>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_walletEl"></use></svg>
                    My Ads
                </button>
            </div>
            {/* <div className="options">
                <button onClick={()=> handleRoutes("/p2p/transaction")} className={`flip-button ${pathSegments[1] === "transaction" ? "active" : ""} `}>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_walletEl"></use></svg>
                    Transactions
                </button>
            </div> */}
            <div className="options">
                <button onClick={()=> handleRoutes("/p2p/order")} className={`flip-button ${pathSegments[1] === "order" ? "active" : ""} `}>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_chatEl"></use></svg>
                    Order
                </button>
            </div>
            <div className="options">
                <button onClick={()=> handleRoutes("/p2p/rewards")} className={`flip-button ${pathSegments[1] === "rewards" ? "active" : ""} `}>
                    <BsDatabaseGear />
                    Reward
                </button>
            </div>
            <div className="options">
                <button className="flip-button">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_Support"></use></svg>
                    Support
                </button>
            </div>
            <div className="options">
                <button className="flip-button">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_Setting"></use></svg>
                    Settings
                </button>
            </div>
        </div>


        <div className="explore-cards">
            <div className="overlay">
                {/* <div className="Loejnsn">
                    <img src="/asset/Frame 116.png" alt="" />
                </div> */}
            <div className="total Oinedns">
                    <h4>Explore more with SAFEX When you Switch  to  clients </h4>
                    <div className="Lkowuens">
                        <button className="btn active">Switch</button>
                        <button className="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="line"></div>
        {!user ? "" : <div className="logout">
            <div className="avatar">
                {/* <img src="/asset/de1164e665fa4742b512d7c31057a4ed.png" alt="" /> */}
                <div className="img">{getFirstCharUpper(user?.username)}</div>
                <div className="active"></div>
            </div>
            <div className="name-address">
                <div className='user'>{user?.username}</div>
                <div>{truncateMiddle(user?.userId)}</div>
            </div>
            <div className="logout-icon">
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_Logout"></use></svg>
            </div>
        </div>  }
       
    </div>    
  )
}
