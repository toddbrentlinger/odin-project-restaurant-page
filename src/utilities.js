/**
 * 
 * @param {String} type - Element type
 * @param {Object} props - Element attribute names and their corresponding value 
 * @param  {...Node} children - Variable number of child nodes 
 */
export function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);

    // Props
    for (const [key, value] of Object.entries(props)) {
        element.setAttribute(key, value);
    }

    // Children Nodes
    children.forEach(child => element.append(child));

    return element;
}

function getYelpGalleryImgIds() {
    return Array.from(document.querySelectorAll('.photos [data-analytics-label=biz-photo]'))
	    .map(photo => photo.href.match(/(?<==).+$/)[0]);
}