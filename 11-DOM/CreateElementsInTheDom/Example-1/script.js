//my way

const container = document.createElement("div");
container.className = "container";

function createCell(parent, imageContainer, textNode) {
  const cell = document.createElement("div");
  const image = document.createElement("img");
  const textContainer = document.createElement("div");
  const text = document.createTextNode(textNode);
  const button = document.createElement("button");
  const buttonText = document.createTextNode("Read More");
  textContainer.className = "textContainer";
  image.src = imageContainer;
  textContainer.appendChild(text);
  button.appendChild(buttonText);
  textContainer.appendChild(button);
  cell.appendChild(image);
  cell.appendChild(textContainer);
  parent.appendChild(cell);
}
let body = document.body;
body.appendChild(container);

for (let i = 1; i <= 4; i++) {
  createCell(
    container,
    "https://picsum.photos/200",
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae ac eget nulla; erat conubia mauris. Urna ante venenatis amet quis vehicula nisi."
  );
}

//teacher's way

const containerNew = document.createElement("section");
function createCol(textNode, img, alternative) {
  let col = document.createElement("div");
  col.className = "col";
  let card = document.createElement("div");
  card.className = "card";
  let text = document.createTextNode(textNode);
  card.appendChild(text);
  let image = document.createElement("img");
  image.src = img;
  image.setAttribute("alt", alternative);
  col.appendChild(card);
  card.appendChild(image);
  card.appendChild(text);
  containerNew.appendChild(col);
}

createCol(
    "AAAAA",
    "https://picsum.photos/200",
    "hello"
)
createCol(
    "AAAAA",
    "https://picsum.photos/200",
    "hello"
)
createCol(
    "AAAAA",
    "https://picsum.photos/200",
    "hello"
)
body.appendChild(containerNew)