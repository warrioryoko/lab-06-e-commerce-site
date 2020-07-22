import stuff from '../data/stuff.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderTableRow from '../cart/render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const orderButton = document.getElementById('order-button');

const makeEmptyCart = '[]';
const actualCartInStorage = localStorage.getItem('CART') || makeEmptyCart;
//Changed cart from a static data file, to the localstorage cart we pull or create here
//Keeping naming consistent, this allows the loop to render items like before
const cart = JSON.parse(actualCartInStorage);

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];

    const matchingStuff = findById(stuff, cartItem.id);

    const dom = renderTableRow(cartItem, matchingStuff);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, stuff);
orderTotalCell.textContent = orderTotal;

//Place order button
if (cart.length === 0) {
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');

        alert('You got STUFF:\n' + JSON.stringify(cart, true, 2));
        // Play around with this...
        window.location = '../';
    });

}