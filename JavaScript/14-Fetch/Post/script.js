let createForm = document.getElementById('createForm')

async function createPost(e){
    e.preventDefault()
    let body = document.getElementById('bodyId').value
    let title = document.getElementById('titleId').value
    let userId = document.getElementById('userId').value
    const postData = {
        body:body,
        title:title,
        userId:userId,
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
}


createForm.addEventListener('submit', createPost)