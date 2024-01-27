num1 = 10;
num2 = 30;

//impure function
function add() {
  return num1 + num2;
}

//pure function
function add(a, b) {
  return a + b;
}

add(5, 10);

let total = 0;
function addToTotal(val) {
  total += val;
  return total;
}

console.log(addToTotal(10));
console.log(addToTotal(10));

let array = [1, 2, 3];
//not pure
function addToArray(element) {
  array.push(element);
  return array;
}

//not pure
function addToArray2(arr, element) {
  arr.push(element);
  return arr;
}

//pure
function addToArrayPure(arr, element) {
  const newArray = [...arr];
  // const newArray = arr.slice() - also valid
  newArray.push(element);
  return newArray;
}

//Not pure because does not return same response every time
function getNumber() {
  return Math.random();
}

function changeHeading() {
  document.getElementById("sample").innerHTML = "We changed the heading!";
}

changeHeading();
