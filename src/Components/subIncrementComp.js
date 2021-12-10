import React, { useContext } from "react";
import { CounterContext } from "../counterContext";

function SubIncrementComp() {
  const value = useContext(CounterContext);
  //   const {counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      {/* <h1
        style={{
          border: "2px solid black",
          padding: 20,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        {counter}
      </h1> */}
      <h1
        style={{
          border: "2px solid black",
          padding: 20,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default SubIncrementComp;
