// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('mobile-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('mobile-nav-open');
    });
  }

  // Obfuscated email — replace the two parts with your actual address
  var u = 'kontakt';
  var d = 'fw-schwerzenbach.ch';
  var addr = u + '@' + d;

  // Render email link
  var emailEl = document.getElementById('email-link');
  if (emailEl) {
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    emailEl.appendChild(a);
  }

  // Contact form
  var form = document.getElementById('contact-form');
  if (!form) return;

  // Prefill from URL params (e.g. ?betreff=mitmachen)
  var params = new URLSearchParams(window.location.search);
  if (params.get('betreff') === 'mitmachen') {
    var msg = document.getElementById('message');
    if (msg) {
      msg.value = 'Hallo\n\nich interessiere mich für die Feuerwehr Schwerzenbach und möchte gerne mitmachen.\n\nIhr erreicht mich am besten per:\n- E-Mail: (siehe oben)\n- Telefon: \n- WhatsApp: \n\nIch freue mich auf eure Rückmeldung!';
    }
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth' });
  }

  // Submit → open mailto with form contents
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = form.querySelector('#name').value;
    var email = form.querySelector('#email').value;
    var phone = form.querySelector('#phone').value;
    var message = form.querySelector('#message').value;

    var body = 'Name: ' + name + '\n'
      + 'E-Mail: ' + email + '\n'
      + (phone ? 'Telefon: ' + phone + '\n' : '')
      + '\n' + message;

    var subject = params.get('betreff') === 'mitmachen'
      ? 'Mitmachen bei der Feuerwehr'
      : 'Kontaktanfrage über Website';

    window.location.href = 'mailto:' + addr
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    var status = document.getElementById('form-status');
    if (status) {
      status.textContent = 'Dein E-Mail-Programm sollte sich geöffnet haben. Falls nicht, schreibe direkt an ' + addr;
      status.hidden = false;
    }
  });
});
