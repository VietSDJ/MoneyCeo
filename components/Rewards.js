import React from "react"
import BlockTitle from "./BlockTitle"
import Coin from "../assets/images/resources/coin.png"

import CtaMoc1 from "../assets/images/resources/double-phone-coin.png"
const Rewards = () => {
  return (
    <section className="cta-one">
      <img
        src={Coin}
        className="cta-one__bg-coin-1"
        style={{ width: "366px" }}
        alt=""
      />
      <img
        src={Coin}
        className="cta-one__bg-coin-2"
        style={{ width: "257px" }}
        alt=""
      />
      <div className="container div-container-rewards">
        <div
          className="div-child-rewards rewards__moc wow fadeInLeft"
          data-wow-duration="1500ms"
        >
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="div-child-rewards row justify-content-end">
          <div className="col-lg-7">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="center"
                // paraText="Feature List"
                titleText={
                  <div className="text-right text-size-large">
                    <span className="text-highlight ">Earn Rewards </span>
                    <br />
                    <span>While You Manage Your Money</span>
                  </div>
                }
              />
              <div className="text-right w-100 flex-content-end">
                <div className="are-75">
                  <p>Make Money Management a Game!</p>
                  <p>MoneyCEO goes beyond budgeting</p>
                  <p>
                    Earn rewards for every financial win, from reaching savings
                    goals to staying on track. Unlock exclusive prizes and
                    milestones as you take control of your finances.
                  </p>
                  <p>It’s financial fitness with fun and rewards!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rewards
