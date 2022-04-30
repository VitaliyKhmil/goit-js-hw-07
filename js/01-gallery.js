import { galleryItems } from './gallery-items.js';

let instance;
const galery = document.querySelector(".gallery");
const items = galleryItems.map(item => {
    // div
    const div = document.createElement("div");
    div.classList.add("gallery__item");

    // a
    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = item.original;

    // img
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.setAttribute('data-source', item.original);
    img.setAttribute('alt', item.description);

    a.appendChild(img);
    div.appendChild(a);

    return div;
});

galery.append(...items);

function closeImage(event) {
    const visible = instance && instance.visible();
    visible && event.keyCode === 27 && instance.close(() => {
        //document.removeEventListener("keydown");
    });
}

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault();
    instance = basicLightbox.create(`<img src="${event.target.dataset.source}" />`);
    instance.show(() => {
        //document.addEventListener("keydown", closeImage);
    });
}
   
galery.addEventListener("click", selectImage);
document.addEventListener("keydown", closeImage);
  
   


  