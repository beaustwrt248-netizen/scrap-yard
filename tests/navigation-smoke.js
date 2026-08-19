const fs=require('fs');
function read(p){return fs.readFileSync(p,'utf8');}
const root='app/src/main/assets/';
const index=read(root+'index.html');
const systems=read(root+'v17.js');
const nav=read(root+'v18.js');
const required=['openMarket','openInventory14','openMessages14','openMap14','openCustomers14','openAchievements14','openUpgrades'];
for(const fn of required){
  if(!systems.includes('window.'+fn+'=')) throw new Error('Missing systems route: '+fn);
}
for(const route of ['home','inventory','messages','map','repairs','customers','market','upgrades','achievements']){
  if(!nav.includes(route+":") && !nav.includes(route+"'")) throw new Error('Missing navigation route: '+route);
}
for(const script of ['core.js','app9.js','v12.js','v13.js','v17.js','v15.js','v18.js']){
  if(!index.includes('src="'+script+'"')) throw new Error('index missing '+script);
}
if(index.includes('src="v14.js"')) throw new Error('broken v14 systems layer must not load');
if(index.includes('src="v16.js"')) throw new Error('legacy v16 delegated nav must not load');
console.log('SCRAP//YARD navigation smoke test passed');
