import { createElement } from "./utilities.js";
import PizzaBoardImg from './img/Upcycled_Pizza_Peel_alpha_rotated.png';
import './contact.scss';

export default function Contact() {
    let _pizzaBoardContainer = null;

    const _createPizzaBoardElement = function() {
        _pizzaBoardContainer = createElement('div', {id: 'pizza-board-container'});

        //_pizzaBoardContainer.appendChild(createElement('img', {src: PizzaBoardImg, alt: 'Pizza board.'}));

        return _pizzaBoardContainer;
    };

    const _createGoogleMap = function() {
        const mapIframe = createElement('iframe', {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.8274917562953!2d-121.78772128474887!3d36.91838877992433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e1af28a04eebf%3A0xa15c65fe0f81aad6!2sCorralitos%20Pizza!5e0!3m2!1sen!2sus!4v1652926025841!5m2!1sen!2sus",
            width: "600",
            height: "450", 
            style: "border:0;", 
            allowfullscreen: "", 
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
        });

        mapIframe.addEventListener('load', () => {
            _pizzaBoardContainer.classList.add('has-loaded');
        }, false);

        return mapIframe;
    };

    const render = function() {
        const element = document.createElement('main');

        // Location
        element.appendChild(createElement('div', {'class': 'location-container white-text-shadow'},
            createElement('p', {}, 'Our Location'),
            createElement('p', {}, '1061 S. Green Valley Rd. Watsonville CA.')
        ));

        // Phone
        element.appendChild(createElement('p', {'class': 'phone-number white-text-shadow'}, 'Phone: (831) 722-7220'));

        // Pizza Board
        const pizzaBoardContainer = element.appendChild(_createPizzaBoardElement());

        // Google Map
        pizzaBoardContainer.appendChild(_createGoogleMap());

        return element;
    };

    return {render,};
}