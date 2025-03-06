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
  const cardParagraph = document.createElement("p");
  let cardText = document.createTextNode(
    "This is some sample text for Card" + " " + "#" + i
  );

  function otherContent(e) {
    e.preventDefault();
    
    cardText.nodeValue = "This is other tjeter sample text for Card";
  }

  card.addEventListener('contextmenu',otherContent)
  cardHeading.appendChild(cardHeadingText);
  cardParagraph.appendChild(cardText);
  cardHeader.appendChild(cardHeading);
  card.appendChild(cardHeader);
  card.appendChild(cardParagraph);
  container.appendChild(card);
}


const input = document.getElementById('inputId')

function deleteFCell(e) {
  console.log(e)
  if (e.key == "Enter"){
    if (e.target.value.toLowerCase() == "delete"){
      container.firstElementChild.remove()
      i = i - 1
      }
  }
}
function deleteLCell(e) {
  if (e.key == "Enter"){
    if (e.target.value.toLowerCase() == "deletelast"){
      container.lastElementChild.remove()
      i = i - 1
      }
  }
}
function deleteAll(e) {
  if (e.key == "Enter"){
    if (e.target.value.toLowerCase() == "deleteall"){
      container.lastElementChild.remove()
      let children = container.children
      let convertedChildren = Array.from(children)
      convertedChildren.forEach(child => {
          child.remove()
          console.clear()
          i = i - 1
      })
      }
  }
}

input.addEventListener('keyup', deleteFCell)
input.addEventListener('keyup', deleteLCell)
input.addEventListener('keyup', deleteAll)
createButton.addEventListener('click', createCard)
body.appendChild(container);
createCard();

