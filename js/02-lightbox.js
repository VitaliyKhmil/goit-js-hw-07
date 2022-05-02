import { galleryItems } from './gallery-items.js';
// Change code below this line

const galery = document.querySelector(".gallery");
const items = galleryItems.map(item => {
        
    const imgLink = document.createElement("a");
    imgLink.classList.add("gallery__item");
    imgLink.href = item.original;
    
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.setAttribute("alt", item.description);

    imgLink.appendChild(img);

    return imgLink;
});
galery.append(...items);

const lightbox = new SimpleLightbox('.gallery a', { 
    docClose: false,
    captionsData: "alt",
    captionDelay: 250,

 });