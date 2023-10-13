let displayValue = '';

function appendCharacter(character) {
  displayValue += character;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculateResult() {
  try {
    const result = evaluateExpression(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function evaluateExpression(expression) {
//   const operators = ['+', '-', '*', '/'];
  const numStack = [];
  const opStack = [];
  let num = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char) || char === '.') {
      num += char;
    } else {
      numStack.push(parseFloat(num));
      num = '';

      while (opStack.length > 0 && hasPrecedence(char, opStack[opStack.length - 1])) {
        const op = opStack.pop();
        const num2 = numStack.pop();
        const num1 = numStack.pop();
        numStack.push(applyOperator(op, num1, num2));
      }

      opStack.push(char);
    }
  }

  numStack.push(parseFloat(num));

  while (opStack.length > 0) {
    const op = opStack.pop();
    const num2 = numStack.pop();
    const num1 = numStack.pop();
    numStack.push(applyOperator(op, num1, num2));
  }

  return numStack[0];
}

function hasPrecedence(op1, op2) {
  if (op2 === '(' || op2 === ')') return false;
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) return false;
  return true;
}

function applyOperator(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) throw new Error('Division by zero');
      return num1 / num2;
    default:
      throw new Error('Unknown operator');
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}
