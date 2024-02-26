import React from "react";
import "./contact-page.css";

const Contact = () => {
  const orangeLogo = require("../orange_logo.png");
  return (
    <div className="contact-container">
      <div className="email-section">
        <h1>Email Us</h1>
        <p style={{ textAlign: "center" }}>
          Have any questions? Interested in sponsoring our events? <br /> Feel
          free to email us here:
        </p>
        <div id="contact-btn">
          <a
            href="mailto:data.ucirvine@gmail.com"
            className="btn btn-primary app-btn email-button"
            style={{ fontSize: "large" }}
          >
            data.ucirvine@gmail.com
          </a>
        </div>
        <div id="moving-orange">
          <img src={orangeLogo} id="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
