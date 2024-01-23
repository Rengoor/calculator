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
        add(num1, num2);
    } else if (operator === '-') {
        subtract(num1, num2);
    } else if (operator === '*') {
        multiply(num1, num2);
    } else if (operator === '/') {
        divide(num1, num2);
    }
}


// Buttons that populate the display
let displayValue = document.querySelector('.display');

const handleClick = function (e) {
    displayValue.textContent = e.target.textContent;
};

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});

