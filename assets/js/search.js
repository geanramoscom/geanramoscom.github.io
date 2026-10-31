(() => {
const field=document.querySelector('#site-search-input'),results=document.querySelector('#site-search-results'),form=document.querySelector('#archive-search-form');
form?.addEventListener('submit',e=>{e.preventDefault();field?.dispatchEvent(new Event('input'));});
if(!field||!results)return;
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let cache=null,job=0;
field.addEventListener('input',async()=>{
const q=norm(field.value.trim()),ticket=++job;
results.replaceChildren();
if(q.length<2)return;
try{
if(!cache){const r=await fetch('/search.json');if(!r.ok)throw Error('index');cache=await r.json();}
if(ticket!==job)return;
const found=cache.filter(p=>norm([p.title,p.text,...(p.tags||[])].join(' ')).includes(q)).slice(0,12);
if(!found.length){results.textContent='Nenhuma publicação encontrada.';return;}
const ul=document.createElement('ul');
for(const p of found){const li=document.createElement('li'),a=document.createElement('a');a.href=p.url;a.textContent=p.title;li.append(a);ul.append(li);}results.append(ul);
}catch(e){if(ticket===job)results.textContent='Busca indisponível neste momento.';}
});
})();
