const slots=[...document.querySelectorAll('.section-slot')];

function normalizeText(value=''){
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
}

Promise.all(slots.map(async s=>{
  const id=s.dataset.section;
  const r=await fetch(id+'.html?v=20260808-4',{cache:'no-store'});
  if(!r.ok) throw new Error('Impossible de charger '+id);
  s.outerHTML=await r.text();
})).then(()=>{
  const input=document.getElementById('searchInput');
  const sections=[...document.querySelectorAll('main section')];

  function runSearch(){
    const q=normalizeText(input.value);
    sections.forEach(section=>{
      const cards=[...section.querySelectorAll('.card')];
      if(!q){
        section.classList.remove('hidden');
        cards.forEach(card=>card.classList.remove('hidden'));
        return;
      }
      let sectionMatch=false;
      cards.forEach(card=>{
        const hay=normalizeText(card.innerText+' '+(section.dataset.search||''));
        const match=hay.includes(q);
        card.classList.toggle('hidden',!match);
        if(match) sectionMatch=true;
      });
      const headingMatch=normalizeText(section.querySelector('h2')?.innerText||'').includes(q);
      if(headingMatch){cards.forEach(card=>card.classList.remove('hidden'));sectionMatch=true;}
      section.classList.toggle('hidden',!sectionMatch);
    });
  }
  input.addEventListener('input',runSearch);
  input.addEventListener('search',runSearch);
}).catch(err=>console.error(err));