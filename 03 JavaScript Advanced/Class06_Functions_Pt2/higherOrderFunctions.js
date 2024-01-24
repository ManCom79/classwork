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
