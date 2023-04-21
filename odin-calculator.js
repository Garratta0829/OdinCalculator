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
let currentValue = ''
let operatorPressed = false;
let equalPressed = false;
let result
let currentValueInit = false





operands.forEach(button => button.addEventListener('click', () => {

    // num2 += button.textContent
    // num2 = parseInt(num2)
    // bottomScreen.textContent = num2
    // topScreen.textContent = num2
    // console.log(num2)
    

    
    if (operatorPressed === false) {
    
        currentValue += button.innerHTML
        currentValue = parseInt(currentValue)
        bottomScreen.textContent += button.innerHTML
        topScreen.textContent += button.innerHTML
        console.log(currentValue)
        
    } else if (operatorPressed === true) {
        
        bottomScreen.textContent = ''
        num1 += button.innerHTML
        num1 = parseInt(num1)
        operate(operator, currentValue, num1)
        // console.log(currentValue)
        bottomScreen.textContent += num1
        topScreen.textContent += button.innerHTML
       
    }

}))


operators.forEach(op => op.addEventListener('click', () => {
    
    // num1 = num2
    // num2 = ''
    // console.log(num1)
    // console.log(num2)

    // if (num1 != '') {
    //     operate(operator, currentValue, num1)
    //     bottomScreen.textContent = currentValue
        
    // }
    if (result != undefined) {
        bottomScreen.textContent = result
        currentValue = result
    }
    



    operatorPressed = true
    operator = op.innerHTML
    topScreen.textContent += operator
    // bottomScreen.textContent = currentValue
    num1 = ''
    // console.log(currentValue)
    


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
    
    bottomScreen.textContent = result
    currentValue = result
    // operate(operator, currentValue, num1)
    // bottomScreen.innerHTML = result
    // console.log(result)

})

clearButton.addEventListener('click', () => {
    topScreen.innerHTML = ''
    bottomScreen.innerHTML = ''
    num1 = ''
    currentValue = ''
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
    
    // if (operator === '+') {
    //     currentValue += num1
    //     console.log(currentValue)
    //     return currentValue

    // } else if (currentValue === '-') {
    //     currentValue -= num1
    //     console.log(currentValue)
    //     return currentValue
    // }

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
        default:
            console.log('')
    }
}

operate(operator, currentValue, num1)
