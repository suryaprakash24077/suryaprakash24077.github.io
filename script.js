function toggleMenu(){document.getElementById('navLinks').classList.toggle('show')}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('show')));
document.getElementById('year').textContent=new Date().getFullYear();
function addMap(){alert('Apna Google Maps link yahan add karna hai.');return false;}
