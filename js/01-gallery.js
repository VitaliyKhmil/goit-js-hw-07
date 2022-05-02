import { galleryItems } from "./gallery-items.js";

let instance;
const galery = document.querySelector(".gallery");
const items = galleryItems.map(item => {
    
    const containerGallery = document.createElement("div");
    containerGallery.classList.add("gallery__item");

    const imgLink = document.createElement("a");
    imgLink.classList.add("gallery__link");
    imgLink.href = item.original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.setAttribute("data-source", item.original);
    img.setAttribute("alt", item.description);

    imgLink.appendChild(img);
    containerGallery.appendChild(imgLink);

    return containerGallery;
});

galery.append(...items);

function closeImage(event) {
    const visible = instance && instance.visible();
    visible && event.keyCode === 27 && instance.close();
}

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault();
    instance = basicLightbox.create(`<img src="${event.target.dataset.source}" />`);
    instance.show();
}
   
galery.addEventListener("click", selectImage);
document.addEventListener("keydown", closeImage);
  
   


  