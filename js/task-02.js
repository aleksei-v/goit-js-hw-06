const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul#ingredients.

const listRowPicker = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  return ingredientEl;
});
console.log(elements)
listRowPicker.append(...elements);







// ingredients.forEach(function (el) {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.classList.add("item");
//   ingredientEl.textContent = el;

//   list.appendChild(ingredientEl)
// })


