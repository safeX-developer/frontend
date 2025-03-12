import React from 'react'
import "../../styles/p2p/2fa.css"
export default function TwoFa() {

  return (
    <div className='sc-bkkeKt kBjSXI HJkWtyt2' style={{opacity: 1}}>
        <div className='dialog ' >
            <button className="dialog-back" style={{opacity: 1, transform: "none"}}>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_Arrow"></use></svg>
            </button>
            <div class="dialog-head has-back has-close"><div class="dialog-title">Security-2FA</div></div>
            <button className="sc-ieecCq fLASqZ close-icon dialog-close">
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_Close"></use></svg>
            </button>
            <div className="dialog-body default-style " style={{zIndex: 2, transform: "none"}}>
                <div className="sc-dkPtRN jScFby scroll-view sc-kRqKYU kDyXlC">
                    <div className="sc-dusCKN fHOgfT">
                        <div className="google-step-summary-top">Download and install 
                            <a target="_blank" href="https://support.google.com/accounts/answer/1066447?hl=en&amp;rd=1">Google Authenticator</a>. 
                            Enable Two-factor Authentication to protect your account from unauthorized access.
                        </div>
                        <div className="google-step-summary-top two">Scan the QR code with your Google Authenticator App or enter the secret key manually.</div>
                        <div className="qrcode-warp">
                            <img src="https://nanogames.io/api/user/google/2-step-auth/key/qrcode/320/?t=1741780274812" alt="qrcode" />
                        </div>
                        <div className="copy-input">
                            <div className="sc-ezbkAF gcQjQT input sc-fbyfCU fWAvBM">
                                <div className="input-label">Your secret key</div>
                                <div className="input-control">
                                    <input type="text" readonly="" value="kpy7cn2aisfl4ocxoo576i3k7ndddkrw" />
                                    <button className="sc-iqseJM cBmlor button button-normal copy-button">
                                        <div className="button-inner">
                                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon"><use xlinkHref="#icon_Copy"></use></svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="twofa-alert">Write down this code, never reveal it to others. You can use it to regain access to your account if there is no access to the authenticator.</p>
                        <div className="codes">
                            <p>Verification code</p>
                            <div className="sc-cvZCdy hooaaA">
                                <div className="google-input">
                                    <input autocomplete="new-password" type="password" value="" />
                                    <ul className="">
                                        <li className="active"></li>
                                        <li className=""></li>
                                        <li className=""></li>
                                        <li className=""></li>
                                        <li className=""></li>
                                        <li className=""></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                            <div className="button-inner">Enable</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}