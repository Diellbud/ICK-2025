const titleInput = document.getElementById("titleInputId");
const descInput = document.getElementById("descInputId");
const Imagefile = document.getElementById("fileId");
const button = document.getElementById("createBtn");
const body = document.body;
function createPost(e) {
  const file = Imagefile.files[0];
  const renderImage = new FileReader();
  renderImage.onload = function (e) {
    const base64Img = e.target.result;
    const postData = {
      title: titleInput.value,
      desc: descInput.value,
      image: base64Img,
    };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  renderImage.readAsDataURL(file);
}



const getData = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((image) => {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode(image.title);
        const desc = document.createElement('h4')
        const descText = document.createTextNode(image.desc)
        const btnDiv = document.createElement("div");
        const buyBtn = document.createElement('button')
        const viewMoreBtn = document.createElement('button')
        const buyBtnText = document.createTextNode("Buy")
        const viewMoreBtnText = document.createTextNode("View More")
        buyBtn.appendChild(buyBtnText)
        viewMoreBtn.appendChild(viewMoreBtnText)
        btnDiv.appendChild(buyBtn)
        btnDiv.appendChild(viewMoreBtn)
        h2.appendChild(h2Text);
        desc.appendChild(descText);
        buyBtn.id ="buyBtn"
        viewMoreBtn.id ="viewMoreBtn"
        img.src = image.image;
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(desc);
        card.appendChild(btnDiv)
        body.appendChild(card);
        function onBuy() {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data =>{
            data.forEach(product => {
                buyBtn.addEventListener('click', ()=>{
                    window.location.href=`./Checkout/index.html?id=${product.id}`
                })
            });
        })
        }
        onBuy()
      });
    });
};
getData();

button.addEventListener("click", createPost);
