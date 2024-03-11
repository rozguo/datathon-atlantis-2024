import React from "react";
import "./apply-page.css";

const Apply = () => {
  const arrow = require("../../components/downarrow.png");
  return (
    <div className="apply-container">
      <div className="application-info">
        <div className="apply-text">
          <p style={{ fontSize: "2rem" }}>ATLANTIS</p>
          <p style={{ fontSize: "1.3rem" }}>
            The Inaugural Collegiate Datathon at UC Irvine
          </p>
          <br />
          <p style={{ fontSize: "1.2rem" }}>
            April 15 - 16, 2023
            <br />
          </p>
          <br />
          <p style={{ fontSize: "1.2rem" }}>
            Applications due on March 22, 2024 at 11:59 PM
            <br />
            <br />
            Apply Now:
          </p>
        </div>

        <div className="apply-btns-container">
          <div>
            <a
              style={{ borderRadius: "50px" }}
              className="btn btn-secondary app-btn d-flex justify-content-center align-items-center"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfAytD0pFRwV70e7GaWSk9QTazSfUVzRcYJGJroZbhrIvk6g/viewform?usp=sf_link"
            >
              Participant
            </a>
          </div>
          <div id="mentor-btn">
            <a
              style={{ borderRadius: " 50px" }}
              className="btn btn-secondary app-btn d-flex justify-content-center align-items-center"
              href="https://forms.gle/du3SG5HD6MvMW2EX8"
            >
              Mentor
            </a>
          </div>
        </div>
      </div>
      <div className="shape"></div>
    </div>
  );
};

export default Apply;
