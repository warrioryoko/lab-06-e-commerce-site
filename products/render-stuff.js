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
    stuffButton.textContent = 'Add';
    pElement.append(stuffButton);

    liElement.append(pElement);

    return liElement;
}

export default renderStuff;