import React, { useContext } from "react";
import { CounterContext } from "../counterContext";

function SubIncrementComp() {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1
        style={{
          border: "2px solid black",
          padding: 20,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        {count}
      </h1>
      <h1
        style={{
          border: "2px solid black",
          padding: 20,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        {count}
      </h1>
    </div>
  );
}

export default SubIncrementComp;
