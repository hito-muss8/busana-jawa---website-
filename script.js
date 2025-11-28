const slider = document.querySelector('.materi-slider');
const slides = document.querySelectorAll('.materi-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    if(i < 0) index = slides.length - 1;
    else if(i >= slides.length) index = 0;
    else index = i;

    slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));