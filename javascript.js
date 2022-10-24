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
    aInt = parseInt(a);
    bInt = parseInt(b);
    if (operator === "add") return add(aInt,bInt);
    if (operator === "subtract") return subtract(aInt,bInt);
    if (operator === "multiply") return multiply(aInt,bInt);
    if (operator === "divide") return divide(aInt,bInt);
}

function pressDigit(e) {
    const numbers = document.querySelector(".numbers");
    if (numbers.textContent.length < 11) {
        if (numbers.textContent === "0") {
            numbers.textContent = e.target.textContent;
        } else if (numbers.textContent === "-0") {
            numbers.textContent = "-" + e.target.textContent;
        } else {
            numbers.textContent += e.target.textContent;
        }
    }
}

function pressDot() {
    const numbers = document.querySelector(".numbers");
    if (numbers.textContent.includes('.')) {
        return;
    } else {
        numbers.textContent += '.';
    }
}

function plusOrMinus() {
    const numbers = document.querySelector(".numbers");
    if (numbers.textContent.includes('-')) {
        const arrayNumbers = numbers.textContent.split("");
        const positiveArrayNumbers = arrayNumbers.slice(1);
        const positiveNumbers = positiveArrayNumbers.join("");
        numbers.textContent = positiveNumbers;
    } else {
        numbers.textContent = "-" + numbers.textContent;
    }
}

function pressAllClear () {
    const numbers = document.querySelector(".numbers");
    numbers.textContent = "0";
    a = undefined;
    b = undefined;
    operator = undefined;
    return [a, b, operator];
}

function pressClear() {
    const numbers = document.querySelector(".numbers");
    numbers.textContent = "0";
}

function pressOperator(e) {
    const numbers = document.querySelector(".numbers");
    if (a === undefined) {
        a = numbers.textContent;
        numbers.textContent = "0";
    } else {
        pressEqual();
    }
    operator = e.target.classList[1];
    return [a,b,operator];
}

function pressEqual() {
    const numbers = document.querySelector(".numbers");
    if (a === undefined) {
        return;
    } else if (b === undefined) {
        b = numbers.textContent;
        a = operate(operator,a,b);
        numbers.textContent = a;
    } else {
        a = operate(operator,a,b);
        numbers.textContent = a;
    }
    return [a,b];
}