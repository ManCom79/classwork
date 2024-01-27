const numbers = [2, 5, 8, -10, 15, -7, 3, -2, 12, -17, 34, -53];
const users = [
  { id: 1, name: "Alice", age: 34 },
  { id: 2, name: "ce", age: 42 },
];

// //map
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);

//forEach
numbers.forEach((num) => console.log(num));

//filter - returns array
const positiveNumbers = numbers.filter((num) => num > 0);
console.log(positiveNumbers);

//reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//sort
const numbersToSort = [2, 4, 1, 67, 87, -55, -12, 7 - 1];
numbersToSort.sort((a, b) => a - b);
console.log(numbersToSort);

const students = ["gre", "asd", "ko", "rth"];
students.sort((a, b) => a.localeCompare(b));
console.log(students);

//includes
const studentsIncludeIvan = students.includes("Ivan");
console.log(studentsIncludeIvan);

//find
const foundUser = users.find((user) => user.age === 42);
console.log(foundUser);

//reverse
const originalArrayReverse = [1, 2, 3, 4, 5];
// console.log(originalArrayReverse);
// originalArrayReverse.reverse();
// console.log(originalArrayReverse);

// let newArr = originalArrayReverse; // will not make a new copy
// newArr.reverse();

// console.log("Original " + originalArrayReverse);
// console.log("New " + newArr);

let newArr = originalArrayReverse.slice();
let newArr2 = [...originalArrayReverse]; //spread operator

newArr.reverse();
newArr2.reverse();

console.log(newArr);
console.log(newArr2);

//reverse i-th string
const originalString = "Hello World";
const reversedString = originalString.split("").reverse().join("");

console.log(reversedString);

// indexOf
const students1 = ["gre", "asd", "ko", "ko", "rth"];
const indexOfStudent1 = students1.indexOf("ko");
const indexOfStudent2 = students1.indexOf("kokoko");
console.log(indexOfStudent1); //returns index of first found
console.log(indexOfStudent2); // returns -1

//findIndex
let indexOfUser = users.findIndex((user) => user.age === 34); //returns first found index
console.log(indexOfUser);
