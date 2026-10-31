(() => {
 const root=document.documentElement;
 const buttons=[...document.querySelectorAll('[data-set-theme]')];
 const sync=()=>buttons.forEach(b=>{
  const selected=b.dataset.setTheme===root.dataset.theme;
  b.setAttribute('aria-pressed',String(selected));b.classList.toggle('is-active',selected);
 });
 buttons.forEach(b=>b.addEventListener('click',()=>{
  const theme=b.dataset.setTheme;
  root.dataset.theme=theme;root.style.colorScheme=theme==='light'?'light':'dark';
  try{localStorage.setItem('geanramos-v2-theme',theme)}catch(e){}
  sync();
 }));
 sync();
})();
