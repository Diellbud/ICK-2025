for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//array
const stringArray = ["hello", "world", "here", "last"];
for (let i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);
}

//break
for (let i = 0; i < 7; i++) {
  if (i === 3) {
    continue;
  } else {
    console.log("Number:" + i);
  }
}
for (let i = 0; i < 7; i++) {
  if (i === 3) {
    break;
  } else {
    console.log("Number:" + i);
  }
}


//Detyre
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(i+ " x "+j +" = "+i*j)
    }
    console.log(" ")
}