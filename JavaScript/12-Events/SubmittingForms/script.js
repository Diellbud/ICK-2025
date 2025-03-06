// const contactForm = document.getElementById("contactForm");

// const onSubmit = (e) => {
//   e.preventDefault();
//   console.log("Test", e);
//   const formData = new FormData(contactForm);
//   console.log(formData);
//   const formObject = {};
//   formData.forEach((value, key) => {
//     formObject[key] = value;
//   });
//   console.log(formObject);
// };

// contactForm.addEventListener("submit", onSubmit);



// Detyre
const contactForm = document.getElementById("contactForm");
const body = document.body
const table = document.createElement('table')
const tableHead = document.createElement('tr')
table.appendChild(tableHead)
const onSubmit = (e) => {
  e.preventDefault();
  tableHead.innerHTML = '';
  let row = document.createElement('tr')
  const formData = new FormData(contactForm);
    formData.forEach((value, key) => {
    let cellHead = document.createElement('th')
    let cellHeadText = document.createTextNode(key)
    cellHead.appendChild(cellHeadText)
    tableHead.appendChild(cellHead)
    let cell = document.createElement('td')
    let cellText = document.createTextNode(value)
    cell.appendChild(cellText)
    row.appendChild(cell)
  });
  table.appendChild(row)
};
body.appendChild(table)
contactForm.addEventListener("submit", onSubmit);

