let products = [
  {
    id:1,
    name: " Wireless BlueTooth headphones ",
    price: 79.99,
    discount: 20,
    desc: " Experience high-quality sound with these wireless headphones... [Wireless Product]",
  },
  {
    id:2,
    name: " InnovativeWatch Series 5",
    price: 169.99,
    discount: 15,
    desc: " Stay Connected and track your fitness with this advanced sma...",
  },
  {
    id:3,
    name: "Portable Charger 10000MAH",
    price: 35.99,
    discount: 10,
    desc: " Compact and Efficient portable charger to keep your devices...",
  },
  {
    id:4,
    name: " 4k ultra action camera",
    price: 122.49,
    discount: 25,
    desc: " Capture your adventures in stunning 4K resolution with this... ",
  },
  {
    id:5,
    name: " Noise Cancelling Earbuds",
    price: 41.99,
    discount: 30,
    desc: " Enjoy your music without distractions using these premium no...",
  },
  {
    id:6,
    name: "Gaming KeyBoard",
    price: 63.99,
    discount: 20,
    desc: "Enhance Your Gaming Experience with this mechanical keyboard ",
  },
  {
    id:7,
    name: " Innovative Led TV 55-Inch",
    price: 491.99,
    discount: 18,
    desc: "Bring the cinematic experience home with this smart LED TV...",
  },
  {
    id:8,
    name: "Wireless Mouse",
    price: 28.49,
    discount: 5,
    desc: "Smooth and responsive wireless mouse with a ergonomic design a... [Wireless Product] ",
  },
];
document.write(`
  <div class = "productGrid">
  `)
products.forEach(product => {
  let productOriginal = (product.price -(product.price * (product.discount / 100)).toPrecision(3))
    document.write(`
        <div class="productContainer">
        <div class = "imgContainer">
        </div>
        <div>
        <h4>${product.name.trim().toUpperCase()}</h4>
        <h4 class="discountCalc">Original Price: $${productOriginal}(Ceil: $${Math.floor(productOriginal)})</h4>
        <h4 class="productPrice">${product.price}(Ceil: $${Math.ceil(product.price)})</h4>
        <h5 class= "discount">Save ${product.discount}%</h5>
        <h5>${product.desc.trim()}</h5>
        </div>
        </div>
        `)
});

document.write(`
  </div>
  `)