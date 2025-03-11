import React from 'react'
import "../../styles/p2p/order-list.css"

export default function OrderList() {
  return (
    <div className="fiat-otc__order-detail-wrapper">
        <div className="order-detail-title-wrapper">
            <div className="by-grid-row by-grid-row--space-between by-grid-row--bottom" style={{rowGap: "0px"}}>
                <div className="by-grid-col order-detail-title-col">
                    <div className="title">Sell USDT</div> 
                </div>
                <div className="by-grid-col">
                    <div className="by-space by-space--horizontal by-space-align--center order-id-and-time" style={{gap: "16px"}}>
                        <div className="by-space-item" >
                            <div>2025-02-07 12:24:26</div>
                        </div>
                        <div className="by-space-item">
                            <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "4px"}}>
                                <div className="by-space-item" >1887824731945422848</div>
                                <div className="by-space-item">
                                    <i className="fiat-iconfont fiat-icon--copy"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="by-space by-space--horizontal by-space-align--start content-wrapper" style={{gap: "24px"}}>
            <div className="by-space-item" >
                <div>
                    <div className="content">
                        <div className="header">
                            <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "10px"}}>
                                <div className="by-space-item" >
                                    <i className="order-icon fiat-iconfont fiat-icon--success-big success" style={{fontSize: "36px"}}></i>
                                </div>
                                <div className="by-space-item">
                                    <div className="by-space by-space--vertical content-wrapper-title" style={{gap: "4px"}}>
                                        <div className="by-space-item" >
                                            <div className="header-title">Transaction Completed</div>
                                        </div>
                                        <div className="by-space-item" >
                                            <div className="by-space by-space--vertical" style={{gap: "4px"}}>
                                                <div className="by-space-item" >
                                                    <div className="header-title-info">This order has concluded, and the assets are no longer locked by Bybit. 
                                                        <span className="header-title-info-span">Do not blindly trust strangers or release funds without confirming.</span>
                                                    </div>
                                                </div>
                                                <div className="by-space-item" >
                                                    <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "2px"}}>
                                                        <div className="by-space-item" >
                                                            <div className="header-title-info">Sold</div>
                                                        </div>
                                                        <div className="by-space-item">
                                                            <div className="purchase-quantity">9.6345 USDT</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="by-space-item" >
                                                    <div className="header-title-info"></div>
                                                </div>
                                                <div className="by-space-item">
                                                    <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "8px"}}>
                                                        <div className="by-space-item" >
                                                            <button type="button" className="ant-btn css-5jb6ku ant-btn-default css-5jb6ku ant-btn-custom ant-btn-custom-x-sm ant-btn-custom-secondaryBrand bds-theme-component-light">
                                                                <span>Order Dispute?</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fiat-otc__order-detail-step">
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-start" style={{gap: "4px"}}>
                                    <div className="ant-space-item" >
                                        <i className="iconfont icon-true step-icon"></i>
                                    </div>
                                    <div className="ant-space-item" >
                                        <div className="step-label">Pending Counterparty Payment</div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="step-dash-line"></div>
                                    </div>
                                </div>
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-start" style={{gap: "4px"}}>
                                    <div className="ant-space-item" >
                                        <i className="iconfont icon-true step-icon"></i>
                                    </div>
                                    <div className="ant-space-item" >
                                        <div className="step-label">Coin Release in Progress</div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="step-dash-line"></div>
                                    </div>
                                </div>
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-start active" style={{gap: "4px"}}>
                                    <div className="ant-space-item" >
                                        <i className="iconfont icon-true step-icon"></i>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="step-label">Transaction Completed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body no-process-btn">
                            <div className="ant-space css-5jb6ku ant-space-vertical fiat-otc__order-summary" style={{gap: "4px"}}>
                                <div className="ant-space-item" >
                                    <div className="fiat-otc__summary-title">
                                        <i className="fiat-otc__summary-icon"></i>
                                        Order Info
                                    </div>
                                </div>
                                <div className="ant-space-item">
                                    <div className="summary-left" id="fiat-otc-order__summary">
                                        <div className="by-grid-row by-grid-row--space-between by-grid-row--top summary-info" style={{marginLeft: "-16px", marginRight: "-16px", rowGap: "0px"}}>
                                            <div className="by-grid-col by-grid-col--6 summary-item" style={{paddingLeft: "16px", paddingRight: "16px"}}>
                                                <div className="summary-item-title">Receive</div>
                                                <div className="summary-item-value pay sell">15,000.00 NGN</div>
                                            </div>
                                            <div className="by-grid-col by-grid-col--6 summary-item" style={{paddingLeft: "16px", paddingRight: "16px"}}>
                                                <div className="summary-item-title">Price</div>
                                                <div className="summary-item-value sell">1,556.91 NGN</div>
                                            </div>
                                            <div className="by-grid-col by-grid-col--6 summary-item" style={{paddingLeft: "16px", paddingRight: "16px"}}>
                                                <div className="summary-item-title">Total Quantity</div>
                                                <div className="summary-item-value sell">9.6345 USDT</div>
                                            </div>
                                            <div className="by-grid-col by-grid-col--6 summary-item" style={{paddingLeft: "16px", paddingRight: "16px"}}>
                                                <div className="summary-item-title">Transaction Fees
                                                    <i className="fiat-iconfont fiat-icon--wenhao css-5jb6ku ant-tooltip-custom bds-theme-component-light"></i>
                                                </div>
                                                <div className="summary-item-value sell">0 USDT</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="by-space by-space--vertical index_orderPaymentMethod__XU8ar" style={{gap: "8px"}}>
                                <div className="by-space-item" >
                                    <div className="index_paymentTitle__DMKC1">
                                        <i className="index_paymentIcon__ZeDGN"></i>
                                        <div className="index_orderPaymentTitle__9-Q4B">Payment Method</div>
                                    </div>
                                </div>
                                <div className="by-space-item">
                                    <div className="index_paddingLeft__ocogI">
                                        <div id="fiat-otc-order__payment">
                                            <div>
                                                <div className="by-grid-row by-grid-row--start by-grid-row--top index_paymentWrapper__tXDlM" style={{rowGap: "0px"}}>
                                                    <div className="by-grid-col by-grid-col--24 index_paymentTitleWrapper__lLKl7">
                                                        <div className="index_title2__6idU+">
                                                            <span>Bank Transfer</span>
                                                        </div>
                                                    </div>
                                                    <div className="by-grid-col by-grid-col--24 index_paymentDetail__KzTOK">
                                                        <div className="by-grid-row by-grid-row--start by-grid-row--top" style={{marginBottom: "4px", rowGap: "0px"}}>
                                                            <div className="by-grid-col by-grid-col--8 index_paymentLabel__3ZEQP">Name</div>
                                                            <div className="by-grid-col by-grid-col--16">
                                                                <div className="by-space by-space--horizontal by-space-align--center index_paymentValue__i6xhe" style={{gap: "4px"}}>
                                                                    <div className="by-space-item" >VICTOR OTUNG</div>
                                                                    <div className="by-space-item">
                                                                        <i className="fiat-iconfont fiat-icon--copy" style={{color: "rgb(129, 133, 140)"}}></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="by-grid-row by-grid-row--start by-grid-row--top" style={{marginBottom: "4px", rowGap: "0px"}}>
                                                            <div className="by-grid-col by-grid-col--8 index_paymentLabel__3ZEQP">Bank Account Number</div>
                                                            <div className="by-grid-col by-grid-col--16">
                                                                <div className="by-space by-space--horizontal by-space-align--center index_paymentValue__i6xhe" style={{gap: "4px"}}>
                                                                    <div className="by-space-item" >8911383777</div>
                                                                    <div className="by-space-item">
                                                                        <i className="fiat-iconfont fiat-icon--copy" style={{color: "rgb(129, 133, 140)"}}></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="by-grid-row by-grid-row--start by-grid-row--top" style={{marginBottom: "4px", rowGap: "0px"}}>
                                                            <div className="by-grid-col by-grid-col--8 index_paymentLabel__3ZEQP">Bank Branch</div>
                                                            <div className="by-grid-col by-grid-col--16">
                                                                <div className="by-space by-space--horizontal by-space-align--center index_paymentValue__i6xhe" style={{gap: "4px"}}>
                                                                    <div className="by-space-item" >Lagos</div>
                                                                    <div className="by-space-item">
                                                                        <i className="fiat-iconfont fiat-icon--copy" style={{color: "rgb(129, 133, 140)"}}></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="by-grid-row by-grid-row--start by-grid-row--top" style={{marginBottom: "4px", rowGap: "0px"}}>
                                                            <div className="by-grid-col by-grid-col--8 index_paymentLabel__3ZEQP">Bank Name</div>
                                                            <div className="by-grid-col by-grid-col--16">
                                                                <div className="by-space by-space--horizontal by-space-align--center index_paymentValue__i6xhe" style={{gap: "4px"}}>
                                                                    <div className="by-space-item" >Palmpay</div>
                                                                    <div className="by-space-item">
                                                                        <i className="fiat-iconfont fiat-icon--copy" style={{color: "rgb(129, 133, 140)"}}></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-space css-5jb6ku ant-space-vertical order-detail-footer" style={{gap: "8px"}}>
                                <div className="ant-space-item">
                                    <button type="button" className="ant-btn css-5jb6ku ant-btn-default css-5jb6ku ant-btn-custom ant-btn-custom-sm bds-theme-component-light">
                                        <span>View My Assets</span>
                                    </button>
                                </div>
                            </div>
                            <div className="otc__detect-sticky"></div>
                        </div>
                    </div>
                    <div className="ant-space css-5jb6ku ant-space-vertical order-evaluate" style={{gap: "0px"}}>
                        <div className="ant-space-item" >
                            <div className="evaluate-title">
                                <div className="evaluate-title-left">
                                    <h2>Leave A Review</h2>
                                </div>
                            </div>
                        </div>
                        <div className="ant-space-item" >
                            <div className="order-evaluate-content content-padding">
                                <p>How was your experience with this buyer?</p>
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center evaluate-list" style={{gap: "16px"}}>
                                    <div className="ant-space-item" >
                                        <div className="evaluate-item">
                                            <span className="evaluate-item-icon">
                                                <i className="fiat-iconfont fiat-icon--a-thumbup"></i>
                                            </span>
                                            <em>Good</em>
                                        </div>
                                    </div>
                                    <div className="ant-space-item">
                                        <div className="evaluate-item">
                                            <span className="evaluate-item-icon">
                                                <i className="fiat-iconfont fiat-icon--a-thumbup revert"></i>
                                            </span>
                                            <em>Bad</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ant-space-item" ></div>
                        <div className="ant-space-item" ></div>
                        <div className="ant-space-item"></div>
                    </div>
                    <div className="by-space by-space--vertical order-faq-list" style={{gap: "0px"}}>
                        <div className="by-space-item" >
                            <div className="order-title-h2">FAQ</div>
                        </div>
                        <div className="by-space-item">
                            <div direction="vertical" className="order-content">
                                <div className="order-item">
                                    <div className="by-space by-space--horizontal by-space-align--center faq-title" style={{gap: "8px"}}>
                                        <div className="by-space-item" >
                                            <div className="faq-text">What if I realized the buyer did not make any payment or paid less than the required amount after releasing the coin?</div>
                                        </div>
                                        <div className="by-space-item">
                                            <i className="icon iconfont icon-down"></i>
                                        </div>
                                    </div>
                                    <div className="faq-content">Please click the Need Help button above and follow the instructions given to submit an appeal. However, please note that there is no 100% guarantee of asset recovery. Kindly be reminded that it is the seller's responsibility to confirm the correct amount of payment is credited to your available balance before releasing the coin. </div>
                                </div>
                                <div className="order-item">
                                    <div className="by-space by-space--horizontal by-space-align--center faq-title" style={{gap: "8px"}}>
                                        <div className="by-space-item" >
                                            <div className="faq-text">What can I do to avoid payment being reversed by the buyer after order completion?</div>
                                        </div>
                                        <div className="by-space-item">
                                            <i className="icon iconfont icon-down"></i>
                                        </div>
                                    </div>
                                    <div className="faq-content">There is no perfect method to avoid reverse payment scams. The best practice is to find a trustworthy buyer by looking at their reviews, ratings, trading data, and user tier. One of the ways you may try is to transfer the payment to another account immediately after receiving the payment from the buyer. In this way, even if the buyer attempts to reverse the payment, it will not be processed successfully. However, this may cause your bank account to be frozen and your credits might be affected negatively. </div>
                                </div>
                                <div className="order-item">
                                    <div className="by-space by-space--horizontal by-space-align--center faq-title" style={{gap: "8px"}}>
                                        <div className="by-space-item" >
                                            <div className="faq-text">What can I do if my bank account is frozen after receiving the payment from the buyer?</div>
                                        </div>
                                        <div className="by-space-item">
                                            <i className="icon iconfont icon-down"></i>
                                        </div>
                                    </div>
                                    <div className="faq-content">Bank account freezing is a common issue that happens to P2P traders. We suggest you contact your bank as soon as possible to understand the reason and take any necessary steps to unfreeze your account. Unfortunately, we could not help much with the issue as Bybit has no business relationship with the payment method displayed on the platform. If there is information required from the buyer, please communicate actively with the buyer and seek help.</div>
                                </div>
                                <div className="order-item">
                                    <div className="by-space by-space--horizontal by-space-align--center faq-title" style={{gap: "8px"}}>
                                        <div className="by-space-item" >
                                            <div className="faq-text">How can I report that the buyer is using a third-party payment?</div>
                                        </div>
                                        <div className="by-space-item">
                                            <i className="icon iconfont icon-down"></i>
                                        </div>
                                    </div>
                                    <div className="faq-content">You may click the "Report" button in the Order Chat Box to report any violation behavior of your counterparty. Alternatively, you may leave a negative review on your counterparty or block him/her so that you will never encounter this trader anymore. These data will be reflected in the user's security score which may cause account suspension or function restrictions. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="by-space-item">
                <div className="message-container order-detail-message-container-bybot">
                    <div className="im-container" id="fiat-otc-order__im">
                        <div className="moly-space flex items-center im-container-caption" style={{gap: "8px"}}>
                            <div className="moly-space-item moly-space-item-first">
                                <div className="by-avatar" style={{height: "40px", width: "40px", fontSize: "20px"}}>
                                    <div className="by-avatar__container">
                                        <div className="by-avatar__container__letter">U</div>
                                    </div>
                                </div>
                            </div>
                            <div className="moly-space-item moly-space-item-last">
                                <div className="moly-space flex-col inline-flex moly-space-vertical items-start im-container-caption__info" style={{gap: "8px"}}>
                                    <div className="moly-space-item moly-space-item-first">
                                        <div>
                                            <span className="im-container-caption__info-nickname">Undead08</span>
                                        </div>
                                    </div>
                                    <div className="moly-space-item moly-space-item-last">
                                        <div className="im-container-flex">
                                            <div className="moly-space flex items-center im-container-caption__info-verified" style={{gap: "4px"}}>
                                                <div className="moly-space-item moly-space-item-first">
                                                    <i className="fiat-iconfont fiat-icon--verified"></i>
                                                </div>
                                                <div className="moly-space-item">Verified</div>
                                                <div className="moly-space-item"><span>:</span></div>
                                                <div className="moly-space-item moly-space-item-last">MIRACLE NWABUEZE</div>
                                            </div>
                                            <div className="moly-space flex items-center im-devider" style={{gap: "8px"}}>
                                                <div className="moly-space-item moly-space-item-first moly-space-item-last">
                                                    <div className="fiat-divider fiat-divider--vertical"></div>
                                                </div>
                                            </div>
                                            <div className="moly-space flex items-center im-inform" style={{gap: "8px"}}>
                                                <div className="moly-space-item moly-space-item-first moly-space-item-last">
                                                    <span>Report Scam</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="im-container-messages">
                            <div className="im-container-messages-dialog" style={{paddingTop: "16px"}}>
                                <div>
                                    <div className="im-container-messages-dialog__time">2025-02-07 12:24:26</div>
                                    <div className="im-container-messages-dialog__alarm">
                                        <div className="by-space by-space--horizontal by-space-align--start" style={{gap: "8px"}}>
                                            <div className="by-space-item" >
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkBAMAAABoCkdnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAhUExURUdwTO9FS+9FSu9GSu9ITe9FS+9FSu9FTO9FSu9GSu9FSqJrZCcAAAAKdFJOUwCf34Ygwe89Y68ruEsSAAAAnElEQVQoz7XRLRbCMBAE4IWWHwkWVY0qtqqqAhVdVcEBqlFortEXCnPKJptNshygI7L5YiYvIVo5Rf3Hy6RVAq3iBjCKT2BWvAI26wiXV+IWU4MhsUHlTlSN40fVOOIkvAfGqj7Q5hpPjFIjrJjvyC/XuBv6ayBUFUipQ03Mwz8Ebzq//ogOfD7seYy042l7HkYoMVTezjntel+3AECXX7RijP/hAAAAAElFTkSuQmCC" alt=""/>
                                            </div>
                                            <div className="by-space-item">
                                                <div className="alarm-text">Be careful not to be fooled by fake Customer Support agents. Real Customer Support agents have a blue checkmark next to their profile picture.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="im-container-messages-dialog__time">2025-02-07 12:24:26</div>
                                    <div className="im-container-messages-dialog__info">
                                        <div className="by-space by-space--horizontal by-space-align--start" style={{gap: "8px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--news-full im-container-messages-dialog__notice-icon"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <div>A buyer has submitted an order but has yet to complete the payment. Please note that according to our Terms and Conditions, if the buyer's bank account name is inconsistent with his/her registered name on Bybit, you should reject the order and issue a refund to the buyer. Otherwise, you may be disqualified from posting ads on Bybits P2P platform.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div>
                                    <div className="im-container-messages-dialog__time">2025-02-07 12:25:16</div>
                                    <div className="im-container-messages-dialog__info">
                                        <div className="by-space by-space--horizontal by-space-align--start" style={{gap: "8px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--news-full im-container-messages-dialog__notice-icon"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <div>The buyer has successfully completed the payment. Please confirm receipt and proceed to release the coins.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="im-container-messages-dialog__time">2025-02-07 12:27:57</div>
                                    <div className="im-container-messages-dialog__message others">
                                        <div className="im-container-messages-dialog__message__avatar">
                                            <div className="by-avatar" style={{height: "40px", width: "40px", fontSize: "20px"}}>
                                                <div className="by-avatar__container">
                                                    <div className="by-avatar__container__letter">U</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="im-container-messages-dialog__message_withname">
                                            <span>Undead08 (Buyer)</span>
                                            <div className="im-container-messages-dialog__message__bubble">sent</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="im-container-messages-dialog__time">2025-02-07 12:28:35</div>
                                    <div className="im-container-messages-dialog__info">
                                        <div className="by-space by-space--horizontal by-space-align--start" style={{gap: "8px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--news-full im-container-messages-dialog__notice-icon"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <div>You've successfully released USDT to the buyer.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="im-container-bybot" data-bybot-platform-hidden="p2p">
                            <img className="im-container-bybot-img pointer" src="/fiat/trade/otc/static/media/bybot.37112c059e8724453ebe.gif" alt="" />
                            <div className="im-container-bybot-textarea">
                                <span className="im-container-bybot-textarea-span" title="If issues arise, communicate with the counterparty first. If unresolved, file a dispute.">If issues arise, communicate with the counterparty first. If unresolved, file a dispute.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="im-container-bybot-textarea-icon pointer" viewBox="0 0 1024 1024">
                                <path fill="currentColor" d="M723.2 783.53a42.667 42.667 0 0 0 60.33-60.33L572.33 512l211.2-211.2a42.667 42.667 0 0 0-60.33-60.33L512 451.67l-211.2-211.2a42.667 42.667 0 0 0-60.33 60.33L451.67 512l-211.2 211.2a42.667 42.667 0 1 0 60.33 60.33L512 572.33l211.2 211.2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="im-container__bottom">
                            <div className="im-container__bottom__input">
                                <textarea className="im-container__bottom__input-textarea" placeholder="Enter your message" maxlength="255" style={{height: "19px"}}></textarea>
                                <textarea className="im-container__bottom__input-compute" readonly=""></textarea>
                            </div>
                            <div className="im-container__bottom__upload">
                                <div>
                                    <input className="im-container__bottom__upload-input" type="file" id="upload-img"/>
                                    <button type="button" className="ant-btn css-5jb6ku ant-btn-default css-5jb6ku ant-btn-custom im-container__bottom__upload-icon css-5jb6ku ant-tooltip-custom bds-theme-component-light ant-btn-custom-middle ant-btn-custom-button bds-theme-component-light">
                                        <i className="iconfont icon-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="by-button im-container__bottom__send by-button--disabled" type="button">
                                <span className="by-button__content">
                                    <i className="fiat-iconfont fiat-icon--send"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
