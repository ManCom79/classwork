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
