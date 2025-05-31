// Slider automático con fade
let current = 0;
const slides = document.querySelectorAll(".slider img");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);

// ScrollReveal
ScrollReveal().reveal('.story', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

ScrollReveal().reveal('.form-section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  delay: 300
});

ScrollReveal().reveal('.video-section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  delay: 500
});

ScrollReveal().reveal('.impact-section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  delay: 700
});

// Contador animado
const counters = document.querySelectorAll('.counter');
const speed = 200; // menor = más rápido

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
};

let countersStarted = false;
window.addEventListener('scroll', () => {
  const section = document.querySelector('#impact');
  const sectionTop = section.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight && !countersStarted) {
    animateCounters();
    countersStarted = true;
  }
});
