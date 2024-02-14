import React from "react";
import "./apply-page.css";

const Apply = () => {
  const arrow = require("../../components/downarrow.png");
  return (
    <>
      <div className="apply-container">
        <div className="application-info">
          <p className="apply-text">
            <p style={{ fontSize: "2rem" }}>ATLANTIS</p>
            The Inaugural Collegiate Datathon at UC Irvine
            <br />
            <br />
            <br />
            April 15 - 16, 2023
            <br />
            Free Admission!
            <br />
            <br />
            Applications close in xxxxxx days
            <br />
            <br />
            Apply Now:
            <div className="apply-btns-container">
              <a
                className="btn  btn-secondary app-btn d-flex justify-content-center align-items-center"
                href=""
              >
                Participant
              </a>
              <a
                className="btn btn-secondary app-btn d-flex justify-content-center align-items-center"
                href=""
              >
                Mentor
              </a>
            </div>
          </p>
        </div>
        <div className="shape"></div>
      </div>
      {/*
      <div id="learn-more-btn">
        <p style={{ fontSize: "1.2rem" }}>Learn More</p>
        <img src={arrow} style={{ width: "25px", height: "25px" }} />
      </div>
      */}
    </>
  );
};

export default Apply;
