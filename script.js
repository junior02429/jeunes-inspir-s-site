/* ===== Jeunes Inspirés — comportements généraux ===== */
document.documentElement.classList.add('js');

// Apparition progressive des blocs marqués "reveal"
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (i) { i.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (i) { obs.observe(i); });
})();

// Bouton "retour en haut"
(function () {
  var b = document.createElement('button');
  b.className = 'to-top'; b.type = 'button'; b.setAttribute('aria-label', 'Retour en haut'); b.textContent = '↑';
  b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.body.appendChild(b);
  window.addEventListener('scroll', function () { b.classList.toggle('show', window.scrollY > 500); });
})();