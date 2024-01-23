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
    const digit = e.target.textContent;

    // If no operator is selected, update firstNum
    if (typeof firstNum === 'undefined' || operator === undefined) {
        firstNum = firstNum === undefined ? digit : firstNum + digit;
        display.textContent = firstNum;
        console.log("first: " + firstNum);
    } else {
        // If an operator is selected, update secondNum
        secondNum = secondNum === undefined ? digit : secondNum + digit;
        display.textContent = secondNum;
        console.log("second: " + secondNum);
    }
};

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
operators.forEach((singleOperator) => {
    singleOperator.addEventListener('click', (e) => {
        // If operator is already defined, calculate and display the result
        if (operator && secondNum !== undefined) {
            let result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
            display.textContent = result;
            firstNum = result;
            secondNum = undefined;
        }
        
        // Update the operator for the next calculation
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
        secondNum = undefined;
    }
});
clear.addEventListener('click', () => {
    display.textContent = undefined;
    firstNum = undefined;
    secondNum = undefined;
});

