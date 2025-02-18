import React from 'react'
import { useParams } from 'react-router-dom'
import "../../styles/p2p/profile.css"

export default function Profile() {
    const {userId} = useParams()

  return (
    <div className="otc-maker-profile">
    <div className="otc-profile-overview">
        <div className="otc-profile__wrapper">
            <div className="by-grid-row by-grid-row--space-between by-grid-row--middle" style={{rowGap: "0px"}}>
                <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "0px 16px"}}>
                    <div className="by-space-item" >
                        <div className="by-avatar by-avatar--online" style={{height: "48px", width: "48px", fontSize: "24px"}}>
                            <div className="by-avatar__container">
                                <div className="by-avatar__container__letter">M</div>
                                <div className="by-avatar__container__status"></div>
                            </div>
                        </div>
                    </div>
                    <div className="by-space-item">
                        <div className="by-space by-space--vertical" style={{gap: "8px"}}>
                            <div className="by-space-item" >
                                <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "8px"}}>
                                    <div className="by-space-item" >
                                        <div className="f-20 gc-08 bold p2p__nickName--wrap">
                                            Major Mayor
                                            <section className="p2p__report--self">
                                                <div><p className="index_besel__me3a7">Block him/her</p></div>
                                                <span className="p2p__report--line"></span>
                                                <span className="p2p__pcenter--report">Report Scam</span>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="by-space-item" >
                                <div className="by-space by-space--horizontal by-space-align--center" style={{gap: "12px"}}>
                                    <div className="by-space-item" >
                                        <div className="by-space by-space--horizontal by-space-align--center otc-usercenter-no2fa__bind-status" data-status="1" style={{gap: "4px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--success"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <span>Email</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="by-space-item" >
                                        <div className="by-space by-space--horizontal by-space-align--center otc-usercenter-no2fa__bind-status" data-status="1" style={{gap: "4px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--success"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <span>SMS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="by-space-item" >
                                        <div className="by-space by-space--horizontal by-space-align--center otc-usercenter-no2fa__bind-status" data-status="1" style={{gap: "4px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--success"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <span>Identity Verification</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="by-space-item">
                                        <div className="by-space by-space--horizontal by-space-align--center otc-usercenter-no2fa__bind-status" data-status="0" style={{gap: "4px"}}>
                                            <div className="by-space-item" >
                                                <i className="fiat-iconfont fiat-icon--notice"></i>
                                            </div>
                                            <div className="by-space-item">
                                                <span>Deposit</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="by-space-item">
                                <span className="fiat-otc__online-status-tip">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="moly-btn inline-flex items-center justify-center select-none transition-all font-IBM font-semibold disabled:cursor-not-allowed bg-transparent outline-none ring-btn-default focus-visible:ring-[5px] border-y-[1px] border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title enabled:hover:border-base-bds-gray-t4-dis enabled:hover:text-base-bds-gray-t2 disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3 text-sm leading-[22px] px-[16px] py-[8px] rounded follow-others" style={{background: "rgb(255, 255, 255)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="starno_icon_svg__icon" viewBox="0 0 1024 1024" style={{marginRight: "4px"}}>
                        <path fill="currentColor" d="M512 42.667a42.667 42.667 0 0 1 38.272 23.765l121.899 247.04 272.64 39.85a42.667 42.667 0 0 1 23.637 72.747L771.2 618.197l46.507 271.446a42.667 42.667 0 0 1-61.867 44.97L512 806.4 268.16 934.613a42.667 42.667 0 0 1-61.867-44.97L252.8 618.197 55.552 426.07a42.667 42.667 0 0 1 23.595-72.746l272.64-39.894L473.728 66.432A42.667 42.667 0 0 1 512 42.667zm0 139.093-93.568 189.525a42.667 42.667 0 0 1-32.085 23.296L176.98 425.216l151.467 147.499a42.667 42.667 0 0 1 12.288 37.76L304.98 818.816l187.179-98.432a42.667 42.667 0 0 1 39.68 0l187.179 98.432-35.755-208.341a42.667 42.667 0 0 1 12.288-37.76l151.467-147.499-209.366-30.635a42.667 42.667 0 0 1-32.085-23.296L512 181.717z"></path>
                    </svg>
                    Follow
                </button>
            </div>
        </div>
        <div className="fiat-divider fiat-divider--horizontal"></div>
        <div className="otc-profile__wrapper otc-profile__wrapper_list">
            <ul>
                <li className="not-margin">
                    <div className="otc-profile__ov-value lists-title">Completed Order(s) in 30 Days</div>
                    <div className="otc-profile__ov-value lists-content">
                        <span className="otc-profile__ov-highlight" id="otc-profile__ov-highlightexd">40</span>
                        <span>Order(s)</span>
                    </div>
                    <p className="buysell-main__show"></p>
                </li>
                <li className="">
                    <div className="otc-profile__ov-value lists-title">All Completed Orders</div>
                    <div className="otc-profile__ov-value lists-content">
                        <span className="otc-profile__ov-highlight" id="otc-profile__ov-highlightexd">274</span>
                        <span>Order(s)</span>
                    </div>
                    <div className="buysell-main__show">
                        <span>Buy 7</span>
                        <div className="fiat-divider fiat-divider--vertical"></div>
                        <span>Sell 267</span>
                    </div>
                </li>
                <li>
                    <div className="otc-profile__ov-value lists-title">
                        <span>Completion Rate Within 30 Days</span>
                        <span className="otc-profile__tip css-7o12g0 ant-tooltip-custom bds-theme-component-light">
                            <i className="fiat-iconfont fiat-icon--wenhao"></i>
                        </span>
                    </div>
                    <div className="otc-profile__ov-value lists-content">
                        <span className="otc-profile__ov-highlight">100</span>
                        <span>%</span>
                    </div>
                    <p className="buysell-main__show"></p>
                </li>
                <li>
                    <div className="otc-profile__ov-value lists-title">
                        <span>Good Rating %</span>
                        <span className="otc-profile__tip css-7o12g0 ant-tooltip-custom bds-theme-component-light">
                            <i className="fiat-iconfont fiat-icon--wenhao"></i>
                        </span>
                    </div>
                    <div className="otc-profile__ov-value lists-content">
                        <span className="otc-profile__ov-highlight">88</span>
                        <span>%</span>
                    </div>
                    <div className="buysell-main__show">
                        <span>
                            <i className="fiat-iconfont fiat-icon--a-thumbup"></i>
                            8
                        </span>
                        <div className="fiat-divider fiat-divider--vertical"></div>
                        <span>
                            <i className="fiat-iconfont fiat-icon--a-thumbup thumbup-rotate"></i>
                            1
                        </span>
                    </div>
                </li>
                <li className="">
                    <div className="otc-profile__ov-value lists-title">Avg. Release Time</div>
                    <div className="otc-profile__ov-value lists-content">
                        <span className="otc-profile__ov-highlight" id="otc-profile__ov-highlightexd">18</span>
                        <span>Minute(s)</span>
                    </div>
                    <p className="buysell-main__show"></p>
                </li>
                {/* <li id="arrow-link">
                    <p>
                        <i className="icon fiat-iconfont fiat-icon--arrow"></i>
                        <i className="icon fiat-iconfont fiat-icon--arrow icon-edge"></i>
                    </p>
                </li>  */}
            </ul>
        </div>
    </div>
    <div className="otc-maker-tab-section">
        <div className="ant-space css-7o12g0 ant-space-horizontal ant-space-align-center otc-maker-tab-header" style={{gap: "24px"}}>
            <div className="ant-space-item" >
                <div className="otc-maker-tablist-item active">Ads</div>
            </div>
            <div className="ant-space-item">
                <div className="otc-maker-tablist-item">Leave A Review(9)</div>
            </div>
        </div>
        <div className="otc-profile__ads">
            <div className="ad-table-wrapper">
                <div className="fiat-otc__empty-list-img-wrapper">
                    <div className="by-space by-space--vertical" style={{gap: "16px"}}>
                        <div className="by-space-item" >
                            <img className="empty-list-img" src="data:image/png;base64,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" alt="" />
                        </div>
                        <div className="by-space-item" >
                            <div style={{whiteSpace: "nowrap"}}>No Records Found</div>
                        </div>
                        <div className="by-space-item">
                            <button className="by-button fiat-otc__empty-list-no-data-btn by-button--outlined by-button--x-large" type="button">
                                <span className="by-button__content">Back to Homepage</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
