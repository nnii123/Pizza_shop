const allItems = document.querySelector(".all__items");

console.log(allItems);

let titles = ["Пеперони", "Мясная", "4 сыра", "Барбекю", "Цыпленок", "Морская", "Гавайская", "Ветчина и сыр", "Домашняя"]
console.log(titles);
/*console.log(titles.length);*/

let images = ["1.png", "2.png", "3.png","1.png", "2.png", "3.png","1.png", "2.png", "3.png"]

let prices = [450, 550, 760, 800, 360, 378, 845, 555, 777]

for(let i = 0; i<titles.length; i=i+1) {
let pizzaBox = document.createElement("div");
pizzaBox.classList.add("pizza__box");
allItems.append(pizzaBox);

let imagePizza = document.createElement("img");
imagePizza.classList.add("image__pizza");
imagePizza.setAttribute("src",`/style/img/${images[i]}`);
pizzaBox.append(imagePizza);

let title = document.createElement("span");
title.classList.add("title");
title.textContent = titles[i];
pizzaBox.append(title);

let price = document.createElement("span");
price.classList.add("price");
price.textContent = `Цена: от ${prices[i]} р`;
pizzaBox.append(price);

let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("plus");
button.textContent = "+";
pizzaBox.append(button);
}

let buttonPlus = document.querySelectorAll(".plus");
let basket = []
buttonPlus.forEach(plus => {
    /*console.log(plus);*/
    plus.addEventListener("click", function(){
        let card = plus.closest(".pizza__box"); /*.closest("селектор элемента") ищет первого родителя с данным селектором */
        /*console.log(card);*/
        let cardImage = card.querySelector(".image__pizza").src;
        console.log(cardImage);
        let cardName = card.querySelector(".title").textContent;
        console.log(cardName);
        let cardPrice = card.querySelector(".price").textContent.match(/\d+/);
        let priceNumber = parseInt(cardPrice);
        console.log(priceNumber);
        let goods = 
            {
                0:cardImage,
                1:cardName,
                2:priceNumber
            };
            basket.push(goods); /* метод добавления объекта в массив*/
        console.log(basket);
        let basketStroka = JSON.stringify(basket);
        localStorage.setItem("corzina",basketStroka);
    })
})