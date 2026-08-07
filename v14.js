(function(){
  const days=[
    {id:1,date:'2026-08-08',name:'Funchal',lat:32.6507,lon:-16.9087,sensitive:false},
    {id:2,date:'2026-08-09',name:'Funchal / Monte',lat:32.6750,lon:-16.9020,sensitive:false},
    {id:3,date:'2026-08-10',name:'Jardin botanique',lat:32.6627,lon:-16.8947,sensitive:false},
    {id:4,date:'2026-08-11',name:'Câmara de Lobos',lat:32.6488,lon:-16.9759,sensitive:false},
    {id:5,date:'2026-08-12',name:'Caniçal',lat:32.7387,lon:-16.7387,sensitive:false},
    {id:6,date:'2026-08-13',name:'Prainha',lat:32.7424,lon:-16.7146,sensitive:true,swap:[8,9,11,14]},
    {id:7,date:'2026-08-14',name:'Pico do Arieiro',lat:32.7353,lon:-16.9289,sensitive:true,mountain:true,swap:[8,9,11,14,15]},
    {id:8,date:'2026-08-15',name:'Santana',lat:32.8023,lon:-16.8800,sensitive:false},
    {id:9,date:'2026-08-16',name:'Machico',lat:32.7162,lon:-16.7659,sensitive:false},
    {id:10,date:'2026-08-17',name:'Ponta de São Lourenço',lat:32.7482,lon:-16.7007,sensitive:true,swap:[8,9,11,14,15]},
    {id:11,date:'2026-08-18',name:'Caniçal / resort',lat:32.7387,lon:-16.7387,sensitive:false},
    {id:12,date:'2026-08-19',name:'Fanal',lat:32.8104,lon:-17.1417,sensitive:true,swap:[11,14,15]},
    {id:13,date:'2026-08-20',name:'Porto Moniz',lat:32.8667,lon:-17.1667,sensitive:true,swap:[11,14,15]},
    {id:14,date:'2026-08-21',name:'Machico',lat:32.7162,lon:-16.7659,sensitive:false},
    {id:15,date:'2026-08-22',name:'Caniçal',lat:32.7387,lon:-16.7387,sensitive:false},
    {id:16,date:'2026-08-23',name:'Sortie flexible',lat:32.7162,lon:-16.7659,sensitive:true,swap:[11,14,15]},
    {id:17,date:'2026-08-24',name:'Aéroport',lat:32.6979,lon:-16.7745,sensitive:false}
  ];
  const W={0:['☀️','Ciel dégagé'],1:['🌤️','Plutôt dégagé'],2:['⛅','Partiellement nuageux'],3:['☁️','Couvert'],45:['🌫️','Brouillard'],48:['🌫️','Brouillard'],51:['🌦️','Bruine faible'],53:['🌦️','Bruine'],55:['🌧️','Bruine forte'],61:['🌦️','Pluie faible'],63:['🌧️','Pluie'],65:['🌧️','Pluie forte'],80:['🌦️','Averses'],81:['🌧️','Averses'],82:['⛈️','Fortes averses'],95:['⛈️','Orage'],96:['⛈️','Orage'],99:['⛈️','Orage']};
  const css=document.createElement('style');
  css.textContent='.hero:after{content:"V1.5"!important}.v14wx{margin:14px 0 0;padding:12px 14px;border-radius:15px;background:#eef7f4;border:1px solid #d4e8e1}.v14wxhead{display:flex;align-items:center;justify-content:space-between;gap:8px}.v14wx strong{font-size:.92rem}.v14wxsmall{font-size:.78rem;color:#60736b}.v14wxgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:9px}.v14wxgrid span{background:#fff;border:1px solid #dce6e1;border-radius:10px;padding:8px 5px;text-align:center;font-size:.74rem}.v14swap{margin-top:10px;border-radius:12px;padding:10px 12px;font-size:.78rem;font-weight:750}.v14ok{background:#eaf7ef;color:#22613b}.v14warn{background:#fff1df;color:#7a531b}.v14bad{background:#ffe7e3;color:#8a3028}.v14pending{background:#f4f5f4;color:#66726e}.v14global{max-width:920px;margin:12px auto 0;padding:0 12px}.v14globalbox{background:#fff;border:1px solid #dce6e1;border-radius:18px;padding:14px;box-shadow:0 8px 24px rgba(20,50,40,.07)}.v14globalbox b{color:#0f6f5f}@media(max-width:520px){.v14wxgrid{grid-template-columns:repeat(2,1fr)}}';
  document.head.appendChild(css);
  const score=(x,d)=>{let s=100;if(x.precip>=60)s-=50;else if(x.precip>=35)s-=30;else if(x.precip>=20)s-=15;if(x.wind>=45)s-=35;else if(x.wind>=30)s-=18;if(x.code>=61&&x.code<=99)s-=25;if(d.mountain&&x.cloud>=75)s-=35;else if(d.sensitive&&x.cloud>=85)s-=15;return Math.max(0,s)};
  const label=s=>s>=75?['v14ok','✅ Conditions favorables']:s>=50?['v14warn','⚠️ Conditions moyennes']:['v14bad','🔄 Mieux vaut envisager un échange'];
  const dash=document.querySelector('.v12dash');
  if(dash&&!document.querySelector('.v14global')){const g=document.createElement('section');g.className='v14global';g.innerHTML='<div class="v14globalbox"><b>🌦️ Météo du séjour</b><div class="v14wxsmall" id="v14globaltext">Chargement des prévisions locales…</div></div>';dash.insertAdjacentElement('afterend',g);}
  async function load(d){
    const day=document.getElementById('day-'+d.id); if(!day)return null;
    const head=day.querySelector('.day-head');
    let box=day.querySelector('.v14wx'); if(!box){box=document.createElement('div');box.className='v14wx';head.appendChild(box);} box.innerHTML='<div class="v14wxhead"><strong>🌦️ '+d.name+'</strong><span class="v14wxsmall">'+d.date.slice(8,10)+'/'+d.date.slice(5,7)+'</span></div><div class="v14wxsmall">Chargement de la prévision…</div>';
    try{
      const u='https://api.open-meteo.com/v1/forecast?latitude='+d.lat+'&longitude='+d.lon+'&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&hourly=cloud_cover&timezone=Atlantic%2FMadeira&forecast_days=16';
      const r=await fetch(u); if(!r.ok)throw new Error('HTTP '+r.status); const j=await r.json(); const k=j.daily.time.indexOf(d.date);
      if(k<0){box.innerHTML='<div class="v14wxhead"><strong>🌦️ '+d.name+'</strong></div><div class="v14swap v14pending">Prévision pas encore disponible pour cette date.</div>';return null;}
      const cloudVals=[]; if(j.hourly&&j.hourly.time){j.hourly.time.forEach((t,idx)=>{if(t.slice(0,10)===d.date&&Number.isFinite(j.hourly.cloud_cover[idx]))cloudVals.push(j.hourly.cloud_cover[idx]);});}
      const cloud=cloudVals.length?Math.round(cloudVals.reduce((a,b)=>a+b,0)/cloudVals.length):0;
      const x={code:j.daily.weather_code[k],max:Math.round(j.daily.temperature_2m_max[k]),min:Math.round(j.daily.temperature_2m_min[k]),precip:Math.round(j.daily.precipitation_probability_max[k]||0),wind:Math.round(j.daily.wind_speed_10m_max[k]||0),cloud};
      const wl=W[x.code]||['🌤️','Variable']; const s=score(x,d),L=label(s);
      const swap=d.sensitive&&s<60&&d.swap?.length?'<div class="v14swap '+L[0]+'">'+L[1]+' · alternatives faciles : '+d.swap.map(n=>'J'+n).join(', ')+'</div>':'<div class="v14swap '+L[0]+'">'+L[1]+'</div>';
      box.innerHTML='<div class="v14wxhead"><strong>'+wl[0]+' '+wl[1]+' · '+d.name+'</strong><span class="v14wxsmall">prévision locale</span></div><div class="v14wxgrid"><span>🌡️ <b>'+x.min+'–'+x.max+'°</b></span><span>🌧️ <b>'+x.precip+'%</b></span><span>💨 <b>'+x.wind+' km/h</b></span><span>☁️ <b>'+x.cloud+'%</b></span></div>'+swap;
      return {d,x,s};
    }catch(e){box.innerHTML='<div class="v14wxhead"><strong>🌦️ '+d.name+'</strong></div><div class="v14swap v14pending">Météo momentanément indisponible. Touchez pour réessayer en rechargeant la page.</div>';return null;}
  }
  Promise.all(days.map(load)).then(res=>{const a=res.filter(Boolean),g=document.getElementById('v14globaltext');if(!g)return;if(!a.length){g.textContent='Les prévisions ne sont pas encore disponibles dans la fenêtre météo.';return;}const risky=a.filter(o=>o.d.sensitive&&o.s<60);g.textContent=!risky.length?'Aucune journée météo-sensible ne nécessite de permutation pour l’instant.':'À surveiller : '+risky.map(o=>'J'+o.d.id+' '+o.d.name).join(' · ')+'. Les alternatives sont indiquées dans chaque journée.';});
})();