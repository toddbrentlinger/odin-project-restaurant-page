import menuData from './data/menu.json';
import { createElement } from './utilities.js';
import './menu.scss';
import createLogoImgWithSrcset from './logo-img-srcset.js';
import MenuLogo from './img/titulo_menu.png';
import Logo from './img/logo.png';
import CreateOwnPizzaLogo from './img/titulo_menu2.png';
import menuPDF from './data/menu.pdf';

export default function Menu() {
    let _pageSelected = 1;
    let _menuPagesElement = createElement('div', {id: 'menu-pages'});

    const _createPizzaElement = function(pizzaObj, number) {
        const pizzaElement = createElement('div', {'class': 'pizza-item'});

        // Number
        pizzaElement.appendChild(
            createElement('div', {'class': 'pizza-item-number white-text-shadow'}, number)
        );

        // Name
        pizzaElement.appendChild(
            createElement('h2', {'class': 'pizza-item-name'}, pizzaObj.name)
        );

        // Prices
        pizzaElement.appendChild(
            _createPizzaPricesElement(pizzaObj.prices)
        );

        // Ingredients
        pizzaElement.appendChild(
            createElement('div', {'class': 'pizza-item-ingredients'}, pizzaObj.ingredients)
        );

        return pizzaElement;
    };

    const _createPizzaSizeTextContent = function(index) {
        const sizeObj = menuData.pizzaSizes[index];
        // Get uppercase letters of size name
        // Append size with quotation mark for inches
        return `${sizeObj.name.match(/^[A-Z]+/)[0]}${sizeObj.size}"`;
    };

    const _createPizzaPricesElement = function(pricesArr) {
        const pricesElement = createElement('div', {'class': 'pizza-item-prices'});
        let container, tempElement;
        pricesArr.forEach((price, index) => {
            // Container
            container = pricesElement.appendChild(
                createElement('div', {'class': 'pizza-item-price-single'})
            );
            // Size
            container.appendChild(
                createElement(
                    'div', 
                    {'class': 'pizza-item-price-size'}, 
                    _createPizzaSizeTextContent(index)
                )
            );
            // Value
            container.appendChild(
                createElement('div', {'class': 'pizza-item-price-value'}, price)
            );
        });
        return pricesElement;
    };

    const _createOwnPizzaIngredientElement = function(ingredientType, ingredientList) {
        const ingredientElement = createElement('div', {'class': 'cop-ingredient'});
        ingredientElement.appendChild(createElement('h2', {'class': 'cop-ingredient-type'}, `${ingredientType}:`));
        ingredientElement.appendChild(createElement('div', {'class': 'cop-ingredient-list'}, ingredientList));
        return ingredientElement;
    };

    const _createOwnPizzaPricesElement = function() {
        const copPricesElement = createElement('div', {'class': 'cop-prices-container'});
        copPricesElement.appendChild(createElement('img', {'src': CreateOwnPizzaLogo, 'alt': 'Create own pizza logo.', 'class': 'cop-logo'}));
        copPricesElement.appendChild(createElement('p', {}, 'Red Sauce Base and Mozzarella Cheese'));
        const copPriceGrid = copPricesElement.appendChild(createElement('div', {'class': 'cop-prices'}));
        let copPriceGridItem;
        menuData.pizzaSizes.forEach(pizzaSizeObj => {
            copPriceGridItem = copPriceGrid.appendChild(createElement('div', {'class': 'cop-price-single'}));
            copPriceGridItem.appendChild(
                createElement(
                    'div', 
                    {'class': 'cop-price-single-size'}, 
                    `${pizzaSizeObj.name} ${pizzaSizeObj.size}"`
                )
            );
            copPriceGridItem.appendChild(
                createElement(
                    'div', 
                    {'class': 'cop-price-single-value'}, 
                    `$${pizzaSizeObj.price}`
                )
            );
            copPriceGridItem.appendChild(
                createElement(
                    'div', 
                    {'class': 'cop-price-single-note'}, 
                    `(Add $${pizzaSizeObj.priceAddPerTopping} per topping)`
                )
            );
        });
        return copPricesElement;
    };

    const _createFirstPage = function() {
        const menuPage = createElement('div', {'class': 'menu-page-single'});

        // Menu Logo
        menuPage.appendChild(createElement('img', {'src': MenuLogo, 'alt': 'Menu logo.', 'class': 'menu-logo'}));

        // Column Container
        const columnContainer = menuPage.appendChild(createElement('div', {'class': 'menu-column-container'}));

        let column = columnContainer.appendChild(createElement('div', {'class': 'menu-column'}));

        // Pizzas
        menuData.pizza.forEach((pizza, index) => {
            // Change to new column after twelve pizza types
            if (index === 12) {
                column = columnContainer.appendChild(createElement('div', {'class': 'menu-column'}));
            }
            column.appendChild(_createPizzaElement(pizza, index + 1));
        });

        // Create Own Pizza
        column.appendChild(_createOwnPizzaPricesElement());
        for (const [key, value] of Object.entries(menuData.createOwnPizza)) {
            column.appendChild(_createOwnPizzaIngredientElement(key, value));
        }

        return menuPage;
    };

    const _createOtherItemTypeElement = function(otherItemType, otherItemArr) {
        const otherItemTypeElement = createElement('div', {'class': 'other-item-type'});

        otherItemTypeElement.appendChild(createElement('h2', {}, otherItemType));

        let otherItemElement;

        otherItemArr.forEach(otherItem => {
            otherItemElement = otherItemTypeElement.appendChild(
                createElement(
                    'div', 
                    {'class': otherItem.hasOwnProperty('ingredients') ? 'other-item-with-ingredients' : 'other-item'}
                )
            );
            // Name
            otherItemElement.appendChild(
                createElement('div', {'class': 'other-item-name'}, otherItem.name)
            );

            // Price
            otherItemElement.appendChild(
                createElement('div', {'class': 'other-item-price'}, `$${otherItem.price.toFixed(2)}`)
            );

            // Ingredients
            if (otherItem.hasOwnProperty('ingredients')) {
                otherItemElement.appendChild(
                    createElement('div', {'class': 'other-item-ingredients'}, otherItem.ingredients)
                );
            }
        });

        return otherItemTypeElement;
    };

    const _createSecondPage = function() {
        const menuPage = createElement('div', {'class': 'menu-page-single', id: 'menu-page-2'});

        // Menu Logo
        menuPage.appendChild(createElement('img', {'src': MenuLogo, 'alt': 'Menu logo.', 'class': 'menu-logo'}));

        // Column Container
        const columnContainer = menuPage.appendChild(createElement('div', {'class': 'menu-column-container'}));

        // First Column
        let column = columnContainer.appendChild(createElement('div', {'class': 'menu-column'}));

        // Other Items
        for (const [otherItemType, otherItemTypeArr] of Object.entries(menuData.otherItems)) {
            column.appendChild(_createOtherItemTypeElement(otherItemType, otherItemTypeArr));
        }

        // Gluten Free Crust
        column.appendChild(createElement(
            'div', 
            {'class': 'gluten-free-crust-container'},
            createElement('p', {'class': 'gluten-intro-msg'}, 'Now choose your pizza with'),
            createElement('p', {'class': 'gluten-intro-name'}, 'Gluten Free Crust'),
            createElement('p', {'class': 'gluten-price'}, '*** Extra Cost $5.00 ***')
        ));

        // Hours
        column.appendChild(createElement(
            'div', 
            {'class': 'hours-container'},
            createElement('p', {}, 'Our Hours...'),
            createElement('p', {}, 'We\'re open 7 days a week'),
            createElement('p', {}, 'Sunday to Thursday 11 am to 9:30 pm'),
            createElement('p', {}, 'Friday to Saturday 11 am to 10:30 pm'),
        ));

        // Second Column
        column = columnContainer.appendChild(createElement('div', {'class': 'menu-column'}));

        // Logo
        column.appendChild(createLogoImgWithSrcset());

        // Tagline
        column.appendChild(createElement(
            'div', 
            {'class': 'tagline-container'},
            createElement('p', {}, 'Gourmet Pizza...'),
            createElement('p', {}, 'We use only the best ingredients: '),
            createElement('p', {}, 'farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.')
        ));

        // Address
        column.appendChild(createElement(
            'div', 
            {'class': 'menu-misc-data-item'},
            createElement('div', {'class': 'menu-misc-data-logo'}),
            createElement('div', {'class': 'menu-misc-data-value'}, '1061 S. Green Valley Rd. Watsonvile, CA 95076')
        ));

        // Facebook
        column.appendChild(createElement(
            'div', 
            {'class': 'menu-misc-data-item'},
            createElement('div', {'class': 'menu-misc-data-logo'}),
            createElement('div', {'class': 'menu-misc-data-value'}, 'Corralitos Pizza')
        ));

        // Phone
        column.appendChild(createElement(
            'div', 
            {'class': 'menu-misc-data-item'},
            createElement('div', {'class': 'menu-misc-data-logo'}),
            createElement('div', {'class': 'menu-misc-data-value'}, '(831) 722 7220'),
            createElement('p', {'class': 'menu-misc-data-note'}, 'Call for carry out or safe delivery we deliver to Aptos, Freedom, Watsonville, San Andreas, Corralitos, Larkin Valley.')
        ));

        // Website
        column.appendChild(createElement(
            'div', 
            {'class': 'menu-misc-data-item'},
            createElement('div', {'class': 'menu-misc-data-logo'}),
            createElement('div', {'class': 'menu-misc-data-value'}, 'Visit out website'),
            createElement('p', {'class': 'menu-misc-data-note'}, 'www.corralitospizzadelivery.com')
        ));

        return menuPage;
    };

    const _createMenuPageButtons = function(bScrollToTop = false) {
        const btnContainer = createElement('div', {id: 'menu-page-btn-container'});

        // Page 1
        let btn = createElement('a', {'href': ''});
        btn.addEventListener('click', e => {
            e.preventDefault();
            _pageSelected = 1;
            _updateMenu();
            if (bScrollToTop) _menuPagesElement.scrollIntoView({behavior: 'smooth'});
        }, false);
        btn.appendChild(createElement('span', {'class': 'white-text-shadow'}, 'Page 1'));
        btnContainer.appendChild(createElement('div', {'class': 'menu-page-btn'}, btn));

        // Page 2
        btn = createElement('a', {href: ''});
        btn.addEventListener('click', e => {
            e.preventDefault();
            _pageSelected = 2;
            _updateMenu();
            if (bScrollToTop) _menuPagesElement.scrollIntoView({behavior: 'smooth'});
        }, false);
        btn.appendChild(createElement('span', {'class': 'white-text-shadow'}, 'Page 2'));
        btnContainer.appendChild(createElement('div', {'class': 'menu-page-btn'}, btn));

        // PDF
        btn = createElement('a', {href: menuPDF, target: '_blank'});
        btn.appendChild(createElement('span', {'class': 'white-text-shadow'}, 'PDF'));
        btnContainer.appendChild(createElement('div', {'class': 'menu-page-btn'}, btn));

        return btnContainer;
    };

    const _updateMenu = function() {
        _menuPagesElement.dataset.pageDisplayed = _pageSelected === 2 ? '2' : '1';
    };

    const render = function() {
        const element = createElement('main');

        // Menu Page Buttons - Top
        element.appendChild(_createMenuPageButtons());

        // Menu Page
        // menu-page-container -> menu-pages -> menu-page
        _menuPagesElement.append(_createFirstPage(), _createSecondPage());
        element.appendChild(createElement('div', {id: 'menu-page-container'}, _menuPagesElement));

        // Menu Page Buttons - Bottom
        element.appendChild(_createMenuPageButtons(true));
        
        return element;
    };

    return {render,};
}