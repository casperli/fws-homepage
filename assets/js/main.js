// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('mobile-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('mobile-nav-open');
    });
  }
});
