const display = document.getElementById('display');
let firstNum = null;
let operator = null;
let shouldReset = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

<<<<<<< HEAD
=======
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 'Błąd';
  return a / b;
}

>>>>>>> feature-mul-div
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (!isNaN(val) && val.trim() !== '') {
      if (display.value === '0' || shouldReset) {
        display.value = val;
        shouldReset = false;
      } else {
        display.value += val;
      }
    }

    if (val === '+') {
      firstNum = parseFloat(display.value);
      operator = '+';
      shouldReset = true;
    }

    if (val === '-') {
      firstNum = parseFloat(display.value);
      operator = '-';
      shouldReset = true;
    }

<<<<<<< HEAD
=======
    if (val === '*') {
      firstNum = parseFloat(display.value);
      operator = '*';
      shouldReset = true;
    }

    if (val === '/') {
      firstNum = parseFloat(display.value);
      operator = '/';
      shouldReset = true;
    }

>>>>>>> feature-mul-div
    if (val === 'C') {
      display.value = '0';
      firstNum = null;
      operator = null;
    }

    if (val === '=') {
      if (operator === '+') {
        display.value = add(firstNum, parseFloat(display.value));
        operator = null;
        shouldReset = true;
      }
      if (operator === '-') {
        display.value = subtract(firstNum, parseFloat(display.value));
        operator = null;
        shouldReset = true;
      }
<<<<<<< HEAD
=======
      if (operator === '*') {
        display.value = multiply(firstNum, parseFloat(display.value));
        operator = null;
        shouldReset = true;
      }
      if (operator === '/') {
        display.value = divide(firstNum, parseFloat(display.value));
        operator = null;
        shouldReset = true;
      }
>>>>>>> feature-mul-div
    }
  });
});