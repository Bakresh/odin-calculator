let displayNumber = "0";
let a;
let b;
let operator;

const digits = Array.from(document.querySelectorAll(".digit"));
const dot = document.querySelector(".dot");
const plusMinus = document.querySelector(".plus-minus");
const allClear = document.querySelector(".all-clear-button");
const clear = document.querySelector(".clear-button");
const operators = Array.from(document.querySelectorAll(".operator"));
const equal = document.querySelector(".equal");

digits.forEach(digit => digit.addEventListener('click', pressDigit));
dot.addEventListener('click', pressDot);
plusMinus.addEventListener('click', plusOrMinus);
allClear.addEventListener('click', pressAllClear);
clear.addEventListener('click', pressClear);
operators.forEach(operatorButton => operatorButton.addEventListener('click', pressOperator));
equal.addEventListener('click', pressEqual);

function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    aInt = parseFloat(a);
    bInt = parseFloat(b);
    if (operator === "add") return add(aInt,bInt);
    if (operator === "subtract") return subtract(aInt,bInt);
    if (operator === "multiply") return multiply(aInt,bInt);
    if (operator === "divide") return divide(aInt,bInt);
}

function updateDisplay() {
    const numbers = document.querySelector(".numbers");
    numbers.textContent = displayNumber;
    if (displayNumber.length > 11) {
        numbers.textContent = displayNumber.substring(0,12);
    }
}

function pressDigit(e) {
    if (displayNumber.length < 11) {
        if (displayNumber === "0" || displayNumber === 0) {
            displayNumber = e.target.textContent;
        } else if (displayNumber === "-0" || displayNumber === -0) {
            displayNumber = "-" + e.target.textContent;
        } else {
            displayNumber += e.target.textContent;
        }
    }
    updateDisplay();
}

function pressDot() {
    if (displayNumber.includes('.')) {
        return;
    } else {
        displayNumber += '.';
    }
    updateDisplay();
}

function plusOrMinus() {
    if (displayNumber.includes('-')) {
        const arrayNumbers = displayNumber.split("");
        const positiveArrayNumbers = arrayNumbers.slice(1);
        const positiveNumbers = positiveArrayNumbers.join("");
        displayNumber = positiveNumbers;
    } else {
        displayNumber = "-" + displayNumber;
    }
    updateDisplay();
}

function pressAllClear () {
    displayNumber = "0";
    a = undefined;
    b = undefined;
    operator = undefined;
    updateDisplay();
}

function pressClear() {
    displayNumber = "0";
    updateDisplay();
}

function pressOperator(e) {
    if (a === undefined) {
        a = displayNumber;
        displayNumber = "0";
    } else if (b === undefined) {
        pressEqual();
    } else if (b !== undefined && displayNumber === document.querySelector(".numbers").textContent) {
        pressEqual();
    }
    operator = e.target.classList[1];
}

function pressEqual() {
    if (a === undefined) {
        return;
    } else if (b === undefined) {
        b = displayNumber;
        a = operate(operator,a,b);
        displayNumber = a;
    } else if (b !== undefined && displayNumber === document.querySelector(".numbers").textContent) {
        b = displayNumber;
        a = operate(operator,a,b);
        displayNumber = a;
    } else {
        a = operate(operator,a,b);
        displayNumber = a;
    }
    updateDisplay();
    displayNumber = "0";
}