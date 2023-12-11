console.log("------Looping Structures------");
console.log("");

console.log("------While Loop------");
//executes while condition is true
// while (condition) {
//   //code to be executed
// }

let counter = 1;
while (counter < 5) {
  console.log(counter);
  counter++;
}

let students = ["Bob Bobsky", "John Johnsky", "Petko Petkovski"];
let studentCounter = 0;

while (studentCounter < students.length) {
  console.log(`Student #${studentCounter + 1}: ${students[studentCounter]}`);
  studentCounter++;
}

console.log("");

console.log("------Do-While Loop------"); //Compared to While, this code will execute at least once

let doWhileCounter = 0;
do {
  console.log(students[doWhileCounter]);
  doWhileCounter++;
} while (doWhileCounter < students.length);

console.log("");

let tenNumber = [1, 34, 234, 433_434, 3434, 435_343, 3444, 4334, 535, 644];

function findLargestValue(array) {
  let index = 0;
  let max = -Infinity;
  while (index < array.length) {
    if (array[index] > max) {
      max = array[index];
    }
    index++;
  }
  console.log(`The largest number is ${max}`);
}

findLargestValue(tenNumber);

console.log("");

console.log("------For Loop------");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let cities = ["Skopje", "Miami", "Tokyo", "Prilep"];

for (let i = 0; i < cities.length; i++) {
  let cityInfo = `City #${i + 1}: ${cities[i]}`;
  if (cities[i] === "Miami") {
    cityInfo += "=> I would like to go there.";
  }
  console.log(cityInfo);
}
console.log("");

console.log("------For-of Loop------"); //no counter, we go through all elements in array
for (let city of cities) {
  console.log(city);
}

console.log("");

console.log("------Break and Continue------"); //when the loop to stop

let numbers = [1, 23, 40, 50, 30, 41, 23];

for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] === 40) {
    console.log(`Found 40 at index ${j}! Exiting the loop.`);
    break;
  }
  console.log(j);
}
console.log("");
for (let number of numbers) {
  if (number % 4 === 0) {
    console.log(`The number ${number} is divisible by 4`);
    continue;
  }
  console.log(`The number ${number} is NOT divisible by 4`);
}
