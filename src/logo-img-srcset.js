import Logo606 from './img/logo.png';
import Logo303 from './img/logo_303x203.png';
import Logo152 from './img/logo_152x102.png';

export default function createLogoImgWithSrcset() {
    const img = document.createElement('img');

    img.srcset = `${Logo152} 152w, ${Logo303} 303w, ${Logo606} 606w`;
    img.sizes = '(max-width: 300px) 152px, (max-width: 600px) 303px, 1200px';
    img.src = Logo606;
    img.alt = 'Corralitos Pizza logo.';

    return img;
}