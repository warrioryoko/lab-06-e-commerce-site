// IMPORT MODULES under test here:
// import { example } from '../example.js';
import renderStuff from '../products/render-stuff.js';

const test = QUnit.test;

test('this should take in a stuff item, and render its properties as an HTML element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const oneFish = {
        id: 'oneFish',
        name: 'One Fish',
        image: '/one-fish.jpg',
        description: 'Comes along with its pair',
        category: 'fish',
        price: 1.00
    };
    const expected = '<li class="fish" title="Comes along with its pair"><h3>One Fish</h3><img src="../assets/one-fish.jpg" alt="One Fish image"><p>$1.00<button value="oneFish">Add</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderStuff(oneFish);
    const actual = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
