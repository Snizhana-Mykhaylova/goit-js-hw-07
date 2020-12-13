'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  ingredientsRef.append(itemRef);
});
