import React from 'react'

export default function Tip({handleCancel}) {

  return (
    <div>
        <div class="ant-modal-root css-5jb6ku">
            <div class="ant-modal-mask"></div>
            <div tabindex="-1" class="ant-modal-wrap ant-modal-centered">
                <div role="dialog" aria-labelledby=":rdo:" aria-modal="true" class="ant-modal css-5jb6ku css-5jb6ku ant-modal-custom bds-theme-component-light" style={{width: "480px",transformOrigin: "-138.333px 178.31px"}}>
                    <div tabindex="0" aria-hidden="true" style={{width: "0px", height: "0px", overflow: "hidden", outline: "none"}}></div>
                    <div class="ant-modal-content">
                        <button onClick={handleCancel} type="button" aria-label="Close" class="ant-modal-close">
                            <span class="ant-modal-close-x">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3002 12.243C11.5606 12.5034 11.9827 12.5034 12.243 12.243C12.5034 11.9827 12.5034 11.5606 12.243 11.3002L8.94327 8.00046L12.2431 4.70059C12.5035 4.44024 12.5035 4.01813 12.2431 3.75778C11.9828 3.49743 11.5607 3.49743 11.3003 3.75778L8.00046 7.05765L4.70057 3.75776C4.44022 3.49741 4.01811 3.49741 3.75776 3.75776C3.49741 4.01811 3.49741 4.44022 3.75776 4.70057L7.05765 8.00046L3.75786 11.3003C3.49751 11.5606 3.49751 11.9827 3.75786 12.2431C4.0182 12.5034 4.44031 12.5034 4.70066 12.2431L8.00046 8.94327L11.3002 12.243Z"></path>
                                </svg>
                            </span>
                        </button>
                    <div class="ant-modal-header">
                        <div class="ant-modal-title" id=":rdo:">Tips</div>
                    </div>
                    <div class="ant-modal-body">
                        <div class="ant-modal-custom-content" data-testid="lux-modal">
                            <div class="ant-modal-custom-children">
                                <section class="p2p_level--wrap">
                                    <p class="p2p_level--wrap-decribe">As a "New" advertiser, you can only post advertisements selling crypto. Progressing to a "Regular" advertiser would grant you the following privileges:</p>
                                    <div class="p2p_level--wrap-content">
                                        <section class="p2p_level--next p2p_level--cur">
                                            <div class="p2p_level--wrap-current">
                                                <p>Levels: New</p>
                                                <p>Benefits</p>
                                            </div>
                                            <p class="p2p_level--next-line p2p_level--next-lineCur"></p>
                                            <section class="p2p_level--wrap-content-next">
                                                <div class="p2p_level--wrap-next">
                                                    <p>Max. Coin Quantity per Single Ad</p>
                                                    <p>1000</p>
                                                </div>
                                                <div class="p2p_level--wrap-next">
                                                    <p>Ad Direction</p><p>Sell</p>
                                                </div>
                                                <div class="p2p_level--wrap-next">
                                                    <p>Max. Active Ads (Same Direction &amp; Pair)</p>
                                                    <p>1</p>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                    <div class="p2p_level--main-img">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqUExURf////7z2/3ltP/25v7w0//68P3ty/3gp/3pvvemAPzZkfvKZ/m6OfivGIYEsA8AAAKCSURBVEjHrdTPb9JQAMDxt2yYHTyAq/FsVWiMJCNznjyI1h48kaHJEi9G8Y1keJCYFZeZLI2yB9sOcpmlkCyaQDuyi4fah3qU8BwnD8u6jP/FttDx6/Ej0W9/0D4+NLSlANDO82RIETDQf6CDEnii1CI0ukCNRsFCdJEy0ySI0g66+K90eo7SEBqiNOaovlDIebG3LtOpjxKdTtGoj3oL+kzYWZi5jr3NtwvzvTHOUDjsjj8ATLgVz/TFM86Yo53AFD9h1gkyk8mwfY0EQbC3BTc+Foutv4+58fwj1Xp73j6xxxBu1OFGCba7mYYQl6AQc2ZrIJGD8GHrIghQU6CmuxT7HdrJojH32kNN9lu08jlehtkAKds0Xik9V2HWn63a1Ote2zsaqWl6oljkTH/zllywabBYzCoQs6Z5ksi96Nwp7Ude07Gu6W+PlDhR43FcIjo2zmAzsbeqJHJddzfzrajp5ODweLVYi5O1dBqXzAOtRgLKq9NKIfGx6/5nDEwMctaob8lqmqQQwqrZaNS173uZQuNop4d+CZoGSUlot/kHtSjhJBRsnOx+Qv67PXT/qWxopz8NXFUQqVr0K/6N1R3Z2C5Uji/mu7/rvocY23JBLCCiHioIvctbe6msnEJY/jVrent/2JK0leLskL2SpIC1IGvw5eBPe5ljWcnOWVs7LMexHPuB9sBIXKfWh6z81D+iGZbSPepjCC4Nyqt0CTxSv+QiQyhYZpO9bYKh3Q+w3dP14RJMB8Tk+SQm50dQsNSRyeQNMLIV8by10RLMdKh3DAVLrrw2TgJPoCWTkbEUXBDLds/ABF0Ry+vi60kk8NiHjUxEwWy5vAkmbOUNbfQvu+mD8tWU/2wAAAAASUVORK5CYII=" alt="" />
                                    </div>
                                    <div class="p2p_level--wrap-content">
                                        <section class="p2p_level--next">
                                            <div class="p2p_level--wrap-current">
                                                <p>Regular</p>
                                                <p>Benefits</p>
                                            </div>
                                            <p class="p2p_level--next-line"></p>
                                            <section class="p2p_level--wrap-content-next">
                                                <div class="p2p_level--wrap-next">
                                                    <p>Max. Coin Quantity per Single Ad</p>
                                                    <p>20000</p>
                                                </div>
                                                <div class="p2p_level--wrap-next">
                                                    <p>Ad Direction</p>
                                                    <p>Buy / Sell</p>
                                                </div>
                                                <div class="p2p_level--wrap-next">
                                                    <p>Max. Active Ads (Same Direction &amp; Pair)</p>
                                                    <p>2</p>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                   
                                </section>
                            </div>
                            <div class="ant-modal-custom-footer">
                                <button type="button" class="ant-btn css-5jb6ku ant-btn-primary css-5jb6ku ant-btn-custom ant-btn-custom-middle ant-btn-custom-primary bds-theme-component-light">
                                    <span>OK</span>
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
