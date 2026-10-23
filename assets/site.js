'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
if (toggle && navigation) {
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const opened = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('header')) closeMenu();
  });
  matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);
}
document.querySelector('#year').textContent = new Date().getFullYear();
const printButton = document.querySelector('[data-print]');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
for (const gallery of document.querySelectorAll('[data-gallery]')) {
  const slides = [...gallery.querySelectorAll('[data-gallery-slide]')];
  const controls = gallery.querySelector('.gallery-controls');
  if (!controls || slides.length < 2) continue;
  const status = controls.querySelector('[data-gallery-status]');
  let active = 0;
  function showSlide(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== active; });
    status.textContent = `${active + 1} / ${slides.length}`;
  }
  controls.hidden = false;
  controls.querySelector('[data-gallery-prev]').addEventListener('click', () => showSlide(active - 1));
  controls.querySelector('[data-gallery-next]').addEventListener('click', () => showSlide(active + 1));
  showSlide(0);
}

const termsContents = document.querySelector('[data-terms-contents]');
if (termsContents) {
  const desktopDocument = matchMedia('(min-width: 961px)');
  termsContents.open = desktopDocument.matches;
  desktopDocument.addEventListener('change', event => { termsContents.open = event.matches; });
}
