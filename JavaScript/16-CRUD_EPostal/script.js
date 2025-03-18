// // fetch('http://localhost:3000/posts')
// // .then(response =>{
// //     return response.json()
// // })
// // .then(data => {
// //     console.log(data);
//     
// // })

//5 Inputs (1 text, password,email,select,and checkbox)
//send post request with async
//show on table
//no LS, yes DB

const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const role = document.getElementById('role')
const subscribe = document.getElementById('subscribe')
const createForm = document.getElementById('createForm')
const table = document.getElementById('table')
async function reloadUsers(e) {
        try {
            const response = await fetch('http://localhost:3000/users')
            const data = await response.json()
            data.forEach(user => {
                let userTr = document.createElement('tr')
                let userId = document.createElement('td')
                let userIdText = document.createTextNode(user.id)
                let userNameText = document.createTextNode(user.username)
                let userName = document.createElement('td')
                let userPassText = document.createTextNode(user.password)
                let userPass = document.createElement('td')
                let userEmailText = document.createTextNode(user.email)
                let userEmail = document.createElement('td')
                let roleText = document.createTextNode(user.role)
                let role = document.createElement('td')
                let subscribedText = document.createTextNode(user.subscribe)
                let subscribed = document.createElement('td')
                userId.appendChild(userIdText)
                userName.appendChild(userNameText)
                userPass.appendChild(userPassText)
                userEmail.appendChild(userEmailText)
                role.appendChild(roleText)
                subscribed.appendChild(subscribedText)
                userTr.appendChild(userId)
                userTr.appendChild(userName)
                userTr.appendChild(userPass)
                userTr.appendChild(userEmail)
                userTr.appendChild(role)
                userTr.appendChild(subscribed)
                table.appendChild(userTr)
            });
        } catch (error) {
            console.log(error);
            
        }
}

async function createUser(e) {
    e.preventDefault()

    try {
        let userObject = {
            username:username.value,
            password:password.value,
            email:email.value,
            role:role.value,
            subscribe:subscribe.checked,
        }
        const response = await fetch('http://localhost:3000/users', {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userObject)
        })
        const newUser= await response.json()
        console.log(newUser);
    }
    catch(error){
        console.log(error)
    }
}


createForm.addEventListener('submit', createUser)

reloadUsers()