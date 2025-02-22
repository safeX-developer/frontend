import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import BuyModal from './modal/BuyModal';
export default function Buy() {
    // const navigate = useNavigate()
    // const [showModal, setShowModal] = useState(false)
    // const thHuish =  [
    //     {id:1, Mla:1},
    //     {id:2, Mla:1},
    //     {id:3, Mla:1},
    //     {id:4, Mla:1},
    //     {id:15, Mla:1},
    //     {id:5, Mla:1},
    //     {id:6, Mla:1},
    //     {id:7, Mla:1}      
    // ]

    // const handleProfile = (event = {})=>{
    //     navigate("/p2p/profile/280987389738902820-10902893")
    // }

  return (
    <>
    {/* {showModal ? <BuyModal handleCancelMedal={()=> setShowModal(false)}/> : ""} */}
   
    <div className="trade-list__content">
        hELLO
    {/* <div className="trade-table__wrapper">
        <div className="nt-spin-nested-loading trade-table__spin css-7o12g0">
            <div className="ant-spin-container">
                <div id="guide-step-five" style={{height: "150px"}}></div>
                <table>
                    <thead>
                        <tr>
                            <th>Advertiser</th>
                            <th>Price</th>
                            <th>Available<span className="delimiter">|</span>Limits</th>
                            <th>Payment Method</th>
                            <th>
                                <div className="moly-tag whitespace-nowrap font-medium inline-flex items-center gap-1 rounded data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px] bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text">Taker 0 Transaction Fees</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="trade-table__tbody">
                        {thHuish.map((item)=> (
                            <tr key={item.id}>
                            <td style={{width: "300px"}}>
                                <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center" id="guide-step-three" style={{gap: "16px"}}>
                                    <div className="ant-space-item" >
                                        <div className="by-avatar by-avatar--online" style={{height: "40px", width: "40px", fontSize: "20px"}}>
                                            <div className="by-avatar__container">
                                                <div className="by-avatar__container__letter">P</div>
                                                <div className="by-avatar__container__status"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="ant-space css-7o12g0 ant-space-vertical" style={{gap: "0px"}}>
                                            <div onClick={()=> handleProfile(item)} className="ant-space-item" >
                                                <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center" style={{gap: "0px"}}>
                                                    <div className="ant-space-item" >
                                                        <div className="advertiser-name css-7o12g0 ant-tooltip-custom bds-theme-component-light">
                                                            <span>Penthouse</span>
                                                        </div>
                                                    </div>
                                                    <div className="ant-space-item">
                                                        <div className="inline-block">
                                                            <img src="https://www.bybit.com/fiat/trade/otc/static/media/contactIcon.885f221c5e16fe2b0f880e92befe55bd.svg" alt="" className="undefined advertiser-auth-tag pointer" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ant-space-item" >
                                                <div className="advertiser-info">
                                                    <span>2,476&nbsp;Order(s)</span>
                                                    <span className="delimiter">|</span>
                                                    <span className="execute-rate css-7o12g0 ant-tooltip-custom bds-theme-component-light">97&nbsp;%</span>
                                                </div>
                                            </div>
                                            <div className="ant-space-item">
                                                <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-baseline" style={{marginTop: "6px", gap: "16px"}}>
                                                    <div className="ant-space-item" >
                                                        <span className="moly-text text-[var(--bds-gray-t2)] css-z084bj font-[400] inline pointer css-7o12g0 ant-tooltip-custom bds-theme-component-light">
                                                            <img src="https://www.bybit.com/fiat/trade/otc/static/media/clock.8fb8bc6c6fe17cf175ba8a0abda873f5.svg" alt="" width="14" style={{verticalAlign: "-2px"}} />15Min(s)</span>
                                                        </div>
                                                        <div className="ant-space-item"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{minWidth: "120px", maxWidth: "180px"}}>
                                    <div className="ant-space css-7o12g0 ant-space-vertical ant-space-align-left" style={{gap: "8px"}}>
                                        <div className="ant-space-item">
                                            <span className="price-amount">1,661.80 <span className="price-unit">NGN</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td style={{minWidth: "220px"}}>
                                <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center" style={{gap: "16px"}}>
                                    <div className="ant-space-item">
                                        <div className="ant-space css-7o12g0 ant-space-vertical" style={{gap: "6px"}}>
                                            <div className="ant-space-item" >
                                                <div className="ql-value">190.7800&nbsp;USDT</div>
                                            </div>
                                            <div className="ant-space-item">
                                                <div className="ql-value">100,000.00&nbsp;~&nbsp;317,038.20&nbsp;NGN</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                                <td style={{width: "196px"}}>
                                    <div className="trade-list-tag css-7o12g0 ant-tooltip-custom bds-theme-component-light">Bank Transfer</div>
                                </td>
                                <td className="trade-list-action-button">
                                    <button onClick={()=> setShowModal(true)} type="button" className="ant-btn css-7o12g0 ant-btn-primary css-7o12g0 ant-btn-custom ant-btn-custom-sm ant-btn-custom-tradeLong bds-theme-component-light">
                                        <span>Buy USDT</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="trade-table__pagination">
                    <ul className="pagination new-style">
                        <li className="pagination-prev pagination-disabled" aria-disabled="true">
                            <button type="button" aria-label="prev page" className="pagination-item-link" ></button>
                        </li>
                        
                        <li className="pagination-item pagination-item-1 pagination-item-active" tabIndex="0">
                            <a rel="nofollow">1</a>
                        </li>
                         
                        <li className="pagination-item pagination-item-2" tabIndex="0">
                            
                            <a rel="nofollow">2</a>
                        </li>
                          
                        <li className="pagination-item pagination-item-3" tabIndex="0">
                            
                            <a rel="nofollow">3</a>
                        </li>
                        
                        <li className="pagination-item pagination-item-4" tabIndex="0">
                             
                            <a rel="nofollow">4</a>
                        </li>
                        
                        <li className="pagination-item pagination-item-5 pagination-item-before-jump-next" tabIndex="0">
                               
                            <a rel="nofollow">5</a>
                        </li>
                        
                        <li tabIndex="0" className="pagination-jump-next">
                            <button type="button" aria-label="next page" className="pagination-item-link"></button>
                        </li>
                        
                        <li className="pagination-item pagination-item-41" tabIndex="0">
                            
                            <a rel="nofollow">41</a>
                        </li>
                    
                        <li tabIndex="0" className="pagination-next" aria-disabled="false">
                            <button type="button" aria-label="next page" className="pagination-item-link"></button>
                        </li>
                        <li className="pagination-options"></li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </div>
    </div> */}
    </div>
    </>


  )
}
