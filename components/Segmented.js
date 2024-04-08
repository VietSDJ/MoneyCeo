import React from "react"
import BlockTitle from "./BlockTitle"
import MockupPortrait from "../assets/images/resources/mockup-portrait1.png"
import RadialCircle from "../assets/images/shapes/RadialCircle.png"
import PrettyEllipse from "../assets/images/shapes/pretty-ellipse.png"
import HandFist from "../assets/images/resources/final-HandFist.png"
import ChartPieSlice from "../assets/images/resources/final-ChartPieSlice.png"
import CaretDoubleRight from "../assets/images/resources/final-CaretDoubleRight.png"
import Scales from "../assets/images/resources/final-Scales.png"
import Smiley from "../assets/images/resources/final-Smiley.png"
import GoogleMiniIcon from "../assets/images/resources/GoogleStoreMiniIcon.png"
import AppStoreMiniIcon from "../assets/images/resources/appleStoreMiniIcon.png"

import downloadGooglePlay from "../assets/images/resources/downloadGooglePlay.png"
const Segmented = () => {
  return (
    <section className="service-one">
      <img
        src={PrettyEllipse}
        className="seg-one__bg-radial-2"
        style={{ width: "252px" }}
        alt=""
      />
      <img
        src={PrettyEllipse}
        className="seg-one__bg-radial-3"
        style={{ width: "99px" }}
        alt=""
      />
      <img
        src={PrettyEllipse}
        className="seg-one__bg-radial-4"
        style={{ width: "99px" }}
        alt=""
      />
      <div className="container">
        <img
          src={RadialCircle}
          className="seg-one__bg-radial-1"
          style={{ width: "800px" }}
          alt=""
        />

        <BlockTitle
          textAlign="left"
          // paraText="Feature List"
          titleText={
            <div>
              <span className="text-size-large">
                Financial <span>Freedom</span> Starts Here
              </span>
              <br />
              <span className="text-size-small">
                With MoneyCEO, you’ll be able to:
              </span>
            </div>
          }
        />
        <div className="text-center relative">
          <div className="segmented__single single__card-1">
            <div className="segmented__content">
              <p>Make informed financial decisions with confidence.</p>
            </div>
            <div className="segmented__icon">
              <img src={HandFist} style={{ width: "129px" }} alt="" />
            </div>
          </div>
          <div className="segmented__single single__card-2">
            <div className="segmented__content">
              <p>Effortlessly manage bills and debt.</p>
            </div>
            <div className="segmented__icon">
              <img src={Scales} style={{ width: "129px" }} alt="" />
            </div>
          </div>
          <div className="segmented__single single__card-3">
            <div className="segmented__content">
              <p>Plan for your future with clear financial goals.</p>
            </div>
            <div className="segmented__icon">
              <img src={ChartPieSlice} style={{ width: "129px" }} alt="" />
            </div>
          </div>
          <div className="segmented__single single__card-4">
            <div className="segmented__icon">
              <img src={Smiley} style={{ width: "129px" }} alt="" />
            </div>
            <div className="segmented__content">
              <p>Finally achieve financial peace of mind.</p>
            </div>
          </div>
          <div className="segmented__single single__card-5">
            <div className="segmented__icon">
              <img src={CaretDoubleRight} style={{ width: "129px" }} alt="" />
            </div>
            <div className="segmented__content">
              <p>Ready to Take Charge</p>
            </div>
          </div>
          <div className="segmented__single single__card-6">
            <div className="segmented__content">
              <p>Download now</p>
            </div>
            <div className="segmented__icon">
              <img src={GoogleMiniIcon} style={{ width: "129px" }} alt="" />
            </div>
            <div className="segmented__icon">
              <img src={AppStoreMiniIcon} style={{ width: "129px" }} alt="" />
            </div>
          </div>
          <div>
            <img
              src={MockupPortrait}
              className="wow fadeInUp"
              style={{ width: "329px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Segmented
