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

const photoLinks = [...document.querySelectorAll('a[href^="assets/images/"]')]
  .filter(link => link.querySelector('img'));
const photoViewer = document.createElement('dialog');
if (photoLinks.length && typeof photoViewer.showModal === 'function') {
  photoViewer.id = 'photo-viewer';
  photoViewer.className = 'photo-viewer';
  photoViewer.setAttribute('aria-labelledby', 'photo-viewer-title');
  photoViewer.setAttribute('aria-describedby', 'photo-viewer-caption');
  photoViewer.innerHTML = `
    <div class="photo-viewer-header">
      <h2 id="photo-viewer-title">Photo viewer</h2>
      <button class="photo-viewer-close" type="button" autofocus>Close <span aria-hidden="true">×</span></button>
    </div>
    <div class="photo-viewer-stage"><img alt="" decoding="async"></div>
    <p id="photo-viewer-caption" class="photo-viewer-caption"></p>`;
  document.body.append(photoViewer);

  const viewerImage = photoViewer.querySelector('img');
  const viewerCaption = photoViewer.querySelector('.photo-viewer-caption');
  let photoOpener;
  let photoScrollX = 0;
  let photoScrollY = 0;
  let pointerStartedOutside = false;

  for (const link of photoLinks) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', photoViewer.id);
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
          event.shiftKey || event.altKey || link.hasAttribute('download') ||
          (link.target && link.target !== '_self')) return;
      event.preventDefault();
      const sourceImage = link.querySelector('img');
      photoOpener = link;
      photoScrollX = window.scrollX;
      photoScrollY = window.scrollY;
      viewerImage.src = link.href;
      viewerImage.alt = sourceImage.alt;
      viewerCaption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent.trim() ||
        sourceImage.alt || 'AJR Industries photograph';
      document.documentElement.classList.add('photo-viewer-open');
      photoViewer.showModal();
    });
  }

  const closePhotoButton = photoViewer.querySelector('.photo-viewer-close');
  closePhotoButton.addEventListener('click', () => photoViewer.close());
  photoViewer.addEventListener('keydown', event => {
    // Close is the viewer's only interactive control.
    if (event.key === 'Tab' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      closePhotoButton.focus();
    }
  });
  function outsidePhotoViewer(event) {
    const bounds = photoViewer.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
  }
  photoViewer.addEventListener('pointerdown', event => {
    pointerStartedOutside = event.target === photoViewer && outsidePhotoViewer(event);
  });
  photoViewer.addEventListener('click', event => {
    if (pointerStartedOutside && event.target === photoViewer && outsidePhotoViewer(event)) photoViewer.close();
    pointerStartedOutside = false;
  });
  photoViewer.addEventListener('close', () => {
    document.documentElement.classList.remove('photo-viewer-open');
    viewerImage.removeAttribute('src');
    pointerStartedOutside = false;
    window.scrollTo(photoScrollX, photoScrollY);
    if (photoOpener?.isConnected) photoOpener.focus({ preventScroll: true });
  });
}
