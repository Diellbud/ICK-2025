const submitForm = document.getElementById("bankingInfo");
const CCN = document.getElementById("CCN");
const date = document.getElementById("expDate");
const CVV = document.getElementById("CVV");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const img = document.getElementById("imgId");

const CCNError = document.getElementById("CCNError");
const expDateError = document.getElementById("expDateError");
const CVVError = document.getElementById("CVVError");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

function getSingleProduct() {
  fetch(`http://localhost:3000/products/${productId}`)
    .then((res) => res.json())
    .then((data) => {
        title.textContent = data.title;
        desc.textContent = data.desc;
        img.src = data.image;

    });
}
getSingleProduct();

function onSubmit(e) {
  e.preventDefault();

  let hasError = false;

  if (CCN.value.length !== 16) {
    CCNError.textContent = "Credit Card Number must be exactly 16 digits.";
    hasError = true;
  } else {
    CCNError.textContent = "";
  }

  if (!date.value) {
    expDateError.textContent = "Expiration Date must be included.";
    hasError = true;
  } else {
    const inputDate = date.value;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const currentDate = `${yyyy}-${mm}-${dd}`;

    if (inputDate <= currentDate) {
      expDateError.textContent = "Credit Card Has expired";
      hasError = true;
    } else {
      expDateError.textContent = "";
    }
  }

  if (CVV.value.length !== 3) {
    CVVError.textContent = "CVV must be exactly 3 digits.";
    hasError = true;
  } else {
    CVVError.textContent = "";
  }

  if (!hasError) {
    fetch("http://localhost:3000/bankingInfo")
      .then((res) => res.json())
      .then((data) => {
        const userId = data.length + 1;

        let bankingInfoObject = {
            id: productId,
          userId: userId,
          CCN: CCN.value,
          expDate: date.value,
          CVV: CVV.value,
        };

        fetch("http://localhost:3000/bankingInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bankingInfoObject),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Payment Successful!");
            submitForm.reset();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log("Error fetching existing bankingInfo:", error);
      });
  }
}

submitForm.addEventListener("submit", onSubmit);
