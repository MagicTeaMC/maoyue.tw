(function () {
  if (!window.matchMedia('(max-width: 640px)').matches) return;

  var toggle = document.querySelector('.menu-toggle');
  var nav    = document.querySelector('.nav-links');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav')) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
})();