import React, { useContext } from "react";
import { CounterContext } from "../counterContext";
import SubIncrementComp from "./subIncrementComp";

function IncrementComp() {
  const { counter, setCounter } = useContext(CounterContext);
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
        {counter}
      </h1>
      <button
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: "#000",
          color: "#fff",
        }}
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <SubIncrementComp />
    </div>
  );
}

export default IncrementComp;
