const stringValue="Hello World";

//length
console.log(stringValue.length);

//CharAt
console.log(stringValue.charAt(3));

//code
console.log(stringValue.charCodeAt(2));

//concat
let firstName = "Diell";
let lastName = "Budima";
console.log(firstName + " " + lastName);
console.log(firstName.concat(" " + lastName));
//string interpolation
console.log (`Une jam ${firstName} ${lastName} dhe vij nga Prishtina`);

//includes
console.log(stringValue.includes("Hello"));

//uppercase
document.write(stringValue.toUpperCase());

//lowercase
console.log(stringValue.toLowerCase());

//endsWith
console.log(stringValue.endsWith("ld"));

//indexOf
console.log(stringValue.indexOf("l"));


//Detyre
let school = {
    name:"ISP",
    city:"Prishtine",
    address:{
        residence:"Marigona",
        street:"Pennysvanija",
        schoolNumber: 450,
    },
    numberOfStudents: 1000,
    numberOfParallels: 10,
}
console.log(`The School ${school.name} is located in ${school.city} in ${school.address.residence} , ${school.address.street} the number of the school is ${school.address.schoolNumber} and has ${school.numberOfStudents} students and ${school.numberOfParallels} parallels`);

//replace
console.log(stringValue.replace("World", "There"));

//repeat
console.log(stringValue.repeat(3));

//trim
let trimString = " trim string"
console.log(trimString)
console.log(trimString.trim());

//trim left
let trimLeft = " trim left"
console.log(trimLeft.trimStart());

//trim right or end
let trimRight = "trim right ";
console.log(trimRight);
console.log(trimRight.trimEnd());