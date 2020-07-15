export function readableStuffPrice(price) {
    const readableStuff =  `$${Number(price).toFixed(2)}`;

    return readableStuff;
}

export function renderTableRow(cartItem, stuff) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = stuff.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = readableStuffPrice(stuff.price);

    const totalTd = document.createElement('td');
    const totalPrice = (stuff.price * cartItem.quantity);
    totalTd.textContent = readableStuffPrice(totalPrice);
    totalTd.classList.add('line-item-total');

    tr.append(nameTd);
    tr.append(quantityTd);
    tr.append(priceTd);
    tr.append(totalTd);

    return tr;
}