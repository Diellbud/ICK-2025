let employees = [   
    {
        id: 1,
        name: " John ",
        lastName: "Doe ",
        class: "Engineering",
        parallel: 1,
        note: 4
    },
    {
        id: 2,
        name: " Jane",
        lastName: " Smith",
        class: "Science",
        parallel: 3,
        note: 5
    },
    {
        id: 3,
        name: "Michael ",
        lastName: " Johnson ",
        class: "Arts",
        parallel: 2,
        note: 3
    },
    {
        id: 4,
        name: " Emily",
        lastName: "Davis ",
        class: "Mathematics",
        parallel: 1,
        note: 5
    },
    {
        id: 5,
        name: " David ",
        lastName: "Wilson",
        class: "Physics",
        parallel: 3,
        note: 4
    },
    {
        id: 6,
        name: " Sarah",
        lastName: " Brown ",
        class: "Chemistry",
        parallel: 2,
        note: 4
    }
]



let filteredEmployees = employees
// filteredEmployees = employees.filter((noteFilter) =>
//     noteFilter.note == 4
// )
// filteredEmployees = employees.filter((parallelFilter) =>
//     parallelFilter.parallel == 2
// )
filteredEmployees = employees.reverse()

let redEmployees = employees.forEach(number =>{
    //Not finnished
})


document.write(`
  <div class = "employeeGrid">
  `)
filteredEmployees.forEach(employee => {
    document.write(`
        <div class="employeeContainer">
        <h4>${(employee.name.trim().concat(" " + employee.lastName.trim()))}</h4>
        <h5 class= "employeeClass">Class: ${employee.class.toUpperCase()}</h5>
        <h5>Parallel: ${employee.parallel}
        <h5>Note: ${employee.note}</h5>
        </div>
        `)
});

document.write(`
  </div>
  `)
  
document.write(`
    <table>
  <tr>
    <th>Name</th>
    <th>Last Name</th>
    <th>Class</th>
    <th>Parallel</th>
    <th>Note</th>
  </tr>
`);

filteredEmployees = employees.reverse()

filteredEmployees.forEach((employee) => {
  document.write(`
     <tr>
        <td>${employee.name}</td>
        <td>${employee.lastName}</td>
        <td>${employee.class.toUpperCase()}</td>
        <td>${employee.parallel}</td>
        <td>${employee.note}</td>
     </tr>
    `);
});
document.write(`
    </table>
    `);
