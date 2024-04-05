import React from "react"
import BlockTitle from "./BlockTitle"
import MockupPortrait from "../assets/images/resources/mockup-portrait1.png"
import InOutCashflowPortrait from "../assets/images/resources/In-out-cashflow-portrait1.png"
import PieChartPortrait from "../assets/images/resources/pieChart-portrait1.png"

const Thriving = () => {
  return (
    <section className="thriving">
      <div className="container">
        <BlockTitle
          textAlign="left"
          className="flex-content-center "
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
            <img
              src={MockupPortrait}
              className="wow fadeInUp"
              style={{ height: "582px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />
          </div>
          <div className="col-lg-4 text-center">
            <img
              src={InOutCashflowPortrait}
              className="wow fadeInUp"
              style={{ height: "582px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />
          </div>
          <div className="col-lg-4 text-center ">
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
