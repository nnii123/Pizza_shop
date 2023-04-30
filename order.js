const allItems = document.querySelector(".all__items");

console.log(allItems);

let titles = ["Пеперони", "Мясная", "4 сыра", "Барбекю", "Цыпленок", "Морская", "Гавайская", "Ветчина и сыр", "Домашняя"]
console.log(titles);
console.log(titles.length);

for(let i = 0; i<9; i=i+1) {
let pizzaBox = document.createElement("div");
pizzaBox.classList.add("pizza__box");
allItems.append(pizzaBox);

let imagePizza = document.createElement("img");
imagePizza.classList.add("image__pizza");
imagePizza.setAttribute("src","/style/img/1.png");
pizzaBox.append(imagePizza);

let title = document.createElement("span");
title.classList.add("title");
title.textContent = titles[i];
pizzaBox.append(title);

let price = document.createElement("span");
price.classList.add("price");
price.textContent = "Цена: от 450 р";
pizzaBox.append(price);

let button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "+";
pizzaBox.append(button);
}

