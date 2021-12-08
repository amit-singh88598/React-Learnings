import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = [...array1, ...array2];
  const fruit = ["apple", "mango", "banana"];
  const veg = ["lemon", "potato", "tomato"];
  const [data, setData] = useState();
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Number Box");
    console.log(inputOne.current);
    inputOne.current.style.width = "500px";
  };

  const getTextBox = () => {
    console.log("Text Box");
    console.log(inputTwo.current);
  };

  useEffect((props) => {
    getData();
  });

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const mix = fruit.concat(veg);

  const startArray = [3, 4, 5];
  const newLength = startArray.unshift(2);
  console.log(newLength);
  console.log(startArray);

  startArray.unshift(-1, 0, 2);
  console.log(startArray);

  console.log(mix);

  console.log(array3);
  return (
    <div>
      <h1>This is home page...</h1>
      <Link to="/about">About</Link>
      <div>
        {mix.map((item, index) => (
          <div key={index}> {item}</div>
        ))}
      </div>
      <div>
        <h1>Learning</h1>
        <input
          ref={inputOne}
          value={myNum}
          type="number"
          style={{ width: "100px" }}
          onChange={(e) => setMyNum(e.target.value)}
        />
        <input
          ref={inputTwo}
          value={myNum}
          type="type"
          onChange={(e) => setMyNum(e.target.value)}
        />

        <h2>The Value is : {myNum}</h2>
        <button onClick={() => getNumBox()}>Number</button>
        <button onClick={() => getTextBox()}>Text</button>
      </div>
    </div>
  );
}

export default Home;
