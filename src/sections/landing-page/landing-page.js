import React from "react";
import "./landing-page.css";
import Apply from "../apply-page/apply-page";
import About from "../about-page/about-page";
import Team from "../team-page/team";
import Contact from "../contact-page/contact-page";

const Landing = () => {
  const logo = require("../black_logo.png");
  return (
    <>
      <div id="landing-container">
        <p style={{ fontSize: "1.5rem" }}>DATA AT UCI PRESENTS....</p>
        <p style={{ fontSize: "4.5rem" }}>ATLANTIS</p>
        <p style={{ fontSize: "1.5rem" }}>THE DEPTHS OF DATA</p>
        <p style={{ fontSize: "1.5rem" }}>UC IRVINE’S SECOND ANNUAL DATATHON</p>
        <div id="moving-logo">
          <img src={logo} id="logo"></img>
        </div>
      </div>
      <Apply />
      <Contact />
      <Team />
      {/* uncomment this when sponsor page is ready + import sponsor component at top
      <Sponsor />
      */}
    </>
  );
};

export default Landing;
