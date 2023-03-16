const operands = document.querySelectorAll('.numkey');
const operators = document.querySelectorAll('.operator')
const bottomScreen = document.querySelector('.bottom-screen')
const topScreen = document.querySelector('.top-screen')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
// const addButton = document.getElementById('add')
// const subtractButton = document.getElementById('subtract')
// const multiplyButton = document.getElementById('multiply')
// const divideButton = document.getElementById('divide');
let operand
let operator1
let num1 = ''
let num2 = ''
let numberString = []
let currentValue = 0
// let previousValue
// let currentValue = 0;
// let value
let operatorPressed = false;
let equalPressed = false;



operands.forEach(button => button.addEventListener('click', () => {
//   if(equalPressed === false) {
    if (operatorPressed === false) {
        num1 += button.innerHTML
        bottomScreen.textContent += button.innerHTML
        topScreen.textContent += button.innerHTML
        // console.log(num1)
    } else if (operatorPressed === true) {
        bottomScreen.textContent = ''
        num2 += button.innerHTML
        // num1 += button.innerHTML
        bottomScreen.textContent += button.innerHTML 
        topScreen.textContent += button.innerHTML 
        // console.log(num1)
        // console.log(num2)
    }
//   } else if (equalPressed === true) {
//         num1 = currentValue
//         console.log(num1)
//         num2 = 0
//         num2 += button.innerHTML
//         bottomScreen.textContent += button.innerHTML 
//         topScreen.textContent += button.innerHTML 
//   }
    
    
    
}))

// if operator pressed for second time without hitting equals, num1 + num2 has to be calculated 
// then stored.

operators.forEach(op => op.addEventListener('click', () => {
    operatorPressed = true
    // Number(num1 + num2)
    // console.log(num1)
    operator = op.innerHTML
    topScreen.textContent += operator
    console.log(num1)
    console.log(num2)
    // if (operator === '+') {
    //     num1 += bottomScreen.innerHTML
    //     console.log(num1)
        // num1 += num2
        // num2 = ''
        // console.log(num1)
        // console.log(num2)
    }
    
))

// operator = operator1.innerHTML
// topScreen.textContent += operator
// numberString += value
// topScreen.innerHTML = 

decimal.addEventListener('click', () => {
    if (operatorPressed === false) {
        parseFloat(num1 += decimal.innerHTML)
        bottomScreen.textContent += decimal.innerHTML
        topScreen.textContent += decimal.innerHTML
    } else if (operatorPressed === true) {
        parseFloat(num2 += decimal.innerHTML)
        bottomScreen.textContent += decimal.innerHTML
        topScreen.textContent += decimal.innerHTML
    }
})

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
    // num1 = parseFloat(num1) 
    // num2 = parseFloat(num2)
    operate(operator, num1, num2)
    // equalPressed = true
    num1 = bottomScreen.textContent
    num2 = ''
    // num1 = operate(operator, num1, num2)
    // console.log(operate(operator, num1, num2))
    // console.log(num1)
    // console.log(currentValue)
})

clearButton.addEventListener('click', () => {
    topScreen.innerHTML = ''
    bottomScreen.innerHTML = ''
    num1 = ''
    num2 = ''
    operatorPressed = false;
})


function add(num1, num2) {
    // console.log(a + b) 
    console.log(num1 + num2)
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
    bottomScreen.innerHTML = num1 - num2
}


function operate(operator, num1, num2) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    
    switch (operator) {
        case '+':
            // return num1 + num2;
            // currentValue += num1 + num2
            bottomScreen.innerHTML = num1 + num2
            
            // num1 = ''
            // num2 = ''
            // num1 = bottomScreen.textContent
            // topScreen.textContent += num
            // console.log(num1)
            break;
        case '-':
            bottomScreen.innerHTML = num1 - num2
            // return subtract(num1, num2);
            break;
        case '*':
            bottomScreen.innerHTML = num1 * num2
            // return multiply(num1, num2);
            break;
        case '/':
            bottomScreen.innerHTML = num1 / num2
            // return divide(num1, num2);
            break;
        default:
            console.log('blah blah blah')
    }
    
 
}


// console.log(operate('+', 10, 2))
// console.log(10/2)

