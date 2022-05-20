import logoTextSign from './img/logo-text-sign.png';
import logoRooster from './img/logo-rooster.png';
import logoTrees from './img/logo-trees.png';
import logoImageSign from './img/logo-image-sign.png';
import { createElement } from './utilities.js';
import './animated-logo.scss';

export default function AnimatedLogoComponent() {
    const _createImgElement = function(src, alt = '', className = '') {
        const element = document.createElement('img');
        element.src = src;
        if (alt) element.alt = alt;
        if (className) element.classList.add(className);
        return element;
    }

    const render = function() {
        const animatedLogoElement = createElement('div', {id: 'animated-logo'});

        animatedLogoElement.appendChild(createElement('div', {'class': 'animated-logo-back'}, 
            _createImgElement(logoImageSign, '', 'logo-image-sign'),
            _createImgElement(logoTrees, '', 'logo-trees'),
            _createImgElement(logoRooster, '', 'logo-rooster')
        ));

        animatedLogoElement.appendChild(_createImgElement(logoTextSign, '', 'logo-text-sign'));

        return animatedLogoElement;
    };

    return {render,};
}