import { createElement } from "./utilities.js";
import Menu from "./menu.js";
import Home from "./home.js";

export default function TopNav() {
    const _createNavAnchor = function(textContent, href = '') {
        const anchorElement = createElement('a', {'href': href}, createElement('span', {}, textContent));
        anchorElement.addEventListener('click', e => {
            e.preventDefault();
            _handleNavItemClick(e, textContent.toLowerCase());
        }, false);
        return createElement('div', {'class': 'nav-link-container'}, anchorElement);
    };

    const _clearMain = function() {
        const mainElement = document.querySelector('main');
        while (mainElement.firstChild) {
            mainElement.removeChild(mainElement.firstChild)
        }
    };

    const _removeActiveClassFromTabs = function() {
        document.querySelectorAll('#topnav a').forEach(
            tab => tab.classList.remove('active')
        );
    };

    const _handleNavItemClick = function(e, type) {
        switch(type) {
            case 'home':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                document.querySelector('main').replaceWith(Home().render());
                break;
            case 'gallery':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                break;
            case 'menu':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                document.querySelector('main').replaceWith(Menu().render());
                break;
            case 'contact':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                break;
            default:
        }
    };
    
    const render = function() {
        const tabElements = [
            _createNavAnchor('Home'),
            _createNavAnchor('Gallery'),
            _createNavAnchor('Menu'),
            _createNavAnchor('Contact'),
        ];

        const topNavElement = createElement(
            'nav', 
            {id: 'topnav'},
            ...tabElements
        );

        return topNavElement;
    };

    return {render,}
}