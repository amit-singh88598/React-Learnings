import React from "react";

const arr = [2, 3, 11, 4, 5, 6];

const users = [
  {
    firstname: "Amit",
    lastName: "Singh",
    age: 24,
  },
  {
    firstname: "Ankit",
    lastName: "Singh",
    age: 27,
  },
  {
    firstname: "Sumit",
    lastName: "Singh",
    age: 24,
  },
  {
    firstname: "Vishal",
    lastName: "Singh",
    age: 23,
  },
  {
    firstname: "Vikas",
    lastName: "Singh",
    age: 26,
  },
];

// Array Operations Start

// function double(x) {
//   return x * 2;
// }

// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);

// Array Operations End

// Filter Operations Start

// function isOdd(x) {
//   return x % 2;
// }

// function isEven(x) {
//   return x % 2 === 0;
// }

// function greaterThan2(x) {
//   return x >= 3;
// }

// const output = arr.filter(greaterThan2);

// console.log(output);

const output = users.filter((x) => x.age < 25).map((x) => x.firstname);

console.log(output);

// Filter Operations End

// Reduce Operation Start

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

// const output = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     return (acc = curr);
//   }
//   return acc;
// }, 0);

// console.log(output);

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

// Reduce Operation End

function OpperationsWithArray(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Array Operations</h1>
    </div>
  );
}

export default OpperationsWithArray;
