(function(){
 const G=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
 const spots={
  1:[['📍','Sé Cathedral','Sé Catedral do Funchal Madeira'],['🌴','Parque Santa Catarina','Parque de Santa Catarina Funchal']],
  2:[['🚠','Téléphérique','Funchal Cable Car Madeira'],['🌺','Monte Palace','Monte Palace Madeira'],['⛪','Église de Monte','Igreja de Nossa Senhora do Monte Madeira']],
  3:[['🌺','Jardin botanique','Madeira Botanical Garden'],['🏋️','CrossFit FNC','CrossFit FNC Funchal Madeira']],
  4:[['⚓','Câmara de Lobos','Baia de Camara de Lobos Madeira'],['🌊','Cabo Girão','Cabo Girao Skywalk Madeira'],['🚡','Fajã dos Padres','Faja dos Padres Madeira']],
  5:[['🏖️','Machico','Praia de Machico Madeira'],['🔭','Pico do Facho','Miradouro do Pico do Facho Machico']],
  6:[['🏖️','Prainha','Prainha do Canical Madeira'],['⚓','Caniçal','Canical Madeira']],
  7:[['🥾','Départ Pico do Arieiro','Pico do Arieiro Madeira'],['🔭','Miradouro do Juncal','Miradouro do Juncal Madeira']],
  8:[['🏠','Maisons de Santana','Casas Tipicas de Santana Madeira'],['🌲','Queimadas','Parque Florestal das Queimadas Madeira']],
  9:[['🏖️','Machico','Praia de Machico Madeira'],['🏋️','CrossFit FNC','CrossFit FNC Funchal Madeira']],
  10:[['🥾','Départ PR8','Baia d Abra Madeira'],['🌋','São Lourenço','Ponta de Sao Lourenco Madeira']],
  11:[['⚓','Marina Quinta do Lorde','Marina Quinta do Lorde Madeira'],['🐋','Caniçal','Museu da Baleia da Madeira']],
  12:[['🌳','Fanal','Posto Florestal do Fanal Madeira'],['🔭','Ribeira da Janela','Miradouro da Ribeira da Janela Madeira']],
  13:[['🏊','Piscines Porto Moniz','Piscinas Naturais Velhas Porto Moniz'],['🌊','Seixal','Praia do Porto do Seixal Madeira']],
  14:[['🏖️','Machico','Praia de Machico Madeira'],['🔭','Pico do Facho','Miradouro do Pico do Facho Machico']],
  15:[['⚓','Caniçal','Canical Madeira'],['🏋️','CrossFit FNC','CrossFit FNC Funchal Madeira']],
  16:[['🌅','Ponta do Sol','Ponta do Sol Madeira'],['🏖️','Calheta','Praia da Calheta Madeira']],
  17:[['✈️','Aéroport','Madeira Cristiano Ronaldo Airport']]
 };
 const runs=[
  ['🏃 5–6 km · facile','Lido → Praia Formosa','Funchal Lido Madeira','Promenade océanique, quasi plate, parfaite pour footing récupération.'],
  ['🏃 8–10 km · panoramique','Lido → Câmara de Lobos','Lido Funchal Madeira','Prolonger la promenade vers Câmara de Lobos; demi-tour selon la distance voulue.'],
  ['🏃 15,5 km · trail modéré','Porto da Cruz → Machico','Praia da Alagoa Porto da Cruz Madeira','Trail officiel : env. 370 m de montée, forêt et vues mer.']
 ];
 const css=document.createElement('style');css.textContent='.hero:after{content:"V1.6"!important}.v16poi,.v16sport{margin:14px 0;padding:14px;border:1px solid #dce6e1;border-radius:16px;background:#fff}.v16title{font-weight:900;color:#173128;margin-bottom:9px}.v16links{display:flex;flex-wrap:wrap;gap:7px}.v16links a,.v16btn{display:inline-flex;align-items:center;gap:5px;padding:9px 11px;border-radius:11px;background:#eef7f4;color:#0f6f5f;text-decoration:none;font-size:.78rem;font-weight:850;border:1px solid #d4e8e1}.v16sportcard{padding:11px 0;border-top:1px solid #edf1ef}.v16sportcard:first-of-type{border-top:0}.v16sportcard b{display:block;color:#173128}.v16sportcard p{margin:4px 0 8px;color:#5c6e67;font-size:.82rem}.v16weatherbar{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:8px}.v16weatherbar button{border:0;background:#173128;color:#fff;border-radius:10px;padding:8px 10px;font-weight:800}.v16updated{font-size:.72rem;color:#687b73}.v16must{margin:12px 0;padding:12px 14px;border-left:4px solid #d3a83f;background:#fff8e8;border-radius:0 12px 12px 0;font-size:.84rem;color:#5b4a20}';document.head.appendChild(css);
 for(let i=1;i<=17;i++){const d=document.getElementById('day-'+i),body=d?.querySelector('.day-body');if(!body)continue;const p=document.createElement('div');p.className='v16poi';p.innerHTML='<div class="v16title">📍 Lieux du jour</div><div class="v16links">'+(spots[i]||[]).map(x=>'<a target="_blank" rel="noopener" href="'+G(x[2])+'">'+x[0]+' '+x[1]+' · Maps</a>').join('')+'</div>';body.insertBefore(p,body.firstChild);const must=(spots[i]||[])[0];if(must){const n=document.createElement('div');n.className='v16must';n.innerHTML='<b>⭐ Ne pas rater :</b> '+must[1]+' · <a target="_blank" rel="noopener" href="'+G(must[2])+'">ouvrir dans Maps</a>';p.after(n);}}
 const host=document.getElementById('day-3')?.querySelector('.day-body');if(host){const s=document.createElement('div');s.className='v16sport';s.innerHTML='<div class="v16title">🏋️ Sport à Madère · adresses concrètes</div><div class="v16sportcard"><b>CrossFit FNC · Monte</b><p>Box CrossFit affiliée à Funchal, Estrada Luso Brasileira 47-B. À contacter avant le drop-in.</p><div class="v16links"><a target="_blank" rel="noopener" href="'+G('CrossFit FNC Funchal Madeira')+'">📍 Maps</a><a target="_blank" rel="noopener" href="https://www.crossfit.com/gym/10637/crossfit-fnc">🏋️ Fiche CrossFit</a></div></div><div class="v16sportcard"><b>Naval Box Insular CrossFit</b><p>Alternative crosstraining du Clube Naval do Funchal.</p><div class="v16links"><a target="_blank" rel="noopener" href="'+G('Naval Box Insular CrossFit Funchal')+'">📍 Maps</a></div></div>'+runs.map(r=>'<div class="v16sportcard"><b>'+r[0]+' · '+r[1]+'</b><p>'+r[3]+'</p><div class="v16links"><a target="_blank" rel="noopener" href="'+G(r[2])+'">📍 Départ Maps</a></div></div>').join('');host.appendChild(s);}
 const f=document.querySelector('footer');if(f)f.textContent=f.textContent.replace(/V1\.[0-9]+/,'V1.6');
 window.__v16RefreshWeather=function(){const old=document.querySelector('script[data-v14live]');if(old)old.remove();document.querySelectorAll('.v14wx,.v14global').forEach(x=>x.remove());const s=document.createElement('script');s.src='v14.js?v=16live-'+Date.now();s.dataset.v14live='1';document.body.appendChild(s);setTimeout(addWeatherControls,1200)};
 function addWeatherControls(){document.querySelectorAll('.v14wx').forEach(box=>{if(box.querySelector('.v16weatherbar'))return;const b=document.createElement('div');b.className='v16weatherbar';b.innerHTML='<span class="v16updated">Mis à jour à '+new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})+'</span><button type="button">↻ Actualiser</button>';b.querySelector('button').onclick=window.__v16RefreshWeather;box.appendChild(b);});}
 setTimeout(addWeatherControls,1400);setInterval(window.__v16RefreshWeather,60*60*1000);
})();