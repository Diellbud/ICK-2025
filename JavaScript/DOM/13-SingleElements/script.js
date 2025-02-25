//get by Id
let getElementByIDAttribute = document.getElementById("appContainer");
console.log(getElementByIDAttribute);
// getElementByIDAttribute.style.border = "1px solid red";
// getElementByIDAttribute.style.backgroundColor = "blue";
getElementByIDAttribute.style.fontFamily = "sans-serif";

console.log(getElementByIDAttribute.id);
getElementByIDAttribute = document.getElementById("appTitleId");
console.log(getElementByIDAttribute.getAttribute("class"));
console.log(getElementByIDAttribute.setAttribute("class", "new-class"));
//ChangeTextContent
// getElementByIDAttribute.textContent= "New Title"

//InnerText
// getElementByIDAttribute.innerText = "New Text Again"

//Change Html Content
getElementByIDAttribute.innerHTML = "<p>New Text Paragraph</p>";

//query Selector
const queryByClass = document.querySelector(".subTitleClass");
console.log(queryByClass);

const queryById = document.querySelector("#subTitleId");
console.log(queryById);

const queryByTag = document.querySelector("h2");
console.log(queryByTag);

const listItem = document.querySelector('ul li:nth-child(3)')
console.log(listItem);

//input
let input = document.querySelector('input[type="number"]') 





//Multiple Selection
//by class query
const listAll=document.querySelectorAll('.list')
console.log(listAll);
listAll.forEach((item, index) => {
    console.log(index,item);
    if (index == 2) {
        let listItem = listAll[index]
        listItem.style.color ="red"
        listItem.setAttribute('id',"hello")
        listItem.textContent ="Hello"
    }
})

//by class
const listByClass = document.getElementsByClassName('item')
console.log(listByClass);

//Convert from html Collection to nodelist(Array)
let convertedArray = Array.from(listByClass)
console.log(convertedArray);

convertedArray.forEach(item =>{
    console.log(item);
})


//by tag
const byTag = document.getElementsByTagName()