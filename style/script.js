let currentSlide = 0;

function moveSlides(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Update the current slide index
    currentSlide += direction;

    // Ensure the index stays within bounds
    if (currentSlide < 0) {
        currentSlide = totalSlides - 3; // wrap around when moving left
    } else if (currentSlide > totalSlides - 3) {
        currentSlide = 0; // wrap around when moving right
    }

    // Move the slider
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}
