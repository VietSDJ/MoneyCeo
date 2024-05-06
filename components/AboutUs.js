import React from "react"
import BlockTitle from "./BlockTitle"
import CEO from "../assets/images/Team/MarshallPoh.png"
import CTO from "../assets/images/Team/LeQuangKhai.png"
import PrettyEllipse from "../assets/images/shapes/pretty-ellipse.png"

const AboutUs = () => {
  return (
    <section className="cta-author" id="aboutUs">
      <img
        src={PrettyEllipse}
        className="author-one__bg-radial-1"
        style={{ width: "99px" }}
        alt=""
      />
      <img
        src={PrettyEllipse}
        className="author-one__bg-radial-2"
        style={{ width: "148px" }}
        alt=""
      />
      <img
        src={PrettyEllipse}
        className="author-one__bg-radial-3"
        style={{ width: "50px" }}
        alt=""
      />
      <img
        src={PrettyEllipse}
        className="author-one__bg-radial-4"
        style={{ width: "99px" }}
        alt=""
      />
      <img
        src={PrettyEllipse}
        className="author-one__bg-radial-5"
        style={{ width: "99px" }}
        alt=""
      />
      <div className="container">
        <BlockTitle
          textAlign="center"
          titleText={<span className="text-size-large">About us</span>}
        />
        <div className="text-left">
          <div className="card-author card-author-1">
            <img
              src={CEO}
              className="img-author"
              style={{ width: "345px" }}
              alt=""
            />
            <div className="title-author">
              <p className="p-hightlight">
                Meet Marshall Poh
                <br /> CEO of Moneymap
              </p>
              <p className="text-left text-mb-justify">
                With over 11 years of experience in banking and finance,
                Marshall Poh is a seasoned leader and visionary entrepreneur. As
                the winner of the NTU Aspiring Entrepreneurs competition,
                Marshall brings a wealth of knowledge and a drive for innovation
                to his role at Moneymap. Under his leadership, Moneymap is
                revolutionizing the way individuals manage their finances,
                providing personalized solutions and cutting-edge technology to
                empower clients to achieve their financial goals.
              </p>
            </div>
          </div>
        </div>
        <div className="card-author card-author-2">
          <div className="title-author">
            <p className="text-mb-center p-hightlight text-right ">
              Meet Le Quang Khai (Kevin Le)
              <br /> CTO of Moneymap
            </p>
            <p className=" text-right text-mb-justify">
              With 18 years under his belt crafting IT solutions for Property
              and Finance companies, Kevin Le brings a wealth of experience and
              a keen understanding of the financial landscape to MoneyCEO. This
              industry expertise fuels his vision for the app, transforming it
              from a simple money management tool into a platform that empowers
              users to achieve their financial goals. Kevin's leadership extends
              far beyond technical prowess. Kevin’s passion for technology
              inspires the team to push boundaries and deliver exceptional
              results. This combination of industry knowledge, visionary
              leadership, and a commitment to building a strong team makes Kevin
              Le a key player in MoneyCEO's mission to revolutionise personal
              finance management.
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
    </section>
  )
}

export default AboutUs
