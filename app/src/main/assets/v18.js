(function(){
'use strict';
var ROUTES={
 home:'renderHome',
 inventory:'openInventory14',
 messages:'openMessages14',
 map:'openMap14',
 repairs:'openRepairs',
 customers:'openCustomers14',
 market:'openMarket',
 upgrades:'openUpgrades',
 achievements:'openAchievements14'
};
function classify(btn){
 if(!btn)return '';
 var v=btn.getAttribute('data-v');
 if(v)return v;
 var t=(btn.textContent||'').replace(/\s+/g,' ').trim().toUpperCase();
 if(t.indexOf('CUSTOMERS')>=0)return 'customers';
 if(t.indexOf('MARKET')>=0)return 'market';
 if(t.indexOf('UPGRADES')>=0)return 'upgrades';
 if(t.indexOf('ACHIEVE')>=0)return 'achievements';
 if(t.indexOf('REPAIRS')>=0)return 'repairs';
 if(t.indexOf('INVENTORY')>=0)return 'inventory';
 if(t.indexOf('MESSAGES')>=0)return 'messages';
 if(t.indexOf('MAP')>=0)return 'map';
 if(t.indexOf('SHOP')>=0||t.indexOf('HOME')>=0||t.indexOf('DASHBOARD')>=0)return 'home';
 return '';
}
function resolve(route){var name=ROUTES[route];return name&&typeof window[name]==='function'?window[name]:null;}
function activate(route){
 var fn=resolve(route);
 if(!fn){
   if(typeof window.toast==='function')window.toast('Screen unavailable: '+route);
   return false;
 }
 try{fn();return true}catch(err){
   console.error('SCRAP//YARD route failed',route,err);
   if(typeof window.toast==='function')window.toast('Route error: '+route);
   return false;
 }
}
function bind(){
 var buttons=document.querySelectorAll('.bottomnav button,.side button');
 for(var i=0;i<buttons.length;i++){
   (function(btn){
     var route=classify(btn);if(!route)return;
     btn.setAttribute('data-route',route);
     btn.disabled=false;
     btn.style.pointerEvents='auto';
     if(btn.getAttribute('data-v18-bound')==='1')return;
     btn.setAttribute('data-v18-bound','1');
     btn.onclick=function(ev){
       if(ev){ev.preventDefault();ev.stopPropagation();}
       activate(route);
       return false;
     };
   })(buttons[i]);
 }
}
window.__navHealth=function(){
 var out={},keys=Object.keys(ROUTES);
 for(var i=0;i<keys.length;i++){var k=keys[i];out[k]=!!resolve(k);}
 return out;
};
window.__routeTest=function(route){return activate(route);};
var scheduled=false;
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(function(){scheduled=false;bind();});}
var obs=new MutationObserver(schedule);
window.addEventListener('load',function(){
 bind();
 var main=document.getElementById('main');
 if(main)obs.observe(main,{childList:true,subtree:true});
});
})();