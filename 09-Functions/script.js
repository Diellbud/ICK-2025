function greet() {
  console.log("Hello");
}
//call function
greet();
greet();

//adding into variable
const greetAssign = function () {
  console.log("hello again");
};

greetAssign();

//arrow function
const arrowFunction = () => {
  console.log("arrow Function");
};
arrowFunction();

//sum numbers
function sumNumbers() {
  console.log(4 + 4);
}
sumNumbers();

//params and attributes
function add(a, b) {
  return a * b;
}

console.log(add(2, 4));
console.log(add(4, 5));
console.log(add(1, 4));

//default values
const divide = (a, b = 2) => {
  return a / b;
};

console.log(divide(2));
// MY solution
let gradeArry = [1, 2, 3, 4, 5, 8, 1, 6, 3, 0];
// let variable = 0
// const avgGrade = (a,b) => {
//     return a/b
// }
// gradeArry.forEach(number =>{
//     variable= variable + number
//     console.log(avgGrade(variable,gradeArry.length))
// })

//Best solution
function logaritNoten(nota) {
  if (nota.length == 0) {
    return 0;
  }
  let shuma = 0;
  nota.forEach((numri) => {
    shuma = shuma + numri;
  });
  return shuma / nota.length;
}
console.log(logaritNoten(gradeArry));

//Detyre
const farenheitToCelcius = (f) => {
  return (f - 32) / 1.8;
};
console.log(farenheitToCelcius(78).toPrecision(3));

