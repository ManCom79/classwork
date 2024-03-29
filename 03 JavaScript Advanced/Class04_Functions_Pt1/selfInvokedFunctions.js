//without parameters
(function () {
  let fruits = ["Apple", "Bananna", "Orange"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
})();

//SelfInvolved function using arrow function
(() => {
  let fruits = ["Apple", "Bananna", "Orange"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
})();

((message) => console.log(message))(
  "This message is passed as an argument to the self involved function."
);
