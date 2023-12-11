console.log("-----------Arrays-----------");

// Array: type of collection - list of comma separated values

console.log("------CREATING AN ARRAY------");

let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);

let fruits = ["Orange", "Apple", "Pear", "Strawberry"];
console.log(fruits);

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(days);

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits);

let mixedArray = [
  1,
  2,
  3,
  true,
  "Wow, this is possible?",
  null,
  500,
  "Yes, it is!",
];

console.log(mixedArray);

console.log("------ACCESSING ITEM IN ARRAY------");

console.log();
console.log(days[3]);

let someDay = days[5];
console.log(someDay);
console.log(days[10]);
console.log(days[days.length - 1]); // last index

console.log("------CHANGING ITEM VALUES------");
console.log();
fruits[2] = "Peach";
console.log(fruits);

console.log("------ADDING ITEM------");

// fruits[fruits.length] = "Fig";
// console.log(fruits);

//push() => add one item

fruits.push("Fig");
console.log(fruits);

fruits.push("Rasperry", "Banana", "Papaya");
console.log(fruits);

//unshift() =>
fruits.unshift("Kiwi", "Olive");
console.log(fruits);

console.log("------DELETING ITEMS------");
console.log();

//pop() Removes the last item
fruits.pop();
console.log(fruits);

let lastItem = fruits.pop();
console.log(lastItem);
console.log(fruits);

//shift() Removes the first item

fruits.shift();
console.log(fruits);
let firstItem = fruits.shift();
console.log(fruits);

//splice(a, b) removes b items starting with index a element
console.log(days);
days.splice(2, 2);
console.log(days);

days.splice(1); // will remove everything after the first item
console.log(days);
