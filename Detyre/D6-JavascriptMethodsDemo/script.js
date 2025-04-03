let result = document.querySelector('#result')
result.innerHTML = '<h2>This text IS updated</h2>'

let listChildren = document.querySelectorAll('.listItem')
listChildren.forEach((index) =>{
    if (index == 1){
        let listItem = listChildren[index]
        listItem.style.backgroundColor = '#FFCCBC'
    }
})

let numberArry = [4,6,2,5,3,1]
console.log(numberArry);
numberArry.push(7)
console.log(numberArry)
numberArry.pop(4)
console.log(numberArry)
numberArry = numberArry.map(number => number * 2)
console.log(numberArry)
numberArry = numberArry.filter(number => number >= 10)
console.log(numberArry)

let number = 4.55
console.log(number)
number.toFixed(1)
console.log(number)
console.log(number.toExponential(3))

let string = "HeLlO"
console.log(string);
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.toLowerCase().includes('hell'));




