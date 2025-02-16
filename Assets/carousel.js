let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
let autoSlide = setInterval(nextSlide, 5000);  // Auto-slide every 5 seconds

// Show the initial slide
showSlide(currentSlide);

// Show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Pause when hovering over the carousel
const carousel = document.getElementById('carousel');

carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 5000));
