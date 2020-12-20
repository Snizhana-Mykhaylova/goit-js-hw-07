const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls > input');
const renderButtonRef = document.querySelector('button[data-action="render"]');
const destroyButtonRef = document.querySelector(
  'button[data-action="destroy"]',
);
const boxesRef = document.querySelector('#boxes');

// рендерит случайный цвет фона
function rgbaRandom() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

// рендерит колеуцию
renderButtonRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = rgbaRandom();
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;

    boxesRef.appendChild(div);
  }
}

//очищает колекцию
destroyButtonRef.addEventListener('click', destroyBoxes);

function destroyBoxes(amount) {
  amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const div = boxesRef.querySelector('div');
    boxesRef.removeChild(div);
  }
  inputRef.value = '';
}
