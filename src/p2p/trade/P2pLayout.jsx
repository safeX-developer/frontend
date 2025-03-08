import React from 'react'
import { useState } from 'react';
import BuyPage from '../component/BuyPage';
import { Outlet } from 'react-router';
import { useNavigate } from "react-router-dom";
import Country from '../component/Country';
import PaymentMethod from '../component/PaymentMethod';

export default function P2pLayout() {
    const [ paymentMe, setpaymentMe  ] = useState(0)
    const [ selectCountry, setselectCountry  ] = useState(false)
    const [ tab, setTab  ] = useState(0)
    const [ methods, setMethods  ] = useState([
        {active: true, name: "All Payment Methods"},
        {active: false, name: "FPS"},
        {active: false, name: "Bank Transfer"},
        {active: false, name: "Cash in Person"},
        {active: false, name: "PayMe"},
        {active: false, name: "PayPal"},
        {active: false, name: "NETELLER"},
        {active: false, name: "Swish"},
        {active: false, name: "Skrill"},
        {active: false, name: "Livi Bank"},
        {active: false, name: "A-Bank"},
        {active: false, name: "Privat Bank"},
        {active: false, name: "Wise"},]
    )

    const [ activeMethod, setActiveMethod  ] = useState(methods[0])

    let navigate = useNavigate();
    const handleSellectActiveMethod = ((e = {})=>{
        setActiveMethod(e)
        methods.forEach(element => {
            if(element.name === e.name){
                element.active = true
            }else{
                element.active = false
            }
        });
        setMethods(methods)
    })
    const handleTabs = ((event = 0)=>{
        setTab(event)
        navigate(`/p2p/trade/${tab ? "buy" : "sell"}`)
    })
    const showPaymentMethod = ((event = 0)=> {
        setpaymentMe(event)
    })
    const handleClose = (()=>{
        setpaymentMe(0)
    })
  return (
<div className="trade-list__wrapper">
    <div style={{marginTop: "-4px"}}>
        <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center trade-list-buy-sell__wrapper" style={{gap: "16px"}}>
            <div className="ant-space-item" >
                <div className={`by-switch action-type-switch ${!tab ? "buy" : "sell"}`}>
                    <div className={`by-switch__item  ${!tab ? "by-switch__item--active buy" : ""} `} onClick={()=> handleTabs(0)}>Buy</div>
                    <div className={`by-switch__item  ${!tab ? "" : "by-switch__item--active sell"} ` } onClick={()=> handleTabs(1)}>Sell</div>
                </div>
            </div>
        </div>
        <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center trade-list-search-filter__wrapper" id="guide-step-two" style={{gap: "16px"}}>
            <div  className="ant-space-item" >
                <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center" style={{gap: "0"}}>
                    <div  className="ant-space-item" >
                        <input placeholder="Enter Amount" className="ant-input css-7o12g0 css-7o12g0 ant-input-custom fiat-otc-input no-border-radius-right ant-input-custom-sm bds-theme-component-light" type="text"  style={{width: "120px", height: "40px"}} /></div>
                        <div className="ant-space-item">
                            <div className="ant-select css-7o12g0 ant-select-custom fiat-otc-select no-border-radius-left ant-select-custom-sm bds-theme-component-light css-7o12g0 ant-select-single ant-select-show-arrow" style={{width: "100px"}}>
                                <div onMouseEnter={()=> setselectCountry(1)} onMouseLeave={()=> setselectCountry(0)} className="ant-select-selector" style={{position:"relative"}}>
                                    {selectCountry ? <Country /> : ""}
                                    <span className="ant-select-selection-search">
                                        <input type="search" autoComplete="off" className="ant-select-selection-search-input" aria-haspopup="listbox" aria-owns="rc_select_0_list" aria-autocomplete="list" aria-controls="rc_select_0_list" aria-activedescendant="rc_select_0_list_0"  unselectable="on" value="" id="rc_select_0" style={{opacity: 0}} /></span>
                                        <span className="ant-select-selection-item">
                                            <div className="fiat-otc-option-flex">
                                                <span title="GBP">NGN</span>
                                            </div>
                                        </span>
                                    </div>
                                    <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{userSelect: "none"}}>
                                        <svg className="icon-caret-down" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                    </div>
                </div> 
                <div  className="ant-space-item" >
                    <div onClick={()=> showPaymentMethod(1)} className="by-popover">
                        <div className="by-popover__el">
                            <div className="paywayAnchorList paywayAnchorListExt" id="paywayAnchorList">
                                {activeMethod?.name}
                                <span className="trigle"></span>
                            </div>
                        </div>
                    </div>
                    {paymentMe ? <PaymentMethod handleCLose={handleClose} methods={methods} handleSetMethod={handleSellectActiveMethod}/> : ""}
                </div>
            </div>
        </div>
        <Outlet />
        {/* <BuyPage /> */}
    </div>
  )
}
