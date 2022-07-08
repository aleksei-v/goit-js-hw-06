// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
//     и количество элементов в категории(всех вложенных в него < li >).

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);


categoriesEl.forEach(function (el, index) {
    const titleCategory = document.querySelectorAll("h2");
    const languagesAmount = el.querySelectorAll("li");
    console.log("Category:", titleCategory[index].textContent);
    console.log("Elements:", languagesAmount.length)
})

