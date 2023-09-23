import React from "react";
import mint1 from "../assets/mint-01.png";
import mint2 from "../assets/mint-02.png";
import mint3 from "../assets/mint-03.png";
import mint4 from "../assets/mint-04.png";
import line from '../assets/line.svg'
import shape1 from '../assets/circle-01.png'
import shape2 from '../assets/circle-02.png'
import shape3 from '../assets/header-left-shape-4.png'

function Mint() {
  return (
    <div className="how-to-mint-wrapper" id="mint" >
      <div className="container-fluid">
        <div className="container">
            <div className="shape-wrapper-mint">
                <img src={shape1} alt="" className="mint-shape-1" />
                <img src={shape2} alt="" className="mint-shape-2" />
                <img src={shape3} alt="" className="mint-shape-3" />
            </div>
          <div className="mint-title">
            <h2 className="text-center">Tokenomics</h2>
          </div>
          <div className="mint-main-section-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="mint-single-item-wrapper">
                  <div className="mint-single-item d-flex">
                    <div className="mint-img">
                      <img src={mint1} alt="" />
                    </div>
                    <div className="mint-single-item-details">
                      <h3>Connect your wallet</h3>
                      <p>
                        Use Trust Wallet, Metamask or any wallet to connect to
                        the app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mint-single-item-wrapper">
                  <div className="mint-single-item d-flex">
                    <div className="mint-img">
                      <img src={mint2} alt="" />
                    </div>
                    <div className="mint-single-item-details">
                      <h3>Select your quantity</h3>
                      <p>
                        Use Trust Wallet, Metamask or any wallet to connect to
                        the app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mint-single-item-wrapper">
                  <div className="mint-single-item d-flex">
                    <div className="mint-img">
                      <img src={mint3} alt="" />
                    </div>
                    <div className="mint-single-item-details">
                      <h3>Confirm transaction</h3>
                      <p>
                        Earn ETH and BIT for all your NFTs that you sell on our
                        marketplace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mint-single-item-wrapper">
                  <div className="mint-single-item d-flex">
                    <div className="mint-img">
                      <img src={mint4} alt="" />
                    </div>
                    <div className="mint-single-item-details">
                      <h3>Receive your NFTs</h3>
                      <p>
                        Latin professor at Hampden-Sydney College in Virginia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-svg">
          <img src={line} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mint;
