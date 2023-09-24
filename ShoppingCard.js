// Ürün Bilgileri
const cardList = [
    {name: "Ürün 1",price: 50,id: 1},
    {name: "Ürün 2",price: 30,id: 2},
    {name: "Ürün 3",price: 10,id: 3},
    {name: "Ürün 4",price: 80,id: 4},
]
let totalP = 0
function addCard(eleman) {
    let shoppingArea = document.getElementById("shoppingArea")
    // Sepeti Üürn Ekleme
    for (card of cardList) {
        if (eleman.id == card.id) {
            li = `
            <li class="list-group-item" id="${card.id}"> ${card.name} - ${card.price}TL</li>
            `
            shoppingArea.insertAdjacentHTML("beforeend", li)
        }
    }
    // fiyat listesi
    for (fee of cardList) {
        if (eleman.id == fee.id) {
            let price = fee.price;
            let ucret = price
            let total = totalP += ucret
            console.log(total)
            document.getElementById("price").innerHTML = `<p class="total-price">Toplam Ücret: ${total}</p>`
        }
    }
}