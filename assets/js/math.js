document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.e-content');
  if (!container || typeof katex === 'undefined') return;
  container.querySelectorAll('[data-tex]').forEach(function (node) {
    katex.render(node.dataset.tex, node, {
      displayMode: node.classList.contains('math-display'),
      throwOnError: false, trust: false
    });
  });
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(container, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\[', right: '\\]', display: true},
        {left: '\\(', right: '\\)', display: false},
        {left: '$', right: '$', display: false}
      ],
      ignoredTags: ['script','noscript','style','textarea','pre','code'],
      throwOnError: false,
      trust: false
    });
  }
});
