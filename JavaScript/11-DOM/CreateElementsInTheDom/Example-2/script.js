let table = document.createElement('table')
let body = document.body
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
  let tableHead = document.createElement('tr')
  let tableTh = ["Company","Contact","Country"]
  
  tableTh.forEach(thObject=>{
    let th = document.createElement('th')
    let text = document.createTextNode(thObject)
    th.appendChild(text)
    tableHead.appendChild(th)
  })
  table.appendChild(tableHead)
  personList.forEach(person =>{
    let personTr = document.createElement('tr')
    let personTdCompany = document.createElement('td')
    let personTdCompanyText = document.createTextNode(person.company)
    let personTdContactText = document.createTextNode(person.contact)
    let personTdContact = document.createElement('td')
    let personTdCountryText = document.createTextNode(person.country)
    let personTdCountry = document.createElement('td')
    personTdCompany.appendChild(personTdCompanyText)
    personTdContact.appendChild(personTdContactText)
    personTdCountry.appendChild(personTdCountryText)
    personTr.appendChild(personTdCompany)
    personTr.appendChild(personTdContact)
    personTr.appendChild(personTdCountry)
    table.appendChild(personTr)
    })
    body.appendChild(table)
    
