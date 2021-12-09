import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About(props) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setResponse(res);
    console.log(res);
    if (res) {
      return { res };
    } else {
      console.log("Data not Fetched");
    }
  };
  return (
    <div>
      <h2>This is About Page</h2>
      <Link to="/">Home</Link>
      {response.data &&
        response.data.map((item, index) => {
          <div key={index}>
            <div> hello</div>
            <p>{item.body}</p>
            <h1>{item.id}</h1>
            <h3>{item.title}</h3>
            <h2>{item.userId}</h2>
          </div>;
        })}
    </div>
  );
}

export default About;
