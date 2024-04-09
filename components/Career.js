import React from "react";
import BlockTitle from "./BlockTitle";
import TeamShape1 from "../assets/images/shapes/team-1-bg-1-1.png";
import TeamShape2 from "../assets/images/shapes/team-1-bg-1-2.png";
import Pannel from "../assets/images/resources/career-pal.png";

const Career = () => {
  return (
    <section className="cta-career" id="career">
      <img src={TeamShape1} className="team-one__bg-shape-1" alt="" />
      <img src={TeamShape2} className="team-one__bg-shape-2" alt="" />
      <div className="container div-career">
        <img src={Pannel} className="cta-one__bg-career" alt="" />
        <div className="row">
          <div className="col-lg-7">
            <div className="cta-one__content">
              <BlockTitle textAlign="left" titleText={<span>Career</span>} />
              <div className="text-left w-100">
                <p className="p-bold text-justify">
                  We Are Looking for Talented People Like You
                </p>
                <p className="text-justify">
                  We are always on the lookout for talented people like you to
                  join our team. As a dynamic and forward-thinking firm, we
                  value diversity, innovation, and excellence in everything we
                  do. If you're passionate about making a difference, driving
                  success, and shaping the future, we invite you to explore
                  exciting career opportunities with us. Send your cv to{" "}
                  <a href="#">support@moneymap.sg</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
