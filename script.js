// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Views (SPA-style)
const views = {
  overview: document.getElementById('view-overview'),
  weather: document.getElementById('view-weather'),
  about: document.getElementById('view-about')
};

const navLinks = Array.from(document.querySelectorAll('.nav [data-route]'));

function setRoute(route) {
  if (!views[route]) route = 'overview';

  // Toggle views
  Object.entries(views).forEach(([key, el]) => {
    el.classList.toggle('active', key === route);
  });

  // Toggle nav active states
  navLinks.forEach(a => {
    const r = a.getAttribute('data-route');
    a.classList.toggle('active', r === route);
  });

  // Keep URL hash tidy
  if (location.hash.replace('#','') !== route) {
    history.replaceState(null, '', `#${route}`);
  }

  // Focus main (for keyboard users)
  document.getElementById('main').focus({ preventScroll: true });
}

// Global click handler for any [data-route]
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-route]');
  if (!el) return;
  const route = el.getAttribute('data-route');
  setRoute(route);
  e.preventDefault();
});

// On load, honor hash route (e.g., #weather)
window.addEventListener('DOMContentLoaded', () => {
  const initial = (location.hash || '#overview').replace('#','');
  setRoute(initial);
});
