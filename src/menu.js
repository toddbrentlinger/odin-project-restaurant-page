import menuData from './data/menu.json';
import { createElement } from './utilities.js';
import './menu.scss';

export default function Menu() {
    const _createPizzaElement = function(pizzaObj, number) {
        const pizzaElement = createElement('div', {'class': 'pizza-item'});

        // Number
        pizzaElement.appendChild(
            createElement('div', {'class': 'pizza-item-number'}, number)
        );

        // Name
        pizzaElement.appendChild(
            createElement('h2', {'class': 'pizza-item-name'}, pizzaObj.name)
        );

        // Prices
        pizzaElement.appendChild(
            createElement('div', {'class': 'pizza-item-prices'}, "Prices")
        );

        // Ingredients
        pizzaElement.appendChild(
            createElement('div', {'class': 'pizza-item-ingredients'}, pizzaObj.ingredients)
        );

        // Prices

        return pizzaElement;
    };

    const _createOwnPizzaIngredientElement = function(ingredientType, ingredientList) {
        const ingredientElement = createElement('div', {'class': 'cop-ingredient'});
        ingredientElement.appendChild(createElement('h2', {'class': 'cop-ingredient-type'}, ingredientType));
        ingredientElement.appendChild(createElement('div', {'class': 'cop-ingredient-list'}, ingredientList));
        return ingredientElement;
    };

    const render = function() {
        const element = createElement('main');
        let tempElement;

        // Menu Page
        const menuPage = element.appendChild(createElement('div', {'class': 'menu-page'}));

        // Pizzas
        //tempElement = menuPage.appendChild(createElement('div', {id: 'pizza-type-container'}));
        menuData.pizza.forEach((pizza, index) => {
            menuPage.appendChild(_createPizzaElement(pizza, index + 1));
        });

        // Create Own Pizza
        //tempElement = menuPage.appendChild(createElement('div', {id: 'create-own-pizza-container'}));
        for (const [key, value] of Object.entries(menuData.createOwnPizza)) {
            menuPage.appendChild(_createOwnPizzaIngredientElement(key, value));
        }
        
        return element;
    };

    return {render,};
}