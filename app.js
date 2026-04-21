const display = document.getElementById('display');
const onpDisplay = document.getElementById('onp-display');
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

function toONP(expr) {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const output = [];
  const stack = [];
  const tokens = expr.match(/\d+\.?\d*|[+\-*/()]/g);
  if (!tokens) return '';

  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if ('+-*/'.includes(token)) {
      while (
        stack.length &&
        stack[stack.length - 1] !== '(' &&
        precedence[stack[stack.length - 1]] >= precedence[token]
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      stack.pop();
    }
  }

  while (stack.length) output.push(stack.pop());
  return output.join(' ');
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if ((!isNaN(val) && val.trim() !== '') || val === '(' || val === ')') {
      expression += val;
      display.value = expression;
      onpDisplay.textContent = toONP(expression) || '-';
    }

    if (val === '+' || val === '-' || val === '*' || val === '/') {
      expression += val;
      display.value = expression;
      onpDisplay.textContent = toONP(expression) || '-';
    }

    if (val === 'C') {
      expression = '';
      display.value = '0';
      onpDisplay.textContent = '-';
    }

    if (val === '=') {
      const result = safeEval(expression);
      display.value = result;
      expression = String(result);
      onpDisplay.textContent = '-';
    }
  });
});