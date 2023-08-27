// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const listEl = document.querySelector('.gallery');
listEl.style.listStyle = 'none';
console.log(galleryItems);
const listImages = galleryItems.map((item) => `<li class="gallery__item"  ><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} alt="${item.description}" ></a></li>`)
  .join("");

listEl.insertAdjacentHTML("beforeend", listImages);

console.log(listEl);


    let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
    
    gallery.on('show.simplelightbox', function () {
        
	console.log(gallery);
});
console.log(galleryItems);
