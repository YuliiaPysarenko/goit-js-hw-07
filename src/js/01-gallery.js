import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryPictures = galleryItems
.map((galleryItem) => `<div class="gallery__item">
                            <a class="gallery__link" href="${galleryItem.original}">
                            <img
                                class="gallery__image"
                                src="${galleryItem.preview}"
                                data-source="${galleryItem.original}"
                                alt="${galleryItem.description}"
                            />
                            </a>
                        </div>`)
.join("");

gallery.insertAdjacentHTML("beforeend", galleryPictures);


gallery.addEventListener("click", selectImage);

function selectImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    }

    const instance = basicLightbox.create(`
        <img width="1400" height="900" src="${event.target.dataset.source}">
    `);
    instance.show();

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            instance.close();
        }
    });
}
