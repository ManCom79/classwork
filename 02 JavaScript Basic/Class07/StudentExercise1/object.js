let person = {
  age: 44,
  heigth: 179,
  maritalStatus: "married",
  employmentStatus: "employed",
  happy: true,

  character: function () {
    console.log(
      `The person in case is ${this.age} years old, is ${this.heigth} cm tall, is ${this.maritalStatus} and is ${this.employmentStatus}. It seems that this person is ${this.happy} hero.`
    );
  },

  describe: function () {
    console.log(`Name of the person is ${this.name} ${this.surname}`);
  },
};

console.log(person);
console.log(person.character());

person.age = 25;
person.heigth = 160;
person.maritalStatus = "not married";
person["employmentStatus"] = "not employed";
person["happy"] = false;

console.log(person);
console.log(person.character());

delete person.maritalStatus;

console.log(person);
console.log(person.character());

person.name = "Bob";
person.surname = "Bobsky";

console.log(person);
console.log(person.describe());

// //Second
// let person1 = new Object();
// person1.age = 44;
// person1.height = 179;
// person1.maritalStatus = "married";
// person1.employmentStatus = "employed";
// person1.happy = true;

// person1.character = function () {
//   console.log(
//     `The person in case is ${this.age} years old, is ${this.height} cm tall, is ${this.maritalStatus} and is ${this.employmentStatus}. It seems that this person is ${this.happy} hero.`
//   );
// };

// console.log(person1);
// console.log(person1.character());
