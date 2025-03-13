const body = document.body
const container = document.createElement('div')
body.appendChild(container)
fetch('./data.json')
.then(response =>{
    console.log(response);
    return response.json()
})
.then((data) => {
    console.log(data)
    data.forEach(dataElement => {
        const cardContainer = document.createElement('div')
        const h3 = document.createElement('h3')
        const h3Text = document.createTextNode(dataElement.title)
        h3.appendChild(h3Text)
        const completed = document.createElement('p')
        const completedText = document.createTextNode("Completed: " + dataElement.completed)
        completed.appendChild(completedText)
        cardContainer.appendChild(h3)
        cardContainer.appendChild(completed)
        container.appendChild(cardContainer)
    });
}).catch((error)=>{
    console.log(error)
})
    

//post
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json
}).then((data)=>{
    console.log(data)
})
