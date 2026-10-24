/* ===== Jeunes Inspirés — en-tête et pied de page communs ===== */
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';

  var mainLinks = [
    ['index.html', 'Accueil'], ['a-propos.html', 'À propos'], ['axes.html', 'Axes'],
    ['activites.html', 'Activités'], ['opportunites.html', 'Opportunités'],
    ['ji-declic.html', 'JI Déclic'], ['communaute.html', 'Communauté']
  ];
  var moreLinks = [
    ['equipe.html', 'Équipe'], ['ressources.html', 'Ressources'], ['contact.html', 'Contact']
  ];

  function li(l) {
    var active = page === l[0] ? ' class="active" aria-current="page"' : '';
    return '<li><a href="' + l[0] + '"' + active + '>' + l[1] + '</a></li>';
  }

  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML =
      '<header class="site-header"><div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Jeunes Inspirés — Accueil">' +
          '<img src="images/logo-jeunes-inspires.png" alt="Logo Jeunes Inspirés"></a>' +
        '<button class="burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false">' +
          '<span></span><span></span><span></span></button>' +
        '<nav class="main-nav" id="main-nav" aria-label="Navigation principale">' +
          '<ul>' + mainLinks.map(li).join('') +
            '<li class="has-sub" id="has-sub"><button class="sub-toggle" type="button">Plus ▾</button>' +
              '<ul class="sub">' + moreLinks.map(li).join('') + '</ul></li>' +
          '</ul>' +
          '<div class="nav-actions"><a class="btn btn-primary" href="contact.html?sujet=rejoindre">Rejoindre JI</a></div>' +
        '</nav>' +
      '</div></header>';

    var burger = document.getElementById('burger');
    var nav = document.getElementById('main-nav');
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    document.getElementById('has-sub').querySelector('.sub-toggle')
      .addEventListener('click', function () {
        document.getElementById('has-sub').classList.toggle('open');
      });
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;
    var q = function (f, l) { return '<li><a href="' + f + '">' + l + '</a></li>'; };
    el.innerHTML =
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer-grid">' +
          '<div><div class="footer-brand"><img src="images/logo-jeunes-inspires.png" alt="Logo Jeunes Inspirés">' +
            '<span>Jeunes Inspirés</span></div>' +
            '<p><em>Une jeunesse consciente, compétente et engagée.</em></p>' +
            '<p>Programme dédié à la jeunesse, intégré à Silver Corporate.</p></div>' +
          '<div><h4>Le programme</h4><ul>' + q('a-propos.html', 'À propos') + q('axes.html', 'Les six axes') +
            q('activites.html', 'Activités') + q('ji-declic.html', 'JI Déclic') + q('equipe.html', 'Équipe') + '</ul></div>' +
          '<div><h4>Rejoindre</h4><ul>' + q('contact.html?sujet=rejoindre', 'Rejoindre JI') +
            q('contact.html?sujet=ambassadeur', 'Devenir Ambassadeur') + q('communaute.html', 'Communauté') +
            q('opportunites.html', 'Opportunités') + q('ressources.html', 'Ressources') + '</ul></div>' +
          '<div><h4>Contact</h4><ul>' +
            '<li>📍 Pointe-Noire, République du Congo</li>' +
            '<li>✉️ <a href="mailto:jeunesinspires.cg@gmail.com">jeunesinspires.cg@gmail.com</a></li>' +
            '<li>📞 <a href="tel:+242050102416">+242 05 010 24 16</a></li>' +
            '<li><a href="contact.html">Nous écrire →</a></li></ul></div>' +
        '</div>' +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + ' Jeunes Inspirés — Programme intégré à Silver Corporate</span>' +
          '<span>Apolitique et ouvert à tous</span></div>' +
      '</div></footer>';
  }

  if (!document.querySelector('link[rel="icon"]')) {
    var ic = document.createElement('link');
    ic.rel = 'icon'; ic.href = 'images/logo-jeunes-inspires.png';
    document.head.appendChild(ic);
  }

  renderHeader();
  renderFooter();
})();