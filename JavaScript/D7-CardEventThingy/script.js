const body = document.body;
const container = document.getElementById("cardsContainer");
const deleteAllButton =  document.getElementById("deleteAllButton");
const createButton = document.getElementById("createButton")
let i = 0;
function createCard() {
  i++;
  const card = document.createElement("div");
  card.className = "card";
  const cardHeading = document.createElement("h3");
  const cardHeadingText = document.createTextNode("Card" + " " + "#" + i);
  const cardHeader = document.createElement('div')
  cardHeader.className = "cardHeader"
  const deleteButton = document.createElement("button");
  const deleteButtonText = document.createTextNode("X");
  const cardParagraph = document.createElement("p");
  const cardText = document.createTextNode(
    "This is some sample text for Card" + " " + "#" + i
  );
  cardHeading.appendChild(cardHeadingText);
  deleteButton.appendChild(deleteButtonText);
  cardParagraph.appendChild(cardText);
  cardHeader.appendChild(cardHeading);
  cardHeader.appendChild(deleteButton)
  card.appendChild(cardHeader);
  card.appendChild(cardParagraph);
  container.appendChild(card);

  function changeColorHeader() {
    cardHeading.style.color = "red"; 
  }
  let isCardActive = true;
  function cardActive() {
    if (isCardActive == true) {
      isCardActive = false;
      card.style.backgroundColor = "lightblue";
    } else if (isCardActive == false) {
      isCardActive = true;
      card.style.backgroundColor = "white"; 
    }
  }
  function deleteCard() {
    card.remove()
    i = i - 1
  }
  cardHeader.addEventListener("click", changeColorHeader);
  card.addEventListener("dblclick", cardActive);
  card.addEventListener("mouseover", () => { console.log("Over")})
  deleteButton.addEventListener("click", deleteCard)
}

function deleteAll() {
    let children = container.children
    let convertedChildren = Array.from(children)
    convertedChildren.forEach(child => {
        child.remove()
        console.clear()
        i = i - 1
    })
}
deleteAllButton.addEventListener('click', deleteAll)
createButton.addEventListener('click', createCard)
body.appendChild(container);
createCard();

