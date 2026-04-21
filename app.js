const display = document.getElementById('display');
let expression = '';

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return 'Błąd';
  return a / b;
}

function safeEval(expr) {
  try {
    return Function('"use strict"; return (' + expr + ')')();
  } catch {
    return 'Błąd';
  }
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if ((!isNaN(val) && val.trim() !== '') || val === '(' || val === ')') {
      expression += val;
      display.value = expression;
    }

    if (val === '+' || val === '-' || val === '*' || val === '/') {
      expression += val;
      display.value = expression;
    }

    if (val === 'C') {
      expression = '';
      display.value = '0';
    }

    if (val === '=') {
      const result = safeEval(expression);
      display.value = result;
      expression = String(result);
    }
  });
});