const btn = document.getElementById('clickMe')
const body = document.body
const container = document.createElement('div')
container.id = "containerId"
body.appendChild(container)
let header = document.createElement('h1')
let text = document.createTextNode("click Me")
header.appendChild(text)
body.appendChild(header)

const onClick = () => {
    let p=document.createElement('p')
    let text = document.createTextNode("hello")
    p.appendChild(text)
    container.appendChild(p)
}

function onContextMenu() {
    console.log("context Menu")
}

function onMouseDown() {
    console.log("on mouse down")
}

function onMouseUp() {
    console.log("on mouse up")
}

function onMouseWheel() {
    console.log("on mouse wheel")
}

function onMouseOver() {
    console.log('mouse is over')
    header.style.background = "red"
    header.style.color = 'white'
        header.style.width = '400px'
}

function onMouseOut() {
    console.log('mouse is out')
    header.style.background = "white"
    header.style.color = 'black'
    header.style.width = 'auto'
}

btn.addEventListener('click', onClick)
btn.addEventListener('contextmenu', onContextMenu)
btn.addEventListener('mousedown',onMouseDown)
btn.addEventListener('mouseup',onMouseUp)
btn.addEventListener('wheel', onMouseWheel)
header.addEventListener('mouseover',onMouseOver)
header.addEventListener('mouseout',onMouseOut)