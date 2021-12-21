import React from "react";

function Hoc(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>HOC Example</h1>
      <h2 style={{ backgroundColor: "red", width: 100 }}>
        <props.cmp />
      </h2>
    </div>
  );
}

export default Hoc;
