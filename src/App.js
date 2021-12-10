import React, { useState } from "react";
import { CounterContext } from "./counterContext";
import Navigation from "./Routes/navigation";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* <CounterContext.Provider value={count}> */}
      <div>{count}</div>
      <button onClick={handleCount}>Click</button>
      <Navigation />
      {/* </CounterContext.Provider> */}
    </div>
  );
}

export default App;
