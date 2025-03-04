// get child from parent

let parent = document.querySelector('.parent');
console.log(parent);

let children = parent.children;
console.log(children);

//first child
let firstChild = parent.firstElementChild;
console.log(firstChild);

//last child
let lastChild = parent.lastElementChild;
console.log(lastChild);

//find parent from child
let parentElement = firstChild.parentElement;
console.log(parentElement);

//next Sibling
let nextSibling = firstChild.nextElementSibling
console.log(nextSibling);

//prev Sibling
let prevSibling = lastChild.previousElementSibling
console.log(prevSibling);
