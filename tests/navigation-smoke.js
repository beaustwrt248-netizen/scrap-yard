const fs=require('fs');
function read(p){return fs.readFileSync(p,'utf8');}
const root='app/src/main/assets/';
const index=read(root+'index.html');
const systems=read(root+'v17.js');
const nav=read(root+'v18.js');
const toon=read(root+'v22.js');
const unified=read(root+'v23.js');
const unifiedCss=read(root+'v23.css');
const required=['openMarket','openInventory14','openMessages14','openMap14','openCustomers14','openAchievements14','openUpgrades'];
for(const fn of required){if(!systems.includes('window.'+fn+'='))throw new Error('Missing systems route: '+fn);}
const routeMap={home:'renderHome',inventory:'openInventory14',messages:'openMessages14',map:'openMap14',repairs:'openRepairs',customers:'openCustomers14',market:'openMarket',upgrades:'openUpgrades',achievements:'openAchievements14'};
for(const [route,handler] of Object.entries(routeMap)){
  const re=new RegExp('\\b'+route+'\\s*:\\s*[\\\'\"]'+handler+'[\\\'\"]');
  if(!re.test(nav))throw new Error('Missing navigation route: '+route+' -> '+handler);
}
for(const script of ['core.js','app9.js','v12.js','v13.js','v17.js','v15.js','v18.js','v22.js','v23.js']){if(!index.includes('src="'+script+'"'))throw new Error('index missing '+script);}
for(const css of ['app9.css','v11.css','v12.css','v13.css','v14.css','v15.css','v22.css','v23.css']){if(!index.includes('href="'+css+'"'))throw new Error('index missing '+css);}
for(const legacy of ['v14.js','v16.js','v19.js','v20.js','v21.js']){if(index.includes('src="'+legacy+'"'))throw new Error('legacy visual/runtime layer must not load: '+legacy);}
for(const legacyCss of ['v19.css','v20.css','v21.css']){if(index.includes('href="'+legacyCss+'"'))throw new Error('legacy visual CSS must not load: '+legacyCss);}
if(!toon.includes('Jake Miller')||!toon.includes('Mia Chen'))throw new Error('illustrated customer layer missing profiles');
for(const hook of ['v23World','v23Dialogue','v23PersonStage','v23CounterStage','v23BenchTitle']){if(!unified.includes(hook))throw new Error('v23 presentation hook missing: '+hook);}
for(const cls of ['.v23Scene','.v23Repair','.v23DeviceBench','.v23Dialogue']){if(!unifiedCss.includes(cls))throw new Error('v23 style missing: '+cls);}
console.log('SCRAP//YARD v0.23 navigation + unified presentation smoke test passed');
