const hexCodeInput = document.createElement('input');
hexCodeInput.setAttribute('type', 'text');
hexCodeInput.setAttribute('id', 'hexCode');
hexCodeInput.setAttribute('readonly', 'true');

const colorButton = document.createElement('button');
colorButton.setAttribute('id', 'colorButton');
colorButton.innerText = 'Change Color';

document.body.appendChild(hexCodeInput);
document.body.appendChild(colorButton);

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
  hexCodeInput.value = randomColor;
};

colorButton.addEventListener('click', changeColor);
