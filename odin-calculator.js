const operands = document.querySelectorAll('.numkey');
const operators = document.querySelectorAll('.operator')
const bottomScreen = document.querySelector('.bottom-screen')
const topScreen = document.querySelector('.top-screen')
const equalButton = document.querySelector('.equal')
const addButton = document.getElementById('add')
const subtractButton = document.getElementById('subtract')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide');
let operand
let operator1
let num1 = ''
let num2 = ''
let numberString = []
// let previousValue
// let currentValue = 0;
// let value
let operatorPressed = false;



operands.forEach(button => button.addEventListener('click', () => {
    if (operatorPressed === false) {
        num1 += button.innerHTML
        bottomScreen.textContent += button.innerHTML
        topScreen.textContent += button.innerHTML
        console.log(num1)
    } else if (operatorPressed === true) {
        bottomScreen.textContent = ''
        num2 += button.innerHTML
        bottomScreen.textContent += button.innerHTML
        topScreen.textContent += button.innerHTML
        console.log(num2)
    }
    
    
}))

operators.forEach(operator1 => operator1.addEventListener('click', () => {
    operatorPressed = true
    operator = operator1.innerHTML
    topScreen.textContent += operator
    
}))

// operator = operator1.innerHTML
// topScreen.textContent += operator
// numberString += value
// topScreen.innerHTML = 

function operation(){
    
    

}



// addButton.addEventListener('click', () => {
//     numberString.push(number)
//     numberString.push('+')
//     number = ''
//     operator = '+'
//     topScreen.innerHTML = numberString.join(' ');
//     // currentValue = numberString.join(' ')x
//     console.log(numberString)
// })

equalButton.addEventListener('click', () => {
    operate(operator, num1, num2)

})


function topScreenNumbers(value) {
    
    // console.log(number)
    // topScreen.innerHTML = numberString.join(' ')
}


function add(num1, num2) {
    // console.log(a + b) 
    return num1 + num2
}

function divide(num1,num2) {
    // console.log(a - b)
    return parseInt(num1) / parseInt(num2)
}

function multiply(num1, num2) {
    // console.log(a * b)
    return num1 * num2
}

function subtract(num1, num2) {
    // console.log(a - b) 
    return num1 - num2
}


function operate(operator, num1, num2) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    
    switch (operator) {
        case '+':
            // return num1 + num2;
            bottomScreen.innerHTML = num1 + num2
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            console.log('blah blah blah')
    }
    
    // if (operator === '+') {
    //     previousValue += currentValue
    // } else if (operator === '-') {
    //     subtract(num1, num2)
    // } else if (operator === '*') {
    //     multiply(num1, num2)
    // } else if (operator === '/') {
    //     divide(num1, num2)
    // }
}


// console.log(operate('+', 10, 2))
// console.log(10/2)

