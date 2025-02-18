import React from 'react'
import Navbar from './Navbar'
import Menubar from './Menubar'
import { Outlet } from 'react-router';
import "../styles/p2p/index.css";
import "../styles/p2p/buy-modal.css";

export default function p2p() {
  return (
    <>
        <Menubar />
        <Navbar />
        <div id="rootEl">
            <div className="sc-lhMiDA ePAxUv" style={{opacity: 1, transform: "none"}}>
                <Outlet />
            </div>
        </div>
    </>
  )
}
