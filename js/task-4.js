const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', () => {
  let number = Number(valueRef.textContent);
  number -= 1;
  valueRef.textContent = number;
});

buttonIncrementRef.addEventListener('click', () => {
  let number = Number(valueRef.textContent);
  number += 1;
  valueRef.textContent = number;
});
