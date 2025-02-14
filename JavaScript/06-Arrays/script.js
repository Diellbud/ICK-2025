//number Array
let numberArray = [1, 2, 3, 4, 5];

//String Array
let stringArray = ["Diell", "Java", "Budima", "Script"];

//any Array
let anyArray = [1, "Diell", undefined, null];

//forEach
let forEachArr = [1, 2, 3, 4, 5];
console.log(forEachArr[0]);
forEachArr.forEach((number) => {
  document.write(number);
});

let objectArray = [
  ({
    id: 1,
    title: "Diell",
    price: 977.99,
  }),
  ({
    id: 2,
    title: "Java",
    price: 117.99,
  }),
  ({
    id: 3,
    title: "Budima",
    price: 84.99,
  }),
];
objectArray.forEach((object) => {
    document.write(`<br>`);
  document.write(object.id);
  document.write(`<br>`);
  document.write(object.title);
  document.write(`<br>`);
  document.write(object.price);
});


//reverse
numberArray.reverse();
console.log(numberArray);
console.log(numberArray[3]);

//contains
console.log(numberArray.includes(6));

//concat
let firstConcat = [1,2,3];
let secondConcat = [4,5,6];
let completedConcat = firstConcat.concat(secondConcat);
console.log(completedConcat);

//push, adds at the end
let pushArray = [1,2,3];
pushArray.push(4);
console.log(pushArray);

//pop, removes last
let popArray =[1,2,3];
popArray.pop();
console.log(popArray);

//shift, removes first
let shiftArray = [1,2,3];
shiftArray.shift();
console.log(shiftArray);

//unshift adds at front
let unShiftArray = [1,2,3];
unShiftArray.unshift(4);
console.log(unShiftArray);

//find index
let indexArray = ['sport', 'top', 'tennis'];

console.log(indexArray.indexOf('sport'));


//find
let findNumbers = [1,2,3,4,5];
console.log(findNumbers.find(number=>number> 2));

//filter
let fiilterArray = [1,2,3,4,5,6,7]
console.log(fiilterArray.filter(number => number > 2))

//sort numbers
let sortNumbers = [3,2,4,1,6]
console.log(sortNumbers.sort((a,b)=>a-b))

//sort  String
let sortString = ['Tennis','America', 'FootBall','Baiden']
console.log(sortString.sort())