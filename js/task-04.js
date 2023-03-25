let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueELem = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueELem.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueELem.textContent = counterValue;
});

valueELem.textContent = counterValue;

