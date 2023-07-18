
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
    if (num1 != 0 && num2 === 0) return Error('we dont do infinities');
    if (num1 ===0 && num2 === 0) return 0;
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

let firstNumber,secondNumber,operator,answer;

let display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear')

digits.forEach(elem=>elem.addEventListener('click',show));

function show(){
    if (display.textContent!=0 && display.textContent != answer){
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
    answer = operate(firstNumber,secondNumber,operator);
    display.textContent = answer;
    firstNumber = 0;
    secondNumber =0;
}

clear.addEventListener('click',reset);

function reset(){
    display.textContent = '0';
    firstNumber = 0;
    secondNumber = 0;
    answer = 0;
}