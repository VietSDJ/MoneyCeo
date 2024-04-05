import React from "react"
import BlockTitle from "./BlockTitle"
import MockupPortrait from "../assets/images/resources/mockup-portrait.png"

import downloadAppStore from "../assets/images/resources/downloadAppStore.png"
import downloadGooglePlay from "../assets/images/resources/downloadGooglePlay.png"
const Services = () => {
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
        <div className="row ">
          <div className="col-lg-7 padding-x-0">
            <div className="row flex-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="service-one__single">
                  <div className="service-one__inner">
                    <div className="service-one__circle"></div>
                    <div className="service-one__icon">
                      <i className="apton-icon-computer-graphic"></i>
                    </div>

                    <p>Make informed financial decisions with confidence.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-one__single">
                  <div className="service-one__inner">
                    <div className="service-one__circle"></div>
                    <div className="service-one__icon">
                      <i className="apton-icon-development"></i>
                    </div>
                    <p>Effortlessly manage bills and debt.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-one__single">
                  <div className="service-one__inner">
                    <div className="service-one__circle"></div>
                    <div className="service-one__icon">
                      <i className="apton-icon-development1"></i>
                    </div>
                    <p>Plan for your future with clear financial goals.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-one__single">
                  <div className="service-one__inner">
                    <div className="service-one__circle"></div>
                    <div className="service-one__icon">
                      <i className="apton-icon-responsive"></i>
                    </div>
                    <p>Finally achieve financial peace of mind.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-one__single">
                  <div className="service-one__inner">
                    <div className="service-one__circle"></div>
                    <div className="service-one__icon">
                      <i className="apton-icon-responsive"></i>
                    </div>
                    <p>Ready to Take Charge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-right ">
            <img
              src={MockupPortrait}
              className="wow fadeInUp"
              style={{ height: "582px", marginBottom: 55 }}
              data-wow-duration="1500ms"
              alt=""
            />

            <a href="#">
              <img
                src={downloadGooglePlay}
                alt="Download from Google Play"
                style={{ height: "60px" }}
              />
            </a>
            <a href="#">
              <img
                src={downloadAppStore}
                alt="Download from App Store"
                style={{ height: "60px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
