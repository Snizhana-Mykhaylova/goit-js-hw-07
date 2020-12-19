const itemsRef = document.querySelectorAll('li.item');
console.log(`В списке ${itemsRef.length} категории.`);

// itemsRef.forEach(itemRef => {
//   const titleRef = itemRef.querySelector('h2');
//   console.log(titleRef.textContent);

//   const itemListRef = itemRef.querySelectorAll('li');
//   console.log(`Количество элементов: ${itemListRef.length}`);
// });

itemsRef.forEach(itemRef => {
  console.log(itemRef.firstElementChild.textContent);
  console.log(
    `Количество элементов: ${itemRef.lastElementChild.children.length}`,
  );
});
