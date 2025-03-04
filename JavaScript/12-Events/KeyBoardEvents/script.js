// let input = document.getElementById("inputId");
// console.log(input);

// function onKeyPress(e) {
//     console.log("pressed");
//     console.log(e.target.value);
  
//     if (e.key === "Enter") {
//       console.log("enterrrrrrrr");
//     }
//   }
  
//   function onKeyUp() {
//     console.log("key Up");
//   }
//   function onKeyDown() {
//     console.log("key down");
//   }

// // input.addEventListener("keypress", onKeyPress);
// input.addEventListener('keyup', onKeyUp)
// input.addEventListener('keydown', onKeyDown)

//Example
const body = document.body
const h1 = document.createElement('h1')
let h1Text = document.createTextNode("Default")
h1.appendChild(h1Text)
const input = document.createElement('input')

function onKeyPress(e) {
    if (e.key === "l"){
        h1.textContent = e.target.value
    }
}
input.addEventListener("keyup", onKeyPress);
body.appendChild(input)
body.appendChild(h1)