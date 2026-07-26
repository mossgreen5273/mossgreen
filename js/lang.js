(function () {
  function apply(lang) {
    document.body.classList.toggle('en-mode', lang === 'en');
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'en' ? '日本語' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Japanese' : '英語に切り替え');
    });
  }

  function current() {
    return localStorage.getItem('site-lang') || 'ja';
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(current());
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = document.body.classList.contains('en-mode') ? 'ja' : 'en';
        localStorage.setItem('site-lang', next);
        apply(next);
      });
    });
  });
})();
