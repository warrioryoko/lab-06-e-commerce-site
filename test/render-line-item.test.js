import stuff from '../data/stuff.js';
import { findById } from '../common/utils.js';
import renderTableRow from '../cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Table Rows');

test('This should render a stuff item', assert => {
    //Arrange
    const rowItem = {
        id: 'blueFish',
        quantity: 5
    };

    const findStuff = findById(stuff, rowItem.id);

    const expected = '<tr><td class="align-left">Blue Fish</td><td>5</td><td>$8.00</td><td class="line-item-total">$40.00</td></tr>';

    //Act
    const domOutput = renderTableRow(rowItem, findStuff);
    const htmlOutput = domOutput.outerHTML;

    //Expect
    assert.equal(htmlOutput, expected);
});