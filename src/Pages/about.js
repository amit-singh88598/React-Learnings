import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      <h2>This is About Page</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default About;
