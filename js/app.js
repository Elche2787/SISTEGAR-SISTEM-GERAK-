(function(){
const $=s=>document.querySelector(s);
const KEY="rangka-xi-v1";
let user=null, state={done:{}}, cur=null, quiz=null;
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const wait=ms=>new Promise(r=>setTimeout(r,ms));

/* Sprite ekspresi 4x4 (1254px) */
function face(i,s){const c=i%4,r=Math.floor(i/4);
 return `<span class="face" style="${s?`--s:${s}px;`:""}background-position:${c*100/3}% ${r*100/3}%"></span>`}
/* Sprite rontgen 3x2 (1536x1024) */
function xrayFrame(el,n){el.style.backgroundPosition=`${(n%3)*50}% ${Math.floor(n/3)*100}%`}

function load(){try{const s=JSON.parse(localStorage.getItem(KEY));if(s){user=s.user;state=s.state||state}}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify({user,state}))}catch(e){}}

/* ---------- Login + transisi ---------- */
$("#loginForm").addEventListener("submit",async e=>{
 e.preventDefault();
 const n=$("#nama").value.trim();
 if(!n){$("#err").hidden=false;return}
 user={nama:n,kelas:$("#kelas").value};save();
 await transition();enterApp();
});
async function transition(){
 const L=$("#loader"),F=$("#loaderFace"),B=$("#loaderBar");
 L.hidden=false;B.style.width="0";
 requestAnimationFrame(()=>B.style.width="100%");B.style.transitionDuration="2.4s";
 const seq=[0,2,1,5,8,6,3,11,12,13,10,14,9,4,7,15,0];
 for(const i of seq){F.innerHTML=face(i);await wait(140)}
 F.innerHTML=face(1);await wait(250);
 L.hidden=true;
}
function enterApp(){
 $("#landing").hidden=true;$("#app").hidden=false;
 $("#hello").textContent="Halo, "+user.nama+"!";
 $("#kelasLbl").textContent="Kelas "+user.kelas;
 $("#avatar").innerHTML=face(0);
 buildNav();open(MODULES[0].id);
}
$("#logout").onclick=()=>{state={done:{}};user=null;try{localStorage.removeItem(KEY)}catch(e){}location.reload()};

/* ---------- Navigasi ---------- */
function buildNav(){
 $("#nav").innerHTML=MODULES.map(m=>`<button data-id="${m.id}"><span class="ic">${m.ic}</span><span>${m.title}<small>${m.tag}</small></span><span class="ck">${state.done[m.id]!=null?"✔":""}</span></button>`).join("");
 $("#nav").querySelectorAll("button").forEach(b=>b.onclick=()=>open(b.dataset.id));
 const d=Object.keys(state.done).length;
 $("#progTxt").textContent=`Kuis selesai: ${d}/${MODULES.length}`;
 $("#progBar").style.width=(d/MODULES.length*100)+"%";
}

/* ---------- Halaman materi ---------- */
function open(id){
 cur=MODULES.find(m=>m.id===id);
 document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("on",b.dataset.id===id));
 const m=cur;
 $("#content").innerHTML=`
  <span class="tag">${m.tag}</span>
  <h2>${m.ic} ${m.title}</h2>
  <div class="bubble">${face(1,84)}<div>${m.intro.map(p=>`<p>${p}</p>`).join("")}</div></div>
  <h3>📖 Materi</h3>
  ${m.points.map((p,i)=>`<details ${i===0?"open":""}><summary>${p[0]}</summary><div>${p[1]}</div></details>`).join("")}
  <div class="fact">💡 <b>Tahukah kamu?</b> ${m.fact}</div>
  ${m.model?`<h3>🩻 Simulasi Rontgen 3D</h3>
  <div class="scan"><div class="xray" id="xray"></div>
   <div><p>Letakkan pasien di mesin rontgen, tekan tombol, lalu amati model 3D <b>${m.title}</b> dari berbagai sudut.</p>
   <p id="scanMsg">Siap Scan</p>
   <button class="btn" id="scanBtn">🩻 Mulai Rontgen</button></div></div>`:""}
  <h3>📝 Kuis ${m.title}</h3>
  <div class="quiz" id="quiz"></div>`;
 if(m.model){xrayFrame($("#xray"),0);$("#scanBtn").onclick=scan}
 startQuiz();
 window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- Rontgen & 3D ---------- */
