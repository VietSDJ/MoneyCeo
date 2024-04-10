import React, { useState } from "react"
import axios from "axios"
import BlockTitle from "./BlockTitle"
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png"
import RadialCircle from "../assets/images/shapes/RadialCircle.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const sendMail = async (e) => {
    e.preventDefault() // Prevent default form submission behavior

    try {
      await axios.post("/api/sendEmail", formData)
      alert("Email sent successfully!")
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send email")
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

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
          <form
            className="contact-form-validated contact-one__form"
            onSubmit={sendMail}
          >
            <BlockTitle
              textAlign="left"
              paraText="Contact Now"
              titleText={`Have Question? Write \n a Message`}
            />
            <div className="row">
              <div className="col-lg-6 col-padding">
                <input
                  type="text"
                  placeholder="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="email"
                  placeholder="Email Address *"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  placeholder="Write Message *"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-lg-12 text-left text-mb-center">
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
