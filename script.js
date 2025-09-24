// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// SPA-style router (hash or data-route)
const views = {
  intro: document.getElementById('view-intro'),
  weather: document.getElementById('view-weather')
};
const navLinks = Array.from(document.querySelectorAll('[data-route]'));

function setRoute(route) {
  // default to intro
  if (!views[route]) route = 'intro';

  // toggle view
  Object.entries(views).forEach(([key, el]) => {
    el.classList.toggle('active', key === route);
  });

  // toggle nav active state
  navLinks.forEach(a => {
    const r = a.getAttribute('data-route');
    a.classList.toggle('active', r === route && a.tagName === 'A');
  });

  // update hash without jumping the page around
  if (location.hash.replace('#', '') !== route) {
    history.replaceState(null, '', `#${route}`);
  }

  // focus main for better a11y (skip on initial load for smoother feel)
  document.getElementById('main').focus({ preventScroll: true });
}

// Click handlers for any element with data-route
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-route]');
  if (!el) return;
  const route = el.getAttribute('data-route');
  setRoute(route);
  e.preventDefault();
});

// On first load, honor hash (#weather or #intro)
window.addEventListener('DOMContentLoaded', () => {
  const initial = (location.hash || '#intro').replace('#', '');
  setRoute(initial);
});
