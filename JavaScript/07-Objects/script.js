let student = {
  id: 1,
  studentName: "Diell",
  lastName: "Budima",
  hobbies: ["tennis", "football"],
  address: {
    street: "19 May",
    city: "Prishtine",
    homeNumber: 3,
    zipCode: 10000,
  },
};

console.log(student);

console.log(student.address.city);
//add new property
student.state = "Kosove";
console.log(student);

//delete property
delete student.lastName;
console.log(student);

//update property
student.address.city = "Peje";
console.log(student);

//object key
let person = {
  id: 1,
  firstName: "john",
  lastName: "doe",
  phoneNumber: 1231123,
};

const personKey = Object.keys(person);
console.log(personKey);
personKey.forEach((key) => {
  console.log(key);
});

const personValue = Object.values(person);
console.log(personValue);
personValue.forEach((value) => {
  console.log(value);
});

//freeze object
let freezeObject= {
    a:1,
    b:2
}

Object.freeze(freezeObject)
freezeObject.a = 3
console.log(freezeObject)

let personList = [
  {
    id: 1,
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany"
  },
  {
    id: 2,
    company: "Centro commercial Moctezuma",
    contact: "Francisco Chang",
    country: "Mexico"
  },
  {
    id: 3,
    company: "Ernst Handel",
    contact: "Ronald Mendel",
    country: "Austria"
  },
  {
    id: 4,
    company: "Island Trading",
    contact: "Helen Bennet",
    country: "UK"
  },
  {
    id: 5,
    company: "Laughing Bacchuus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada"
  },
  {
    id: 6,
    company: "Magazzini Alimentari Riuniti",
    contact: "Giovanni Rovelli",
    country: "Italy"
  },
];

personList.forEach(object =>{
    object.sport = ["Football", "Tennis"]
})

document.write(`
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Sports</th>
  </tr>
`);
personList.forEach((employee) => {
  document.write(`
     <tr>
        <td>${employee.company}</td>
        <td>${employee.contact.toUpperCase()}</td>
        <td>${employee.country}</td>
        <td>${employee.sport}</td>
     </tr>
    `);
});
document.write(`
    </table>
    `);
