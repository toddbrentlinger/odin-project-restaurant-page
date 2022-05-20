import { createElement } from "./utilities.js";
import AnimatedLogoComponent from "./animated-logo.js";
import './home.scss';

export default function Home() {
    const render = function() {
        const element = createElement('main');
        
        // Logo
        element.appendChild(AnimatedLogoComponent().render());

        // Tagline
        element.appendChild(createElement('div', {id: 'tagline'}, 
            createElement('p', {}, 'Gourmet Pizza...'),
            createElement('p', {}, 'We use only the best ingredients: '),
            createElement('p', {}, 'farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.')
        ));

        return element;
    };

    return {render,}
}