function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


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


const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonRemove = document.querySelector('#controls button[data-destroy]');


const isCreateBoxes = amount => {
  const amountEl = document.querySelector("input");
  amount = amountEl.textContent
  console.log(amount)
}
// console.log(isCreateBoxes(3))
buttonCreate.addEventListener("click", isCreateBoxes)

// function isCreateBoxes(amount) {
//     const box = document.createElement("div") * amount;
//   console.log("Is work?");
//   isWorkWithBoxes.append(box);
// }