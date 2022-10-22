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