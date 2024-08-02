
// document.addEventListener('DOMcontentLoaded', () => {
//   const display = document.getElementById('display');
//   const buttons = document.querySelectorAll('#appendNumber td');

//   let memory = 0;
//   let currentInput = "";

//   buttons.forEach(button => {
//     button.addEventListener('click', ())
//   })
// })




let display = document.getElementById('display');
let memory = 0;
let currentInput = '0';
let previousInput = '';
let operator = null;

function updateDisplay(value) {
    display.innerText = value;
}

function clear() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay(currentInput);
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay(currentInput);
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function setOperator(newOperator) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operator = newOperator;
}

function calculate() {
    let result;
    let num1 = parseFloat(previousInput.replace(',', '.'));
    let num2 = parseFloat(currentInput.replace(',', '.'));
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = (num1 / 100) * num2;
            break;
        default:
            return;
    }
    currentInput = result.toString().replace('.', ',');
    operator = null;
    previousInput = '';
    updateDisplay(currentInput);
}

function addDecimal() {
    if (!currentInput.includes(',')) {
        currentInput += ',';
    }
    updateDisplay(currentInput);
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    memory += parseFloat(currentInput.replace(',', '.'));
}

function memorySubtract() {
    memory -= parseFloat(currentInput.replace(',', '.'));
}

function memoryRecall() {
    currentInput = memory.toString().replace('.', ',');
    updateDisplay(currentInput);
}

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerText));
});

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('percent').addEventListener('click', () => setOperator('%'));
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('decimal').addEventListener('click', addDecimal);
document.getElementById('mc').addEventListener('click', memoryClear);
document.getElementById('mplus').addEventListener('click', memoryAdd);
document.getElementById('mminus').addEventListener('click', memorySubtract);
document.getElementById('mr').addEventListener('click', memoryRecall);
</script>
</body>