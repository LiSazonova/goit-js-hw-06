function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const widgetBox = document.querySelector('.widget');
const changeColorBtn = document.querySelector('button.change-color');
const valueColor = document.querySelector('.color');


changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  valueColor.textContent = newColor;
});