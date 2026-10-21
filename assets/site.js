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
const form = document.querySelector('#quoteForm');
if (form) {
  form.querySelector('button[type=submit]').disabled = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const text = 'AJR Industries — Inquiry draft\nNot submitted. Call 847-439-0380 to arrange delivery.\n\n' +
      [...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n\n');
    const url = URL.createObjectURL(new Blob([text], {type: 'text/plain;charset=utf-8'}));
    const download = document.createElement('a');
    download.href = url;
    download.download = 'AJR-inquiry-draft.txt';
    document.body.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.querySelector('#form-status').textContent = 'Inquiry draft downloaded. Nothing has been sent to AJR. Call 847-439-0380 to arrange delivery.';
  });
}
