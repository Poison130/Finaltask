let money = 100;
let totalSpent = 0;
let purchases = {};

const items = [
    { name: "Новый друг", price: 0, img: "pictures/negrik.jpg" },
    { name: "Орешки Хруст Nut", price: 1, img: "pictures/Орешки с креветкой .webp" },
    { name: "Напиток Dubl-Bubl", price: 2, img: "pictures/dubl bubl.jpg" },
    { name: "Майонезик", price: 3, img: "pictures/mayonez_makheev_provansal_50_5_380_g.jpg" },
    { name: "Big Tasty", price: 5, img: "pictures/big tasty.jpeg" },
    { name: "Shadow Fiend Трусы", price: 10, img: "pictures/shadow fiend трусы.jpg" },
    { name: "Под Charon Baby", price: 15, img: "pictures/Charon-Baby-Kit-7.jpg" },
    { name: "Игрушка BloonsTD6", price: 20, img: "pictures/BloonsTD6Toy.avif" },
    { name: "Майонезная телка", price: 30, img:"pictures/Mayoneznaya.jpg" },
    { name: "Ремень для Apple Watch", price: 50, img: "pictures/Apple Watch strap.jpg" },
    { name: "Куртка Colins Ultra", price: 70, img: "pictures/Colins jacket.jpg" },
    { name: "Стилус Apple Pencil", price: 100, img: "pictures/apple pencil.webp" },
    { name: "Яндекс Станция Алиса", price: 120, img: "pictures/yandex station.jpg" },
    { name: "Обувь Moon Boots", price: 150, img: "pictures/Moon boot.avif" },
    { name: "Часы Apple Watch", price: 200, img: "pictures/Apple watch.png" },
    { name: "Наушники AirPods", price: 250, img: "pictures/airpods.jpeg" },
    { name: "Fl Studio Producer Pack", price: 350, img: "pictures/FlStudio.jpg" },
    { name: "PlayStation 5", price: 650, img: "pictures/playstation 5.webp" },
    { name: "Смартфон iPhone", price: 800, img: "pictures/iphone.jpg" },
    { name: "Ноутбук MacBook", price: 1200, img: "pictures/macbook.jpg" },
    { name: "Yamaha CLP875B", price: 3000, img: "pictures/yamaha-piano.jpg" },
    { name: "Apple Vision Pro", price: 5000, img: "pictures/Apple Vision.jpg" },
    { name: "Микрофон Soyuz", price: 10000, img: "pictures/Soyuz.jpg" },
    { name: "Рюкзак Спанч Боб Gold", price: 20000, img: "pictures/PidarasBackpack.jpg" },
    { name: "Золотой туалет Sokolov", price: 30000, img: "pictures/золотой-унитаз.webp" },
    { name: "Ford Mustang", price: 50000, img: "pictures/Ford Mustang.jpg" },
    { name: "214 Автобус", price: 100000, img: "pictures/214 bus.jpg" },
    { name: "ItHub", price: 250000, img: "pictures/Ithub.png" },
    { name: "Burger King", price: 500000, img: "pictures/burger-king.jpg" },
    { name: "Автограф Артёма Мак", price: 1000000, img: "pictures/Artem Maksutov.png" },
    { name: "Фит с Baby Melo", price: 2500000, img: "pictures/babymelo.webp" },
    { name: "Дом Tony Starka", price: 5000000, img: "pictures/tony stark house.jpg" },
    { name: "Орешник", price: 10000000, img: "pictures/Орешник.jpg" },

];

// Функция для форматирования баланса
function formatMoney(amount) {
    if (amount >= 1_000_000_000) {
        return `$${(amount / 1_000_000_000).toFixed(1)}b`;
    } else if (amount >= 1_000_000) {
        return `$${amount.toLocaleString()}`;  // Показываем как обычное число с запятой для миллионов
    }
    return `$${amount.toLocaleString()}`;
}

