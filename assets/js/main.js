// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('mobile-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('mobile-nav-open');
    });
  }

  // Obfuscated email
  var u = 'kontakt';
  var d = 'fw-schwerzenbach.ch';
  var addr = u + '@' + d;

  // Render email link on contact page
  var emailEl = document.getElementById('email-link');
  if (emailEl) {
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    emailEl.appendChild(a);
  }

  // Rewrite obfuscated email links: href="#email-{key}" → mailto with subject
  var subjects = {
    mitmachen: 'Mitmachen bei der Feuerwehr',
    kontakt: 'Kontaktanfrage über Website'
  };
  var emailLinks = document.querySelectorAll('a[href^="#email-"]');
  for (var i = 0; i < emailLinks.length; i++) {
    var key = emailLinks[i].getAttribute('href').replace('#email-', '');
    var subject = subjects[key] || '';
    emailLinks[i].href = 'mailto:' + addr
      + (subject ? '?subject=' + encodeURIComponent(subject) : '');
  }
});
