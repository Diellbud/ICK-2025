const saveCards = JSON.parse(localStorage.getItem("cards"));
const initialCards = saveCards || []
const createForm = document.getElementById("createForm");
// submitButton.disabled = true;
let cards = initialCards

const saveCardsLocalStorage = () =>{
  localStorage.setItem('cards', JSON.stringify(cards))
}

let newId = cards.length + 1;

const readList = () => {
  const tableBody = document.getElementById("container");
  tableBody.innerHTML = ``;
  cards.forEach((card) => {
    let cardContainer = document.createElement("div");
    cardContainer.innerHTML = `
      <p>${card.firstName}</p>
      <p>${card.lastName}</p>
      <p>${card.password}</p>
      <p>${card.email}</p>
      <p>${card.country}</p>
      <div>
      <button onclick="editCardAction(${card.id})">Edit</button>
      <button onclick="deleteCardAction(${card.id})">Delete</button>
      </div>
    `;
    cardContainer.style.backgroundColor = card.isActive ? "aliceblue" : "";
    cardContainer.addEventListener('click', (e) => changeBackground(e, card));
    tableBody.appendChild(cardContainer);
  });
  saveCardsLocalStorage()
};
const changeBackground = (e, card) => {
  card.isActive = !card.isActive;
  e.target.style.backgroundColor = card.isActive ? "aliceblue" : "";
  saveCardsLocalStorage();
}
const onCreateNewCard = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const cardObject = {
    id: newId++,
    firstName: firstName,
    lastName: lastName,
    password: password,
    email: email,
    country: country,
    isActive: false,
  };
  cards.push(cardObject);
  saveCardsLocalStorage();
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
  document.getElementById("country").value = "";
  readList();
};

const deleteCard = (id) => {
  const index = cards.findIndex((card) => card.id === id);
  const deleteCard = cards.splice(index, 1)[0];
  saveCardsLocalStorage()
  return deleteCard;
};

const deleteCardAction = (id) => {
  if (confirm(`are you sure you want to delete this card with id: ${id}?`)) {
    deleteCard(id);
    readList();
  }
};
const editCard = (id) => {
  const index = cards.findIndex((card) => card.id === id);
  let card = cards[index];
  let firstName = prompt(`Editing First Name of card with id #${card.id}`, card.firstName);
  let lastName = prompt(`Editing Last Name of card with id #${card.id}`, card.lastName);
  let password = prompt(`Editing Password of card with id #${card.id}`, card.password);
  let email = prompt(`Editing Email of card with id #${card.id}`, card.email);
  let country = prompt(`Editing Country of card with id #${card.id}`, card.country);
  card.firstName = firstName;
  card.lastName = lastName;
  card.password = password;
  card.email = email;
  card.country = country;
  saveCardsLocalStorage();
}
const editCardAction = (id) => {
    editCard(id);
    readList();
};

readList();
createForm.addEventListener("submit", onCreateNewCard);

saveCardsLocalStorage()