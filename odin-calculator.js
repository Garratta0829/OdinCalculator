const operands = document.querySelectorAll('.numkey');
const operators = document.querySelectorAll('.operator')
const bottomScreen = document.querySelector('.bottom-screen')
const topScreen = document.querySelector('.top-screen')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
let operand
let operator
let num1 = ''
let num2 = ''
let currentValue = 0
let operatorPressed = false;
let equalPressed = false;
let result


operands.forEach(button => button.addEventListener('click', () => {

    if (operatorPressed === false) {
        num1 += button.innerHTML
        num1 = parseInt(num1)
        bottomScreen.textContent += button.innerHTML
        topScreen.textContent += button.innerHTML
        // console.log(num1)
    } else if (operatorPressed === true) {
        bottomScreen.textContent = ''
        num1 = ''
        num1 += button.innerHTML
        num1 = parseInt(num1)
        // console.log(num1)
        bottomScreen.textContent = button.innerHTML
        topScreen.textContent += button.innerHTML
        operatorPressed = false
    }

}))


operators.forEach(op => op.addEventListener('click', () => {
    
    operatorPressed = true
 
    operator = op.innerHTML
    topScreen.textContent += operator
    currentValue += parseInt(num1)

    // if (num2pressed = true) {
    //     currentValue += num2
    // }
    console.log(currentValue)
    console.log(num1)


}))


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



equalButton.addEventListener('click', () => {
    
    operate(operator, currentValue, num1)
    bottomScreen.innerHTML = result
    console.log(result)

})

clearButton.addEventListener('click', () => {
    topScreen.innerHTML = ''
    bottomScreen.innerHTML = ''
    num1 = ''
    num2 = ''
    operatorPressed = false;
})


function resetOperation() {
    // num1 = ''
    // num2 = ''
    operatorPressed = false
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
    // num1 = parseInt(num1)
    // num2 = parseInt(num2)
    
    switch (operator) {
        case '+':
            // return num1 + num2;
            // currentValue += num1 + num2
            // bottomScreen.innerHTML = num1 + num2
            // num1 += num2
            result = currentValue + num1
            return result
            console.log(num1)
            // console.log(result)
            // console.log(num2)
            // resetOperation()
            // num1 = ''
            // num2 = ''
            // bottomScreen.textContent = result
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



