import cart from '../data/cart.js';
import stuff from '../data/stuff.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderTableRow from '../cart/render-line-item.js';

console.log(cart);
console.log(stuff);
const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];

    const matchingStuff = findById(stuff, cartItem.id);

    const dom = renderTableRow(cartItem, matchingStuff);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, stuff);
orderTotalCell.textContent = orderTotal;