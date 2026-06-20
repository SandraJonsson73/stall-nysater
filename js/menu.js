const parts = window.location.pathname.split('/').filter(Boolean);
const depth = parts.length > 1 ? parts.length - 1 : 0;
const prefix = depth > 0 ? '../'.repeat(depth) : '';

fetch(prefix + 'menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.endsWith('/' + href.replace(/^\//, ''))) {
        link.classList.add('active');
        link.removeAttribute('href');
      }
    });
  });
