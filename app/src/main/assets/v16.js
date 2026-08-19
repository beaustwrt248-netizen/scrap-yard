(()=>{
const actions={
  home:()=>window.renderHome?.(),
  inventory:()=>window.openInventory14?.(),
  messages:()=>window.openMessages14?.(),
  map:()=>window.openMap14?.(),
  repairs:()=>window.openRepairs?.(),
  customers:()=>window.openCustomers14?.(),
  market:()=>window.openMarket?.(),
  upgrades:()=>window.openUpgrades?.(),
  achievements:()=>window.openAchievements14?.()
};
function run(name){const fn=actions[name];if(typeof fn==='function'){fn();return true}return false}
function classify(btn){
  if(btn.dataset?.v) return btn.dataset.v;
  const t=(btn.textContent||'').replace(/\s+/g,' ').trim().toUpperCase();
  if(t.includes('CUSTOMERS'))return 'customers';
  if(t.includes('MARKET'))return 'market';
  if(t.includes('UPGRADES'))return 'upgrades';
  if(t.includes('ACHIEVE'))return 'achievements';
  if(t.includes('REPAIRS'))return 'repairs';
  if(t.includes('INVENTORY'))return 'inventory';
  if(t.includes('MESSAGES'))return 'messages';
  if(t.includes('MAP'))return 'map';
  if(t.includes('SHOP')||t.includes('HOME')||t.includes('DASHBOARD'))return 'home';
  return '';
}
function handle(e){
  const btn=e.target.closest('button');
  if(!btn)return;
  const nav=btn.closest('.bottomnav,.side');
  if(!nav)return;
  const name=classify(btn);
  if(!name)return;
  e.preventDefault();e.stopPropagation();
  run(name);
}
document.addEventListener('click',handle,true);
function explicit(){
  document.querySelectorAll('.bottomnav button,.side button').forEach(btn=>{
    const name=classify(btn);if(!name)return;
    btn.dataset.route=name;
    btn.disabled=false;
    btn.style.pointerEvents='auto';
  });
}
const obs=new MutationObserver(()=>requestAnimationFrame(explicit));
window.addEventListener('load',()=>{explicit();const main=document.getElementById('main');if(main)obs.observe(main,{childList:true,subtree:true})});
})();
