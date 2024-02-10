console.log("test");

function Person(id, first, last, age) {
  (this.id = id),
    (this.firstName = first),
    (this.lastName = last),
    (this.age = age),
    (this.getFullName = function () {
      console.log(`${this.firstName}, ${this.lastName}`);
    });
}

let person1 = new Person(1, "Dino", "Nikolovski", 28);
console.log(person1);

function Employee(id, first, last, age, division) {
  Object.setPrototypeOf(this, new Person(id, first, last, age)),
    (this.division = division);
  this.work = function () {
    console.log(
      `The employee ${this.firstName} ${this.lastName} works in the ${division} division.`
    );
  };
}

let employee1 = new Employee(2, "Ema", "Cvetkovska", 30, "HR");
let employee2 = new Employee(3, "Bejtula", "Zekiri", 35, "Finance");

console.log(employee1);
console.log(employee2);
