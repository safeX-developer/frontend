import React, { useEffect, useState } from 'react';
import "../../styles/p2p/create-ads.css"
import { useSendTransaction } from "thirdweb/react";
import { createAd } from '../../api/tradeApi';
import Tip from './Tip';
import PaymentMethod from './PaymentMethod';


export default function CreatePage() {
    const [creatingAd, setCreatingAd] = useState(false)
    const [showTip, setShowTip] = useState(false)
    const { mutate: sendTx, data: transactionResult } = useSendTransaction();
    const [ tab, setTab ] = useState(0)
    const [ duration, setDuration ] = useState("15")
    const [ priceSetting, setpriceSetting ] = useState(0)
    const [ fixedPrice, setFixedPrice] = useState(0)
    const [ totalQuality, setTotalQuality] = useState(0)
    const [ paymentMethod, setpaymentMethod] = useState(0)
    const [minTrade, setMinTrade] = useState(0)
    const [maxTrade, setMaxTrade] = useState(0)
    const [ markPostTrade, setMarkPostTrade ] = useState(false)
    const handlePriceInput = ((data)=>{
        setFixedPrice(data)
    })

    const tradedPrice = (()=>{
        return fixedPrice + " USDT/NGN"
    })

    useEffect(() => {
        console.log('Transaction Result!')
    }, [transactionResult])

    const handleCreateAd = async (ev) => {
        if (creatingAd) return;
        setCreatingAd(true);
        try {
            const tx = await createAd({

            });
            if (tx) sendTx(tx);
        } catch (error) {
            console.log('Error creating add => ', error)
        }
    }
    function handleCancelBTN(){
        setShowTip(false)
    }
    return (
        <>  
        {showTip ? <Tip handleCancel={handleCancelBTN} /> : ""}
            
        <div className="fiat__spin-wrapper">
      
        <div className="fiat__spin-container">
            <div className="create-maker__title">
                <div className="flex">Post Ads
                    <div className="list__maker--level">
                        <i className="fiat-iconfont fiat-icon--wenhao css-5jb6ku ant-tooltip-custom bds-theme-component-light"></i>
                    </div>
                </div>
            </div>
            <div className="create-maker__container">
                <div className="create-maker__input-container">
                    <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center create-maker__header-wrapper" style={{ gap: "8px" }}>
                        <div className="ant-space-item" >
                            <div className="create-maker__header">Advertisement</div>
                        </div>
                        <div className="ant-space-item">
                            <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center create-maker__share-stock-link" style={{ gap: "4px" }}>
                                <div className="ant-space-item" >P2P Advertising Shared Assets</div>
                                <div className="ant-space-item">
                                    <img className="create-maker__share-stock-new" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAgCAMAAACYXf7xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAB4UExURUdwTP80Df9fG/8EAf8FAP9bGf81Dv9aGf9aGf9aGf////80D/8CAP9GE/8kCv8/Ef8qC/8HAv8MA/8YBv9TF/86Ef8eCP8QBP8vDf9eG/9LFf9aGf9XGP9PG/8UBf+pk//Ox//m4f98af9kUf+Mcf+WiP/z8P+8s7Jy5pUAAAAKdFJOUwAVf5PUjz/PoN8ObsOXAAACSElEQVRIx5WWiZaqMBBE9bnNtBJBNCzKEEHx//9wqiMJzeLo6+MRF7ynqpJ0O5v5Wq++j8djUeR5HqD2qBNqi0rTNAxDxaW1jlE/Pz9JkhwOy8V8Jmu+Ol8uEhM8Mds+RkvMARVFEjTfgCIx+7Eax4l1DxMtO87qPMB4V2NTrRxrijG7hReTnZ+e+tm0mLSvRvdNRbvdusV8ZZNqpk2NMU7OJsuGmOlstMckArNsMdlYzR8RiwWPIsvpYXw2+QdqpCmJOb9TM9p+Q8w/b6okoowxVyJgyNU9fBDVoNR4swWmwtsBBhSnhjGG5YwwN6Ib1PANFTCgnpIehikWc3xiqJJqjK0qhIwHMAYflcAYavqmLEWaoqvEuGzw+qpUime6xrEC1K2UxTwpwhQA5QQmhI5UQRNSUXGBayJMtRSBwaMpOkzFVQNTcsZ3MicOB6xCmuowztTtwXL6EZfAVJyxoVI3dI9xTyLVdKY8JsPvijEmwEU1VGtDJjYcTTIVseUwJmdnHlNz5bz9kC0iOWnI2mILDDBuwb2a/NJQ04wi5nDudNW8A7GJakcZbL8Ok9+tE49p+82NV/GhdWhXU705DMAEpsO47ReGhd2aOFT8rXl1NCWm6jDuMOBoNpw9MCy2TD7ABA+L2fcxUNFwo+DjWXdqojHmk+7nO3oyVPP9CUa9bFuuia4m2lYwHHdWjZpqW66lrzs1+ds5JXvxEzMX4+78cmqmb3rx4vXwlXMq/TubpRziq/8fMOO/Agz62rwfMGqw4MuFHby/bZiZ9L9AePcAAAAASUVORK5CYII=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="create-maker__content">
                        <div className="create-maker__input-item">
                            <div className="create-maker__input-item-title">Type</div>
                            <div className="create-maker__item-content">
                                <div className="ant-space css-5jb6ku ant-space-vertical" style={{ gap: "4px" }}>
                                    <div className="ant-space-item" >
                                        <div className="create-maker__form-title">
                                            <span>I want to</span>
                                        </div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className={`by-switch action-type-switch create-maker__side ${!tab ? "sell" : "buy"}`}>
                                            <div onClick={()=> setShowTip(1)} className={`by-switch__item ${tab ? "by-switch__item--active" : ""}`}>Buy</div>
                                            <div onClick={()=> setTab(0)} className={`by-switch__item ${!tab ? "by-switch__item--active" : ""}`}>Sell</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center create-maker__price-input create-maker__type-input" style={{ gap: "16px" }}>
                                    <div className="ant-space-item" >
                                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{ gap: "8px" }}>
                                            <div className="ant-space-item" >
                                                <span>Coin</span>
                                            </div>
                                            <div className="ant-space-item">
                                                <div className="ant-select css-5jb6ku ant-select-custom ant-select-custom-sm bds-theme-component-light css-5jb6ku ant-select-single ant-select-show-arrow" style={{ width: "232px" }}>
                                                    <div className="ant-select-selector">
                                                        <span className="ant-select-selection-search">
                                                            <input type="search" autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_4_list" aria-autocomplete="list" aria-controls="rc_select_4_list" aria-activedescendant="rc_select_4_list_0" readonly="" unselectable="on" value="" id="rc_select_4" style={{ opacity: 0 }} />
                                                        </span>
                                                        <span className="ant-select-selection-item" title="">USDT</span>
                                                    </div>
                                                    
                                                    <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{ userSelect: "none" }}>
                                                        <svg className="icon-caret-down" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path>
                                                        </svg>
                                                    </span>


                                                    {/* <div>
                                                        <div className="ant-select-dropdown ant-select-custom-dropdown ant-select-custom-dropdown-sm bds-theme-component-light css-5jb6ku ant-select-dropdown-placement-bottomLeft " style={{minWidth: "232px", width: "232px", left: "216px", top:"509.833px"}}>
                                                            <div>
                                                                <div role="listbox" id="rc_select_5_list" style={{height: "0px", width: "0px", overflow: "hidden"}}>
                                                                    <div aria-label="USDT" role="option" id="rc_select_5_list_0" aria-selected="true">USDT</div>
                                                                    <div aria-label="BTC" role="option" id="rc_select_5_list_1" aria-selected="false">BTC</div>
                                                                </div>
                                                                <div className="rc-virtual-list" style={{position: "relative"}}>
                                                                    <div className="rc-virtual-list-holder" style={{maxHeight: "256px", overflowY: "hidden", overflowAnchor: "none"}}>
                                                                        <div>
                                                                            <div className="rc-virtual-list-holder-inner" style={{display: "flex", flexDirection: "column"}}>
                                                                                <div aria-selected="true" className="ant-select-item ant-select-item-option ant-select-item-option-active ant-select-item-option-selected" title="USDT">
                                                                                    <div className="ant-select-item-option-content">USDT</div>
                                                                                    <span className="ant-select-item-option-state" unselectable="on" aria-hidden="true" style={{userUelect: "none"}}></span>
                                                                                </div>
                                                                                <div aria-selected="false" className="ant-select-item ant-select-item-option" title="BTC">
                                                                                    <div className="ant-select-item-option-content">BTC</div>
                                                                                    <span className="ant-select-item-option-state" unselectable="on" aria-hidden="true" style={{userUelect: "none"}}></span>
                                                                                </div>
                                                                                <div aria-selected="false" className="ant-select-item ant-select-item-option" title="ETH">
                                                                                    <div className="ant-select-item-option-content">ETH</div>
                                                                                    <span className="ant-select-item-option-state" unselectable="on" aria-hidden="true" style={{userUelect: "none"}}></span>
                                                                                </div>
                                                                                <div aria-selected="false" className="ant-select-item ant-select-item-option" title="USDC">
                                                                                    <div className="ant-select-item-option-content">USDC</div>
                                                                                    <span className="ant-select-item-option-state" unselectable="on" aria-hidden="true" style={{userUelect: "none"}}></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rc-virtual-list-scrollbar" style={{width: "8px", top: "0px", bottom: "0px", right: "0px", position: "absolute", display: "none"}}>
                                                                        <div className="rc-virtual-list-scrollbar-thumb" style={{width: "100%", height: "128px", top: "0px", left: "0px", position: "absolute", background: "rgba(0, 0, 0, 0.5)", borderRadius: "99px", cursor: "pointer", userSelect: "none"}}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{ gap: "8px" }}>
                                            <div className="ant-space-item" >
                                                <span>Fiat</span>
                                            </div>
                                            <div className="ant-space-item">
                                                <div className="ant-select css-5jb6ku ant-select-custom ant-select-custom-sm bds-theme-component-light css-5jb6ku ant-select-single ant-select-show-arrow" style={{ width: "232px" }}>
                                                    <div className="ant-select-selector">
                                                        <span className="ant-select-selection-search">
                                                            <input type="search"  autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_5_list" aria-autocomplete="list" aria-controls="rc_select_5_list" aria-activedescendant="rc_select_5_list_0" unselectable="on"  id="rc_select_5" style={{ opacity: 0 }} />
                                                        </span> 
                                                        <span className="ant-select-selection-item" title="">NGN</span>
                                                    </div>
                                                    <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{ userSelect: "none" }}>
                                                        <svg className="icon-caret-down" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="create-maker__tips">Fee: --
                                    <i className="fiat-iconfont fiat-icon--wenhao css-5jb6ku ant-tooltip-custom bds-theme-component-light"></i>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className="create-maker__input-item create-maker__input-item-border">
                            <div className="create-maker__input-item-title">Pricing Settings</div>
                            <div className="create-maker__item-content">
                                <div className="ant-radio-group ant-radio-group-outline create-maker__price-type css-5jb6ku">
                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked css-5jb6ku ant-radio-custom bds-theme-component-light css-5jb6ku">
                                        <span onClick={()=> setpriceSetting(0)} className={`ant-radio ${priceSetting ? "" : "ant-radio-checked"}`}>
                                            <input type="radio" className="ant-radio-input" value="0" checked="" />
                                            <span className="ant-radio-inner"></span>
                                        </span>
                                        <span>Fixed Price</span>
                                    </label>
                                    <label className={`ant-radio-wrapper css-5jb6ku ant-radio-custom create-maker__price-type-float bds-theme-component-light css-5jb6ku`}>
                                        <span onClick={()=> setpriceSetting(1)} className={`ant-radio ${!priceSetting ? "" : "ant-radio-checked"}`}>
                                            <input type="radio" className="ant-radio-input" value="1" />
                                            <span className="ant-radio-inner"></span>
                                        </span>
                                        <span>
                                            <span>Floating Price</span>
                                            <span className="create-maker__price-float-tips-wrapper">
                                                <span className="create-maker__price-float-tips">Floating Price = Reference Price × Premium</span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <div className="create-maker__tips-price">{ !priceSetting ? "A fixed price does not fluctuate based on market movements" : "Your floating offer price is calculated by multiplying the premium and the reference price"}</div>
                                <div className="ant-space-compact css-5jb6ku create-maker__price-input">
                                    <div className="by-space by-space--vertical create-maker__form-item" style={{ gap: "4px" }}>
                                        <div className="by-space-item" >
                                            <div className="create-maker__form-title">{!priceSetting ? "Fixed price" : "Premium"}</div>
                                        </div>
                                        <div className="by-space-item" >
                                            <div className="moly-input relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line transition-all ease-in-out duration-100 font-IBM hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed h-[40px] pl-[11px] pr-[9px] rounded gap-[8px] create-maker__form-input">
                                                <input type="text" onChange={(e)=> handlePriceInput(e.target.value) } placeholder={!priceSetting ? `The fixed price must be between 90% and 110% of the reference price.` : "90% ~ 110%"} className="text-[12px] font-medium leading-[18px] appearance-none placeholder:text-[#ADB1B8] css-qydx2u" data="" style={{ background: "transparent", outline: "medium", border: "none", width: "100%" }} />
                                                <div className="justify-items-center text-brandColor-bds-brand-900-text text-[12px] font-medium leading-[18px]" style={{ marginRight: "0px" }}>
                                                    <span className="moly-text text-[var(--bds-gray-t1-title)] css-1016zpq font-[400] inline">NGN</span>
                                                </div>
                                                <div className="color-[#121214] pl-[32px]" style={{ position: "absolute", inset: "0px", zIndex: 0, pointerEvents: "none" }}></div>
                                            </div>
                                        </div>
                                        <div className="by-space-item">
                                            <div className="create-maker__input-bottom-tips">
                                                <span></span>
                                                <span className="create-maker__input-bottom-right-tips"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-space css-5jb6ku ant-space-vertical create-maker__tips create-maker__tips-top" style={{ gap: "0px" }}>
                                    <div className="ant-space-item" >
                                        <span className="create-maker__tips-2 create-maker__tips-last-traded-price">Traded Price:&nbsp;<span className="create-maker__tips-2-font">{tradedPrice()}</span>&nbsp;&nbsp;</span>
                                    </div>
                                    <div className="ant-space-item" >
                                        <span className="create-maker__tips-2">Reference Price:&nbsp;<span className="create-maker__tips-2-font">0 /</span></span>
                                    </div>
                                    <div className="ant-space-item">
                                        <span className="create-maker__disclaimer">Disclaimer &gt;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-maker__input-item create-maker__input-item-border">
                            <div className="create-maker__input-item-title">Transaction Settings</div>
                            <div className="create-maker__item-content">
                                <div className="create-maker__time">
                                    <span>Payment Duration</span>
                                    <div className="ant-radio-group ant-radio-group-outline create-maker__time-num css-5jb6ku">
                                        <label className="ant-radio-wrapper ant-radio-wrapper-checked css-5jb6ku ant-radio-custom bds-theme-component-light css-5jb6ku">
                                            <span onClick={()=> setDuration("30")} className={`ant-radio ${duration !== "15" ? "ant-radio-checked" : ""}`}>
                                                <input type="radio" className="ant-radio-input" value="30" />
                                                <span className="ant-radio-inner"></span>
                                            </span>
                                            <span>30Minute(s)</span>
                                        </label>
                                        <label className="ant-radio-wrapper css-5jb6ku ant-radio-custom bds-theme-component-light css-5jb6ku">
                                            <span onClick={()=> setDuration("15")} className={`ant-radio ${duration === "15" ? "ant-radio-checked" : ""}`}>
                                                <input type="radio" className="ant-radio-input" value="15" />
                                                <span className="ant-radio-inner"></span>
                                            </span>
                                            <span>15Minute(s)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="ant-space-compact css-5jb6ku create-maker__price-input">
                                    <div className="by-space by-space--vertical create-maker__form-item" style={{ gap: "4px" }}>
                                        <div className="by-space-item" >
                                            <div className="create-maker__form-title">Total Quantity</div>
                                        </div>
                                        <div className="by-space-item" >
                                            <div className="moly-input relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line transition-all ease-in-out duration-100 font-IBM hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed h-[40px] pl-[11px] pr-[9px] rounded gap-[8px] create-maker__form-input">
                                                <input type="text" onChange={(e)=> setTotalQuality(e.target.value)} placeholder="Enter" className="text-[12px] font-medium leading-[18px] appearance-none placeholder:text-[#ADB1B8] css-qydx2u" min="0" data=""  style={{ background: "transparent", outline: "medium", border: "none", width: "100%" }} />
                                                <div className="justify-items-center text-brandColor-bds-brand-900-text text-[12px] font-medium leading-[18px]" style={{ marginRight: "0px" }}>
                                                    <span className="moly-text text-[var(--bds-gray-t1-title)] css-1016zpq font-[400] inline"></span>
                                                </div>
                                                <div className="color-[#121214] pl-[32px]" style={{ position: "absolute", inset: "0px", zIndex: 0, pointerEvents: "none" }}></div>
                                            </div>
                                        </div>
                                        <div className="by-space-item">
                                            <div className="create-maker__input-bottom-tips">
                                                <span>Max:&nbsp;-- </span>
                                                <span className="create-maker__input-bottom-right-tips">
                                                    <div>
                                                        <span className="create-maker__max">Max</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center create-maker__price-input create-maker__price-limit" style={{ gap: "8px" }}>
                                    <div className="ant-space-item" >
                                        <div className="by-space by-space--vertical create-maker__form-item" style={{ gap: "4px" }}>
                                            <div className="by-space-item" >
                                                <div className="create-maker__form-title">Min. Transaction Amount</div>
                                            </div>
                                            <div className="by-space-item" >
                                                <div className="moly-input relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line transition-all ease-in-out duration-100 font-IBM hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed h-[40px] pl-[11px] pr-[9px] rounded gap-[8px] create-maker__form-input">
                                                    <input type="text" onChange={(e)=> setMinTrade(e.target.value)} placeholder="4,500" className="text-[12px] font-medium leading-[18px] appearance-none placeholder:text-[#ADB1B8] css-qydx2u" min="0" data="" style={{ background: "transparent", outline: "medium", border: "none", width: "100%" }} />
                                                    <div className="justify-items-center text-brandColor-bds-brand-900-text text-[12px] font-medium leading-[18px]" style={{ marginRight: "0px" }}>
                                                        <span className="moly-text text-[var(--bds-gray-t1-title)] css-1016zpq font-[400] inline"></span>
                                                    </div>
                                                    <div className="color-[#121214] pl-[32px]" style={{ position: "absolute", inset: "0px", zIndex: 0, pointerEvents: "none" }}>
                                                    </div></div>
                                            </div>
                                            <div className="by-space-item">
                                                <div className="create-maker__input-bottom-tips">
                                                    <span></span>
                                                    <span className="create-maker__input-bottom-right-tips">
                                                        <span className="create-maker__max">Min.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="by-space by-space--vertical create-maker__form-item" style={{ gap: "4px" }}>
                                            <div className="by-space-item" >
                                                <div className="create-maker__form-title">Max. Transaction Amount</div>
                                            </div>
                                            <div className="by-space-item" >
                                                <div className="moly-input relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line transition-all ease-in-out duration-100 font-IBM hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed h-[40px] pl-[11px] pr-[9px] rounded gap-[8px] create-maker__form-input">
                                                    <input onChange={(e)=> setMaxTrade(e.target.value)} type="text" placeholder="23,000,000" className="text-[12px] font-medium leading-[18px] appearance-none placeholder:text-[#ADB1B8] css-qydx2u" min="0" data=""  style={{ background: "transparent", outline: "medium", border: "none", width: "100%" }} />
                                                    <div className="justify-items-center text-brandColor-bds-brand-900-text text-[12px] font-medium leading-[18px]" style={{ marginRight: "0px" }}>
                                                        <span className="moly-text text-[var(--bds-gray-t1-title)] css-1016zpq font-[400] inline">
                                                        </span></div>
                                                    <div className="color-[#121214] pl-[32px]" style={{ position: "absolute", inset: "0px", zIndex: 0, pointerEvents: "none" }}>
                                                    </div></div>
                                            </div>
                                            <div className="by-space-item">
                                                <div className="create-maker__input-bottom-tips">
                                                    <span></span>
                                                    <span className="create-maker__input-bottom-right-tips">
                                                        <span className="create-maker__max">Max</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-maker__input-item create-maker__input-item-border">
                            <div className="create-maker__input-item-title">Requirements for Counterparty</div>
                            <div className="create-maker__item-content">
                                <div className="ant-space css-5jb6ku ant-space-vertical fiat-counter-party" style={{ gap: "8px" }}>
                                    <div className="ant-space-item" >
                                        <button type="button" className="ant-btn css-5jb6ku ant-btn-link css-5jb6ku ant-text-link-custom ant-text-link-custom-middle ant-text-link-custom-primary bds-theme-component-light">
                                            <i className="iconfont icon-plus"></i>
                                            <span>Add Now</span>
                                        </button>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{ flexWrap: "wrap", gap: "4px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-maker__input-item create-maker__input-item-border">
                            <div className="create-maker__input-item-title">Notes</div>
                            <div className="create-maker__item-content">
                                <div className="ant-input-show-count css-5jb6ku ant-input-custom ant-input-textarea-custom bds-theme-component-light ant-input-textarea ant-input-textarea-show-count css-5jb6ku" data-count="0 / 1000">
                                    <textarea placeholder="You may leave remarks for your counterparty below." rows="4" className="ant-input ant-input-sm css-5jb6ku"></textarea>
                                    <span className="ant-input-data-count">0 / 1000</span>
                                </div>
                                <div className="create-maker__remark-bottom">
                                    <span>1. The name on the payment account should be the same as that on your Bybit account. <br /></span>
                                    <span>2. Please make sure that coin names such as USDT are not mentioned in your transfer note. Otherwise, the transfer may fail.<br /></span>
                                </div>
                            </div>
                        </div>
                        <div className="create-maker__input-item create-maker__input-item-border">
                            <div className="create-maker__input-item-title">Payment Method</div>
                            <div className="create-maker__item-content">
                                <button onClick={()=> setpaymentMethod(true)} type="button" className="ant-btn css-5jb6ku ant-btn-default css-5jb6ku ant-btn-custom index_createPaymentBtn__rFYMh ant-btn-custom-middle bds-theme-component-light">
                                    <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{ gap: "8px" }}>
                                        <div className="ant-space-item" >
                                            <i className="iconfont icon-plus"></i>
                                        </div>
                                        <div className="ant-space-item">Manage Payment Method</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="create-maker__input-item create-maker__input-item-border">
                            <div className="create-maker__input-item-title">Contact Info</div>
                            <div className="create-maker__item-content">
                                <div className="index_tipContainer__nJzO3">
                                    <div className="index_tipItem__Ylf2W">No contact info added</div>
                                    <div className="index_tipItem__Ylf2W">
                                        <span>The addition of your contact info can improve your trading success rate. Head to the User Center to add.</span>
                                        <button type="button" className="ant-btn css-5jb6ku ant-btn-link css-5jb6ku ant-text-link-custom ant-text-link-custom-x-sm ant-text-link-custom-primary bds-theme-component-light">
                                            <span>Manage Contact Info</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-maker__publish-container">
                    <div className="create-maker__h2">Ad to Be Posted</div>
                    <div className="create-maker__content create-maker__publish-content">
                        <div className="create-maker__publish-side create-maker__sell-color">
                            <div className="space-between" style={{ width: "100%" }}>
                                <span>
                                    {/* <i className="fiat-iconfont fiat-icon--sell fiat-type-icon"></i> */}
                                    Sell&nbsp;
                                </span>
                            </div>&nbsp;
                        </div>
                        <div className="create-maker__publish-info">
                            <div className="create-maker__publish-item">
                                <span>Price</span>
                                <span className="create-maker__publish-item-value">
                                <span className="create-maker__placeholder">{fixedPrice ? fixedPrice : "--"}</span></span>
                            </div>
                            <div className="create-maker__publish-item">
                                <span>Total Quantity</span>
                                <span className="create-maker__publish-item-value">
                                    <span className="create-maker__placeholder">{totalQuality ? totalQuality : "--"}</span>
                                </span>
                            </div>
                            <div className="create-maker__publish-item">
                                <span>Limits</span>
                                <span className="create-maker__publish-item-value">
                                    <span className="create-maker__placeholder">{minTrade ? minTrade : "--"}</span>&nbsp; ~ &nbsp;<span className="create-maker__placeholder">{maxTrade ? maxTrade : "--"}</span></span>
                            </div>
                            <div className="create-maker__publish-item">
                                <span className="create-maker__payment-method-name">Payment Method</span>
                            </div>
                        </div>
                        <label className="ant-checkbox-wrapper css-5jb6ku ant-checkbox-custom create-maker__publish-agreement bds-theme-component-light css-5jb6ku">
                            <span onClick={()=> setCreatingAd(true)} className={`ant-checkbox css-5jb6ku ${creatingAd ? "ant-checkbox-checked" : ""} `}>
                                <input type="checkbox" className="ant-checkbox-input" value="" />
                                <span className="ant-checkbox-inner"></span>
                            </span>
                            <span>
                                <span>I have read and agreed to the
                                    <a href="/en/help-center/article/P2P-Terms-of-User-Service" target="_blank" rel="noopener noreferrer">《Terms and Conditions》</a>
                                    <a href="/en/help-center/article/P2P-Privacy-Agreement" target="_blank" rel="noopener noreferrer">《Privacy Policy of P2P》</a>
                                </span>
                            </span>
                        </label>
                        <button onClick={handleCreateAd} type="button" className="ant-btn css-5jb6ku ant-btn-primary ant-btn-block css-5jb6ku ant-btn-custom create-maker__publish-btn ant-btn-custom-middle ant-btn-custom-primary bds-theme-component-light" disabled={!creatingAd}>
                            <span>Post Ads</span>
                        </button>
                    </div>
                    <div className="ant-space css-5jb6ku ant-space-vertical share-stock-tips-wrapper" style={{ gap: "16px" }}>
                        <div className="ant-space-item" >
                            <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{ gap: "8px" }}>
                                <div className="ant-space-item" >
                                    <img className="share-stock-tips-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAByUExURUdwTPejAPemAPenAPefAP+fAPelAPelAPmnAPamAPSlAO+fAPenAPSlAPWmAPamAPmnAPenAPWmAPimAPenAPamAPalAPalAPinAPilAPaoAPimAPWjAPalAPenAPalAPimAPimAPqlAPamAPemAPemAI2IsiEAAAAldFJOUwBA398gEIBgn+9gECAwoJB/v1DPn8/QkL9vj69Qz3+wj+8wcKDKiQzbAAABKElEQVQ4y6WUa3eDIAyGBVEu1Vqndb2su+f//8UlCE56AHe69xOaR/ImBIviIVXVNtNqYJtQDVD/AxLXSwx67cUKOgGMbslAf7rlCPAW5oDLfXXv+LJb59sDHGeEGcNmjAPsQ1fPpaT6e7AayYscupj/Myw6pKo/ULRUV56hJIYm2+2WsKcohJHJVbY7AvAqvhFv/MNO320llVLSdkGtqrVPLoQf2Woq6vrq+F+ocT4070wGeAAxfLeEUI0xBs3cAhe4U7+EAhddcE4qUh0m+FgmQ6Qahaa4owSto81k5FLaSaCOs+TkAuh+oJrSgy65HwIt07eg+baYrjfuXsuYyALn0mtIDl0BKyWh0y8zpfMxr/YPpoavDHTz2Xj+bzGryzVBOD3w8/sBpaQglk/AiuoAAAAASUVORK5CYII=" alt="" />
                                </div>
                                <div className="ant-space-item">
                                    <div className="share-stock-tips-title">Tips</div>
                                </div>
                            </div>
                        </div>
                        <div className="ant-space-item" >
                            <div className="share-stock-tips-content">
                                <div className="share-stock-tips-content-detail">Your advertisements posted through the P2P Advertising Shared Assets service will be affected under one of the following circumstances: </div><br />
                                <div className="share-stock-tips-content-detail">1. After you transfer assets out of your Funding Account, one or more advertisements will be removed if your available balance is less than the min. transaction amount per advertisement required.</div><br />
                                <div className="share-stock-tips-content-detail">2. After an order transaction is complete, one or more advertisements will be removed if your available balance is less than the min. transaction amount per advertisement required.</div><br />
                            </div>
                        </div>
                        <div className="ant-space-item">
                            <img className="share-stock-tips-img" src="/fiat/trade/otc/static/media/faq.f63467f645edb75fe105.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {paymentMethod ? 
    <PaymentMethod handleCancel={()=> setpaymentMethod(false)} /> : ""}
</>
  
    )
}
