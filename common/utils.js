export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundStuff(amount);
}

export function roundStuff(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal (cart, stuff) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const matchingStuff = findById(stuff, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, matchingStuff.price);
        orderTotal += lineTotal;
    }

    return roundStuff(orderTotal);
}