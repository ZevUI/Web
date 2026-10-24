// Meadow Garden Services - small interactions for the static GitHub Pages site.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// IMPORTANT: replace this with the email address where you want quote requests sent.
const BUSINESS_EMAIL = 'ADD-YOUR-EMAIL-HERE';

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (BUSINESS_EMAIL === 'ADD-YOUR-EMAIL-HERE') {
      alert('Before using the enquiry form, add your business email address to the BUSINESS_EMAIL setting in script.js.');
      return;
    }
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent(`Quote request - ${data.get('service')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nPhone: ${data.get('phone') || 'Not provided'}\nService: ${data.get('service')}\n\nJob details:\n${data.get('message')}`
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  });
}
