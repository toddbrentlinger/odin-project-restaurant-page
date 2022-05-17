import logoTextSign from './img/logo-text-sign.png';
import logoRooster from './img/logo-rooster.png';
import logoTrees from './img/logo-trees.png';
import logoImageSign from './img/logo-image-sign.png';

export default function AnimatedLogoComponent() {
    const _createImgElement = function(src, alt = '', className = '') {
        const element = document.createElement('img');
        element.src = src;
        if (alt) element.alt = alt;
        if (className) element.classList.add(className);
        return element;
    }

    const render = function() {
        const animatedLogoElement = document.createElement('div');
        animatedLogoElement.id = 'animated-logo';

        animatedLogoElement.appendChild(_createImgElement(logoImageSign, '', 'logo-image-sign'));
        animatedLogoElement.appendChild(_createImgElement(logoTrees, '', 'logo-trees'));
        animatedLogoElement.appendChild(_createImgElement(logoRooster, '', 'logo-rooster'));
        animatedLogoElement.appendChild(_createImgElement(logoTextSign, '', 'logo-text-sign'));

        return animatedLogoElement;
    };

    return {render,};
}