const inputVal = document.querySelector('#validation-input');
const inputLength = inputVal.dataset.length;

inputVal.addEventListener("blur", (event) => {
  if (inputVal.value.length === Number(inputLength)) {
    if (!inputVal.classList.contains('valid')) {
      inputVal.classList.add('valid');
    }
    inputVal.classList.remove('invalid');
  } else {
    if (!inputVal.classList.contains('invalid')) {
      inputVal.classList.add('invalid');
    }
    inputVal.classList.remove('valid');
  }
});