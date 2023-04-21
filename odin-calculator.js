const operands = document.querySelectorAll('.numkey');
const operators = document.querySelectorAll('.operator')
const bottomScreen = document.querySelector('.bottom-screen')
const topScreen = document.querySelector('.top-screen')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
let operator
let num1 = ''
let currentValue = ''
let operatorPressed = false;
let result



operands.forEach(button => button.addEventListener('click', () => {
    
    if (operatorPressed === false) {
    
        currentValue += button.innerHTML
        currentValue = parseFloat(currentValue)
        bottomScreen.textContent += button.innerHTML
        topScreen.textContent += button.innerHTML
        console.log(currentValue)
        
    } else if (operatorPressed === true) {
        
        bottomScreen.textContent = ''
        num1 += button.innerHTML
        num1 = parseFloat(num1)
        operate(operator, currentValue, num1)
        // console.log(currentValue)
        bottomScreen.textContent += num1
        topScreen.textContent += button.innerHTML
    }

}))


operators.forEach(op => op.addEventListener('click', () => {
    
    if (result != undefined) {
        bottomScreen.textContent = roundNumber(result)
        currentValue = result
    }
    
    operatorPressed = true
    operator = op.innerHTML
    topScreen.textContent += ' ' + operator + ' '
    num1 = ''
    
}))


decimal.addEventListener('click', () => {
    
    if (operatorPressed === false) {
        currentValue += decimal.innerHTML
        bottomScreen.textContent += decimal.innerHTML
        topScreen.textContent += decimal.innerHTML
    } else if (operatorPressed === true) {
        num1 += decimal.innerHTML
        bottomScreen.textContent += decimal.innerHTML
        topScreen.textContent += decimal.innerHTML
    }
})


equalButton.addEventListener('click', () => {
    
    topScreen.textContent += ' ='
    bottomScreen.textContent = roundNumber(result)
    currentValue = result

})

clearButton.addEventListener('click', () => {
    topScreen.innerHTML = ''
    bottomScreen.innerHTML = ''
    num1 = ''
    currentValue = ''
    result = ''
    operatorPressed = false;
})

function roundNumber(num) {
    return Math.round(num * 10000) / 10000
}


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


function operate(operator, currentValue, num1) {

    switch (operator) {
        case '+':
            result = currentValue + num1
            
            break;
        case '-':
            result = currentValue - num1
            console.log(currentValue)

            break;
        case '*':
            result = currentValue * num1
            console.log(currentValue)

            break;
        case '/':
            result = currentValue / num1
            console.log(currentValue)

            break;
        case '^':
            result = Math.pow(currentValue, num1)
            console.log(currentValue)

        default:
            console.log('')
    }
}

