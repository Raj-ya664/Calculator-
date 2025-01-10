let historyDisplay = document.getElementById('history');
let resultDisplay = document.getElementById('result');
let currentInput = '';

function clearDisplay() {
  currentInput = '';
  historyDisplay.innerText = '';
  resultDisplay.innerText = '0';
}

function appendOperator(value) {
  currentInput += value;
  historyDisplay.innerText = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput.replace('×', '*').replace('÷', '/'));
    resultDisplay.innerText = result;
  } catch {
    resultDisplay.innerText = 'Error';
  }
}