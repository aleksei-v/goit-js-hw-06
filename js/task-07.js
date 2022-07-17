// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const movingInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changingColor = event => textEl.style.fontSize = `${event.currentTarget.value}px`;

movingInput.addEventListener("input", changingColor);
