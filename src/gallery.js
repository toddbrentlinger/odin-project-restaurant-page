import { createElement } from "./utilities.js";
import './gallery.scss';

export default function Gallery() {
    const _imageSources = [
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/xsqE022jcmlFM8uENB3NgA/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/xsqE022jcmlFM8uENB3NgA/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/S8XDRUTzLPB35bbdiCV5sw/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/S8XDRUTzLPB35bbdiCV5sw/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/m4_gptl8keikB1du7jAFkg/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/m4_gptl8keikB1du7jAFkg/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/_18aSdpsd6C-dyecADSVpg/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/_18aSdpsd6C-dyecADSVpg/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/nRi_IDpC0o_fuTBkRzX89A/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/nRi_IDpC0o_fuTBkRzX89A/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/ZnKj2RZNeELzl6_rTJAtvA/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/ZnKj2RZNeELzl6_rTJAtvA/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/mJS5mJnGSwrE7Im5RZVQ7A/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/mJS5mJnGSwrE7Im5RZVQ7A/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/CQZjS6gHEL5qjxR8rOFHmw/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/CQZjS6gHEL5qjxR8rOFHmw/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/tJvQBZSbJSuUpiOb8wNJVw/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/tJvQBZSbJSuUpiOb8wNJVw/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/KwmNL23Pt1vEpcnFyHtc5A/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/KwmNL23Pt1vEpcnFyHtc5A/o.jpg',
        }
    ];

    // Index of last user selected image, initialized to null for NO selection
    let _selectedImgIndex = null;

    let _imgModalElement = null;
    let _imgModalContentElement = null;

    const _createFullImageModal = function() {
        const fullImgModal = createElement('div', {id: 'full-img-modal', 'class': 'hide'});

        // Close button
        const close = createElement('span', {id: 'img-modal-close'});
        close.innerHTML = '&times;';
        close.addEventListener('click', () => {
            fullImgModal.classList.add('hide');
        }, false);

        // Add header to modal with close button
        fullImgModal.appendChild(createElement('div', {id: 'img-modal-header'}, close));

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

        // Add main to modal
        fullImgModal.appendChild(createElement('div', {id: 'img-modal-main'}, 
            prev,
            next,
            _imgModalContentElement,
            createElement('div', {id: 'img-modal-caption'}, 'Caption Description')
        ));

        return fullImgModal;
    };

    const _openModalWithImgIndex = function(index) {
        // If index less than 0, wrap around to last item
        if (index < 0) 
            index = _imageSources.length - 1;
        // If index more than array, wrap around to first item
        else if (index >= _imageSources.length)
            index = 0;
        
        _selectedImgIndex = index;
        _imgModalContentElement.src = _imageSources[index].large;
        _imgModalElement.classList.remove('hide');
    };

    const _createGalleryItem = function(imgObj, index) {
        const imgElement = createElement('img', {'src': imgObj.small, alt: '', width: '300', height: '300'});

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
        _imageSources.forEach((imgObj, index) => {
            galleryElement.appendChild(_createGalleryItem(imgObj, index));
        });

        _imgModalElement = element.appendChild(_createFullImageModal());

        return element;
    };

    return {render,};
}