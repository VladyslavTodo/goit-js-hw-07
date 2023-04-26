import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

function createLi(images) {
    return images
        .map(
            (image) =>
                `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="" title="${image.description}"/>
   </a>
</li>`
        )
        .join("");
}

ulGallery.innerHTML = createLi(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
});
