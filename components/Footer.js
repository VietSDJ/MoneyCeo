import React, { useContext } from "react"

import FooterLogo from "../assets/images/logo-footer.png"

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="footer-widget__content footer-desktop">
              <div className="col-lg-6">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="" />
                  </a>
                  <p className="footer-company">
                    Money Map Joint Stock Company
                  </p>
                  <div className="row">
                    <div className="col-lg-2">
                      <p>Address </p>
                    </div>
                    <div className="col-lg-10">
                      <p>
                        : 101 Marlow Street, #12-05 Clife Parkview, Singapore
                        059020
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <p>Hotline</p>
                    </div>
                    <div className="col-lg-10">
                      <p>: +65 9988 9908</p>
                    </div>
                    <div className="col-lg-2">
                      <p>Email</p>
                    </div>
                    <div className="col-lg-10">
                      <p>: support@moneymap.sg</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="footer-widget__links-scroll">
                  <a href="#">About</a>
                  <a href="#">Our Team</a>
                  <a href="#">Contact</a>
                  <a href="#">Terms of Use</a>
                </div>
              </div> */}
            </div>
            <div className="footer-widget__content_1 footer-mobile">
              <div className="col-lg-12">
                <a href="index.html">
                  <img src={FooterLogo} width="129" alt="" />
                </a>
                <p className="footer-company">Money Map Joint Stock Company</p>
                <div className="row">
                  <div className="col-footer-1 ">
                    <p>Address </p>
                  </div>
                  <div className="col-footer-2">
                    <p>
                      : 101 Marlow Street, #12-05 Clife Parkview, Singapore
                      059020
                    </p>
                  </div>
                  <div className="col-footer-1 ">
                    <p>Hotline</p>
                  </div>
                  <div className="col-footer-2">
                    <p>: +65 9988 9908</p>
                  </div>
                  <div className="col-footer-1 ">
                    <p>Email</p>
                  </div>
                  <div className="col-footer-2">
                    <p>: info@moneymap.asia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
