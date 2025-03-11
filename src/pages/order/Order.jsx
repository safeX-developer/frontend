import React from 'react'
import "../../styles/p2p/order.css"
import { useNavigate } from 'react-router-dom'
export default function Order() {
    const navigator = useNavigate()
    let trx = [
        {id: 1, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "DR. HYMAN", status: "Completed" , date: "2025-03-08 10:19:50"},
        {id: 2, type: "buy", orderId: 1898300882836172800 , price: 1550.00,fiatAmount:5000.00, cryptoAmount: 3.2259 , counterPart: "Quwazeey", status: "Completed", date: "2025-03-08 10:19:50" },
        {id: 3, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "Undead08", status: "Completed", date: "2025-03-08 10:19:50"},
        {id: 4, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "User3108hsc", status: "Completed", date: "2025-03-08 10:19:50"},
        {id: 5, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "User8742uW", status: "Completed", date: "2025-03-08 10:19:50"},
        {id: 6, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "User2618spu", status: "Completed", date: "2025-03-08 10:19:50"},
        {id: 7, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "User7912rGp", status: "Completed", date: "2025-03-08 10:19:50"},
        {id: 8, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "User1651ND", status: "Canceled", date: "2025-03-08 10:19:50"},
        {id: 9, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "User00005tv", status: "Completed", date: "2025-03-08 10:19:50"},
        {id: 10, type: "sell", orderId: 1898302626562744320, price: 1549.92,fiatAmount:9459.16, cryptoAmount: 6.1030, counterPart: "Dser7912rGp", status: "Completed", date: "2025-03-08 10:19:50"},
    ]

    const HandleSingleOrder= ((item)=>{
        navigator(`/p2p/order-list/${item}`)
    })

  return (
    <div className="fiat-otc__order-list-wrapper">

        <div className="trx-page-section">
            <div className="trx-header">
                <div className="right">
                    <p>Available Balance</p>
                    <div className="amount"><span>$ 140,000</span>.00</div>
                    <div className='pending Kjhls JNskeokbed'>Pending Balance: <span>$19,900.99 
                        <img src="/asset/icon.svg" alt="" />
                        </span>  Total Balance: 
                        <span>$159,900.99
                        <img src="/asset/icon.svg" alt="" />
                        </span> 
                    </div>
                </div>
            </div>
        </div>
   
        <div className="tab-list">
            <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{gap: "40px"}}>
                <div className="ant-space-item" >
                    <div className="tab">In Progress</div>
                </div>
                <div className="ant-space-item">
                    <div className="tab selected">All</div>
                </div>
            </div>
            <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{gap: "16px"}}>
                <div className="ant-space-item" >
                    <div className="no-wrap font-medium transition-all inline-flex items-center data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed text-sm gap-[2px] text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer">Export Task</div>
                </div>
                <span className="ant-space-item-split" >
                    <span className="tab-list-devider"></span>
                </span>
                <div className="ant-space-item">
                    <div className="css-5jb6ku ant-tooltip-custom bds-theme-component-light no-wrap font-medium transition-all inline-flex items-center data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed text-sm gap-[2px] text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer">Export</div>
                </div>
            </div>
        </div>
        <div className="order-list">
            <div className="search-bar-wrapper">
                <div className="by-grid-row by-grid-row--space-between by-grid-row--top" style={{rowGap: "0px"}}>
                    <div className="by-grid-col">
                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "8px"}}>
                            <div className="ant-space-item" >
                                <div>Coin</div>
                            </div>
                            <div className="ant-space-item">
                                <div className="ant-select css-5jb6ku ant-select-custom ant-select-custom-sm bds-theme-component-light css-5jb6ku ant-select-single ant-select-show-arrow" style={{width: "232px"}}>
                                    <div className="ant-select-selector">
                                        <span className="ant-select-selection-search">
                                            <input type="search" autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_5_list" aria-autocomplete="list" aria-controls="rc_select_5_list" aria-activedescendant="rc_select_5_list_0" readonly="" unselectable="on" style={{opacity: 0}} id="rc_select_5" />
                                        </span>
                                        <span className="ant-select-selection-item" title="All">All</span>
                                    </div>
                                    <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{userSelect: "none"}}>
                                        <svg className="icon-caret-down" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="by-grid-col">
                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "8px"}}>
                            <div className="ant-space-item" >
                                <div>Type</div>
                            </div>
                            <div className="ant-space-item">
                                <div className="ant-select css-5jb6ku ant-select-custom ant-select-custom-sm bds-theme-component-light css-5jb6ku ant-select-single ant-select-show-arrow" style={{width: "232px"}}>
                                    <div className="ant-select-selector">
                                        <span className="ant-select-selection-search">
                                            <input type="search" autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_6_list" aria-autocomplete="list" aria-controls="rc_select_6_list" aria-activedescendant="rc_select_6_list_0" readonly="" unselectable="on" value="" style={{opacity: 0}} id="rc_select_6" />
                                        </span>
                                        <span className="ant-select-selection-item" title="Buy / Sell">Buy / Sell</span>
                                    </div>
                                    <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{userSelect: "none"}}>
                                        <svg className="icon-caret-down" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="by-grid-col">
                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "8px"}}>
                            <div className="ant-space-item" >
                                <div>Status</div>
                            </div>
                            <div className="ant-space-item">
                                <div className="ant-select css-5jb6ku ant-select-custom ant-select-custom-sm bds-theme-component-light css-5jb6ku ant-select-single ant-select-show-arrow" style={{width: "232px"}}>
                                    <div className="ant-select-selector">
                                        <span className="ant-select-selection-search">
                                            <input type="search" autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_7_list" aria-autocomplete="list" aria-controls="rc_select_7_list" aria-activedescendant="rc_select_7_list_0" readonly="" unselectable="on" value="" style={{opacity: 0}} id="rc_select_7" />
                                        </span>
                                        <span className="ant-select-selection-item" title="All">All</span>
                                    </div>
                                    <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{userSelect: "none"}}>
                                        <svg className="icon-caret-down" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="by-grid-col">
                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "8px"}}>
                            <div className="ant-space-item" >
                                <div>Date</div>
                            </div>
                            <div className="ant-space-item">
                                <div className="by-date-picker by-date-picker-range">
                                    <div className="by-date-picker-input by-date-picker-input-active">
                                        <input readonly="" placeholder="Start date" size="12" autocomplete="off" value=""/>
                                    </div>
                                    <div className="by-date-picker-range-separator">
                                        <span aria-label="to" className="by-date-picker-separator">
                                            <i className="iconfont icon-transferin"></i>
                                        </span>
                                    </div>
                                    <div className="by-date-picker-input">
                                        <input readonly="" placeholder="End date" size="12" autocomplete="off" value=""/>
                                    </div>
                                    <div className="by-date-picker-active-bar" style={{left: "0px", width: "154px", position: "absolute"}}></div>
                                    <span className="by-date-picker-suffix">
                                        <i className="iconfont icon-date1"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="otc-order-table-wrapper">
                <div className="fiat__spin-wrapper">
                    <div className="fiat__spin-container">
                        <table className="otc-order-table">
                            <thead>
                                <tr>
                                    <th>Type/Date</th>
                                    <th>Order No.</th>
                                    <th>Price</th>
                                    <th>Fiat / Crypto Amount</th>
                                    <th>Counterparty</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trx.map((item)=>(
                                    <tr key={item.id} onClick={()=> HandleSingleOrder(item.orderId)}>
                                        <td>
                                            <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "12px"}}>
                                                <div className="ant-space-item" >
                                                    <div className={`side ${item.type}`}>{(item.type).toUpperCase()} USDT</div>
                                                </div>
                                                <div className="ant-space-item">2025-03-08 10:19:50</div>
                                            </div>
                                        </td>
                                        <td className="fiat-amount">
                                            <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center order-id" style={{gap: "8px"}}>
                                                <div className="ant-space-item" >
                                                    <span className="id">1898302626562744320</span>
                                                </div>
                                                <div className="ant-space-item">
                                                    <i className="fiat-iconfont fiat-icon--copy"></i>
                                                </div>
                                            </div>
                                            <div style={{marginTop: "4px"}}></div>
                                        </td>
                                        <td>1,549.92 NGN</td>
                                        <td className="fiat-coin-amount">9,459.16 NGN<br/><br/>6.1030 USDT</td>
                                        <td>
                                            <div className="order-detail-couterparty-name css-5jb6ku ant-tooltip-custom bds-theme-component-light">DR. HYMAN</div>
                                            <div className="order-unread-message-icon">
                                                <i className="iconfont icon-chatroom" data-rtl="true"></i>
                                                Go to Chatbox
                                            </div>
                                        </td>
                                        <td className="fiat-order-status">
                                            <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-start status" style={{gap: "4px"}}>
                                                <div className="ant-space-item" >
                                                    <i className="fiat-iconfont fiat-icon--success-big success"></i>
                                                </div>
                                                <div className="ant-space-item">
                                                    <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "8px"}}>
                                                        <div className="ant-space-item">Completed</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="otc-order__download-text">
                                                <span className="otc-order__download-span css-5jb6ku ant-tooltip-custom bds-theme-component-light">Receipt</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                              
                               
                            </tbody>
                        </table>
                        <div className="otc-order-pagination-wrapper">
                            <ul className="pagination">
                                <li className="pagination-prev pagination-disabled" aria-disabled="true">
                                    <button type="button" aria-label="prev page" className="pagination-item-link" disabled=""></button>
                                </li>
                                <li className="pagination-item pagination-item-1 pagination-item-active" tabindex="0">
                                    <a rel="nofollow">1</a>
                                </li>
                                <li className="pagination-item pagination-item-2" tabindex="0">
                                    <a rel="nofollow">2</a>
                                </li>
                                <li className="pagination-item pagination-item-3" tabindex="0">
                                    <a rel="nofollow">3</a>
                                </li>
                                <li className="pagination-item pagination-item-4" tabindex="0">
                                    <a rel="nofollow">4</a>
                                </li>
                                <li className="pagination-item pagination-item-5 pagination-item-before-jump-next" tabindex="0">
                                    <a rel="nofollow">5</a>
                                </li>
                                <li tabindex="0" className="pagination-jump-next">
                                    <button type="button" aria-label="next page" className="pagination-item-link"></button>
                                </li>
                                <li className="pagination-item pagination-item-156" tabindex="0">
                                    <a rel="nofollow">156</a>
                                </li>
                                <li tabindex="0" className="pagination-next" aria-disabled="false">
                                    <button type="button" aria-label="next page" className="pagination-item-link"></button>
                                </li>
                                <li className="pagination-options"></li>
                            </ul>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
