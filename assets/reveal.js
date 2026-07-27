/* Morphed — scroll reveal + footer pulse. Shared across pages. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function reveal() {
    var nodes = document.querySelectorAll('[data-reveal], [data-reveal-group]');
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('in'); });
      var f0 = document.querySelector('.footer'); if (f0) f0.classList.add('is-pulsing');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function footerPulse() {
    var footer = document.querySelector('.footer');
    if (!footer) return;
    if (reduce || !('IntersectionObserver' in window)) { footer.classList.add('is-pulsing'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { footer.classList.add('is-pulsing'); io.disconnect(); }
      });
    }, { threshold: 0.15 });
    io.observe(footer);
  }

  /* Pointer-follow spotlight for [data-spotlight] cards */
  function spotlight() {
    if (reduce) return;
    document.querySelectorAll('[data-spotlight]').forEach(function (el) {
      el.addEventListener('pointermove', function (ev) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((ev.clientX - r.left) / r.width * 100) + '%');
        el.style.setProperty('--my', ((ev.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  function init() { reveal(); footerPulse(); spotlight(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
