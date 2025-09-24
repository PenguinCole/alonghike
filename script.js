// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Open Weather from either button
const weather = document.getElementById('weather');
function openWeather() {
  if (!weather.classList.contains('open')) {
    weather.classList.add('open');
    weather.setAttribute('aria-hidden', 'false');
  }
  weather.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.getElementById('openWeather')?.addEventListener('click', openWeather);
document.getElementById('openWeather2')?.addEventListener('click', openWeather);

// Back to top (also collapses sheet if you want to keep it tidy)
document.getElementById('backTop')?.addEventListener('click', (e) => {
  // Keep the sheet open so users can scroll again; remove next two lines if you want to auto-close.
  // weather.classList.remove('open');
  // weather.setAttribute('aria-hidden', 'true');
});
