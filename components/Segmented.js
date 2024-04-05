import React from "react"
import BlockTitle from "./BlockTitle"
import MockupPortrait from "../assets/images/resources/mockup-portrait1.png"

import downloadAppStore from "../assets/images/resources/downloadAppStore.png"
import downloadGooglePlay from "../assets/images/resources/downloadGooglePlay.png"
const Segmented = () => {
  return (
    <section className="service-one">
      <div className="container">
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
        <div className="text-center">
          <div className="segmented__single">
            <div className="segmented__icon">
              <i className="apton-icon-computer-graphic"></i>
            </div>

            <p>Make informed financial decisions with confidence.</p>
          </div>
          <img
            src={MockupPortrait}
            className="wow fadeInUp"
            style={{ width: "329px", marginBottom: 55 }}
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Segmented
