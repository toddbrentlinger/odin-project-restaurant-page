import { createElement } from "./utilities.js";

export default function TopNav() {
    const _createNavAnchor = function(textContent, href = '') {
        return createElement('a', {'href': href}, createElement('span', {}, textContent));
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