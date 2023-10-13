let display = document.getElementById('display');
let expression = '';

function appendText(text) {
  expression += text;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString(); // Update expression with result
  } catch (error) {
    display.value = 'Error';
    expression = ''; // Clear expression on error
  }
}
