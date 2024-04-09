import React, { useState } from "react"
import ModalVideo from "react-modal-video"

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png"
import BannerBG from "../assets/images/resources/banner-elipse.jpg"
import BannerMoc from "../assets/images/resources/phoneHomePage.png"
import downloadAppStore from "../assets/images/resources/downloadAppStore.png"
import downloadGooglePlay from "../assets/images/resources/downloadGooglePlay.png"

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  })
  const openModal = () => {
    setOpen({
      isOpen: true,
    })
  }

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        {/* <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        /> */}
        <div
          onClick={openModal}
          className="banner-one__video video-popup"
        ></div>
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            style={{ width: "310px" }}
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              {/* <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
              </form> */}
              <div className="mc-form__response"></div>
              <h3>
                Introducing <br /> the World’s First <br /> Personal Cash Flow
              </h3>
              <div className="col-lg-9">
                <p>Revolutionize Your Relationship with Money </p>
                <p>
                  MoneyCEO is more than just a budgeting app. <br />
                  It's a financial game-changer, designed to empower you with
                  complete control over your cash flow.
                </p>
                <p>MoneyCEO: Finally, Cash Flow Made Easy</p>
              </div>
              {/* <a href="#" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a> */}
              <div className="dowload-app">
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
        </div>
      </div>
    </section>
  )
}

export default Banner
