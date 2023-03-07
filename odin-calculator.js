const numberButtons = document.querySelectorAll('.numkey');
const bottomScreen = document.querySelector('.bottom-screen')
const topScreen = document.querySelector('.top-screen')
const equalButton = document.querySelector('.equal')
const operands = document.querySelectorAll('.operand')
const addButton = document.getElementById('add')
const subtractButton = document.getElementById('subtract')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide');
let value
let integer
let number = []
let numberString = []
let displayString = []
let previousValue
let currentValue = 0;
let topscreenExpression = ''


numberButtons.forEach(button => button.addEventListener('click', () => {
    value = button.innerHTML
    topscreenExpression += value
    // number.push(value)
    // integer = number.join('')
    // numberString.push(integer)
    displayString.push(integer)
    topScreen.innerHTML = topscreenExpression
    bottomScreen.innerHTML = integer
    // topScreen.innerHTML = integer
    // console.log(integer)
    // evaluate(numberString)
    topScreenNumbers()
    
}))

operands.forEach(operand => operand.addEventListener('click', () => {
    value = operand.innerHTML
    topscreenExpression += value
    topScreen.innerHTML = topscreenExpression
}))

// subtractButton.addEventListener('click', () => {
//     // numberString.push(integer)
//     numberString.push('-')
    

//     number = []
//     topScreen.innerHTML = numberString.join(' ');
//     currentValue = numberString.join(' ')
//     console.log(currentValue)
// })

// multiplyButton.addEventListener('click', () => {
//     // numberString.push(integer)
//     numberString.push('*')
    

//     number = []
//     topScreen.innerHTML = numberString.join(' ');
//     currentValue = numberString.join(' ')
//     console.log(currentValue)
// })
// numberString[i] + numberString[i+1]

// divideButton.addEventListener('click', () => {
//     // numberString.push(integer)
//     numberString.push('/')
function evaluate(numberString) {
    
    
    for (let i=0; i <= numberString.length; i++) {
        if (numberString[i] == '+') {
            currentValue += parseInt(numberString[i-1] + numberString[i+1])
            bottomScreen.innerHTML = currentValue
            }
            // console.log(currentValue)}
        // } else if (numberString[i] == '-') {
        //     currentValue += numberString[i-1] + numberString[i+1]
        //     console.log(currentValue)
        // } else if (numberString[i] == '/') {
        //     currentValue += numberString[i-1] + numberString[i+1]
        //     console.log(currentValue)
        // } else if (numberString[i] == '*') {
        //     currentValue += numberString[i-1] + numberString[i+1]
        //     console.log(currentValue)
        // }
    }  

}



//     number = []
//     topScreen.innerHTML = numberString.join(' ');
//     currentValue = numberString.join(' ')
//     console.log(currentValue)
// })

addButton.addEventListener('click', () => {
    numberString.push(integer)
    numberString.push('+')
    
    number = []
    topScreen.innerHTML = numberString.join(' ');
    // currentValue = numberString.join(' ')
    // console.log(numberString)
})

equalButton.addEventListener('click', () => {
   evaluate(numberString)
   
   
    // let result = numberString[0] + numberString[2]
    // bottomScreen.innerHTML = result

    // topScreen.innerHTML = numberString
    // calculate(numberString)
})

// function concatNum(number) {
//     for (let i=0; i <+ number.length; i++) {
//         num2 = '' + number[i]
//         console.log(num2)
//     }
// }
// if (button.innerHTML == 'C') {
//     numberString = [];
//     topScreen.innerHTML = '';
//     bottomScreen.innerHTML = '';
// } else if (button.innerHTML == '=') {
//     // bottomScreen.innerHTML = eval(numberString.join(' '))
//     // numberArray = Number(numberString.join(' ').toString())
//     // bottomScreen.innerHTML = numberArray
//     add(numberString)
    
// }

// const regEx = 


function topScreenNumbers(value) {
    
    // console.log(number)
    // topScreen.innerHTML = numberString.join(' ')
}

function calculate(numberString) {

    if (numberString.includes(/[+]/)) {
        bottomScreen.innerHTML = numberString[0] + numberString[1]
        // previousValue += currentValue
    }


    // for (let i = 0; i <= numberString.length; i++) {
    //     let calculation = parseInt(numberString[0] + numberString[1])
    //     bottomScreen.innerHTML = calculation
    }
    // buttons.forEach(function (button) {
    //     if (button.innerHTML == 'C') {
    //         topScreen.innerHTML = '';
    //         bottomScreen.innerHTML = '';
    //     }
    // })


// console.log(operate('+', 6, 2))

function add(num1, num2) {
    // console.log(a + b) 
    return num1 + num2
}

function divide(num1,num2) {
    // console.log(a - b)
    return num1 - num2
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
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            console.log('blah blah blah')
    }
    
    // if (operator == '+') {
    //     previousValue += currentValue
    // } else if (operator == '-') {
    //     subtract(num1, num2)
    // } else if (operator == '*') {
    //     multiply(num1, num2)
    // } else if (operator == '/') {
    //     divide(num1, num2)
    // }
}








console.log(operate('/', 10, 2))