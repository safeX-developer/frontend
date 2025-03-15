import React, { useState } from 'react'

export default function PaymentMethod({handleCancel}) {
    const [checked, setChecked] = useState(false)
    let stateEl = false
    const handleChecked = (()=>{
        stateEl =! stateEl
        setChecked(stateEl)
    })
  return (
    <div>
        <div className="ant-modal-root css-5jb6ku">
            <div className="ant-modal-mask"></div>
            <div tabindex="-1" className="ant-modal-wrap ant-modal-centered">
                <div role="dialog" aria-labelledby=":rdp:" aria-modal="true" className="ant-modal css-5jb6ku css-5jb6ku ant-modal-custom createPaymentManageDialog bds-theme-component-light" style={{width: "480px", transformOrigin: "-65.3333px 153.68px"}}>
                    <div tabindex="0" aria-hidden="true" style={{width: "0px", height: "0px", overflow: "hidden", outline: "none"}}></div>
                    <div className="ant-modal-content">
                        <button onClick={handleCancel} type="button" aria-label="Close" className="ant-modal-close">
                            <span className="ant-modal-close-x">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3002 12.243C11.5606 12.5034 11.9827 12.5034 12.243 12.243C12.5034 11.9827 12.5034 11.5606 12.243 11.3002L8.94327 8.00046L12.2431 4.70059C12.5035 4.44024 12.5035 4.01813 12.2431 3.75778C11.9828 3.49743 11.5607 3.49743 11.3003 3.75778L8.00046 7.05765L4.70057 3.75776C4.44022 3.49741 4.01811 3.49741 3.75776 3.75776C3.49741 4.01811 3.49741 4.44022 3.75776 4.70057L7.05765 8.00046L3.75786 11.3003C3.49751 11.5606 3.49751 11.9827 3.75786 12.2431C4.0182 12.5034 4.44031 12.5034 4.70066 12.2431L8.00046 8.94327L11.3002 12.243Z"></path>
                                </svg>
                            </span>
                        </button>
                        <div className="ant-modal-header">
                            <div className="ant-modal-title" id=":rdp:">Manage Payment Method</div>
                        </div>
                        <div className="ant-modal-body">
                            <div className="ant-modal-custom-content" data-testid="lux-modal">
                                <div className="ant-modal-custom-children">
                                    <span className="subtitle">Please select up to 5 payment methods</span>
                                <div className="paymentList">
                                    <div className="paymentItemNew">
                                        <div className="itemContent">
                                            <div className="paymentItemHeader">
                                                <label className="ant-checkbox-wrapper css-5jb6ku ant-checkbox-custom ant-checkbox-custom-sm bds-theme-component-light css-5jb6ku">
                                                    <span onClick={handleChecked} className={`ant-checkbox css-5jb6ku ${checked ? "ant-checkbox-checked" : ""}`}>
                                                        <input type="checkbox" className="ant-checkbox-input" value="" />
                                                        <span className="ant-checkbox-inner"></span>
                                                    </span>
                                                    <span>
                                                        <div className="managePaymentGroup">Bank Transfer
                                                            <span className="tip css-5jb6ku ant-tooltip-custom bds-theme-component-light">
                                                                <i className="fiat-iconfont fiat-icon--wenhao"></i>
                                                            </span>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="paymentItemBody" align="top">
                                                <div className="paymentItemBreak">
                                                    <span className="paymentItemSpan">VICTOR OTUNG</span>
                                                </div>
                                                <div className="paymentItemBreak">
                                                    <span className="paymentItemSpan">8911383777</span>
                                                </div>
                                                <div className="paymentItemBreak">
                                                    <span className="paymentItemSpan">Lagos</span>
                                                </div>
                                                <div className="paymentItemBreak">
                                                    <span className="paymentItemSpan">Palmpay</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footCustom">
                                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center btnWrapper" style={{gap: "16px"}}>
                                    <div className="ant-space-item" >
                                        <button type="button" className="ant-btn css-5jb6ku ant-btn-primary css-5jb6ku ant-btn-custom ant-btn-custom-middle ant-btn-custom-primary bds-theme-component-light" disabled={!checked}>
                                            <span>Confirm</span>
                                        </button>
                                    </div>
                                    <div className="ant-space-item">
                                        <button onClick={handleCancel} type="button" className="ant-btn css-5jb6ku ant-btn-default css-5jb6ku ant-btn-custom ant-btn-custom-middle bds-theme-component-light">
                                            <span>Cancel</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabindex="0" aria-hidden="true" style={{width: "0px", height: "0px", overflow: "hidden", outline: "none"}}></div>
            </div>
        </div>
    </div>
</div>
  )
}
