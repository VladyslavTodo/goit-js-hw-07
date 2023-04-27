import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGallery = document.querySelector(".gallery");

function createLi(images) {
    return images
        .map(
            (image) =>
                `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
        )
        .join("");
}

ulGallery.innerHTML = createLi(galleryItems);

ulGallery.addEventListener("click", clickImage);

let instance = {};

function clickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    instance = basicLightbox.create(
        `
    <img src="${event.target.dataset.source}">`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", closeOnEscape);
            },

            onClose: (instance) => {
                document.removeEventListener("keydown", closeOnEscape);
            },
        }
    );
    instance.show();
}

function closeOnEscape(event) {
    console.log(event.code);
    if (event.code === "Escape") {
        instance.close();
    }
}
