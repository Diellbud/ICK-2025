// krijo array me students,
//shfaqi ne UI permes doc.write
//shfaqi vetem students qe kan noten me the madhe se 3
//shfaqi studentat me vendlingje prishtine

let students = [
  {
    id: 1,
    name: "Arben",
    note: 5,
    vendlindje: "Peje",
  },
  {
    id: 2,
    name: "Blerina",
    note: 2,
    vendlindje: "Prishtine",
  },
  {
    id: 3,
    name: "Driton",
    note: 1,
    vendlindje: "Gjilan",
  },
  {
    id: 4,
    name: "Elira",
    note: 4,
    vendlindje: "Mitrovice",
  },
  {
    id: 5,
    name: "Faton",
    note: 3,
    vendlindje: "Prishtine",
  },
];
students.forEach((student) => {
  document.write(`
        <div>
            <h1>${student.name}</h1>
            <h2>${student.note}</h2>
            <h3>${student.vendlindje}</h3>
        </div>
        `);
});
let filteredStudents = students.filter((student) => student.note > 3);
filteredStudents.forEach((student) => {
  document.write(`
        <div>
            <h1>${student.name}</h1>
            <h2>${student.note}</h2>
            <h3>${student.vendlindje}</h3>
        </div>
        `);
});
let filteredStudentsByCity = students.filter(
  (student) => student.vendlindje.trim() == "Prishtine"
);
filteredStudentsByCity.forEach((student) => {
  document.write(`
        <div>
            <h1>${student.name}</h1>
            <h2>${student.note}</h2>
            <h3>${student.vendlindje}</h3>
        </div>
        `);
});
