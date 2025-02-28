const body = document.body;

const container = document.createElement("div");
container.className = "cellContainer";
const button = document.createElement("button");
button.className = "createButton";
const buttonText = document.createTextNode("Create New");
button.appendChild(buttonText);
const buttonDelete = document.createElement("button");
buttonDelete.className = "deleteButton";
const buttonDeleteText = document.createTextNode("Delete Now");
button.appendChild(buttonText);
buttonDelete.appendChild(buttonDeleteText);
body.appendChild(container);
body.appendChild(button);
body.appendChild(buttonDelete);

function createCell() {
  const cell = document.createElement("div");
  cell.className = "cell";
  const h2 = document.createElement("h2");
  const h2Text = document.createTextNode("Heading");
  h2.appendChild(h2Text);
  const p = document.createElement("p");
  const pText = document.createTextNode(
    "Lorem ipsum. Po pritoj me shkru ose me shku me i bo gjenerate"
  );
  p.appendChild(pText);
  cell.appendChild(h2);
  cell.appendChild(p);
  container.appendChild(cell);
}
function deleteCell() {
    container.lastElementChild.remove();
}

createCell();
button.addEventListener("click", createCell);
buttonDelete.addEventListener("click", deleteCell);
