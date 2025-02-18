import React from 'react'

export default function Listed() {
    return (
        <table className="maker-table__table">
        <thead className="maker-table__thead">
            <tr className="maker-table__thead-tr">
                <th valign="middle" className="maker-table__th" align="left" style={{width: "80px"}}>Type</th>
                <th valign="middle" className="maker-table__th" align="left" style={{width: "140px"}}>Total Quantity / Limits</th>
                <th valign="middle" className="maker-table__th" align="left" style={{width: "100px"}}>Price</th>
                <th valign="middle" className="maker-table__th" align="left" style={{width: "80px"}}>Fee</th>
                <th valign="middle" className="maker-table__th" align="left" style={{width: "200px"}}>Payment Method</th>
                <th valign="middle" className="maker-table__th" align="left" style={{width: "142px"}}>Time</th>
                <th valign="middle" className="maker-table__th" align="right" style={{width: "94px"}}>Action</th>
            </tr>
            </thead>
            <tbody className="maker-table__tbody">
                <tr className="maker-table__tbody-tr">
                    <td className="maker-table__tbody-td" valign="middle" align="left" style={{width: "80px"}}>
                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "4px"}}>
                            <div className="ant-space-item">
                                <div>
                                    <span className="maker-list__side-sell">Sell</span>
                                    &nbsp;&nbsp;USDT
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="maker-table__tbody-td" valign="middle" align="left" style={{width: "140px"}}>
                        <div className="ant-space css-5jb6ku ant-space-vertical" style={{gap: "4px"}}>
                            <div className="ant-space-item" >
                                <div>2.8771</div>
                            </div>
                            <div className="ant-space-item">
                                <div>10,000.00 - 50,000.00 NGN</div>
                            </div>
                        </div>
                    </td>
                    <td className="maker-table__tbody-td" valign="middle" align="left" style={{width: "100px"}}>1,561.39 NGN</td>
                    <td className="maker-table__tbody-td" valign="middle" align="left" style={{width: "80px"}}>0%</td>
                    <td className="maker-table__tbody-td" valign="middle" align="left" style={{width: "200px"}}>
                        <div className="trade-list-tag css-5jb6ku ant-tooltip-custom bds-theme-component-light">Bank Transfer</div>
                    </td>
                    <td className="maker-table__tbody-td" valign="middle" align="left" style={{width: "142px"}}>2025-02-07 12:53:26</td>
                    <td className="maker-table__tbody-td" valign="middle" align="right" style={{width: "94px"}}>
                        <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{gap: "0px"}}>
                            <div className="ant-space-item" >
                                <div className="ant-spin-nested-loading css-5jb6ku">
                                    <div className="ant-spin-container">
                                        <button type="button" className="ant-btn css-5jb6ku ant-btn-link css-5jb6ku ant-text-link-custom ant-text-link-custom-sm ant-text-link-custom-primary bds-theme-component-light" style={{lineHeight: 1}}>
                                            <span>Edit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-space-item" >
                                <div className="maker-list__action-icon"></div>
                            </div>
                            <div className="ant-space-item">
                                <button type="button" className="ant-btn css-5jb6ku ant-btn-link css-5jb6ku ant-text-link-custom ant-text-link-custom-sm ant-text-link-custom-primary bds-theme-component-light" style={{lineHeight: 1}}>
                                    <span>Remove</span>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
      )
}
