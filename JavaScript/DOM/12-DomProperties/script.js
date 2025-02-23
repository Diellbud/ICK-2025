let output;

output = document;
output = document.head;
output = document.head.children[1];
output = document.body;
output = document.children;

output = document.doctype;
output = document.URL;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].id = "newid";

output = document.forms[0].method;

output = document.links;
output = document.links[0].href;
output = document.links[0].href = "google.com";
output = document.links[1].classList

output = document.images[0].style.width = '100px'

output = document.body.children[0].children[0].textContent = "replaced";
output = document.body.children[0].children[0].innerText = "replaced again";
console.log(output);
