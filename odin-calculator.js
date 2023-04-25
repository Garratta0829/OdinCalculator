const operands = document.querySelectorAll('.numkey');
const operators = document.querySelectorAll('.operator')
const bottomScreen = document.querySelector('.bottom-screen')
const topScreen = document.querySelector('.top-screen')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
const backspace = document.getElementById('backspace')
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
        console.log(num1)
        bottomScreen.textContent += num1
        topScreen.textContent += button.innerHTML
    }

}))


operators.forEach(op => op.addEventListener('click', () => {
 

    operator = op.innerHTML

    console.log(currentValue)
    console.log(num1)
    console.log(result)

    if (!topScreen.textContent.endsWith(`${operator} `)) {
        topScreen.textContent += ' ' + operator + ' '
    }

    // || !topScreen.textContent.endsWith(`- `)

    // if (!topScreen.textContent.endsWith(`+ `)) {
    //     topScreen.textContent += ' ' + operator + ' '
    // }
   
   
    if (result != undefined) {
        bottomScreen.textContent = roundNumber(result)
        currentValue = result
    }
    
    operatorPressed = true
    // topScreen.textContent += ' ' + operator + ' '
    num1 = ''
    
}))


backspace.addEventListener('click', () => {

    if (operatorPressed === false) {
        currentValue = currentValue.toString().split('').slice(0,-1).join('')
       
    } else if (operatorPressed === true) {
        num1 = num1.toString().split('').slice(0,-1).join('')
    }
    
    console.log(currentValue)
    console.log(num1)

    bottomScreen.textContent = bottomScreen.textContent.toString().slice(0, -1)
    topScreen.textContent = topScreen.textContent.toString().slice(0, -1)
    operate(operator, currentValue, num1)
})


decimal.addEventListener('click', () => {
    
    currentValue = currentValue.toString()
    num1 = num1.toString()

    if (operatorPressed === false && !currentValue.includes(`.`)) {

        currentValue += decimal.innerHTML
        bottomScreen.textContent += decimal.innerHTML
        topScreen.textContent += decimal.innerHTML

    } else if (operatorPressed === true && !num1.includes(`.`)) {
        
        num1 += decimal.innerHTML
        bottomScreen.textContent += decimal.innerHTML
        topScreen.textContent += decimal.innerHTML

    }})


equalButton.addEventListener('click', () => {
    
    if (!topScreen.textContent.endsWith(` =`)) {
        topScreen.textContent += ' ='
    }
    
    bottomScreen.textContent = roundNumber(result)
    currentValue = result

})

clearButton.addEventListener('click', () => {
    topScreen.innerHTML = ''
    bottomScreen.innerHTML = ''
    operatorPressed = false;
    num1 = ''
    currentValue = ''
    result = undefined
    
})

function roundNumber(num) {
    return Math.round(num * 10000) / 10000

}

function operate(operator, currentValue, num1) {
    currentValue = parseFloat(currentValue)
    num1 = parseFloat(num1)

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

