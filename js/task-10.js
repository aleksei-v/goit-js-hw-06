// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.


// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const isWorkWithBoxes = document.querySelector("#boxes");
const amountEl = document.querySelector("input");
console.log(amountEl)
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonRemove = document.querySelector('#controls button[data-destroy]');


const isCreateBoxes = amount => {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.textContent = `${i} - element`;
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    isWorkWithBoxes.appendChild(divEl);
  }
}
const isRemoveBoxes = () => {
  isWorkWithBoxes.innerHTML = "";
}
buttonCreate.addEventListener("click", () => isCreateBoxes(amountEl.value));
buttonRemove.addEventListener("click", isRemoveBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}