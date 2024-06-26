import React, { useState, useEffect } from "react";
import BlockTitle from "./BlockTitle";
import MockupPortrait from "../assets/images/resources/mockup-portrait1.png";
import InOutCashflowPortrait from "../assets/images/resources/In-out-cashflow-portrait1.png";
import PieChartPortrait from "../assets/images/resources/pieChart-portrait1.png";
import RadialCircle from "../assets/images/shapes/RadialCircle.png";
import BlockMessage from "./BlockMessage";
import SwipeableViews from "react-swipeable-views";

const Thriving = () => {
  const [index, setIndex] = useState(0);
  const [isShowSwipe, setIsShowSwipe] = useState(false);

  useEffect(() => {
    if (document.documentElement.clientWidth < 500) {
      setIsShowSwipe(true);
    } else {
      setIsShowSwipe(false);
    }
  }, []);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const clickChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <section className="thriving">
      <div className="container">
        <img
          src={RadialCircle}
          className="cta-one__bg-radial-1"
          style={{ width: "751px" }}
          alt=""
        />
        <img
          src={RadialCircle}
          className="cta-one__bg-radial-2"
          style={{ width: "358px" }}
          alt=""
        />
        <img
          src={RadialCircle}
          className="cta-one__bg-radial-3"
          style={{ width: "358px" }}
          alt=""
        />
        <BlockTitle
          textAlign="left"
          className="flex-content-center"
          // paraText="Feature List"
          titleText={
            <div className={`${isShowSwipe ? "text-start" : ""}`}>
              <span className="text-size-large">
                Stop Dreading Your Bank Account
              </span>
              <br />
              <div className="thriving-thriving">
                <span className="text-highlight text-size-large">
                  Start Thriving
                </span>
                <p className="thriving-subtitle">
                  Actionable Insights &{" "}
                  <span className="subtitle-bold">Smart </span>
                  Forecasting
                </p>
                <p className="thriving-subtitle">
                  MoneyCEO doesn’t just show you where your money goes,{" "}
                  <span className="subtitle-bold">
                    it helps you understand why
                  </span>
                </p>
                <p className="thriving-subtitle">
                  Our <span className="subtitle-bold"> AI</span>-powered
                  analytics{" "}
                  <span className="subtitle-bold">
                    predict future cash flow
                  </span>{" "}
                  and identify areas for optimization
                </p>
              </div>
            </div>
          }
        />
        <div className="row">
          {isShowSwipe ? (
            <>
              <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                <div className="col-lg-4 text-center custom-swipe-1">
                  <BlockMessage
                    locClass="thriving__bg-sub-1"
                    maxWidth={284}
                    textAlign="left"
                    titleText={
                      <div className="text-message">
                        <p>
                          Hey there <span className="text-highlight">CEO</span>!
                        </p>
                        <p>
                          Our AI noticed a recent increase in fashion spending.
                        </p>
                        <p>
                          Would you like to see a breakdown and set a new budget
                          for this category
                        </p>
                      </div>
                    }
                  />
                  <img
                    src={MockupPortrait}
                    className="wow fadeInUp "
                    style={{ height: "582px", marginBottom: 55 }}
                    data-wow-duration="1500ms"
                    alt=""
                  />
                </div>
                <div className="col-lg-4 text-center ">
                  <BlockMessage
                    locClass="thriving__bg-sub-2"
                    textAlign="left"
                    titleText={
                      <div className="text-message">
                        <p>
                          “Heads up, <span className="text-highlight">CEO</span>
                          !
                        </p>
                        <p>
                          Based on upcoming bills and recurring expenses, you
                          might have a slight cash flow shortage!”
                        </p>
                      </div>
                    }
                  />
                  <img
                    src={InOutCashflowPortrait}
                    className="wow fadeInUp"
                    style={{ height: "582px", marginBottom: 55 }}
                    data-wow-duration="1500ms"
                    alt=""
                  />
                </div>
                <div className="col-lg-4 text-center custom-swipe-3">
                  <BlockMessage
                    locClass="thriving__bg-sub-3"
                    maxWidth={250}
                    textAlign="left"
                    titleText={
                      <div className="text-message">
                        <p>
                          “Based on your spending habits and financial goals,
                          Money CEO recommends allocating more funds towards
                          savings. This could help you achieve your goal faster”
                        </p>
                      </div>
                    }
                  />
                  <img
                    src={PieChartPortrait}
                    className="wow fadeInUp"
                    style={{ height: "582px", marginBottom: 55 }}
                    data-wow-duration="1500ms"
                    alt=""
                  />
                </div>
              </SwipeableViews>
              <div id="custom-pagani">
                <div
                  className={index === 0 ? "button active" : "button"}
                  onClick={() => clickChangeIndex(0)}
                ></div>
                <div
                  className={index === 1 ? "button active" : "button"}
                  onClick={() => clickChangeIndex(1)}
                ></div>
                <div
                  className={index === 2 ? "button active" : "button"}
                  onClick={() => clickChangeIndex(2)}
                ></div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-4 text-center">
                <BlockMessage
                  locClass="thriving__bg-sub-1"
                  maxWidth={284}
                  textAlign="left"
                  titleText={
                    <div className="text-message">
                      <p>
                        Hey there <span className="text-highlight">CEO</span>!
                      </p>
                      <p>
                        Our AI noticed a recent increase in fashion spending.
                      </p>
                      <p>
                        Would you like to see a breakdown and set a new budget
                        for this category
                      </p>
                    </div>
                  }
                />
                <img
                  src={MockupPortrait}
                  className="wow fadeInUp "
                  style={{ height: "582px", marginBottom: 55 }}
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
              <div className="col-lg-4 text-center ">
                <BlockMessage
                  locClass="thriving__bg-sub-2"
                  textAlign="left"
                  titleText={
                    <div className="text-message">
                      <p>
                        “Heads up, <span className="text-highlight">CEO</span>!
                      </p>
                      <p>
                        Based on upcoming bills and recurring expenses, you
                        might have a slight cash flow shortage!”
                      </p>
                    </div>
                  }
                />
                <img
                  src={InOutCashflowPortrait}
                  className="wow fadeInUp"
                  style={{ height: "582px", marginBottom: 55 }}
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
              <div className="col-lg-4 text-center ">
                <BlockMessage
                  locClass="thriving__bg-sub-3"
                  maxWidth={250}
                  textAlign="left"
                  titleText={
                    <div className="text-message">
                      <p>
                        “Based on your spending habits and financial goals,
                        Money CEO recommends allocating more funds towards
                        savings. This could help you achieve your goal faster”
                      </p>
                    </div>
                  }
                />
                <img
                  src={PieChartPortrait}
                  className="wow fadeInUp"
                  style={{ height: "582px", marginBottom: 55 }}
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Thriving;
