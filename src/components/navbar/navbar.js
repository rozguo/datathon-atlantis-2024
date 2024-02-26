import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const NavBar = () => {
  const logo = require("../atlantis_logo.png");
  return (
    <Navbar expand="md" style={{ backgroundColor: "#5893A6" }}>
      <Navbar.Brand href="/" style={{ paddingLeft: "30px" }}>
        <img
          src={logo}
          alt="Data@UCI logo"
          style={{ width: "40px", height: "40px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="mobile-toggle"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/*<Nav.Link
            href="/about"
            style={{ paddingLeft: "30px", color: "white" }}
          >
            Apply
          </Nav.Link>
          <Nav.Link
            href="/datathon"
            style={{ paddingLeft: "30px", color: "white" }}
          >
            Learn More
          </Nav.Link>
          <Nav.Link
            href="/events"
            style={{ paddingLeft: "30px", color: "white" }}
          >
            Sponsors
          </Nav.Link>
          <Nav.Link
            href="/contact"
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              color: "white",
            }}
          >
            Contact
          </Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
