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
    }
  });
});