import stuff from '../data/stuff.js';
import renderStuff from './render-stuff.js';

const stuffList = document.getElementById('stuff');

for (let i = 0; i < stuff.length; i++) {
    const myStuff = stuff[i];
    const element = renderStuff(myStuff);
    stuffList.append(element);
}