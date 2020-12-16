'use strict';

const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', decrementhandler);
buttonIncrementRef.addEventListener('click', incrementhandler);

function decrementhandler() {
  let number = Number(valueRef.textContent);
  number -= 1;
  valueRef.textContent = number;
}

function incrementhandler() {
  let number = Number(valueRef.textContent);
  number += 1;
  valueRef.textContent = number;
}
