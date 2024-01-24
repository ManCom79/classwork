//Storing function as a variable

// let add = function(first, second) {
//     return first + second
// }

function add(first, second) {
  return first + second;
}

const sumFunction = add;
const sumResult = sumFunction(5, 10); //not accessable from window

function subtract(first, second) {
  return first - second;
}

const subtractFunction = subtract;

//Storing functions in an array and using them
function multiply(first, second) {
  return first * second;
}

const multiplyFunction = multiply;

function divide(first, second) {
  if (second === 0) {
    return "Division by 0 is not allowd.";
  }
  return first / second;
}

const divideFunction = divide;

const operations = [add, subtract, multiply, divide];
console.log(operations[2](20, 6));

///////////////////////////// USING FUNCTION AS AN ARGUMENT (delegates)
function operation(func, firstNumber, secondNumber) {
  return func(firstNumber, secondNumber);
}

let operationResult = operation(add, 30, 50);
console.log(operationResult);

///////////////////////////// RETURNING FUNCTION FROM ANOTHER FUNCTION
const greetingGenerator = (language) => {
  switch (language.toLowerCase()) {
    case "english":
      return (name) => console.log(`Hello ${name}!`);
    case "spanish":
      return (name) => console.log(`Hola ${name}!`);
    case "french":
      return (name) => console.log(`Bonjour ${name}!`);
    default:
      console.log("Unsuppoerted languale!");
      return null;
  }
};

const greetInEnglish = greetingGenerator("english");
const greetInSpanish = greetingGenerator("spanish");
const greetInFrench = greetingGenerator("french");

// greetInSpanish("Pablo");

//////////////////////////// A FUNCTION WITH PROPERTIES AND A METHOD
const taskHandler = (taskName) => {
  return `Task ${taskName} completerd.`;
};
//adding properties to function (as on object)
taskHandler.defaultTask = "learn coding";
taskHandler.description = "this is a task handler function";
//get property of function
console.log(taskHandler.defaultTask);
const defaultTaskResult = taskHandler(taskHandler.defaultTask);
console.log(defaultTaskResult);

//adding method to a function
taskHandler.customTaskResult = (taskName, customAction) => {
  //this is method actually
  return `The result for the task ${taskName}: ${customAction}`;
};

const customResult = taskHandler.customTaskResult(
  "play soccer",
  (() => {
    return `still in progres.`;
  })()
);

console.log(customResult);
