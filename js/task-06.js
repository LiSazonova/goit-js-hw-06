const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
  if (inputEl.value.length === Number(inputLength)) {
    if (!inputEl.classList.contains('valid')) {
      inputEl.classList.add('valid');
    }
    inputEl.classList.remove('invalid');
  } else {
    if (!inputEl.classList.contains('invalid')) {
      inputEl.classList.add('invalid');
    }
    inputEl.classList.remove('valid');
  }
});