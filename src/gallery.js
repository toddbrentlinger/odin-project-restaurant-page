import { createElement } from "./utilities.js";
import galleryImgSourcesData from './data/galleryImgSources.json';
import './gallery.scss';

export default function Gallery() {
    // Index of last user selected image, initialized to null for NO selection
    let _selectedImgIndex = null;

    let _imgModalElement = null;
    let _imgModalContentElement = null;
    let _imgModalContentContainer = null;

    const _createFullImageModal = function() {
        const fullImgModal = createElement('div', {id: 'full-img-modal', 'class': 'hide'});

        // Close button
        const close = createElement('span', {id: 'img-modal-close'});
        close.innerHTML = '&times;';
        close.addEventListener('click', () => {
            fullImgModal.classList.add('hide');
        }, false);

        // Add header to modal with close button
        fullImgModal.appendChild(close);

        // Prev Button
        const prev = createElement('span', {id: 'img-modal-prev'});
        prev.innerHTML = '&lsaquo;';
        prev.addEventListener('click', () => _openModalWithImgIndex(--_selectedImgIndex), false);

        // Next Button
        const next = createElement('span', {id: 'img-modal-next'});
        next.innerHTML = '&rsaquo;';
        next.addEventListener('click', () => _openModalWithImgIndex(++_selectedImgIndex), false);

        // Image Content
        _imgModalContentElement = createElement('img', {id: 'img-modal-content', alt: ''});

        // Image Content Container
        _imgModalContentContainer = createElement('div', {id: 'img-modal-content-container'}, 
            _imgModalContentElement
        );

        // Add main to modal
        fullImgModal.append(
            prev,
            next,
            _imgModalContentContainer
        );

        return fullImgModal;
    };

    const _openModalWithImgIndex = function(index) {
        // If index less than 0, wrap around to last item
        if (index < 0) 
            index = galleryImgSourcesData.yelp.length - 1;
        // If index more than array, wrap around to first item
        else if (index >= galleryImgSourcesData.yelp.length)
            index = 0;
        
        _selectedImgIndex = index;

        //_imgModalContentElement.src = `https://s3-media0.fl.yelpcdn.com/bphoto/${galleryImgSourcesData.yelp[index]}/o.jpg`;
        _imgModalContentContainer.style.backgroundImage = `url(https://s3-media0.fl.yelpcdn.com/bphoto/${galleryImgSourcesData.yelp[index]}/o.jpg)`;

        _imgModalElement.classList.remove('hide');
    };

    const _createGalleryItem = function(yelpId, index) {
        const imgElement = createElement(
            'img', 
            {
                'src': `https://s3-media0.fl.yelpcdn.com/bphoto/${yelpId}/300s.jpg`, 
                alt: '',
                loading: 'lazy',
                width: '300', 
                height: '300'
            }
        );

        const galleryItemAnchor = createElement('a', {href: '', 'class': 'gallery-item'}, imgElement);
        galleryItemAnchor.addEventListener('click', e => {
            e.preventDefault();
            _openModalWithImgIndex(index);
        }, false);

        return galleryItemAnchor;
    };

    const render = function() {
        const element = document.createElement('main');

        const galleryElement = element.appendChild(createElement('div', {id: 'gallery'}));

        galleryImgSourcesData.yelp.forEach((yelpId, index) => {
            galleryElement.appendChild(_createGalleryItem(yelpId, index));
        });

        _imgModalElement = element.appendChild(_createFullImageModal());

        return element;
    };

    return {render,};
}