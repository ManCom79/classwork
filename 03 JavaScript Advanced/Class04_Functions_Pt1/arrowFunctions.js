let getWeatherInfo = () => {
  return `The weather today is very cold. Please stay at home.`;
};

let todaysWeather = getWeatherInfo();
console.log(todaysWeather);

//

// let multiplyNumbers = (x, y) => {
//   return x * y;
// };

let multiplyNumbers = (x, y) => x * y; //return is added by default

let product = multiplyNumbers(3, 6);
console.log(product);
//
let displayMessage = (greet, name, timeOdTheDay) =>
  `${greet} ${name}, it is ${timeOdTheDay}`;

let greetedPerson = displayMessage("Hello dear", "Ana", "evening.");
console.log(greetedPerson);

//
// let greetUser = (username) => `Hellow ${username}`
let greetUser = (username) => `Hellow ${username}`; //() can be omitted in case of single parameter

//Arrow function in event listener
let displayMsgBtn = document.getElementById("displayMsgBtn");

let message = () => {
  return "This message has been created by an arrow function.";
};

displayMsgBtn.addEventListener("click", () => {
  let messageContainer = document.getElementById("myElement");
  messageContainer.innerHTML =
    "This message has been created by an arrow function.";
});

displayMsgBtn.addEventListener("click", message); //just an example of ref function, won't work because we don't take message container
