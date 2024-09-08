document.getElementById('themeSwitcher').addEventListener('click', function() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
      body.setAttribute('data-bs-theme', 'light');
      this.textContent = 'Switch to Dark Theme';
    } else {
      body.setAttribute('data-bs-theme', 'dark');
      this.textContent = 'Switch to Light Theme';
    }
  });