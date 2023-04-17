let result = document.getElementById('result');

function updateResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
  let expression = result.value;

  if (expression === '') {
    return;
  }

  if (operator === '=') {
    try {
      result.value = eval(expression);
    } catch (error) {
      result.value = 'Error';
    }
  } else {
    result.value += operator;
  }
}
