/* Hinweis zur lokalen Speicherung — Blogfassung.
   Verweist auf die Datenschutzerklärung der Edition, da der Blog vom selben
   Betreiber stammt und keine eigene führt. */
(function () {
  var KEY = 'hegel-cookie-notice';
  var DS  = 'https://digitalehegeledition.vercel.app/datenschutz.html';
  try {
    if (localStorage.getItem(KEY) === 'ok') return;
  } catch (_) {
    return;
  }

  function build() {
    if (document.querySelector('.cookie-notice')) return;
    var bar = document.createElement('div');
    bar.className = 'cookie-notice';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Hinweis zur lokalen Speicherung');
    bar.innerHTML =
      '<p class="cookie-notice-text">' +
        'Diese Website verwendet keine Analyse- oder Werbe-Cookies und misst keine ' +
        'Reichweite. Im lokalen Speicher Ihres Browsers wird allein Ihre ' +
        'Anzeigeeinstellung (Farbschema) abgelegt. Näheres in der ' +
        '<a href="' + DS + '">Datenschutzerklärung</a>.' +
      '</p>' +
      '<button type="button" class="cookie-notice-ok">Verstanden</button>';
    document.body.appendChild(bar);

    bar.querySelector('.cookie-notice-ok').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'ok'); } catch (_) {}
      bar.classList.remove('is-shown');
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 300);
    });

    requestAnimationFrame(function () { bar.classList.add('is-shown'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
