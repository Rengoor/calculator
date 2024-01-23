// Operator functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

// Variables
let firstNum;
let operator;
let secondNum;

// Operate function
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}



// Buttons that populate the display
let display = document.querySelector('.display');
let displayValue;

const handleClick = function (e) {
    display.textContent = e.target.textContent;
    displayValue = display.textContent;
    
    if (typeof firstNum === 'undefined') {
        firstNum = displayValue;
        console.log("first: " + firstNum);
    } else {
        secondNum = displayValue;
        console.log("second: " + secondNum);
    }
};

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
operators.forEach((singleOperator) => {
    singleOperator.addEventListener('click', (e) => {
        operator = e.target.textContent;
        console.log(operator);
    });
});
equals.addEventListener('click', () => {
    if (secondNum !== undefined) {
        let result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        console.log(result)
        display.textContent = result;
        firstNum = display.textContent;
    }
});

