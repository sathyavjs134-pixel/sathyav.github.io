document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
});

// Simple contact form submit handler

// Scrollspy for simple navigation menu highlights
function initScrollSpy() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('#nav-menu a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 120)) {
        current = section.getAttribute('id') || '';
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}` || (current === '' && href === '#')) {
        link.classList.add('active');
      }
    });
  });
}
