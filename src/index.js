//import initialPageLoad from './initial-page-load.js';
import './style.css';

function component() {
    const element = document.createElement('div');

    //element.classList.add('hello');
    element.innerHTML = 'Hello World';

    //element.appendChild(initialPageLoad());

    return element;
}

document.body.appendChild(component());