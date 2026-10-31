document.addEventListener('DOMContentLoaded', () => {
  if (typeof Plyr !== 'function') {
    console.warn('Plyr não carregou; mantendo o iframe original.');
    return;
  }
  document.querySelectorAll('.e-content .plyr__video-embed').forEach((element) => {
    try {
      const player = new Plyr(element, {
        ratio: '16:9',
        youtube: { noCookie: true, rel: 0, playsinline: 1 },
      });
      player.on('error', (event) => console.warn('Erro do player:', event.detail));
    } catch (error) {
      console.warn('Falha ao iniciar o Plyr:', error);
    }
  });
});
