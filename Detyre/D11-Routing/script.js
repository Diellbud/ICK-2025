let createForm = document.getElementById('createForm')
let deleteBtn = document.getElementById('delete')
async function createPost(e){
    e.preventDefault()
    let body = document.getElementById('bodyId').value
    let title = document.getElementById('titleId').value
    let userId = document.getElementById('userId').value
    let Id = document.getElementById('Id').value
    const postData = {
        body:body,
        title:title,
        userId:userId,
        id:Id
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postData)
        })
        const newPost= await response.json()
        console.log(newPost);
    }
    catch(error){
        console.log(error)
    }
    createForm.reset()
}

async function deletePost(e) {
    e.preventDefault()
    let Id = document.getElementById('Id').value
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            console.log(`Post with ID ${Id} deleted successfully`);
        }
    }
    catch (error) {
        console.log(error);
    }
    createForm.reset()
}

createForm.addEventListener('submit', createPost)
deleteBtn.addEventListener('click', deletePost)