'use strict';

const validationInput = document.querySelector('#validation-input');
console.dir(validationInput.dataset.length);

validationInput.addEventListener('change', validationhandler);

function validationhandler(event) {
  Number(validationInput.dataset.length) === event.target.value.length
    ? validationInput.classList.add('valid')
    : validationInput.classList.add('invalid');
}
