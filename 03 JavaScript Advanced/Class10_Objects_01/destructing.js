console.log("----- DESTRUCTURING -----");

let userObject = {
  id: 1,
  firstName: "Terry",
  lastName: "Medhurst",
  maidenName: "Smitham",
  age: 50,
  gender: "male",
  email: "atuny0@sohu.com",
  phone: "+63 791 675 8914",
  username: "atuny0",
  password: "9uQFF1Lh",
  birthDate: "2000-12-25",
  image: "https://robohash.org/Terry.png?set=set4",
  bloodGroup: "A-",
  height: 189,
  weight: 75.4,
  eyeColor: "Green",
  hair: {
    color: "Black",
    type: "Strands",
  },
  domain: "slashdot.org",
  ip: "117.29.86.254",
  address: {
    address: "1745 T Street Southeast",
    city: "Washington",
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: "20020",
    state: "DC",
  },
  macAddress: "13:69:BA:56:A3:74",
  university: "Capitol University",
  bank: {
    cardExpire: "06/22",
    cardNumber: "50380955204220685",
    cardType: "maestro",
    currency: "Peso",
    iban: "NO17 0695 2754 967",
  },
  company: {
    address: {
      address: "629 Debbie Drive",
      city: "Nashville",
      coordinates: {
        lat: 36.208114,
        lng: -86.58621199999999,
      },
      postalCode: "37076",
      state: "TN",
    },
    department: "Marketing",
    name: "Blanda-O'Keefe",
    title: "Help Desk Operator",
  },
  ein: "20-9487066",
  ssn: "661-64-2976",
  userAgent:
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
};

//without destructuring
// const id = userObject.id;
// const firstName = userObject.firstName;
// const lastName = userObject.lastName;

// console.log(id, firstName, lastName);

//with destruturing
const { id, firstName, lastName } = userObject;
console.log(id, firstName, lastName);

const { lat, lng } = userObject.address.coordinates;
console.log(lat, lng);

console.log("----- PARAMETERS DESTRUCTURING -----");

// function getUserFullName(user) {
//   return `${user.firstName}, ${user.lastName}`;
// }

// let fullName = console.log(getUserFullName(userObject));

function getUserFullName({ firstName, lastName }) {
  return `${firstName}, ${lastName}`;
}

let terryFirstName = getUserFullName(userObject);
console.log(terryFirstName);

console.log("----- ARRAY DESTRUCTURING -----");

const testArray = [1, 2, 3, 4];

const first = testArray[0];
const sec = testArray[1];
const thir = testArray[2];

console.log(first, sec, thir);

//with destructuring
const [itemOne, itemTwo, , itemFour] = testArray;
console.log(itemOne, itemTwo, itemFour);

console.log("----- SPREAD OPERATOR -----");

console.log(Math.max(123, 23, 434, 1000, 400));

let numbers = [123, 23, 434, 1000, 400];
console.log(Math.max(...numbers));

console.log(...numbers);

const dogs = ["a", "b"];
const cats = ["c", "d"];

const allPets = [...dogs, ...cats];
console.log(allPets);

const dogsCopy = [...dogs];

//SPREAD WITH OBJECTS
//merge objects into one object

const dog = {
  name: "Ax",
  breed: "Pug",
};

const dogDescription = {
  group: "Toy",
  color: "green",
  origin: "China",
};

const dogInfo = { ...dog, ...dogDescription };
console.log(dogInfo);
