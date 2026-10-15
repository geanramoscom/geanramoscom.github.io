(() => {
  const button = document.getElementById('search-toggle');
  const panel = document.getElementById('site-search');
  const field = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!button || !panel || !field || !results) return;
  let posts;
  const normalize = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  button.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
    if (!panel.hidden) field.focus();
  });
  field.addEventListener('input', async () => {
    const q = normalize(field.value.trim());
    results.replaceChildren();
    if (q.length < 2) return;
    if (!posts) {
      try {
        const response = await fetch(button.dataset.indexUrl);
        if (!response.ok) throw Error('Não foi possível carregar a pesquisa.');
        posts = await response.json();
      } catch {
        results.textContent = 'Pesquisa indisponível neste momento.';
        return;
      }
    }
    const matches = posts.filter(p => normalize(p.title + ' ' + p.content).includes(q)).slice(0, 10);
    if (!matches.length) { results.textContent = 'Nenhuma publicação encontrada.'; return; }
    const list = document.createElement('ul');
    for (const p of matches) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = p.url; a.textContent = p.title;
      li.append(a); list.append(li);
    }
    results.append(list);
  });
})();
