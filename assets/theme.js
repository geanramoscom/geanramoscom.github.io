(() => {
  const key = 'gean-theme';
  const button = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const apply = theme => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (button) {
      button.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
      button.setAttribute('title', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  };
  let theme = root.dataset.theme || 'dark';
  apply(theme);
  button?.addEventListener('click', () => {
    theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(theme);
    try { localStorage.setItem(key, theme); } catch (e) {}
  });
})();
