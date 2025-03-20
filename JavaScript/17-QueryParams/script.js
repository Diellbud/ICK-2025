function getData() {
    fetch('http://localhost:3000/products')
.then(res => res.json())
.then(data =>{
    const productContainer=document.getElementById('container')
    document.body.appendChild(productContainer)
    data.forEach(product => {
        const h1 = document.createElement('h1')
        h1.innerText=product.title
        productContainer.appendChild(h1)
        h1.addEventListener('click', ()=>{
            window.location.href=`single-product.html?id=${product.id}`
        })
    });
})
}
getData()