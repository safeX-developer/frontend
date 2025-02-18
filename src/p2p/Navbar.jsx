import React from 'react'
import "../styles/navbar.css"
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const client = createThirdwebClient({
    clientId: "6d3bbd638121ead90345bff8365907d8",
});

const wallets = [
    inAppWallet({
      auth: {
        options: [
          "google",
          "discord",
          "telegram",
          "farcaster",
          "email",
          "x",
          "passkey",
          "phone",
        ],
      },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

export default function Navbar() {

    //   const account = useActiveAccount();
    //   const { data: balance, isLoading } = useWalletBalance({
    //     client,
    //     chain,
    //     address: account.address,
    //   });

  return (
    <div id="header" className="sc-gVkuDy gAvMHL">
    <div className="header-wrap">
        <div className="header">
            <div className="sc-hGnimi ftyLxH left">
                <div className="sc-iukxot jivBdD logo-pc"></div>
                <div className="sc-jtXEFf jsyNKG search-pc">
                    <div className="search-input-wrap-pc">
                        <div className="sc-kTLmzF dwaOxj">
                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon">
                                <use xlinkHref="#icon_Search"></use>
                            </svg>
                            <input placeholder="Search Here...." value="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-in">
                {/* <button  className="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                     <div on:click={()=> _wallet.openModal()} className="button-inner">Connect wallet</div> 
                </button> */}
                <ConnectButton
                    client={client}
                    wallets={wallets}
                    theme={darkTheme({
                        colors: {
                          primaryButtonBg: "hsl(16, 91%, 57%)",
                          primaryButtonText: "hsl(0, 0%, 100%)",
                        },
                    })}
                    connectModal={{ size: "wide" }}
                />


               {/* <button id="chat" className="sc-eicpiI PGOpB">
                    <div className="chat-btn ">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="sc-gsDKAQ hxODWG icon">
                            <use xlinkHref="#icon_Chat"></use>
                        </svg>
                        <div className="sc-fotOHu gGSOuF badge ">99</div>
                    </div>
                </button>  */}
            </div>
        </div>
    </div>
</div>
  )
}
