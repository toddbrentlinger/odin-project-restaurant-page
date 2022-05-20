import './meyer-reset.scss';
import './initial-page-load.scss';

import TopNav from './top-nav.js';
import Home from './home.js';
import Footer from './footer.js';
import { createElement } from './utilities.js';

export default function initialPageLoad() {
    console.log('Initial Page Load');
    
    const contentElement = document.getElementById('content');
    if (!contentElement) return;

    // Header
    //let tempElement = document.createElement('header');
    let tempElement = contentElement.appendChild(createElement('header'));
    // Header - Logo Image
    const imgContainer = createElement('div', {'class': 'logo-container'});
    tempElement.appendChild(imgContainer);
    // Header - Top Nav
    tempElement.appendChild(TopNav().render());

    // Main
    contentElement.appendChild(Home().render());
    // tempElement = document.createElement('main');
    // contentElement.appendChild(tempElement);
    // // Main - Logo
    // tempElement.appendChild(AnimatedLogoComponent().render());
    
    // Footer
    contentElement.appendChild(Footer(2022).render());
    // tempElement = document.createElement('footer');
    // contentElement.appendChild(tempElement);
    // // Footer - Text
    // tempElement.appendChild(createElement('p', {}, 'Gourmet Pizza...'));
    // tempElement.appendChild(createElement('p', {}, 'We use only the best ingredients: farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.'));

}