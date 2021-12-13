import React, { useMemo, useState } from "react";

function Grid(props) {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  // Using useMemo
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);

  // function to square the value
  function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ textAlign: "center" }}>Grid View</h1>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <div className="root">Hover Example With Transition</div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          //   gridAutoFlow: "column",
          gridAutoRows: "minmax(100px, auto)",
          gap: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: 20,
          }}
        >
          one
        </div>
        <div style={{ padding: 20, backgroundColor: "#ffccff" }}>two</div>
        <div style={{ backgroundColor: "#f5f5f5", padding: 20 }}>three</div>
        <div style={{ padding: 20, backgroundColor: "#ffccff" }}>four</div>
        <div style={{ backgroundColor: "#f5f5f5", padding: 20 }}>five</div>
      </div>
      <div
        style={{
          display: "grid",
          backgroundColor: "#f5f5f5",
          gridTemplateColumns: "repeat(3 , 1fr)",
          gap: 10,
          marginTop: 100,
          gridAutoRows: "minmax(100px, auto)",
        }}
      >
        <div
          style={{
            gridColumn: 1 / 3,
            gridRow: 1,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          One
        </div>
        <div
          style={{
            gridColumn: 2 / 4,
            gridRow: 1 / 3,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          Two
        </div>
        <div
          style={{
            gridColumn: 1,
            gridRow: 2 / 5,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          Three
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 3,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          four
        </div>
        <div
          style={{
            gridColumn: 2,
            gridRow: 4,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          five
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 4,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          six
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 5,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          seven
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: 7,
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          eight
        </div>
      </div>

      <div>
        <h1>Welcome to Geeksforgeeks</h1>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={onChangeHandler}
        ></input>

        <div>OUTPUT: {squaredNum}</div>
        <button onClick={counterHander}>Counter ++</button>
        <div>Counter : {counter}</div>
      </div>
    </div>
  );
}

export default Grid;
