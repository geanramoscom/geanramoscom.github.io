// Numeric revision displayed in the footer, derived from the GitHub branch history.
// The static version in _config.yml remains the fallback when GitHub is unavailable.
(() => {
  const node = document.getElementById('blog-version');
  if (!node) return;

  const base = node.dataset.baseVersion || '2.0.0';
  const parts = base.split('.');
  const major = Number(parts[0]);
  const minor = Number(parts[1]);
  if (!Number.isInteger(major) || !Number.isInteger(minor)) return;

  const endpoint = 'https://api.github.com/repos/geanramoscom/geanramoscom.github.io/commits?sha=main&per_page=1';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  fetch(endpoint, {
    headers: { Accept: 'application/vnd.github+json' },
    signal: controller.signal
  })
    .then((response) => {
      if (!response.ok) throw new Error('GitHub request failed');
      const link = response.headers.get('Link') || '';
      const match = link.match(/[?&]page=(\d+)>; rel="last"/);
      if (match) return Number(match[1]);
      // Repositories with a single commit have no pagination header.
      return response.json().then((commits) => Array.isArray(commits) ? commits.length : 0);
    })
    .then((revision) => {
      if (Number.isSafeInteger(revision) && revision > 0) {
        node.textContent = major + '.' + minor + '.' + revision;
      }
    })
    .catch(() => { /* Keep the configured static version on network/API failure. */ })
    .finally(() => clearTimeout(timeout));
})();
