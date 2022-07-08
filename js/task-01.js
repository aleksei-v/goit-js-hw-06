const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);


categoriesEl.forEach(function (el, index) {
    const titleCategory = document.querySelectorAll("h2");
    const languagesAmount = el.querySelectorAll("li");
    console.log("Category:", titleCategory[index].textContent);
    console.log("Elements:", languagesAmount.length)
})

