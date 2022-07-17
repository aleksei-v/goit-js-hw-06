// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const definerOfColor = document.querySelector(".color");


const isChangeColor = () => {
  const changingColor = getRandomHexColor();

  body.style.backgroundColor = changingColor;
    
  definerOfColor.textContent = `${changingColor}`;
}
  

changeButton.addEventListener("click", isChangeColor);