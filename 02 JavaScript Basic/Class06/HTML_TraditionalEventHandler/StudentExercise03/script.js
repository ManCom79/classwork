let userInputs = document.getElementsByClassName("text");
let registerButton = document.getElementById("regusterButton");
let paragraph = document.getElementById("paragraph");
let string = "";

registerButton.addEventListener("click", function () {
  console.log(userInputs[0].value);
  console.log(userInputs[1].value);
  console.log(userInputs[2].value);
  console.log(userInputs[3].value);
  let string = `Hello ${userInputs[0].value} ${userInputs[1].value}. The password of your email ${userInputs[2].value} is ${userInputs[3].value}. Not smart :-)`;
  console.log(string);
  return string;
});

paragraph.innerText = string;
