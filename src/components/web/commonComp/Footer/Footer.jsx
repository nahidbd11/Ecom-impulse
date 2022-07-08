import React from "react";
import useFetch from "../../../../customHooks/useFetch";
import { getPhoto } from "../../../../utilityFunction/getPhoto";

function Footer() {
  const { result: settings, loading } = useFetch(
    `${process.env.REACT_APP_API_BASE_URL}/settings`
  );
  const { short_des, phone, address, email } = settings.data[0];

  return (
    <footer className="footer">
      {/* Footer Top */}

      <div className="footer-top section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer about">
                <div className="logo">
                  <a href="index.html">
                    <img src={require("../../../../assets/logo.png")} alt="#" />
                  </a>
                </div>
                <p className="text">{short_des}</p>
                <p className="call">
                  Got Question? Call us 24/7
                  <span>
                    <a href="tel:123456789"> {phone} </a>
                  </span>
                </p>
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer links">
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href="http://127.0.0.1:8000/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="http://127.0.0.1:8000/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer links">
                <h4>Customer Service</h4>
                <ul>
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Money-back</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer social">
                <h4>Get In Touch</h4>
                {/* Single Widget */}
                <div className="contact">
                  <ul>
                    <li>{address}</li>
                    <li> {email} </li>
                    <li> {phone}</li>
                  </ul>
                </div>
                {/* End Single Widget */}
                {/* <div className="sharethis-inline-follow-buttons" /> */}
              </div>
              {/* End Single Widget */}
            </div>
          </div>
        </div>
      </div>

      {/* End Footer Top */}
      <div className="copyright">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="left">
                  <p>
                    Copyright © 2022{" "}
                    <a href="" target="_blank">
                      Hilinkz Ltd.
                    </a>{" "}
                    - All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="right">
                  {/* <img
                    src="http://127.0.0.1:8000/backend/img/payments.png"
                    alt="#"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
