const images = [
    'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Movie+1',
    'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Movie+2',
    'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Movie+3',
    'https://via.placeholder.com/600x400/FFFF00/FFFFFF?text=Movie+4',
    'https://via.placeholder.com/600x400/FF00FF/FFFFFF?text=Movie+5'
];

let currentIndex = 0;
const slideshowElement = document.getElementById('slideshow');

function updateSlideshow() {
    slideshowElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateSlideshow, 2000);

// Initialize the slideshow with the first image
updateSlideshow();
