// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
//  или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

counterValue.textContent = 0;
let total = 0;

const decrementHandleClick = () => {
    total -= 1
    counterValue.textContent = total;
};

decrementButton.addEventListener("click", decrementHandleClick);

const incrementHandleClick = () => {
    total += 1
    counterValue.textContent = total;
};

incrementButton.addEventListener("click", incrementHandleClick);