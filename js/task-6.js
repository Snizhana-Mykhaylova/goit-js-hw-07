const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('change', validationhandler);

function validationhandler(event) {
  const validationInputLength = Number(validationInput.dataset.length);
  validationInputLength === event.target.value.length
    ? validationInput.classList.add('valid')
    : validationInput.classList.add('invalid');
}
