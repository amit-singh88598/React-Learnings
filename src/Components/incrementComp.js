import React, { useContext } from "react";
import { CounterContext } from "../counterContext";
import SubIncrementComp from "./subIncrementComp";

function IncrementComp() {
  const value = useContext(CounterContext);
  //   const { counter, setCounter } = useContext(CounterContext);
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
        {value}
      </h1>
      <SubIncrementComp />
    </div>
  );
}

export default IncrementComp;
