import React from "react"
import BlockTitle from "./BlockTitle"
import CEO from "../assets/images/Team/MarshallPoh.png"
import CTO from "../assets/images/Team/LeQuangKhai.png"

const AboutUs = () => {
  return (
    <section className="cta-author" id="aboutUs">
      <div className="container">
        <BlockTitle
          textAlign="center"
          titleText={<span className="text-size-large">About us</span>}
        />
        <div className="text-left">
          <div className="card-author">
            <img
              src={CEO}
              className="img-author"
              style={{ width: "345px" }}
              alt=""
            />
            <div className="title-author">
              <p>Meet Marshall Poh, CEO of Moneymap</p>
              <p>
                With over 11 years of experience in banking and finance,
                Marshall Poh is a seasoned leader and visionary entrepreneur. As
                the winner of the NTU Aspiring Entrepreneurs competition,
                Marshall brings a wealth of knowledge and a drive for innovation
                to his role at Moneymap. Under his leadership, Moneymap is
                revolutionizing the way individuals manage their finances,
                providing personalized solutions and cutting-edge technology to
                empower clients to achieve their financial goals..
              </p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="card-author">
            <div className="title-author">
              <p>Meet Le Quang Khai (Kevin Le), CTO of Moneymap</p>
              <p>
                Kevin Le, with 18 years of experience in Information Technology
                (IT) for Property and Finance Company, brings a wealth of
                knowledge and expertise to the table. In developing the
                financial management mobile app "Money CEO," Kevin's insights
                and leadership can drive innovation and inspire the team in
                several ways
              </p>
            </div>
            <img
              src={CTO}
              className="img-author"
              style={{ width: "345px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
