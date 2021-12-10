import React, { useState } from "react";
import IncrementComp from "../Components/incrementComp";
import { CounterContext } from "../counterContext";

function PopDrillingPage(props) {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecriment = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Pop Drilling Page </h1>
        <h2 style={{ textAlign: "center" }}>App Counter</h2>
        <h3 style={{ textAlign: "center" }}>{counter}</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              margin: 5,
              padding: 5,
              backgroundColor: "#000",
              color: "#fff",
            }}
            onClick={handleDecriment}
          >
            Decriment
          </button>
          <button
            style={{
              margin: 5,
              padding: 5,
              backgroundColor: "#000",
              color: "#fff",
            }}
            onClick={handleIncrement}
          >
            Increment
          </button>
        </div>
        <CounterContext.Provider value={counter}>
          <IncrementComp />
        </CounterContext.Provider>
      </div>
    </div>
  );
}

export default PopDrillingPage;
