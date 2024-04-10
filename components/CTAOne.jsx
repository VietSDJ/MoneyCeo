import React, { useState, useEffect } from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";
import downloadAppStore from "../assets/images/resources/downloadAppStore.png";
import downloadGooglePlay from "../assets/images/resources/downloadGooglePlay.png";
import ModalUpdateInFuture from "./ModalUpdateInFuture";
const CTAOne = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (document.documentElement.clientWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  const [open, setOpen] = useState({
    isOpen: false,
  })
  const openModal = () => {
    setOpen({
      isOpen: true,
    })
  }
  return (
    <section className="cta-one" id="features" >
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
      <ModalUpdateInFuture
          isOpen={open?.isOpen}
          onClose={() => setOpen({ isOpen: false })}
        />
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end " >
          <div className="col-lg-12 ">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="center"
                // paraText="Feature List"
                titleText={
                  <div
                    className={`${
                      setIsMobile ? "text-end" : "text-right"
                    } text-size-large div-title-1`}
                  >
                    <span>Take Control of Your Finances</span>
                    {setIsMobile ? " " : <br />}
                    <span className="text-highlight">Effortlessly</span>
                  </div>
                }
              />
              <div className="text-right w-100 flex-content-end">
                <div className="are-45 cta-one__text">
                  <p>Effortless Tracking & Transparency:</p>
                  <p>
                    Say goodbye to spreadsheets and endless calculations.
                    MoneyCEO automatically tracks your income and expenses,
                    providing real- time insights into your financial health.
                  </p>
                  <p>Take Control of Your Cash Flow Today</p>
                  <div className="dowload-app flex-content-end">
                    <a onClick={openModal}>
                      <img
                        src={downloadGooglePlay}
                        alt="Download from Google Play"
                        style={{ height: "60px" }}
                      />
                    </a>
                    <a onClick={openModal}>
                      <img
                        src={downloadAppStore}
                        alt="Download from App Store"
                        style={{ height: "60px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
