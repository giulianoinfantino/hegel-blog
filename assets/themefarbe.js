/* Haelt die Browserleistenfarbe (meta theme-color) im Takt mit dem Farbschema.
   Beobachtet data-theme am Wurzelelement — kein Eingriff in toggleTheme() noetig. */
(function () {
  var m = document.querySelector('meta[name="theme-color"]');
  if (!m) { m = document.createElement('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
  function setze() {
    m.content = document.documentElement.dataset.theme === 'light' ? '#e4dfd5' : '#232229';
  }
  new MutationObserver(setze).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  setze();
})();
