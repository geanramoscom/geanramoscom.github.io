(() => {
 const field=document.querySelector('#archive-search'),list=document.querySelector('#archive-list'),status=document.querySelector('#search-results');
 if(!field||!list)return;
 const nodes=[...list.querySelectorAll('.archive-entry')];
 const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 field.addEventListener('input',()=>{
  const q=normalize(field.value.trim());let shown=0;
  nodes.forEach(n=>{const match=normalize(n.textContent).includes(q);n.hidden=!match;if(match)shown++});
  list.querySelectorAll('.year-heading').forEach(h=>{let el=h.nextElementSibling,any=false;while(el&&!el.classList.contains('year-heading')){if(el.classList.contains('archive-entry')&&!el.hidden)any=true;el=el.nextElementSibling}h.hidden=!any});
  status.textContent=q?(shown?shown+' publicações encontradas':'Nenhuma publicação encontrada'):'';
 });
})();
