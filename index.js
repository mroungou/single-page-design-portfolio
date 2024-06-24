let currentIndex = 0;

const images = document.querySelectorAll('.demo');
const totalImages = images.length;

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // this helps create a circular motion
    // when it gets to the last item in the caroussel it will go back to the first image
//     Initial State:

// currentIndex = 0
// When you click "next", currentIndex becomes (0 + 1) % 5 = 1.
// Second Click:

// currentIndex = 1
// After clicking "next" again, currentIndex becomes (1 + 1) % 5 = 2.
// Subsequent Clicks:

// Continue clicking "next":
// currentIndex = 2 becomes (2 + 1) % 5 = 3
// currentIndex = 3 becomes (3 + 1) % 5 = 4
// currentIndex = 4 becomes (4 + 1) % 5 = 0 (wraps around to the first item)
    updateCarousel();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    images.forEach(image => {
        image.style.transform = `translateX(${offset}%)`
    })
}