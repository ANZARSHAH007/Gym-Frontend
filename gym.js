const cardsInner = document.getElementById('cardsInner');
const cards = document.querySelectorAll('.program-card');
let currentIndex = 0;
const cardWidth = 300;
const gap = 32;

function updateCards() {
    const offset = -currentIndex * (cardWidth + gap);
    cardsInner.style.transform = `translateX(${offset}px)`;
    
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });
}

function move(direction) {
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    updateCards();
}


const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.btn-prev');
        const nextBtn = document.querySelector('.btn-next');
    

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000)