
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}

function operate(num1,num2,operator){
    num1 = +num1;
    num2 = +num2;
    if (operator==='+') return add(num1,num2);
    if (operator==='-') return subtract(num1,num2);
    if (operator==='*') return multiply(num1,num2);
    if (operator==='/') return divide(num1,num2);
}

let firstNumber,secondNumber,operator;

let display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

digits.forEach(elem=>elem.addEventListener('click',show));

function show(){
    if (display.textContent!=0){
        return display.textContent += this.textContent;
    }
    display.textContent = this.textContent;
}

operators.forEach(elem=>elem.addEventListener('click',operatorPressed));

function operatorPressed(){
    firstNumber = +display.textContent;
    display.textContent = '';
    operator = this.textContent;
    return operator
}

equal.addEventListener('click',result);

function result(){
    secondNumber = +display.textContent;
    let answer = operate(firstNumber,secondNumber,operator);
    display.textContent = answer;
}