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
