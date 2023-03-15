// Spread Operator (ES6 - ES2015)

// Use Case 1. Copying Arrays

// const first = ["A", "B"];
// const second = ["D", "E"];

// const copyArray = [...second, "F", "G", 1, ...second];

// console.log("Copied Array", copyArray);

// Use Case 2. Copying Objects

// const parent = {
//   id: 1,
//   city: "Hyderabad",
//   score: 100,
// };

// const child = {
//   id: 6,
//   ...parent,
// };

// console.log(child);

// Use Case 3 : Spreading within the function call

// const array = [10, 19, 5, 199, 200];
// const answer = Math.max(...array);

// console.log(answer);

// function sum(a, b) {
//   return a + b;
// }

// const array = [1, 2, 3, 4];

// const result = sum(...array);

// Rest Operator

// function sum(...rest) {
//   console.log(rest);
// }

// const numbers = [1, 2, 3, 4];
// const result3 = sum(...numbers);

