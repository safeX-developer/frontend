import React from 'react'

export default function PaymentMethod({handleCLose, methods, handleSetMethod}) {
  return (
    <div className="">
        <div className="by-popover__container component-theme theme-light"  style={{position: "absolute", willChange: "transform", top: "50px", left: "-18px", transform: "translate3d(281px, 5px, 0px)"}}>
            <div id="paywayList">
                <div className="list-wrap">
                    <div className="list-wrap-scroll">
                        <div className="by-input by-input--outlined by-input--large">
                            <div className="by-input__container">
                                <span className="gc-04 by-input__left-icon">
                                    <span className="icon iconfont icon-search"></span>
                                </span>
                                <span className="by-input__wrapper flex">
                                    <input className="by-input__inner" type="text" value="" />
                                </span>
                            </div>
                        </div>
                        <div className="by-space by-space--horizontal by-space-align--baseline list-wrap-alert" style={{gap: "8px"}}>
                            <div className="by-space-item" >
                                <i className="fiat-iconfont fiat-icon--info"></i>
                            </div>
                            <div className="by-space-item" >
                                <span>In accordance with compliance regulations, we've made updates to the names of payment methods on our platform. 
                                    We kindly request that you check with the advertiser for information on the accepted payment methods before proceeding with any payments.</span>
                            </div>
                            <div className="by-space-item">
                                <i className="iconfont icon-close"></i>
                            </div>
                        </div>
                        <ul id="lists">
                           {methods.map((me)=>(
                             <li key={me.name} onClick={()=> handleSetMethod(me)} className={me?.active ? "all-active" : ""}>
                                <div className="content">
                                        <span title="All Payment Methods">{me?.name}</span>
                                    </div>
                                    <i className="iconfont iconcorrect fiat-crypto__details-read-icon-correct"></i>
                                </li>
                            ))}
                        </ul>

                        <section className="btn-group">
                            <button onClick={handleCLose} className="by-button btn-confirm" type="button">
                                <span className="by-button__content">Confirm</span>
                            </button>
                            <button onClick={handleCLose} className="by-button btn-cancel" type="button">
                                <span className="by-button__content">Reset</span>
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
