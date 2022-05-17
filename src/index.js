import initialPageLoad from './initial-page-load.js';
//import AnimatedLogoComponent from './animated-logo.js';
import './style.scss';

function component() {
    //return AnimatedLogoComponent().render();
    return initialPageLoad();
}

//document.body.appendChild(component());
initialPageLoad();