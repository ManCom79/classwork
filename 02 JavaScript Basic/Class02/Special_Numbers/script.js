let result = 2 / "hello";

console.log(result);
console.log("Type of result is:", typeof result);

console.log(result == NaN);
console.log(result === NaN);

console.log(Number.isNaN(result));

let randomText = "Hello World!";
console.log(isNaN(randomText));
console.log(!isNaN(randomText));

// NaN example
const myNum1 = 5;
const myNum2 = "5";
const myNum3 = "foo";
const myResult = myNum1 * myNum2;
const myResult2 = myNum2 * myNum3;
console.log("muNum1:", myNum1, "type:", typeof myNum1);
console.log("muNum2:", myNum2, "type:", typeof myNum2);
console.log("muNum3:", myNum3, "type:", typeof myNum3);
console.log("myResult:", myResult, "type:", typeof myResult);
console.log("myResult2:", myResult2, "type:", typeof myResult2);

let infinityValue = Infinity;
console.log(infinityValue);
console.log(typeof infinityValue);
