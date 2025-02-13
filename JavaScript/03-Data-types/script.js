// console.log(document);
// document.write("Hello");

//strings

//initialize and value
let firstName = "Diell";

//first initialize
let lastName;
lastName = "Budima";

console.log(firstName);
console.log(lastName);

// empty string
let emptyString = "";
console.log(emptyString);

//find data type
console.log(typeof firstName);

//numbers
let age;
age = 13;
console.log(age);
console.log(age + 1);
console.log(3 * 5);

//b0olean
let isAdmin;
isAdmin = false;
console.log("Is Admin?", isAdmin);
console.log(typeof isAdmin, isAdmin);

// undefined
let isActive;
console.log(isActive);

//null
let nullValue;
nullValue = null;
console.log(nullValue);

//object

let student = {
  nameStudent: "Diell",
  age: 13,
  lastNameStudent: "Budima",
  city: "Prishtine",
  address: {
    street: "Pennysvanija",
    homeNumber: 19,
  },
};

console.log(student.city);
console.log(student.address.street);

//arrays or lists
let carTypes = ["Volvo", "Golf", "VW", "Audi"];
let persons = ["Name", "30 June", "VW", "Audi", 29, null, undefined];
