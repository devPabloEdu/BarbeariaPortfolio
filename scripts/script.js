const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    checkButtons();
}

function checkButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === totalImages - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Inicializa o carrossel na primeira imagem
updateCarousel();
