const menuButton = document.getElementById('mnb');
const navLinks = document.getElementById('nls');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('opn');
    const isOpen = navLinks.classList.contains('opn');
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

const modal = document.getElementById('wmd');
const openModal = document.getElementById('omd');
const closeModal = document.getElementById('cmd');

if (openModal && modal) {
  openModal.addEventListener('click', () => modal.classList.add('shw'));
  closeModal.addEventListener('click', () => modal.classList.remove('shw'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.remove('shw');
  });
}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(number) {
  slides.forEach((slide, index) => slide.classList.toggle('act-slide', index === number));
}
if (slides.length > 1) {
  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3500);
}

const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
      observer.unobserve(image);
    }
  });
});
lazyImages.forEach((image) => imageObserver.observe(image));
