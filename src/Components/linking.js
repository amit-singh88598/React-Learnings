import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../scss/index.scss";

function Linking(props) {
  const { pathname } = useLocation();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NavLink
        className={pathname === "/signIn" ? "active" : "nonActive"}
        to="/signIn"
        style={{ marginInline: 20 }}
      >
        SIGN-IN
      </NavLink>
      <NavLink
        className={pathname === "/register" ? "active" : "nonActive"}
        to="/register"
        style={{ marginInline: 20 }}
      >
        REGISTER
      </NavLink>
    </div>
  );
}

export default Linking;
