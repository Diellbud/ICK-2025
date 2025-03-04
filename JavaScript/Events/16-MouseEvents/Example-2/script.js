const body = document.body
const btn = document.createElement('button')
const btnText = document.createTextNode("Make New")
btn.appendChild(btnText)
body.appendChild(btn)
const table = document.createElement('table')
body.appendChild(table)


let tableTh = ["Company","Contact","Country"]

const tableHead = document.createElement('thead')
table.appendChild(tableHead)
tableTh.forEach(thObject=>{
  let td = document.createElement('th')
  let text = document.createTextNode(thObject)
  td.appendChild(text)
  tableHead.appendChild(td)
})

function createTableRow(company, contact, country) {
    let personTr = document.createElement('tr')
    let personTdCompanyText = document.createTextNode(company)
    let personTdCompany = document.createElement('td')
    let personTdContactText = document.createTextNode(contact)
    let personTdContact = document.createElement('td')
    let personTdCountryText = document.createTextNode(country)
    let personTdCountry = document.createElement('td')
    personTdCompany.appendChild(personTdCompanyText)
    personTdContact.appendChild(personTdContactText)
    personTdCountry.appendChild(personTdCountryText)
    personTr.appendChild(personTdCompany)
    personTr.appendChild(personTdContact)
    personTr.appendChild(personTdCountry)
    table.appendChild(personTr)
}
createTableRow("Alfreds Futterkiste", "Maria Anders", "Germany");
createTableRow("Centro commercial Moctezuma", "Francisco Chang", "Mexico");
createTableRow("Ernst Handel", "Ronald Mendel", "Austria");
createTableRow("Island Trading", "Helen Bennet", "UK");
createTableRow("Laughing Bacchuus Winecellars", "Yoshi Tannamuri", "Canada");
createTableRow("Magazzini Alimentari Riuniti", "Giovanni Rovelli", "Italy");
btn.addEventListener('click', () => createTableRow("Island Trading", "Helen Bennet", "UK"))