import React from "react"
import BlockTitle from "./BlockTitle"
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png"
import ContactImage from "../assets/images/resources/contact-1-1.jpg"
import RadialCircle from "../assets/images/shapes/RadialCircle.png"

const Contact = () => {
  return (
    <section className="contact-one" id="contactUs">
      <div className="flex-content-center">
        <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
        <img
          src={RadialCircle}
          className="contact-one__bg-shape-2"
          style={{ width: "206px" }}
          alt=""
        />
        <img
          src={RadialCircle}
          className="contact-one__bg-shape-3"
          style={{ width: "206px" }}
          alt=""
        />
        <img
          src={RadialCircle}
          className="contact-one__bg-shape-4"
          style={{ width: "552px" }}
          alt=""
        />
        <div className="are-45">
          <form className="contact-form-validated contact-one__form">
            <BlockTitle
              textAlign="left"
              paraText="Contact Now"
              titleText={`Have Question? Write \n a Message`}
            />
            <div className="row">
              <div className="col-lg-6 col-padding">
                <input type="text" placeholder="First Name" name="firstName" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Last Name" name="lastName" />
              </div>
              <div className="col-lg-12">
                <input type="text" placeholder="Email Address" name="email" />
              </div>

              <div className="col-lg-12">
                <textarea placeholder="Write Message" name="message"></textarea>
              </div>
              <div className="col-lg-12 text-left">
                <button type="submit" className="thm-btn contact-one__btn">
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </form>
          <div className="result"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact
