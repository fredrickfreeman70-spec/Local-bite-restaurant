// Mobile menu
const t=document.querySelector('.nav-toggle'),m=document.querySelector('nav ul');
if(t){t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)})}
// Menu filter
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
 const c=b.dataset.cat;document.querySelectorAll('.dish').forEach(d=>{d.style.display=(c==='all'||d.dataset.cat===c)?'flex':'none'})}));
// Forms (front-end only demo)
document.querySelectorAll('form[data-msg]').forEach(f=>f.addEventListener('submit',e=>{
 e.preventDefault();const n=f.querySelector('[name=name]').value;
 const box=document.getElementById('msg');box.textContent=f.dataset.msg.replace('{name}',n);box.classList.add('show');f.reset()}));
// Reservation: no past dates
const d=document.getElementById('date');if(d){d.min=new Date().toISOString().split('T')[0]}
