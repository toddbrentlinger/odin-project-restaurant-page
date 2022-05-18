import { createElement } from "./utilities.js";
import AnimatedLogoComponent from "./animated-logo.js";

export default function Home() {
    const render = function() {
        const element = createElement('main');
        
        // Logo
        element.appendChild(AnimatedLogoComponent().render());

        return element;
    };

    return {render,}
}