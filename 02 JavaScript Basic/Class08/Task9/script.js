let array = [
  "One",
  "Two",
  "Three",
  "Four",
  "String",
  null,
  undefined,
  "string again",
  NaN,
  "",
  false,
  "Another String",
];

function removeFalsy(array) {
  testArray = array;
  console.log(testArray);
  for (i = 0; i < testArray.length; i++) {
    if ((true && !!testArray[i]) === false) {
      testArray.splice(i, 1);
      i--;
    }
  }
  console.log(testArray);
}

removeFalsy(array);
