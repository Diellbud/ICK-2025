//set data into LS
console.log(localStorage);

localStorage.setItem('firstName', "Diell")
localStorage.setItem('lastName', "Budima")

//retrieve or get data from LS
const firstName = localStorage.getItem('firstName')
console.log(firstName)

//remove data from LS
localStorage.removeItem('firstName')
console.log(localStorage);
