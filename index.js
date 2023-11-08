let bagItems = [];
onLoad();
itemsDisplay();
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    bagDisplay();
}
function bagDisplay() {
    let a = document.querySelector(".bag-item-count");
    if (bagItems.length > 0) {
        a.style.visibility = 'visible';
        a.innerHTML = bagItems.length;
    } else {
        a.style.visibility = 'hidden';
    }
}
function bagCount(itemid) {
    bagItems.push(itemid);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    bagDisplay();
}

function itemsDisplay() {
    let container = document.querySelector(".items-container");
    let innerhtml = ``;
    let item = items.forEach((item) => {
        innerhtml += `
    <div class="item-container">
    <div class="image-container">
        <img src=${item.image} class="item-image">
        <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
    </div>
    <div class="company-name">
        <h4><b>${item.company}</b></h4>
    </div>
    <div class="item-name">${item.item_name}</div>
    <div class="rate">
        <div class="price"> <b>Rs ${item.current_price}</b></div>
        <div class="original-price"><s>Rs ${item.original_price}</s></div>
        <div class="discount">${item.discount_percentage} % off</div>
    </div>
    <button class="add-item" onclick = "bagCount(${item.id})">Add to cart</button>
    </div>`
    })

    container.innerHTML = innerhtml;
}