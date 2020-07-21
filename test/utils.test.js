import renderStuff from '../products/render-stuff.js';
import stuff from '../data/stuff.js';
import cart from '../data/cart.js';
import renderTableRow from '../cart/render-line-item.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Utils');

test('This should match a stuff item by its id', assert => {
    //Arrange
    const stuffArray = stuff;
    const stuffId = 'thingTwo';

    const expected = 'Thing Two';

    //Act
    const findThing = findById(stuffArray, stuffId);

    //Expect
    assert.equal(findThing.name, expected);
});

test('This should calculate the total of a line item', assert => {
    //Arrange
    const quantity = 10;
    const price = 150;

    const expected = 1500;

    //Act
    const total = calcLineItem(quantity, price);

    //Expect
    assert.equal(total, expected);
});

test('This should calculate the order total', (assert) => {
    //Arrange
    const expected = 52;

    //Act
    const orderTotal = calcOrderTotal(cart, stuff);
    
    //Expect
    assert.equal(orderTotal, expected);
});