import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default Counter;
