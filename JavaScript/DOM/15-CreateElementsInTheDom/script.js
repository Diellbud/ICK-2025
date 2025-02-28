let div = document.createElement("div");
console.log(div);
div.id = "newId";
div.className = "newClass";
div.textContent = "Hello";
let body = document.body;
body.appendChild(div);

//create ul example
const ul = document.createElement('ul')
const li = document.createElement('li')
const text = document.createTextNode("Apples")
const button = document.createElement('button')
const buttonText = document.createTextNode("X")
button.appendChild(buttonText)
li.appendChild(text)
li.appendChild(button)
ul.appendChild(li)
body.appendChild(ul)

//by function
const secondUl = document.createElement('ul')
const list = (item)=>{
const li = document.createElement('li')
const text = document.createTextNode(item)
const button = document.createElement('button')
const buttonText = document.createTextNode("X")
button.appendChild(buttonText)
li.appendChild(text)
li.appendChild(button)
secondUl.appendChild(li)
body.appendChild(secondUl)
}
list("apples")
list("bananas")
list("vegetables")

//