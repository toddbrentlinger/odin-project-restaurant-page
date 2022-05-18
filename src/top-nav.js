import { createElement } from "./utilities.js";
import Menu from "./menu.js";
import Home from "./home.js";

export default function TopNav() {
    const _createNavAnchor = function(textContent, href = '') {
        const anchorElement = createElement('a', {'href': href}, createElement('span', {}, textContent));
        anchorElement.addEventListener('click', e => {
            e.preventDefault();
            _handleNavItemClick(textContent.toLowerCase());
        }, false);
        return createElement('div', {'class': 'nav-link-container'}, anchorElement);
    };

    const _clearMain = function() {
        const mainElement = document.querySelector('main');
        while (mainElement.firstChild) {
            mainElement.removeChild(mainElement.firstChild)
        }
    };

    const _handleNavItemClick = function(type) {
        switch(type) {
            case 'home':
                _clearMain();
                document.querySelector('main').replaceWith(Home().render());
                break;
            case 'gallery':
                _clearMain();
                break;
            case 'menu':
                _clearMain();
                document.querySelector('main').replaceWith(Menu().render());
                break;
            case 'contact':
                _clearMain();
                break;
            default:
        }
    };
    
    const render = function() {
        const topNavElement = createElement(
            'nav', 
            {id: 'topnav'},
            _createNavAnchor('Home'),
            _createNavAnchor('Gallery'),
            _createNavAnchor('Menu'),
            _createNavAnchor('Contact'),
        );

        return topNavElement;
    };

    return {render,}
}