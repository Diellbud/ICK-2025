// let input = document.getElementById('inputId');
// let selectOption = document.getElementById('selectOption')
// let checkboxId = document.getElementById('checkboxId')

// const onInputValue = (e) =>{
//     console.log('input value', e.target.value)
// }
// const onSelectOptions = (e) =>{
//     console.log('select options value', e.target.value)
// }
// const onCheckBoxChange = (e) =>{
//     console.log('Checkbox value', e.target.checked)
// }

// input.addEventListener('input', onInputValue)
// selectOption.addEventListener('change', onSelectOptions)
// checkboxId.addEventListener('change', onCheckBoxChange)

//Example
// const body = document.body
// const h1 = document.createElement('h1')
// let h1Text = document.createTextNode("Default")
// h1.appendChild(h1Text)
// const checkbox = document.createElement('input')
// checkbox.type = "checkbox"
// function checkboxCheck(e) {
//     if (e.target.checked === true){
//         h1.textContent = e.target.checked
//     }else if (e.target.checked === false){
//         h1.textContent = e.target.checked
//     }
// }
// checkbox.addEventListener("change", checkboxCheck);
// body.appendChild(checkbox)
// body.appendChild(h1)

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = new FormData(event.target);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log(formObject);
}); //Used Ai