const MSG=["Siap Scan","Proses Scan…","Memindai…","Memindai…","Scan Selesai","Hasil X-Ray siap!"];
async function scan(){
 const btn=$("#scanBtn"),x=$("#xray"),msg=$("#scanMsg");
 btn.disabled=true;
 for(let i=0;i<6;i++){xrayFrame(x,i);msg.textContent=MSG[i];await wait(i===5?900:550)}
 open3D();
 btn.disabled=false;btn.textContent="🩻 Rontgen Lagi";
}
function open3D(){
 $("#vTitle").textContent=cur.title;
 $("#vFrame").src=`https://sketchfab.com/models/${cur.model}/embed?autostart=1&ui_theme=dark&ui_infos=0`;
 $("#viewer").hidden=false;document.body.style.overflow="hidden";
}
function close3D(){
 $("#viewer").hidden=true;$("#vFrame").src="about:blank";document.body.style.overflow="";
 const x=$("#xray");if(x){xrayFrame(x,0);$("#scanMsg").textContent="Siap Scan"}
}
$("#backBtn").onclick=close3D;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#viewer").hidden)close3D()});

/* ---------- Kuis ---------- */
function startQuiz(){quiz={i:0,score:0};renderQ()}
function renderQ(){
 const m=cur,q=m.quiz[quiz.i],box=$("#quiz");
 box.innerHTML=`<div class="qn">Soal ${quiz.i+1} dari ${m.quiz.length}</div>
  <div class="q">${q.q}</div>
  ${q.o.map((t,k)=>`<button class="opt" data-k="${k}">${String.fromCharCode(65+k)}. ${t}</button>`).join("")}
  <div id="fb"></div>`;
 box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.k));
}
function answer(k){
 const q=cur.quiz[quiz.i],ok=k===q.a;
 document.querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("ok");else if(j===k)b.classList.add("no")});
 if(ok)quiz.score++;
 const f=rnd(ok?FB_OK:FB_NO),last=quiz.i===cur.quiz.length-1;
 $("#fb").innerHTML=`<div class="fb ${ok?"ok":"no"}">${face(f.f,96)}<div><b>${f.t}</b><p>${ok?"":"Jawaban benar: <b>"+q.o[q.a]+"</b>. "}${q.e}</p>
  <button class="btn" id="nx" style="margin-top:8px">${last?"Lihat Hasil":"Soal Berikutnya ▶"}</button></div></div>`;
 $("#nx").onclick=()=>{if(last)finish();else{quiz.i++;renderQ()}};
}
function finish(){
 const n=cur.quiz.length,pct=Math.round(quiz.score/n*100),r=FB_END.find(x=>pct>=x.min);
 const best=Math.max(pct,state.done[cur.id]||0);state.done[cur.id]=best;save();buildNav();
 document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("on",b.dataset.id===cur.id));
 const idx=MODULES.indexOf(cur),next=MODULES[idx+1];
 $("#quiz").innerHTML=`<div class="result">${face(r.f,150)}<div class="stars">${r.s}</div>
  <div class="score">${quiz.score}/${n}</div>
  <p><b>${r.t}</b></p><p>Kerja bagus, ${user.nama}! Nilai terbaikmu di materi ini: ${best}.</p>
  <div class="row"><button class="btn ghost" id="again">↻ Ulangi Kuis</button>
  ${next?`<button class="btn" id="nextM">Materi Berikutnya ▶</button>`:`<span class="pixel">🎓 Semua materi selesai!</span>`}</div></div>`;
 $("#again").onclick=()=>{startQuiz()};
 if(next)$("#nextM").onclick=()=>open(next.id);
}

/* ---------- Init ---------- */
load();
if(user){$("#nama").value=user.nama;$("#kelas").value=user.kelas}
})();
