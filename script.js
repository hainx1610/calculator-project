const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector("[data-previous-operand]");
const currentOperandElement = document.querySelector("[data-current-operand]");

const calcAdd = (a, b) => +a + +b;
const calcSubstract = (a, b) => +a - +b;
const calcMultiply = (a, b) => +a * +b;
const calcDivide = (a, b) => +a / +b;

function operate(operator, a, b) {
    let result;
    if (operator === "+") {
        result = calcAdd(a, b);
    } else if (operator === "-") {
        result = calcSubstract(a, b);
    } else if (operator === "*"){
        result = calcMultiply(a, b);
    } else if (operator === "/") {
        result = calcDivide(a, b);
    };
    return result;
};