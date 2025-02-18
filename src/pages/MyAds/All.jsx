import React from 'react'

export default function All() {
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
        </tbody>
    </table>
  )
}
