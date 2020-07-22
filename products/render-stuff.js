import { findById } from '../common/utils.js';

function renderStuff(stuff) {
    const liElement = document.createElement('li');
    liElement.className = stuff.category;
    liElement.title = stuff.description;

    const h3Element = document.createElement('h3');
    h3Element.textContent = stuff.name;
    liElement.append(h3Element);

    const imgElement = document.createElement('img');
    imgElement.src = '../assets' + stuff.image;
    imgElement.alt = stuff.name + ' image';
    liElement.append(imgElement);

    const pElement = document.createElement('p');
    pElement.textContent = `$${stuff.price.toFixed(2)}`;

    const stuffButton = document.createElement('button');
    stuffButton.textContent = 'Add';
    stuffButton.value = stuff.id;
    stuffButton.addEventListener('click', () => {
        const makeEmptyCart = '[]';
        const actualCartInStorage = localStorage.getItem('CART') || makeEmptyCart;
        const cart = JSON.parse(actualCartInStorage);
    
        let stuffInCart = findById(cart, stuff.id);

        //If there isn't a match IN THE CART of the item clicked, add one
        if (!stuffInCart) {
            const cartItem = {
                id: stuff.id,
                quantity: 1
            };

            //cart is an array, until it's serialized a string
            //Put the cartItem into this array
            cart.push(cartItem);
        } else {
            //The cart exists, and we've matched the item that was clicked
            //Add one to the number of that item in the cart
            stuffInCart.quantity++;
        }

        //Make the cart array into a string
        const stringStuffCart = JSON.stringify(cart);
        //setItem blows away everything in localStorage matching the name 'Cart' with what we pass to it
        localStorage.setItem('CART', stringStuffCart);

        alert('Hey, you added 1 ' + stuff.name + ' to your cart.');
        //Sanity check: 
        //1.) We correctly identified what we just clicked
        //2.) We have a cart with all of the items that we should
        //3/) We actually threw the cart into localStorage, where the cart now lives
        console.log(stuffInCart, stringStuffCart, localStorage.getItem('CART'));
    });

    pElement.append(stuffButton);

    liElement.append(pElement);

    return liElement;
}

export default renderStuff;