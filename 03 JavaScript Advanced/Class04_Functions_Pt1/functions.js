//Declare
function getStudentName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
//Execute
getStudentName("John", "Doe");
let firstStudent = getStudentName("John", "Doe");
console.log(firstStudent);

//Nested function
function getStudentDetails(firstName, lastName, academy = "DevOps") {
  //   return `The student ${firstName} ${lastName} is studying ${acedemy} at Qinshift.`;
  return `The student ${getStudentName(
    firstName,
    lastName
  )} is studying ${academy} at Qinshift.`;
}

let studentDetails = getStudentDetails("Jill", "Wayne");
console.log(studentDetails);

//Bad Example
function getStudentDetailsSecond(firstStudent, lastName, academy) {
  let fullName;
  function getStudentFullName(firstName, lastName) {
    fullName = `${firstName} ${lastName}`;
  }
  return `The student ${fullName} is studying ${academy} at Qinshift.`;
}

let undefinedStudentInfo = getStudentDetailsSecond(
  "Ivan",
  "Ivanovski",
  "QA academy"
);

console.log(undefinedStudentInfo);

//Better way but still bad
function getStudentDetailsBetter(firstName, lastName, academy) {
  function getStudentFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  return `The student ${getStudentFullName(
    firstName,
    lastName
  )} is studying ${academy} at Qinshift.`;
}

let betterStudentInfo = getStudentDetailsBetter(
  "Ivan",
  "Ivanovski",
  "QA academy"
);

console.log(betterStudentInfo);
