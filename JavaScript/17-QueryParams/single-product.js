const urlParams = new URLSearchParams(window.location.search)
const productId=urlParams.get('id')

function getSingleProduct() {
    fetch(`http://localhost:3000/products/${productId}`)
    .then(res =>res.json())
    .then(data=>{
        console.log(data);
        document.getElementById('title').innerText = data.title
    })
}
getSingleProduct()