const createForm = document.getElementById("createNewStudent");
let firstNameError = document.getElementById('firstNameErrorId')
let lastNameError = document.getElementById('lastNameErrorId')
const submitButton = document.getElementById('submitButton')


submitButton = true
firstNameError.textContent = ''
lastNameError.textContent = ''

let students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    firstName: "James",
    lastName: "Smith",
  },
];
let newId= students.length + 1
const readList = () => {
  const tableBody = document.getElementById("studentsList");
  tableBody.innerHTML = ``;
  students.forEach((student) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>
        <button>Edit</button>
        <button onclick="deleteStudentAction(${student.id})">Delete</button>
        </td>
        <td>${student.id}</td>
        `;
    tableBody.appendChild(tableRow);
  });
};

readList();
const onCreateNewStudent = (e) => {
  e.preventDefault();
  const firstName = document.getElementById('firstName')
  const lastName = document.getElementById('lastName')

const studentObject = {
  id: newId++, 
  firstName:lastName.value,
  lastName:lastName.value
}
students.push(studentObject)
if (firstName.value == "") {
  firstNameError.textContent = "This feild is required"
}else{
    submitButton.disabled = false
    firstNameError.textContent = ''
}
if (lastName.value == "") {
  lastNameError.textContent = "This feild is required"
}else{
  submitButton.disabled = false
    lastNameError.textContent = ''
}
firstName.value = ""
lastName.value = ""

readList()
};

const deleteStudent = (id) =>{
    const index = students.findIndex(student => student.id === id)
    const deleteStudent = students.splice(index, 1)[0]
    return deleteStudent
}

const deleteStudentAction = (id) =>{
    if (confirm(`are you sure you want to delete this student with id: ${id}?`)){
        deleteStudent(id)
        readList()
    }
}

createForm.addEventListener("submit", onCreateNewStudent);