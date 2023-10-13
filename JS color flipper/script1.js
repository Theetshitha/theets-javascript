var hexInput = document.createElement('input');
hexInput.setAttribute('type', 'text');
hexInput.setAttribute('id', 'hexCode');
hexInput.setAttribute('readonly', 'true');

const colorButton = document.createElement('button');
colorButton.setAttribute('id', 'colorButton');
colorButton.innerText = 'Change Color';

document.body.appendChild(hexInput);
document.body.appendChild(colorButton);

let seed = 123456789;

function customRandom() {
  const max = 16; // 0-F in hexadecimal
  const a = 1103515245;
  const c = 12345;
  seed = (a * seed + c) % max;
  return seed;
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomIndex = customRandom();
    color += letters[randomIndex % letters.length];
  }
  return color;
}

function changeColor() {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
  hexInput.value = randomColor;
}

colorButton.addEventListener('click', changeColor);
