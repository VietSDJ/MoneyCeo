import React from "react"
import BlockTitle from "./BlockTitle"
import MockupPortrait from "../assets/images/resources/mockup-portrait1.png"
import InOutCashflowPortrait from "../assets/images/resources/In-out-cashflow-portrait1.png"
import PieChartPortrait from "../assets/images/resources/pieChart-portrait1.png"
import RadialCircle from "../assets/images/shapes/RadialCircle.png"
import BlockMessage from "./BlockMessage"

const Thriving = () => {
  return (
    <section className="thriving">
      <div className="container">
        <img
          src={RadialCircle}
          className="cta-one__bg-radial-1"
          style={{ width: "751px" }}
          alt=""
        />
        <img
          src={RadialCircle}
          className="cta-one__bg-radial-2"
          style={{ width: "358px" }}
          alt=""
        />
        <img
          src={RadialCircle}
          className="cta-one__bg-radial-3"
          style={{ width: "358px" }}
          alt=""
        />
        <BlockTitle
          textAlign="left"
          className="flex-content-center"
          // paraText="Feature List"
          titleText={
            <div>
              <span className="text-size-large">
                Stop Dreading Your Bank Account
              </span>
              <br /> <span className="text-size-large">Start Thriving</span>
            </div>
          }
        />
        <div className="row ">
          <div className="col-lg-4 text-center">
            <BlockMessage
              textAlign="left"
              titleText={
                <div>
                  <span className="text-message">
                    Hey there CEO! Our AI noticed a recent increase in fashion
                    spending. Would you like to see a breakdown and set a new
                    budget for this category
                  </span>
                </div>
              }
            />
            <img
              src={MockupPortrait}
              className="wow fadeInUp"
              style={{ height: "582px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />
          </div>
          <div className="col-lg-4 text-center">
            <BlockMessage
              textAlign="left"
              titleText={
                <div>
                  <span className="text-message">
                    “Heads up, CEO! Based on upcoming bills and recurring
                    expenses, you might have a slight cash flow shortage!”
                  </span>
                </div>
              }
            />
            <img
              src={InOutCashflowPortrait}
              className="wow fadeInUp"
              style={{ height: "582px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />
          </div>
          <div className="col-lg-4 text-center ">
            <BlockMessage
              textAlign="left"
              titleText={
                <div>
                  <span className="text-message">
                    “Based on your spending habits and financial goals, Money
                    CEO recommends allocating more funds towards savings. This
                    could help you achieve your goal faster”
                  </span>
                </div>
              }
            />
            <img
              src={PieChartPortrait}
              className="wow fadeInUp"
              style={{ height: "582px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thriving
