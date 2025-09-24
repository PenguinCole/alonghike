// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Build views map dynamically from all .view sections
const views = {};
document.querySelectorAll('section.view').forEach(sec => {
  const id = sec.id.replace('view-', ''); // e.g. "view-campfire" -> "campfire"
  views[id] = sec;
});

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

  // Update hash
  if (location.hash.replace('#','') !== route) {
    history.replaceState(null, '', `#${route}`);
  }

  // Focus main for keyboard users
  // document.getElementById('main').focus({ preventScroll: true });
}

// Delegate clicks for SPA navigation
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-route]');
  if (!el) return;
  const route = el.getAttribute('data-route');
  setRoute(route);
  e.preventDefault();
});

// Honor hash on load
window.addEventListener('DOMContentLoaded', () => {
  const initial = (location.hash || '#overview').replace('#','');
  setRoute(initial);
});
