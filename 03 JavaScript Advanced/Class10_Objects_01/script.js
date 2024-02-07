console.log("---------------- OBJECT  METHODS ----------------");

// create
let person = {
  firstName: "Bob",
  lastName: "Bobsky",
  greet: function () {
    console.log("Hello!");
  },
};

let newPerson = Object.create(person);
console.log(person);
console.log(newPerson);

//assign
let bobAddress = {
  street: "Bobsky str.",
  city: "Skopje",
};

let bobsInfo = Object.assign(person, bobAddress);
console.log(bobsInfo);

console.log("---------------- EXPLORING OBJECTS ----------------");
//Object.keys(object) - gets keys in array
//Object.values(object) - gets key values in array
//Object.entries(object) - gets key:value pairs as arrays in array

console.log(
  "---------------- CHANGING OBJECT'S ACCESSIBILITY ----------------"
);
//Object.freeze(object) - does not allow change of objet's properties
//Object.seal(object) - allows to change value on existing properties, but not adding or removing
