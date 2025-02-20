let number = 10;

if (number > 9) {
  console.log("Number is Greater than 9");
}

if (number > 10) {
  console.log("Number is Greater than 10");
}

//else
if (number > 11) {
  console.log("Number is Greater than 11");
} else {
  console.log("Number is less than 11");
}

let isAdmin = false;
if (isAdmin) {
  console.log("you have rights");
} else {
  console.log("you dont have rights");
}

//else if
let clock = 8;
if (clock >= 8) {
  console.log("is morning");
} else if (clock < 12) {
  console.log("is midday");
} else {
  console.log("is evening");
}

// Detyre
let day = "Monday";
if (day == "Monday") {
  console.log("Today is Monday");
} else if (day == "Tuesday") {
  console.log("Today is Tuesday");
} else if (day == "Wednesday") {
  console.log("Today is Wednesday");
} else if (day == "Thursday") {
  console.log("Today is Thursday");
} else if (day == "Friday") {
  console.log("Today is Friday");
} else if (day == "Saturday") {
  console.log("Today is Saturday");
} else {
  console.log("Today is Sunday");
}

//Detyre
let grades = [1, 2, 3, 4, 5];

if (grades.includes(3)) {
  console.log("grade is 3");
}

//multiple conditions
let isMonday = false;
let isStartOfWeek = true;

if (isMonday && isStartOfWeek) {
  console.log("is start of the week");
}

//Detyre
let isDev = true;
let hasAccess = false;

if (isDev && hasAccess) {
  console.log("is Dev");
} else if (isDev || hasAccess) {
  console.log("is User");
} else {
  console.log("no access");
}

//Detyre
let studentGrade = 4;
if (studentGrade == 1) {
  document.write(`
    <div class="red"><h2>1</h2></div>
    `);
} else if (studentGrade == 2) {
  document.write(`
    <div class="orange"><h2>2</h2></div>
    `);
} else if (studentGrade == 3) {
  document.write(`
    <div class="yellow"><h2>3</h2></div>
    `);
} else if (studentGrade == 4) {
  document.write(`
    <div class="green"><h2>4</h2></div>
    `);
} else if (studentGrade == 5) {
  document.write(`
    <div class="blue"><h2>5</h2></div>
    `);
} else {
  console.log("not a grade");
}

//switch
let Day = 2;
switch (Day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("teusday");
    break;
  default:
    console.log("is not here");
}

//Detyre
let whichDay = "monday";
switch (whichDay) {
  case "monday":
    console.log("monday");
    break;
  case "teusday":
    console.log("teusday");
    break;
  case "wednesday":
    console.log("wednesday");
    break;
  case "thursday":
    console.log("thursday");
    break;
  case "friday":
    console.log("friday");
    break;
  case "saturday":
    console.log("saturday");
    break;
  case "sunday":
    console.log("sunday");
    break;
  default:
    console.log("is not here");
}

//Detyre
//krijo array (strings)
//check if array has string (hello)
// find the length of array if length is > than 4, shfaqqe nje meesazh
//nese array ka fjalen bug athere shfaq nje mezash Danger

let stringArray = ["Hello", "Bug", "diqka tjeter", "a", "idk"];
stringArray.forEach((string) => {
  switch (string) {
    case "Hello":
      console.log("hello");
      break;
    case "Bug":
      console.log("DANGER");
      break;
    default:
      console.log("nothing");
      break;
  }
});
if (stringArray.length > 4) {
  console.log("shfaqe nje mesazh");
}
