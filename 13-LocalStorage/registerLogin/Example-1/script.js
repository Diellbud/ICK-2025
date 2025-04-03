const LS = JSON.parse(localStorage.getItem("users"))
const LSArray = LS || []

const registerForm = document.getElementById("registerForm")
const fName = document.getElementById("fName")
const lName = document.getElementById("lName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const dob = document.getElementById("dob")
    const female = document.getElementById("female")
    const male = document.getElementById("male")
const agree = document.getElementById("agree")
const submit = document.getElementById("button")
const container = document.getElementById("container")
function LSArrayLoad() {
    LSArray.forEach(user => {
        container.innerHTML += `
        <div class="card">
            <h2>${user.fName} ${user.lName}</h2>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <p>Date of Birth: ${user.dob}</p>
            <p>Gender: ${user.gender}</p>
            <p>Agreed: ${user.agree}</p>
        </div>
        `
    });
}
function handleRegister(e) {
    e.preventDefault()
    let gender;
    if (male.checked == true){
        gender = "Male"
    }else if (female.checked == true){
        gender = "Female"
    }
    userData = {
        fName: fName.value,
        lName: lName.value,
        email: email.value,
        password:password.value,
        dob: dob.value,
        gender: gender,
        agree: agree.checked,
    }
    LSArray.push(userData)
    container.innerHTML = container.innerHTML + `
    <div class="card">
        <h2>${fName.value} ${lName.value}</h2>
        <p>Email: ${email.value}</p>
        <p>Password: ${password.value}</p>
        <p>Date of Birth: ${dob.value}</p>
        <p>Gender: ${gender}</p>
        <p>Agreed: ${agree.checked}</p>
    </div>
    `
    localStorage.setItem("users", JSON.stringify(LSArray))
}

console.log(registerForm);

registerForm.addEventListener('submit', handleRegister)
LSArrayLoad()