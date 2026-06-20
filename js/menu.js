const scriptEl = document.querySelector('script[src*="menu.js"]');
const scriptSrc = scriptEl ? scriptEl.getAttribute('src') : 'js/menu.js';
const prefix = scriptSrc.replace('js/menu.js', '');

fetch(prefix + 'menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        link.setAttribute('href', prefix + href);
        if (href.split('/').pop() === currentFile) {
          link.classList.add('active');
          link.removeAttribute('href');
        }
      }
    });
  });
