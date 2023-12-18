function animalSpeak(animalType, animalBreed) {
  if (animalType === "cat") {
    console.log(`The ${animalType} of breed ${animalBreed} meows.`);
  }

  if (animalType === "dog") {
    console.log(`The ${animalType} of breed ${animalBreed} barks.`);
  }

  if (animalType === "tiger") {
    console.log(`The ${animalType} of breed ${animalBreed} roars.`);
  }
}

//First way of declaring object
let cat = {
  type: "cat",
  breed: "Ragdoll",

  speak: function () {
    // console.log("The cat meows.");
    console.log(`The animal of ${this.type} and of breed ${this.breed} meows.`);
  },
};

cat.speak();
console.log(cat.breed);

//Second way of declaring object
let person = new Object();
person.name = "Petko";
person.age = 25;
console.log(person);

//Third way of declaring object
let person2 = {};
person2["height"] = 185;
person2["gender"] = "male";
person2["hobbies"] = ["hiking", "swimming", "gaming"];
console.log(person2);

console.log(`Person2: ${person2.hasOwnProperty("gender")}`);
console.log(`Person2: ${person2.hasOwnProperty("salary")}`);
