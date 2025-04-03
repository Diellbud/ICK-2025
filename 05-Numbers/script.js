let firstNumber = 41;
let secondNumber = 2;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);

let number = 40;
console.log(isFinite(number)); // true or false
console.log(isFinite(Infinity))
console.log(isFinite("Hello"))

//check not a number
console.log(isNaN(NaN)); // true or false
console.log(isNaN(number))
console.log(isNaN("number"))

//Integer
console.log(Number.isInteger(number)); // true or false
console.log(Number.isInteger(56.4));
console.log(Number.isInteger(50.0));
console.log(Number.isInteger(Infinity));

//toString
console.log(number.toString(2));
console.log(number.toString(16));

//precision
let precisionNumber = 45.664545;
console.log(precisionNumber.toPrecision(3));
