const btn = document.getElementById('btn')


console.log(btn)
function onClick(event) {
    console.log(event)
    console.log(event.target)
}


btn.addEventListener('click',onClick)