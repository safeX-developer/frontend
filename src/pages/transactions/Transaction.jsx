import React from 'react'
import "../../styles/p2p/transaction.css"

export default function Transaction() {
  return (
    <>
      <div className="trx-page">
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
                <div className="left">
                    <button>
                        <img src="/asset/receive-icon.svg" alt="" />
                        Receive
                    </button>
                    <button>
                        <img src="/asset/send-icon.svg" alt="" />
                        Send
                    </button>
                </div>
            </div>
        </div>
        <div className='line'></div>
        <div className="trx-body">
            <div className="filter-box">
                <button className='drop-down-btn'>
                    Buy
                </button>
                <button className='drop-down-btn'>
                    <span>Sort by: </span>Recent
                </button>
            </div>
            <div className="oigfghfe">
                <div className="trx-container">
                    <div className="header">
                        <span className='buy'>Buy </span>USDT
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Amount
                        </div>
                        <div className="title-details">
                            80,000.00 NGN
                        </div>
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Price
                        </div>
                        <div className="title-details">
                            1,600.00 NGN
                        </div>
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Qty
                        </div>
                        <div className="title-details">
                            100 USDT
                        </div>
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Transaction fees
                        </div>
                        <div className="title-details">
                            0 USDT
                        </div>
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Order No
                        </div>
                        <div className="title-details">
                            1481390538934
                        </div>
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Payment method
                        </div>
                        <div className="title-details">
                            Bank transfer
                        </div>
                    </div>
                    <div className="title-name-title-details">
                        <div className="title-name">
                            Payment status
                        </div>
                        <button className="title-details-btn">
                            Pending
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-body">
                <div className="page-numbering">
                    Page 1 of 30
                </div>
                <div className="pagnigation">
                    <button className='pag'>1</button>
                    <button className='pag'>2</button>
                    <button className='pag active'>3</button>
                    <button className='pag'>...</button>
                    <button className='pag'>10</button>
                    <button className='pag'>11</button>
                    <button className='pag'>13</button>
                </div>
                <div className="direction-njukfdd">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
