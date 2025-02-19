const listContainerElement = document.getElementById("navBarList")
let isOpened = false
const handleBurgerMenu = () => {
    isOpened = !isOpened 
    if (isOpened){
        listContainerElement.style.display = 'flex'
        listContainerElement.className = 'navBarListMobile'
    }else if (!isOpened){
        listContainerElement.style.display = 'none'
    }
}