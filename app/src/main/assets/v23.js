(function(){'use strict';
function q(s,r){return (r||document).querySelector(s)}function qa(s,r){return Array.from((r||document).querySelectorAll(s))}
function shop(){var scene=q('.scene'),layout=q('.shop-layout');if(!scene||!layout||scene.dataset.v23==='1')return;scene.dataset.v23='1';scene.classList.add('v23Scene');layout.classList.add('v23Layout');
var speech=q('.speech',scene),decision=q('.decision',scene),customer=q('.customer',scene),device=q('.device',scene),counter=q('.counter',scene),info=q('.info',scene);if(!speech||!decision||!customer||!device||!counter)return;
qa('.v19Bg,.v20Decor,.v21Backdrop,.v21Status',scene).forEach(function(n){n.remove()});var oldNeon=q('.neon',scene),oldShelves=q('.shelves',scene);if(oldNeon)oldNeon.remove();if(oldShelves)oldShelves.remove();
var world=document.createElement('div');world.className='v23World';world.innerHTML='<div class="v23Ceiling"><i></i><i></i></div><div class="v23Brand">SCRAP<span>//</span>YARD</div><div class="v23Fix">WE FIX<br><b>ANYTHING!</b></div><div class="v23Backwall"><div class="v23Peg">🪛　🔧　⚙️　🧰</div><div class="v23Shelf"><i></i><i></i><i></i><i></i><i></i></div><div class="v23Poster">BUY • FIX • FLIP</div></div><div class="v23Lamp"></div><div class="v23Cat">🐈</div><div class="v23Depth"></div>';scene.prepend(world);
var dialogue=document.createElement('section');dialogue.className='v23Dialogue';scene.appendChild(dialogue);dialogue.appendChild(speech);dialogue.appendChild(decision);
var personWrap=document.createElement('div');personWrap.className='v23PersonStage';scene.appendChild(personWrap);personWrap.appendChild(customer);
var counterWrap=document.createElement('div');counterWrap.className='v23CounterStage';scene.appendChild(counterWrap);counterWrap.appendChild(counter);counterWrap.appendChild(device);
var req=document.createElement('div');req.className='v23Request';req.innerHTML='<b>CUSTOMER REQUEST</b><span>Inspect the device, decide whether to take the job, then repair it at the bench.</span>';scene.appendChild(req);
if(info){info.classList.add('v23Info');scene.appendChild(info)}
}
function repair(){var page=q('.repairPage');if(!page||page.dataset.v23==='1')return;page.dataset.v23='1';page.classList.add('v23Repair');var top=q('.repairTop',page),steps=q('.steps',page),bench=q('.bench',page),mini=q('.mini',page);if(top)top.classList.add('v23RepairSummary');if(steps)steps.classList.add('v23Steps');if(bench)bench.classList.add('v23Bench');if(mini)mini.classList.add('v23Mini');var db=q('.deviceBench',page);if(db){db.classList.add('v23DeviceBench');var label=document.createElement('div');label.className='v23BenchTitle';label.innerHTML='<b>WORKBENCH</b><span>Follow the current repair step and use the highlighted tool.</span>';db.prepend(label)}var tools=q('.tools',page);if(tools){tools.classList.add('v23Tools');var t=document.createElement('div');t.className='v23ToolsTitle';t.textContent='TOOLS';tools.prepend(t)}}
function result(){qa('.resultCard').forEach(function(c){if(c.dataset.v23==='1')return;c.dataset.v23='1';c.classList.add('v23Result')})}
function systems(){qa('.systemPage').forEach(function(p){if(p.dataset.v23==='1')return;p.dataset.v23='1';p.classList.add('v23System')})}
function apply(){shop();repair();result();systems()}
var queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;apply()})}
window.addEventListener('load',function(){apply();var m=document.getElementById('main');if(m)new MutationObserver(schedule).observe(m,{childList:true,subtree:true})});
})();