(function(){
  const data=[
    ['20–30 min','2–3 h','Très facile','Non','Fin d’après-midi','Promenade courte dans Funchal'],
    ['15 min','6–8 h','Facile','Téléphérique conseillé','Matin','Vieille ville + jardins bas'],
    ['15 min','4–5 h','Facile','CrossFit à réserver','Matin','Front de mer + run'],
    ['25–35 min','8–9 h','Facile','Restaurant conseillé','Matin','Câmara de Lobos + Cabo Girão'],
    ['35–45 min','5–6 h','Très facile','Non','Fin de matinée','Machico + resort'],
    ['10–20 min','5–6 h','Facile','Non','Matin','Machico + piscine'],
    ['45–60 min','7–9 h','Modéré','Parking très tôt','Lever du jour','Santana / journée basse altitude'],
    ['45–55 min','6–7 h','Facile','Non','Matin','Machico ou resort'],
    ['15 min','5–6 h','Très facile','CrossFit à réserver','Matin','Resort + spa'],
    ['10–15 min','6–8 h','Modéré','Parking tôt','Matin','Machico + côte est'],
    ['0 min','Journée libre','Très facile','Spa si souhaité','Toute la journée','Marina + Caniçal'],
    ['1 h 20','7–8 h','Facile','Non','Matin brumeux','Porto Moniz / Seixal'],
    ['1 h 30','9–10 h','Facile','Non','Matin','Fanal + Seixal'],
    ['15 min','5–6 h','Très facile','Non','Matin','Resort + Caniçal'],
    ['0–15 min','5–6 h','Facile','Sport à prévoir','Après-midi','Spa + marina'],
    ['Variable','8–9 h','Variable','Selon activité','Matin','Road-trip ou détente'],
    ['15–20 min','2–3 h','Très facile','Non','Selon vol','Marina + départ anticipé']
  ];
  const highlights=[
    'Installation, première balade, dîner tranquille et prise de repères.',
    'Marché, vieille ville, téléphérique et Monte Palace : journée iconique.',
    'Jardin botanique le matin puis première parenthèse sportive à deux.',
    'Port de pêche, falaise vertigineuse et Fajã dos Padres : très belle journée couple.',
    'Transition vers la côte est avec Machico puis découverte du Dreams.',
    'Mer le matin, côte volcanique et run léger : journée active mais simple.',
    'Haute montagne au meilleur créneau météo, puis descente tranquille vers Santo da Serra.',
    'Maisons de Santana et forêt de Queimadas : très bon équilibre famille/nature.',
    'Machico en famille puis CrossFit et récupération : journée tampon idéale.',
    'La grande randonnée côtière du séjour, spectaculaire et très différente du reste de l’île.',
    'Une vraie journée sans programme lourd pour profiter du resort et récupérer.',
    'Forêt ancienne et ambiance brumeuse : l’une des journées les plus photogéniques.',
    'Grand road-trip nord-ouest, piscines naturelles et paysages maritimes.',
    'Journée facile centrée sur Sofia-Rosa, sans objectif de performance.',
    'Sport, spa et Caniçal : légère avant la dernière grande journée couple.',
    'Journée joker pour ce qui vous aura le plus donné envie pendant le séjour.',
    'Dernier petit-déjeuner, dernière promenade et départ sans stress.'
  ];
  const css=document.createElement('style');css.textContent='\
  .v15hero{position:relative}.v15hero .day-photo{height:360px!important}.v15hero .day-photo:after{display:block!important;background:linear-gradient(180deg,transparent 30%,rgba(5,24,19,.72))!important}.v15overlay{position:absolute;left:20px;right:20px;bottom:18px;color:white;z-index:2}.v15overlay small{display:block;font-weight:800;letter-spacing:.08em;text-transform:uppercase;opacity:.85}.v15overlay b{display:block;font-size:1.35rem;line-height:1.15;margin-top:4px}.v15brief{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0}.v15brief div{background:#f5f8f7;border:1px solid #e1e9e5;border-radius:13px;padding:10px;text-align:center}.v15brief span{display:block;font-size:.68rem;color:#6b7d75;text-transform:uppercase;letter-spacing:.05em}.v15brief b{display:block;font-size:.88rem;margin-top:3px}.v15focus{background:linear-gradient(145deg,#173128,#245b4c);color:#fff;border-radius:16px;padding:14px;margin:12px 0}.v15focus b{display:block;margin-bottom:4px}.v15focus p{margin:0;opacity:.9}.v15detailgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0}.v15detail{border:1px solid #dce6e1;border-radius:14px;padding:12px;background:#fff}.v15detail b{display:block;font-size:.78rem;color:#0f6f5f;margin-bottom:4px}.v15detail span{font-size:.86rem;color:#40564e}.v15removed{display:none!important}@media(max-width:540px){.v15hero .day-photo{height:330px!important}.v15brief{grid-template-columns:repeat(2,1fr)}.v15detailgrid{grid-template-columns:1fr}.v15overlay b{font-size:1.15rem}}';document.head.appendChild(css);
  const summaries=[...document.querySelectorAll('.summary')]; summaries.forEach(s=>{const h=s.querySelector('h2');if(h&&h.textContent.trim()==='Votre rythme')s.remove();}); const hb=document.getElementById('half-board');if(hb)hb.remove();
  document.querySelectorAll('.halfboard-note').forEach(x=>x.remove());
  for(let i=1;i<=17;i++){
    const day=document.getElementById('day-'+i);if(!day)continue;day.classList.add('v15hero');
    const photo=day.querySelector('.day-photo'); const head=day.querySelector('.day-head'); const body=day.querySelector('.day-body');
    const title=head?.querySelector('h2')?.textContent||('Jour '+i); const num=head?.querySelector('.day-num')?.textContent||('Jour '+i);
    if(photo&&!photo.querySelector('.v15overlay')){const o=document.createElement('div');o.className='v15overlay';o.innerHTML='<small>'+num+'</small><b>'+title+'</b>';photo.appendChild(o);}
    if(head&&!head.querySelector('.v15focus')){const f=document.createElement('div');f.className='v15focus';f.innerHTML='<b>✨ Pourquoi cette journée vaut le coup</b><p>'+highlights[i-1]+'</p>';head.appendChild(f);const b=document.createElement('div');b.className='v15brief';b.innerHTML='<div><span>Route</span><b>'+data[i-1][0]+'</b></div><div><span>Durée</span><b>'+data[i-1][1]+'</b></div><div><span>Niveau</span><b>'+data[i-1][2]+'</b></div>';head.appendChild(b);}
    if(body&&!body.querySelector('.v15detailgrid')){const g=document.createElement('div');g.className='v15detailgrid';g.innerHTML='<div class="v15detail"><b>🎟️ Réservation</b><span>'+data[i-1][3]+'</span></div><div class="v15detail"><b>🕒 Meilleur créneau</b><span>'+data[i-1][4]+'</span></div><div class="v15detail"><b>🅿️ Logistique</b><span>Prévoyez une marge de 15–20 min pour parking, pauses et imprévus.</span></div><div class="v15detail"><b>🔄 Plan B</b><span>'+data[i-1][5]+'</span></div>';const first=body.querySelector('.info-grid')||body.querySelector('.ratings');body.insertBefore(g,first);}
  }
  const footer=document.querySelector('footer');if(footer)footer.textContent=footer.textContent.replace(/V1\.[0-9]+/,'V1.5');
})();