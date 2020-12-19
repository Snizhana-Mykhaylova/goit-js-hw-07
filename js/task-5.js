const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  event.target.value = event.target.value.trim();
  nameOutput.textContent = event.target.value;

  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'незнакомец';
  }
});
