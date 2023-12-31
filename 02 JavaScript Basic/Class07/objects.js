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

let car = {
  make: "Honda",
  model: "Civic",
  fuel: "Gasoline",
  productionYear: "2020",

  move: function () {
    console.log("The car is moving.");
  },

  start: function () {
    console.log("The car is starting.");
  },

  stop: function () {
    console.log("The car is stopping.");
  },
};

console.log(car);

delete car.productionYear;

car.model = "Jazz";
car["fuel"] = "Diesel";

console.log(car);

//Creating constructor function

function VehicleCreator(
  vehicleType,
  vehicleMake,
  vehicleModel,
  yearOfProduction,
  vehicleFuel
) {
  this.type = vehicleType;
  this.make = vehicleMake;
  this.model = vehicleModel;
  this.year = yearOfProduction;
  this.fuel = vehicleFuel;

  this.getInfo = function () {
    return `The vehicle of type ${this.type} and made ${this.make} and model ${this.model} which is produced in ${this.year} uses ${this.fuel}`;
  };
}

let fico = new VehicleCreator("car", "Fiat", "500", 1983, "gassoline");
console.log(fico.getInfo());

let pegla = new VehicleCreator("car", "Fiat", "polski", 1970, "gassoline");
console.log(pegla.getInfo());

console.log(fico.getInfo(), " AND ", pegla.getInfo());
