import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./sections/landing-page/landing-page.js";
import Apply from "./sections/apply-page/apply-page.js";
import NavBar from "./components/navbar/navbar.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
