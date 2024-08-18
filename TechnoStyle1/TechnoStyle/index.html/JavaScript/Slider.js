let currentSlide = 0;
const slides = document.querySelectorAll('.slider-section');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000);
}

// Start the automatic sliding
setTimeout(autoSlide, 4000);