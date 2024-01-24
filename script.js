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
    let result = num1 / num2;
    if (result === Infinity) {
        return "Thought you were cheeky huh?";
    } else {
        return result;
    }
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
        if (digit === '.' && firstNum && firstNum.includes('.')) {
            // Prevent adding multiple decimal points to the same number
            return;
        }
        firstNum = firstNum === undefined ? digit : firstNum + digit;
        display.textContent = firstNum;
        console.log("first: " + firstNum);
    } else {
        // If an operator is selected, update secondNum
        if (digit === '.' && secondNum && secondNum.includes('.')) {
            // Prevent adding multiple decimal points to the same number
            return;
        }
        secondNum = secondNum === undefined ? digit : secondNum + digit;
        display.textContent = secondNum;
        console.log("second: " + secondNum);
    }
};

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

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
    operator = undefined;
});
backspace.addEventListener('click', () => {
    // Determine which number to backspace based on the operator
    if (operator === undefined || secondNum === undefined) {
        // Backspace from the firstNum
        firstNum = firstNum.slice(0, -1);
        display.textContent = firstNum;
    } else {
        // Backspace from the secondNum
        secondNum = secondNum.slice(0, -1);
        display.textContent = secondNum;
    }
});