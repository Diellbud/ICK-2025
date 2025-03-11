const saveStudents = JSON.parse(localStorage.getItem("students"));
const initialStudents = saveStudents || []
const createForm = document.getElementById("createNewStudent");
let firstNameError = document.getElementById("firstNameErrorId");
let lastNameError = document.getElementById("lastNameErrorId");

// submitButton.disabled = true;
firstNameError.textContent = "";
lastNameError.textContent = "";

let students = initialStudents

const saveStudentsLocalStorage = () =>{
  localStorage.setItem('students', JSON.stringify(students))
}

let newId = students.length + 1;

const readList = () => {
  const tableBody = document.getElementById("studentsList");
  tableBody.innerHTML = ``;
  students.forEach((student) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>
        <button onclick="editStudentAction(${student.id})">Edit</button>
        <button onclick="deleteStudentAction(${student.id})">Delete</button>
        </td>
        <td>${student.id}</td>
        `;
    tableBody.appendChild(tableRow);
  });
};

const onCreateNewStudent = (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const studentObject = {
    id: newId++,
    firstName: lastName.value,
    lastName: lastName.value,
  };
  students.push(studentObject);
  saveStudentsLocalStorage()
  if (firstName.value == "") {
    firstNameError.textContent = "This feild is required";
  } else {
    firstNameError.textContent = "";
  }
  if (lastName.value == "") {
    lastNameError.textContent = "This feild is required";
  } else {
    lastNameError.textContent = "";
  }
  firstName.value = "";
  lastName.value = "";
  readList();
};

const deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === id);
  const deleteStudent = students.splice(index, 1)[0];
  saveStudentsLocalStorage()
  return deleteStudent;
};

const deleteStudentAction = (id) => {
  if (confirm(`are you sure you want to delete this student with id: ${id}?`)) {
    deleteStudent(id);
    readList();
  }
};
const editStudent = (id) =>{
  const index = students.findIndex((student) => student.id === id);
  let student = students[index]
  let firstName = prompt(`Editing First Name of student with id #${student.id}`)
  let lastName = prompt(`Editing Last Name of student with id #${student.id}`)
  student.firstName = firstName
  student.lastName = lastName
}
const editStudentAction = (id) => {
    editStudent(id);
    readList();
};

readList();
createForm.addEventListener("submit", onCreateNewStudent);
saveStudentsLocalStorage()