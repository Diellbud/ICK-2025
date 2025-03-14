const body = document.body;
const container = document.createElement("div");
body.appendChild(container);
// fetch('./data.json')
// .then(response =>{
//     console.log(response);
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
//     data.forEach(dataElement => {
//         const cardContainer = document.createElement('div')
//         const h3 = document.createElement('h3')
//         const h3Text = document.createTextNode(dataElement.title)
//         h3.appendChild(h3Text)
//         const completed = document.createElement('p')
//         const completedText = document.createTextNode("Completed: " + dataElement.completed)
//         completed.appendChild(completedText)
//         cardContainer.appendChild(h3)
//         cardContainer.appendChild(completed)
//         container.appendChild(cardContainer)
//     });
// }).catch((error)=>{
//     console.log(error)
// })

// //post
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>{
//     return response.json
// }).then((data)=>{
//     console.log(data)
// })

// //github
// fetch("https://api.github.com/users/3gzon")
//   .then((response) => {
//     return response.json();
//   })
//         .then((data) => {
//             console.log(data);
//             const cardContainer = document.createElement("div");
//             const h3 = document.createElement("h3");
//             const h3Text = document.createTextNode(data.login);
//             const id = document.createElement("id");
//             const idText = document.createTextNode(data.id);
//             fetch(data.repos_url)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 data.forEach(repo => {
//                     const repoContainer = document.createElement("div");
//                     const repos = document.createElement("h3");
//                     const reposText = document.createTextNode(repo.full_name);
//                     repos.appendChild(reposText);
//                     repoContainer.appendChild(repos);
//                     cardContainer.appendChild(repoContainer);
//                 });
//             });

//     id.appendChild(idText);
//     h3.appendChild(h3Text);
//     cardContainer.appendChild(h3);
//     cardContainer.appendChild(id);
//     container.appendChild(cardContainer);
//   });

//async request
async function asynFetch() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            console.log(data,'fetched async')
        } catch (error) {
            console.log(error);
            
        }
}
asynFetch()