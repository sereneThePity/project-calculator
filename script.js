
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

function operatre(num1,num2,operator){
    num1 = +num1;
    num2 = +num2;
    if (operator==='+') return add(num1,num2);
    if (operator==='-') return subtract(num1,num2);
    if (operator==='*') return multiply(num1,num2);
    if (operator==='/') return divide(num1,num2);
}

let display = document.querySelector('.display')
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('operator');

digits.forEach(elem=>elem.addEventListener('click',show))

function show(){
    if (display.textContent!=0){
        return display.textContent += this.textContent;
    }
    display.textContent = this.textContent;
}

