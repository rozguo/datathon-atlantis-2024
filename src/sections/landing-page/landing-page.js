import React from "react";
import "./landing-page.css";
import Apply from "../apply-page/apply-page";
import About from "../about-page/about-page";

const Landing = () => {
  return (
    <>
      <div id="landing-container">
        <p style={{ fontSize: "1.5rem" }}>DATA AT UCI PRESENTS....</p>
        <p style={{ fontSize: "3.5rem" }}>ATLANTIS</p>
        <br />
        <p style={{ fontSize: "1.5rem" }}>THE DEPTHS OF DATA</p>
        <p style={{ fontSize: "1.5rem" }}>UC IRVINE’S SECOND ANNUAL DATATHON</p>
      </div>
      <Apply />
    </>
  );
};

export default Landing;
