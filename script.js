// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggleBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close on link click (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }));
}

// Smooth-scroll (extra smoothness on old browsers)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll spy (active nav item)
const sections = document.querySelectorAll('section[id]');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 });
sections.forEach(s => spy.observe(s));

// FAQ accordion
document.querySelectorAll('.acc').forEach(btn => {
  const panel = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.style.maxHeight = expanded ? '0px' : panel.scrollHeight + 'px';
  });
});
