import renderStuff from '../products/render-stuff.js';
import stuff from '../data/stuff.js';
import cart from '../data/cart.js';
import renderTableRow from '../cart/render-line-item.js';
import { findById } from '../common/utils.js';

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