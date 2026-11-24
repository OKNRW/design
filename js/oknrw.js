/* OKNRW Designsystem: Verhalten für Spotlight, Magnet-Buttons, Laufband und mobiles Menü. Ohne Abhängigkeiten. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function spot(el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }
  function magnet(el) {
    if (reduce) return;
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width - 0.5) * 8;
      var y = ((e.clientY - r.top) / r.height - 0.5) * 8;
      el.style.setProperty('--tx', x.toFixed(1) + 'px');
      el.style.setProperty('--ty', y.toFixed(1) + 'px');
    });
    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--tx', '0px');
      el.style.setProperty('--ty', '0px');
    });
  }
  function marquee(el) {
    var btn = el.querySelector('.ok-marquee__toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var paused = el.classList.toggle('is-paused');
      btn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      btn.setAttribute('aria-label', paused ? 'Laufband fortsetzen' : 'Laufband anhalten');
    });
  }
  function menu(btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    btn.addEventListener('click', function () {
      var open = panel.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) { panel.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }
  function init(root) {
    root = root || document;
    root.querySelectorAll('.ok-spot:not([data-ok-ready])').forEach(function (el) { el.setAttribute('data-ok-ready', ''); spot(el); });
    root.querySelectorAll('.ok-magnet:not([data-ok-ready])').forEach(function (el) { el.setAttribute('data-ok-ready', ''); magnet(el); });
    root.querySelectorAll('[data-ok-menu]:not([data-ok-ready])').forEach(function (el) { el.setAttribute('data-ok-ready', ''); menu(el); });
    root.querySelectorAll('.ok-marquee:not([data-ok-ready])').forEach(function (el) { el.setAttribute('data-ok-ready', ''); marquee(el); });
  }
  window.OKNRW = window.OKNRW || {};
  window.OKNRW.init = init;
  if (document.readyState !== 'loading') init(document);
  else document.addEventListener('DOMContentLoaded', function () { init(document); });
})();
