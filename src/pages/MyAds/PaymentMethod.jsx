import React from 'react'

export default function PaymentMethod() {
  return (
    <div>
        <div class="ant-modal-root css-5jb6ku">
            <div class="ant-modal-mask"></div>
            <div tabindex="-1" class="ant-modal-wrap ant-modal-centered">
                <div role="dialog" aria-labelledby=":rdp:" aria-modal="true" class="ant-modal css-5jb6ku css-5jb6ku ant-modal-custom createPaymentManageDialog bds-theme-component-light" style={{width: "480px", transformOrigin: "-65.3333px 153.68px"}}>
                    <div tabindex="0" aria-hidden="true" style={{width: "0px", height: "0px", overflow: "hidden", outline: "none"}}></div>
                    <div class="ant-modal-content">
                        <button type="button" aria-label="Close" class="ant-modal-close">
                            <span class="ant-modal-close-x">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3002 12.243C11.5606 12.5034 11.9827 12.5034 12.243 12.243C12.5034 11.9827 12.5034 11.5606 12.243 11.3002L8.94327 8.00046L12.2431 4.70059C12.5035 4.44024 12.5035 4.01813 12.2431 3.75778C11.9828 3.49743 11.5607 3.49743 11.3003 3.75778L8.00046 7.05765L4.70057 3.75776C4.44022 3.49741 4.01811 3.49741 3.75776 3.75776C3.49741 4.01811 3.49741 4.44022 3.75776 4.70057L7.05765 8.00046L3.75786 11.3003C3.49751 11.5606 3.49751 11.9827 3.75786 12.2431C4.0182 12.5034 4.44031 12.5034 4.70066 12.2431L8.00046 8.94327L11.3002 12.243Z"></path>
                                </svg>
                            </span>
                        </button>
                        <div class="ant-modal-header">
                            <div class="ant-modal-title" id=":rdp:">Manage Payment Method</div>
                        </div>
                        <div class="ant-modal-body">
                            <div class="ant-modal-custom-content" data-testid="lux-modal">
                                <div class="ant-modal-custom-children">
                                    <span class="subtitle">Please select up to 5 payment methods</span>
                                <div class="paymentList">
                                    <div class="paymentItemNew">
                                        <div class="itemContent">
                                            <div class="paymentItemHeader">
                                                <label class="ant-checkbox-wrapper css-5jb6ku ant-checkbox-custom ant-checkbox-custom-sm bds-theme-component-light css-5jb6ku">
                                                    <span class="ant-checkbox css-5jb6ku">
                                                        <input type="checkbox" class="ant-checkbox-input" value="" />
                                                        <span class="ant-checkbox-inner"></span>
                                                    </span>
                                                    <span>
                                                        <div class="managePaymentGroup">Bank Transfer
                                                            <span class="tip css-5jb6ku ant-tooltip-custom bds-theme-component-light">
                                                                <i class="fiat-iconfont fiat-icon--wenhao"></i>
                                                            </span>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="paymentItemBody" align="top">
                                                <div class="paymentItemBreak">
                                                    <span class="paymentItemSpan">VICTOR OTUNG</span>
                                                </div>
                                                <div class="paymentItemBreak">
                                                    <span class="paymentItemSpan">8911383777</span>
                                                </div>
                                                <div class="paymentItemBreak">
                                                    <span class="paymentItemSpan">Lagos</span>
                                                </div>
                                                <div class="paymentItemBreak">
                                                    <span class="paymentItemSpan">Palmpay</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footCustom">
                                <div class="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center btnWrapper" style={{gap: "16px"}}>
                                    <div class="ant-space-item" >
                                        <button type="button" class="ant-btn css-5jb6ku ant-btn-primary css-5jb6ku ant-btn-custom ant-btn-custom-middle ant-btn-custom-primary bds-theme-component-light" disabled="">
                                            <span>Confirm</span>
                                        </button>
                                    </div>
                                    <div class="ant-space-item">
                                        <button type="button" class="ant-btn css-5jb6ku ant-btn-default css-5jb6ku ant-btn-custom ant-btn-custom-middle bds-theme-component-light">
                                            <span>Cancel</span>
                                        </button>
                                    </div>
                                </div>
                                <button type="button" class="ant-btn css-5jb6ku ant-btn-link css-5jb6ku ant-text-link-custom bottomText ant-text-link-custom-sm ant-text-link-custom-primary bds-theme-component-light">
                                    <span>Head to the User Center to add payment methods</span>
                                </button>
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
