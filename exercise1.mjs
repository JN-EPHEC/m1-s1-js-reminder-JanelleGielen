/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]

const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];


// Etape 1 
//**User Names:** Create a new variable `userNames` that contains an array with only the names of all users.
    //- _Expected result:_ `['Alice', 'Bob', 'Charlie', 'David', 'Eve']`
let userNames = [];

for (let i = 0; i < users;length; i++) {
  userNames.push (users [i].name);
}

console.log(userNames);

// Etape 2 
//**Engineers:** Create a new variable `engineers` that contains an array of user objects working in the 'Engineering' specialty.
  //  - _Expected result:_ `[{ id: 2, ... }, { id: 4, ... }]`
let userEngineers = [];

for (let i = 0; i < users.length; i++){
  if (users [i]. specialty === "Engineering") {
    userEngineers.push (user[i]);
  }
}

console.log(userEngineers);

// Etape 3

// Etape 4

// Your code here
