const closeButton = document.querySelector('.lightbox-close')
const lightBox = document.querySelector('.lightbox')
const galleryItems = document.querySelectorAll('.gallery-item')
const lightBoxImage = document.querySelector('.lightbox-image')

function showImage(event) {
    //show lightbox
    lightBox.classList.remove('hidden')
    //get current gallery item
    const elementClickedOn = event.target
    const galleryItemParent = elementClickedOn.parentElement
    //replace contents of lightbox-image with current image and caption
    lightBoxImage.innerHTML = galleryItemParent.innerHTML
}

function hideImage(event) {
    event.preventDefault()
    lightBox.classList.add('hidden')
}

//hide lightbox when close button is clicked
closeButton.onclick = hideImage

//for every gallery item, set onclick handler to show image
for (let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i]
    item.onclick = showImage
}


