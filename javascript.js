const digits = Array.from(document.querySelectorAll(".digit"));
digits.forEach(digit => digit.addEventListener('click', pressDigit));

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
    if (numbers.textContent == 0) {
        numbers.textContent = e.target.textContent;
    } else {
        numbers.textContent += e.target.textContent;
    }
}