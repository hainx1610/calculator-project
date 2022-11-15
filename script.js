const calcAdd = (a, b) => a + b;
const calcSubstract = (a, b) => a - b;
const calcMultiply = (a, b) => a * b;
const calcDivide = (a, b) => a / b;

function operate() {
    let result;
    const a = +previousOperand;
    const b = +currentOperand;
    if (isNaN(a) || isNaN(b)) return; // stop function if a or b is an empty string
    if (operation === "+") {
        result = calcAdd(a, b);
    } else if (operation === "-") {
        result = calcSubstract(a, b);
    } else if (operation === "×" || operation === "*"){
        result = calcMultiply(a, b);
    } else if (operation === "÷" || operation === "/") {
        result = calcDivide(a, b);
    } else return;
    clear();
    currentOperand = result;
};

function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = "";
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return; // can't add another "."
    currentOperand += number;
}

function chooseOperation(op) {
    if (currentOperand === "") return // not execute function if current is empty
    if (previousOperand !== "") { // calculate if there is a value in previous
        operate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
}

function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    previousOperandElement.textContent = previousOperand + " " + operation;
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector("[data-previous-operand]");
const currentOperandElement = document.querySelector("[data-current-operand]");

let currentOperand;
let previousOperand;
let operation;

for (const button of numberButtons) {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
        updateDisplay();
    })
}

for (const button of operationButtons) {
    button.addEventListener("click", () => {
        chooseOperation(button.textContent);
        updateDisplay();
    })
}

equalsButton.addEventListener("click", () => {
    operate();
    updateDisplay();
})

allClearButton.addEventListener("click", () => {
    clear();
    updateDisplay();
})

deleteButton.addEventListener("click", () => {
    deleteNumber();
    updateDisplay();
})

document.addEventListener("keydown", e => {
    if(!(isNaN(e.key))) {
        appendNumber(e.key);
        updateDisplay();
    } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
        chooseOperation(e.key);
        updateDisplay();
    } else if (e.key == "Enter") {
        operate();
        updateDisplay();
    } else if (e.key == "Backspace") {
        deleteNumber();
        updateDisplay();
    }
});
    

clear();

