import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Pages/about";
import Home from "../Pages/home";

function Navigation(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navigation;
