// Ürün Bilgileri
const shoppingList = [
    // Ürün Listesi
]
const cardList = [
    { name: "Ürün 1", price: 50, id: 1 },
    { name: "Ürün 2", price: 30, id: 2 },
    { name: "Ürün 3", price: 10, id: 3 },
    { name: "Ürün 4", price: 80, id: 4 },
];
total = 0;


function addCard(task) {
    let eleman = task

    for (card of cardList) {
        if (eleman.id == card.id) {
            shoppingList.push({ name: `${card.name}`, price: `${card.price}`, id: `${card.id}` })
            total += card.price
            ekle()
        }
    }
}

function ekle() {
    let ul = document.getElementById("shoppingArea")
    for (shop of shoppingList) {
        li = `
            <li id = ${shop.id} class="list-group-item d-flex justify-content-between align-items-center">
            ${shop.name} - ${shop.price}TL
            <button class="btn btn-outline-primary" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
            </li>
        `
    }
    let price = document.getElementById("price")
    price.innerHTML = `<p class = "total-price" >Toplam Ücret: ${total}TL</p>`
    ul.insertAdjacentHTML("beforeend", li)
}

function deleteTask(item) {
    let silmeElemanı = item.parentElement;
    silmeElemanı.remove();
    for (card of cardList) {
        if (silmeElemanı.id == card.id) {
            total -= card.price
            price.innerHTML = `<p class = "total-price" >Toplam Ücret: ${total}TL</p>`
        }
    }

    if (total ==  0) {
        price.innerHTML = `<p class = "p-1" >Sepetiniz Boş</p>`
    }
}