function buyItem(itemName, itemPrice, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value) || 1;
    let totalCost = itemPrice * quantity;

    if (money >= totalCost) {
        money -= totalCost;
        totalSpent += totalCost;

        if (!purchases[itemName]) purchases[itemName] = { count: 0, total: 0 };
        purchases[itemName].count += quantity;
        purchases[itemName].total += totalCost;

        animateBalance(totalCost, "subtract");
        updateUI();
    }
}

function sellItem(itemName, itemPrice, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value) || 1;

    if (purchases[itemName] && purchases[itemName].count >= quantity) {
        money += itemPrice * quantity;
        totalSpent -= itemPrice * quantity;
        purchases[itemName].count -= quantity;
        purchases[itemName].total -= itemPrice * quantity;

        if (purchases[itemName].count === 0) delete purchases[itemName];

        animateBalance(itemPrice * quantity, "add");
        updateUI();
    }
}

function updateUI() {
    document.getElementById('money').textContent = formatMoney(money);
    document.getElementById('total').textContent = formatMoney(totalSpent);

    let itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = "";

    items.forEach(item => {
        let itemId = `count-${item.name.replace(/\s+/g, "-")}`;
        let itemCount = purchases[item.name] ? purchases[item.name].count : 0;
        let sellButtonClass = itemCount > 0 ? "sell active" : "sell";

        itemsContainer.innerHTML += `
            <div class="item">
                <h3>${item.name}</h3>
                <p class="price">${formatMoney(item.price)}</p>
                <img src="${item.img}" alt="${item.name}">
                <div class="buttons">
                    <button class="${sellButtonClass}" onclick="sellItem('${item.name}', ${item.price}, '${itemId}')">Sell</button>
                    <input id="${itemId}" type="number" min="1" value="1" class="item-quantity">
                    <button class="buy" onclick="buyItem('${item.name}', ${item.price}, '${itemId}')">Buy</button>
                </div>
            </div>
        `;
    });

    let receiptList = document.getElementById('receipt-list');
    receiptList.innerHTML = '';

    for (let item in purchases) {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${item} x${purchases[item].count}</span>
            <span class="price">${formatMoney(purchases[item].total)}</span>
        `;
        receiptList.appendChild(li);
    }

    document.querySelector('.total span.price').textContent = formatMoney(totalSpent);
}

// Запуск
document.addEventListener("DOMContentLoaded", updateUI);

let loanTaken = false;

document.getElementById("bank-button").addEventListener("click", function() {
    document.getElementById("bank-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("bank-modal").style.display = "none";
});

document.getElementById("take-loan").addEventListener("click", function() {
    if (!loanTaken) {
        money += 10_000_000;
        updateUI();
        loanTaken = true;
        document.getElementById("take-loan").disabled = true;
        document.getElementById("bank-button").disabled = true;
        document.getElementById("bank-button").style.backgroundColor = "gray";
    }
});

document.getElementById("take-loan").addEventListener("click", function() {
    if (!loanTaken) {
        money += 10_000_000;
        updateUI();
        loanTaken = true;
        document.getElementById("take-loan").disabled = true;
        document.getElementById("bank-button").disabled = true;
        document.getElementById("bank-button").style.backgroundColor = "gray";
        
        // Закрываем окно кредита
        document.getElementById("bank-modal").style.display = "none";
    }
});

function buyItem(itemName, itemPrice, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value) || 1;
    let totalCost = itemPrice * quantity;

    if (money >= totalCost) {
        // Проводим покупку, если достаточно средств
        money -= totalCost;
        totalSpent += totalCost;

        if (!purchases[itemName]) purchases[itemName] = { count: 0, total: 0 };
        purchases[itemName].count += quantity;
        purchases[itemName].total += totalCost;

        animateBalance(totalCost, "subtract"); // Анимация при успешной покупке
        updateUI();
    } else {
        // Анимация при недостаточности средств
        animateBalance(totalCost, "error");
    }
}

function animateBalance(amount, action) {
    let moneyElement = document.getElementById("money");
    moneyElement.classList.add("shake");

    let start = money - amount;
    let end = money;
    let duration = 50;
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = (currentTime - startTime) / duration;
        if (progress > 1) progress = 1;

        let currentAmount = Math.floor(start + progress * (end - start));
        if (currentAmount < 0) currentAmount = 0; // Не уходим в минус

        moneyElement.textContent = formatMoney(currentAmount);

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            moneyElement.classList.remove("shake");
        }
    }

    if (action === "error") {
        // Когда недостаточно средств, делаем анимацию красным
        moneyElement.style.color = "red";
        setTimeout(() => moneyElement.style.color = "", 200);
    } else {
        // При покупке и продаже — зелёный цвет
        moneyElement.style.color = action === "subtract" ? "red" : "green";
        setTimeout(() => moneyElement.style.color = "", 200);
    }

    requestAnimationFrame(step);
}

// Функция для активации/деактивации кнопки "Продать все"
function updateSellAllButton() {
    let sellAllButton = document.getElementById("sell-all-button");

    // Если есть хотя бы один товар в корзине, активируем кнопку
    if (Object.keys(purchases).length > 0) {
        sellAllButton.disabled = false;
        sellAllButton.style.backgroundColor = "#e74c3c"; // Кнопка становится красной, когда доступна
    } else {
        sellAllButton.disabled = true;
        sellAllButton.style.backgroundColor = "#555"; // Кнопка неактивна
    }
}

// Обработчик для кнопки "Продать все"
document.getElementById("sell-all-button").addEventListener("click", function() {
    let totalSaleAmount = 0;

    for (let item in purchases) {
        if (purchases.hasOwnProperty(item)) {
            let itemPrice = items.find(i => i.name === item).price;
            let itemCount = purchases[item].count;
            let totalSale = itemPrice * itemCount;

            // Добавляем деньги за проданные товары
            totalSaleAmount += totalSale;

            // Очищаем покупки
            purchases[item].count = 0;
            purchases[item].total = 0;

            // Удаляем товар, если он больше не куплен
            if (purchases[item].count === 0) {
                delete purchases[item];
            }
        }
    }

    // Обновляем баланс после продажи всех товаров
    money += totalSaleAmount;
    totalSpent -= totalSaleAmount;

    // Обновляем UI после продажи всех товаров
    updateUI();

    // Обновляем состояние кнопки "Продать все"
    updateSellAllButton();
});

// Функция для продажи товара
function sellItem(itemName, itemPrice, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value) || 1;

    if (purchases[itemName] && purchases[itemName].count >= quantity) {
        money += itemPrice * quantity;
        totalSpent -= itemPrice * quantity;
        purchases[itemName].count -= quantity;
        purchases[itemName].total -= itemPrice * quantity;

        if (purchases[itemName].count === 0) delete purchases[itemName];

        animateBalance(itemPrice * quantity, "add");
        updateUI();

        // Обновляем состояние кнопки "Продать все"
        updateSellAllButton();
    }
}

// Функция для покупки товара
function buyItem(itemName, itemPrice, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value) || 1;
    let totalCost = itemPrice * quantity;

    if (money >= totalCost) {
        // Проводим покупку, если достаточно средств
        money -= totalCost;
        totalSpent += totalCost;

        if (!purchases[itemName]) purchases[itemName] = { count: 0, total: 0 };
        purchases[itemName].count += quantity;
        purchases[itemName].total += totalCost;

        animateBalance(totalCost, "subtract"); // Анимация при успешной покупке
        updateUI();

        // Обновляем состояние кнопки "Продать все"
        updateSellAllButton();
    } else {
        // Анимация при недостаточности средств
        animateBalance(totalCost, "error");
    }
}

// Обработчик ссылки выхода
document.getElementById("exit-link").addEventListener("click", function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке
    window.location.href = "/hub/index.html"; // Замените на нужный URL
});