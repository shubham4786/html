// this -> object
// this -> inside the function

// 1. Implicit Binding

// const user = {
//   name: "Agastha",
//   age: 27,
//   greet() {
//     console.log(this.age);
//   },
//   mother: {
//     name: "Stacey",
//     greet() {
//       console.log(this.name);
//     },
//   },
// };

// user.mother.greet();

// 2. Explicit Binding
// function greet(city) {
//   console.log("Name", this.name);
//   console.log("Age", this.age);
//   console.log("City", city);
// }

// const user = {
//   name: "Agastha",
//   age: 27,
// };

// const parent = {
//   name: "Christie",
//   age: 55,
// };

// const args = ["Hyderabad", "India", "Help"];

// // greet.apply(user, args);
// // greet.call(user, ...args);

// const newGreet = greet.bind(parent);
// const anotherGreet = greet.bind(user);

// newGreet(); //     this  -> parent
// anotherGreet(); // this  -> user

// const parent = {
//   name: "Arijit Singh",
//   sing() {
//     console.log(this);
//   },
// };

// const child = {
//   name: "Raftaar",
// };

// parent.sing();

// 3. new binding

// 4. lexical (arrow function) binding

// const object = {
//   id: 1,
//   name: "Deadpool",
//   greet: function () {
//     const grandparent = () => {
//       const parent = () => {
//         const child = () => {
//           console.log(this);
//         };

//         child();
//       };

//       parent();
//     };

//     grandparent();
//   },
// };

// object.greet();

// 5. window binding

// function sayAge() {
//   console.log("The age is", this);
// }

// sayAge.call([1, 2, 3]);

// Polyfills

// const array = [1, 2, 3, 4];

// function myMap() {}

// const newArray = array.myMap((number) => number * 2);

// const newArray = array.map((number) => number * 2);

// console.log(newArray);