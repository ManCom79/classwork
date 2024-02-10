let nums1 = [1, 2, 3, 4];
let nums2 = [5, 6, 7];
let nums3 = [...nums2, ...nums1];
console.log(nums3);

const colors = ["red", [128, 135, 70], "#F11222"];

let [name, [red, green, blue], hex] = colors;
console.log(hex);

let person = {
  firstName: "John",
  lastName: "Doe",
};

//create new object
const newPerson = { ...person, age: 30, city: "Skupja" };
console.log(newPerson);

let arrayExperiment = [...nums1];
console.log(arrayExperiment);

console.log(nums1);
console.log(arrayExperiment);

let arrayExperiment2 = nums2;
console.log(arrayExperiment2);

nums2.push(8);
console.log(nums2);
console.log(arrayExperiment2);
