const numbers = [2, 5, 8, -10, 15, -7, 3, -2, 12, -17, 34, -53];
const users = [{ id: 1, name: "Alice", age: 34 }];

// //map
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);

//forEach
numbers.forEach((num) => console.log(num));

//filter
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
