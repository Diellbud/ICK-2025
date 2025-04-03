const registerForm = document.getElementById("registerForm");

let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let ageError = document.getElementById("ageError");
let streetError = document.getElementById("streetError");
let stateError = document.getElementById("stateError");
let zipError = document.getElementById("zipError");

function validateName(name, nameError) {
  if (name == "") {
    nameError.textContent = "Name must not be empty";
    return false;
  } else if (name.length <= 3) {
    nameError.textContent = "Name must be longer than 3 characters";
    return false;
  } else if (name.length >= 20) {
    nameError.textContent = "Name cannot be longer than 20 characters";
    return false;
  } else if (!/^[a-zA-Z\s\-]+$/.test(name)) {
    nameError.textContent =
      "Name can only contain letters, spaces, and hyphens";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail(email, emailError) {
  if (email == "") {
    emailError.textContent = "Email must not be empty";
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Invalid email address";
    return false;
  }
  emailError.textContent = "";
  return true;
}
function validatePassword(password, passwordError) {
  if (password == "") {
    passwordError.textContent = "Password must not be empty";
    return false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must not be less than 6 characters";
    return false;
  } else if (password.length >= 20) {
    passwordError.textContent = "Password cannot be longer than 20 characters";
    return false;
  }
  passwordError.textContent = "";
  return true;
}
function validateAge(age, ageError) {
    if (age == "") {
        ageError.textContent = "Age must not be empty";
        return false;
    } else if (age < 1 || age > 100) {
        ageError.textContent = "Age must be a number between 1 and 100";
        return false;
    }
    ageError.textContent = "";
    return true;
}
function validateText(Text, TextError) {
    if (Text == "") {
        TextError.textContent = "Street must not be empty";
        return false;
    }
    TextError.textContent = "";
    return true;
}


function validateZip(zip, zipError) {
    if (zip == "") {
        zipError.textContent = "Zip code must not be empty";
        return false;
    } else if (!/^\d{5}(-\d{4})?$/.test(zip)) {
        zipError.textContent = "Invalid zip code format";
        return false;
    }
    zipError.textContent = "";
    return true;
}

function validation(e) {
    e.preventDefault()
  let formData = new FormData(e.target);
  let firstName = formData.get("firstName").trim();
  let lastName = formData.get("lastName").trim();
  let email = formData.get("email").trim();
  let password = formData.get("password").trim();
  let age = formData.get("age");
  let street = formData.get("street").trim();
  let state = formData.get("state").trim();
  let zip = formData.get("zip");


  if (validateName(firstName,firstNameError) && validateName(lastName,lastNameError) && validateEmail(email,emailError) && validatePassword(password,passwordError) && validateAge(age, ageError) && validateText(street, streetError) && validateText(state,stateError) && validateZip(zip,zipError)) {
      alert("form submitted")
  }
}

registerForm.addEventListener("submit", validation);
