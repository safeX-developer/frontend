import React from 'react'

export default function Country() {
  return (
    <div style={{position: "absolute", top: "0px", left: "0px", width: "100%"}}>
    <div>
        <div className="ant-select-dropdown ant-select-custom-dropdown fiat-otc-dropdown ant-select-custom-dropdown-sm bds-theme-component-light css-7o12g0 ant-select-dropdown-placement-bottomLeft " style={{minWidth: "100px", width: "100px", left: "-15px", top: "36.167px"}}>
            <div>
                <span className="ant-input-affix-wrapper ant-input-affix-wrapper-focused css-7o12g0 ant-input-custom css-7o12g0 ant-input-custom ant-select-custom-search-input ant-input-custom-x-sm bds-theme-component-light css-7o12g0">
                    <span className="ant-input-prefix">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#81858C"></path>
                        </svg>
                    </span>
                    <input className="ant-input css-7o12g0" type="text" value="" />
                    <span className="ant-input-suffix">
                        <span className="ant-input-clear-icon ant-input-clear-icon-hidden" role="button" tabindex="-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.00007 6.46453L8.43934 8.90381C8.52235 8.98676 8.64331 9.01912 8.75665 8.98871C8.86999 8.9583 8.9585 8.86973 8.98883 8.75636C9.01916 8.643 8.98671 8.52207 8.9037 8.43911L6.46476 6L8.9037 3.56088C8.98671 3.47793 9.01916 3.35699 8.98883 3.24363C8.9585 3.13026 8.86999 3.04169 8.75665 3.01128C8.64331 2.98087 8.52235 3.01323 8.43934 3.09618L6.00007 5.53547L3.5608 3.09618C3.43248 2.96791 3.22447 2.96794 3.09619 3.09627C2.96791 3.22459 2.96795 3.4326 3.09627 3.56088L5.53554 6L3.09627 8.43911C3.01326 8.52209 2.98083 8.64306 3.01119 8.75644C3.04154 8.86981 3.13008 8.95838 3.24345 8.98878C3.35682 9.01918 3.47779 8.98679 3.5608 8.90381L6.00007 6.46453Z" fill="#ADB1B8"></path>
                            </svg>
                        </span>
                    </span>
                </span>
                <div className="rc-virtual-list" style={{position: "relative"}}>
                    <div className="rc-virtual-list-holder" style={{maxHeight: "256px", overflowY: "hidden", overflowAnchor: "none"}}>
                        <div style={{height: "1632px", position: "relative", overflow: "hidden"}}>
                            <div className="rc-virtual-list-holder-inner" style={{display: "flex", flexDirection: "column", transform: "translateY(0px)", position: "absolute", left: "0px", right: "0px", top: "0px"}}>
                                <div aria-selected="false" className="ant-select-item ant-select-item-option fiat-otc-select-option">
                                    <div className="ant-select-item-option-content">
                                        <div className="fiat-otc-option-flex">
                                            <span className="fiat-otc__currency-wrapper token-image" style={{backgroundColor: "rgb(67, 185, 178)"}}>
                                                <img alt="" className="fiat-otc__currency-symbol" src="https://www.bybit.com/bycsi-root/common-static/fiat-static/icons/currency/HKD.svg" style={{position: "relative"}} />
                                                <div className="rc-virtual-list-holder" style={{maxHeight: "256px", overflowY: "hidden", overflowAnchor: "none"}} ></div>
                                            </span>
                                            <span title="HKD">NGN</span>
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
  )
}
