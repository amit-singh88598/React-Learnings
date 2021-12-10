import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Pages/about";
import Home from "../Pages/home";
import PopDrillingPage from "../Pages/popDrillingPage";
import Register from "../Pages/register";
import SignIn from "../Pages/signIn";

function Navigation(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/signIn" element={<SignIn />}></Route>
          <Route
            exact
            path="/popDrillingPage"
            element={<PopDrillingPage />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navigation;
