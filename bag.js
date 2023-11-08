

function func() {
    let Mrp = 0;
    let dis = 0;
    let total = 99;
    let a = document.querySelector('.left-part');
    let count = 0;
    let innerhtml = '';
    function onLoad1() {
        if (bagItems.length == 0) {
            a.innerHTML = '';
            total = 0;
        }
        bagItems.forEach(itemid => {
            items.forEach(element => {
                if (element.id == itemid) {
                    count++;
                    Mrp = Mrp + parseInt(element.original_price);
                    dis += (parseInt(element.original_price) * parseInt(element.discount_percentage)) / 100;
                    total += parseInt(element.current_price);
                    innerhtml +=
                        `<div class="item">
                        <div class="img">
                            <img src="${element.image}" alt="" class="image">
                        </div>
                        <div class="details">
                            <div class="company-name">${element.company}</div>
                            <div class="item-name">${element.item_name}</div>
                            <div class="rate">
                                <div class="price"> <b>Rs ${element.current_price}</b></div>
                                
                                <div class="original-price"><s>Rs ${element.original_price}</s></div>
                                <div class="discount">${element.discount_percentage} % off</div>
                            </div>
                            <div class="del-date">Delivered on <B>${element.delivery_date}</B></div>
    
                        </div>
                        <button class="cross" onclick="deleteItem(${element.id})">X</button>
                    </div>`
                    a.innerHTML = innerhtml;
                }
            })

        })
    }
    function onLoad2() {
        document.querySelector('.right-part').innerHTML = `
        <p class="pricedetails">Price details (${count} items)</p>
                    <div class="totalMrp">
                        <p>Total MRP</p>
                        <p class="price">Rs ${Mrp}</p>
                    </div>
                    <div class="discountOnMrp">
                        <p>discount on mrp</p>
                        <p class="discount">-Rs ${dis}</p>
                    </div>
                    <div class="con">
                        <p>Convienience fee</p>
                        <p class="c-fee">Rs 99</p>
                    </div>
                    <hr>
                    <div class="totalAmount">
                        <p>Total Amount</p>
                        <p class="amount">Rs ${total}</p>
                    </div>
                    <div class="place-order">
                        <button class="place-order-button">Place Order</button>
                    </div>`
    }
    onLoad1();
    onLoad2();
    bagDisplay();
}

func();
function deleteItem(num) {
    bagItems = bagItems.filter(bagItemId => bagItemId != num);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    func();
}


