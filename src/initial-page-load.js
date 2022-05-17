import AnimatedLogoComponent from './animated-logo.js';
import TopNav from './top-nav.js';
import { createElement } from './utilities.js';
import './initial-page-load.scss';

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
    tempElement = document.createElement('main');
    // Main - Logo
    tempElement.appendChild(AnimatedLogoComponent().render());
    contentElement.appendChild(tempElement);

    // Footer
    tempElement = document.createElement('footer');
    contentElement.appendChild(tempElement);
}