const fs=require('fs');
function read(p){return fs.readFileSync(p,'utf8');}
const root='app/src/main/assets/';
const index=read(root+'index.html');
const systems=read(root+'v17.js');
const nav=read(root+'v18.js');
const living=read(root+'v19.js');
const composition=read(root+'v20.js');
const required=['openMarket','openInventory14','openMessages14','openMap14','openCustomers14','openAchievements14','openUpgrades'];
for(const fn of required){if(!systems.includes('window.'+fn+'='))throw new Error('Missing systems route: '+fn);}
for(const route of ['home','inventory','messages','map','repairs','customers','market','upgrades','achievements']){if(!nav.includes(route+":")&&!nav.includes(route+"'"))throw new Error('Missing navigation route: '+route);}
for(const script of ['core.js','app9.js','v12.js','v13.js','v17.js','v15.js','v18.js','v19.js','v20.js']){if(!index.includes('src="'+script+'"'))throw new Error('index missing '+script);}
for(const css of ['app9.css','v11.css','v12.css','v13.css','v14.css','v15.css','v19.css','v20.css']){if(!index.includes('href="'+css+'"'))throw new Error('index missing '+css);}
if(index.includes('src="v14.js"'))throw new Error('broken v14 systems layer must not load');
if(index.includes('src="v16.js"'))throw new Error('legacy v16 delegated nav must not load');
if(!living.includes("document.querySelector('.scene')"))throw new Error('v19 living shop hook missing');
if(!composition.includes("classList.add('v20Shop')"))throw new Error('v20 shop composition hook missing');
console.log('SCRAP//YARD navigation + v20 shop smoke test passed');
