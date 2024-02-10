// console.log("------ Test ------");
const meme = {
  name: "Bob",
};
console.log(meme);
console.log(meme.hasOwnProperty("name"));

let nums = [1, 2, 3];
console.log(nums);

let greeting = "Hello World!";
console.log(greeting);

console.log(Object.getPrototypeOf(greeting));

let myNum = 10;
console.log(myNum);
console.log(Object.getPrototypeOf(myNum));

let bob = {
  name: "Bob",
  sayHello: function () {
    console.log(`${this.name} sys hello.`);
  },
};

function Person(name) {
  this.name = name;
}

const me = new Person("Sasha");
me.age = 32;
console.log(me);
console.log(me.__proto__);

const you = new Person("Ile");
console.log(you);

console.log("------------------");

function User(name, email) {
  (this.name = name),
    (this.email = email),
    (this.isOnline = false),
    (this.logIn = function () {
      console.log(`${this.name} has logged in.`);
    });
}

let boby = new User("Bob", "boby@gmail.com");
// let jill = Object.create(new User("Jill", "jill@mail.com"))
let jill = new User("Jill", "jill@mail.com");

jill.isPremium = true;
boby.isAdmin = true;
