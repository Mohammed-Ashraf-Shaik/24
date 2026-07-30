(function(){
"use strict";

/* ==================== CONFIG ==================== */
const TARGET_DATE = new Date("2026-08-24T00:00:00").getTime();
const MAIN_PASS = "ashuashu";
const LETTER_PASS = "ashu";
const RIME_PASSES = ["1","2","3","4"];

const RIME_LABELS = [
  "1st meet — the very first time",
  "2nd meet — the one after",
  "3rd meet — getting braver",
  "4th meet — feeling like ours"
];

const NAV_ITEMS = [
  {hash:"hub",label:"Home",icon:"fa-heart"},
  {hash:"journey",label:"Journey",icon:"fa-road"},
  {hash:"rime",label:"RIME",icon:"fa-map-pin"},
  {hash:"food",label:"Food",icon:"fa-utensils"},
  {hash:"gifts",label:"Gifts",icon:"fa-gift"},
  {hash:"game",label:"Game",icon:"fa-puzzle-piece"},
  {hash:"letter",label:"Letter",icon:"fa-envelope-open-text"},
  {hash:"wishjar",label:"Wish Jar",icon:"fa-star"},
];

const JOURNEY_ITEMS = [
  {date:"2024-01-14",title:"The day we met",note:"The universe finally made sense."},
  {date:"2024-06-15",title:"Our first adventure",note:"We got lost and found each other."},
  {date:"2024-09-20",title:"The long phone call",note:"5 hours felt like 5 minutes."},
  {date:"2025-02-14",title:"Valentine's Day",note:"The day I knew it was forever."},
  {date:"2025-08-24",title:"Your birthday",note:"The day the world got its best thing."},
];

const FOOD_PHOTOS = [
  {src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=70",cap:"the first plate we shared"},
  {src:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=70",cap:"you smiled with your mouth full"},
  {src:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=70",cap:"dessert first? always."},
  {src:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=70",cap:"candlelit noodles"},
  {src:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=70",cap:"colours on the plate, like you"},
  {src:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=70",cap:"we ordered too much again"},
];

const RIME_PHOTOS = [
  {src:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70",cap:"table for two, forever"},
  {src:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=70",cap:"the corner we always pick"},
  {src:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=70",cap:"your favourite drink"},
  {src:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=70",cap:"the light on your face"},
  {src:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=70",cap:"warm evenings"},
  {src:"https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=70",cap:"one more please"},
];

const GIFTS = [
  {icon:"fa-shirt",name:"that hoodie",note:"i still wear it every night"},
  {icon:"fa-mug-hot",name:"the mug",note:"coffee tastes better in it"},
  {icon:"fa-book",name:"the little notebook",note:"full of us now"},
  {icon:"fa-headphones",name:"the playlist",note:"every song is you"},
  {icon:"fa-camera",name:"polaroid",note:"your smile, frozen in time"},
  {icon:"fa-ring",name:"the bracelet",note:"never taking it off"},
];

const WISHES = [
  "i wish we could freeze time when you laugh.",
  "i wish for a thousand more late-night calls.",
  "i wish you could see yourself the way i see you.",
  "i wish for rainy days spent together doing nothing.",
  "i wish to always be the reason you smile.",
  "i wish for one more hug that lasts forever.",
  "i wish we could revisit every first together.",
  "i wish you knew how much you mean to me.",
  "i wish for lazy mornings with you by my side.",
  "i wish to write you letters until we're old.",
];

const QUIZ_QS = [
  {q:"What does ashu love the most about M?",opts:["Your smile","Your laugh","Your eyes","Everything about you ♡"],ans:3},
  {q:"What's our favorite thing to do together?",opts:["Late night talks","Going on adventures","Being silly together","All of the above ♡"],ans:3},
  {q:"When ashu thinks of M, what comes to mind first?",opts:["Butterflies","Home","Happiness","Forever ♡"],ans:3},
  {q:"How much does ashu love M?",opts:["A lot","More than words can say","To the moon and back","All of the above × infinity ♡"],ans:3},
];

const MEM_IMGS = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=400&q=70",
];

/* ==================== HELPERS ==================== */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const pad=n=>String(n).padStart(2,"0");

function toast(msg,type="info",ms=2600){
  const w=$("#toasts");if(!w)return;
  const el=document.createElement("div");
  el.className="toast "+(type||"");
  const ic=type==="success"?"fa-check":type==="error"?"fa-triangle-exclamation":"fa-heart";
  el.innerHTML=`<i class="fa-solid ${ic}"></i><span>${esc(msg)}</span>`;
  w.appendChild(el);
  setTimeout(()=>{el.classList.add("leaving");setTimeout(()=>el.remove(),300)},ms);
}

/* ==================== CURSOR ==================== */
(function initCursor(){
  if(window.matchMedia&&window.matchMedia("(pointer:coarse)").matches)return;
  const dot=$("#cursor-dot"),ring=$("#cursor-ring");
  if(!dot||!ring)return;
  let tx=0,ty=0,rx=0,ry=0;
  document.addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;dot.style.transform=`translate(${tx}px,${ty}px) translate(-50%,-50%)`});
  (function tick(){rx+=(tx-rx)*.18;ry+=(ty-ry)*.18;ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(tick)})();
  document.addEventListener("mouseover",e=>{if(e.target.closest("button,a,.hub-card,.g-cell,.mm-card,.quiz-opt,.jar-btn,.gift-card"))document.body.classList.add("cursor-hover")});
  document.addEventListener("mouseout",e=>{if(e.target.closest("button,a,.hub-card,.g-cell,.mm-card,.quiz-opt,.jar-btn,.gift-card"))document.body.classList.remove("cursor-hover")});
})();

/* ==================== CAT FULLSCREEN ==================== */
(function initCat(){
  const modal=$("#cat-modal");if(!modal)return;
  let dismissed=false;
  function check(){
    if(dismissed)return;
    const small=window.innerWidth<900||window.innerHeight<560;
    const fs=!!document.fullscreenElement;
    modal.hidden=!(small&&!fs);
  }
  check();
  window.addEventListener("resize",check);
  document.addEventListener("fullscreenchange",check);
  $("#cat-fs-btn").addEventListener("click",async()=>{
    try{await document.documentElement.requestFullscreen()}catch(e){}
    modal.hidden=true;
  });
  $("#cat-dismiss-btn").addEventListener("click",()=>{dismissed=true;modal.hidden=true});
  // fallback gif
  const gif=$("#cat-gif");
  if(gif)gif.addEventListener("error",()=>{gif.src="https://media.tenor.com/2roX3uxz_68AAAAj/cat-kawaii.gif"});
})();

/* ==================== PREVIEW MODE (secret key) ==================== */
(function initPreview(){
  let buf="";
  window.addEventListener("keydown",e=>{
    if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;
    buf=(buf+(e.key||"")).toLowerCase().slice(-8);
    if(buf.includes("ashu")){sessionStorage.setItem("preview-mode","true");buf="";renderCurrentPage()}
  });
})();

/* ==================== ROUTER ==================== */
const app=$("#app");
const topbar=$("#topbar");

function getPage(){return(location.hash||"#").slice(1)||"landing"}
function go(page){location.hash=page}
function isUnlocked(){return sessionStorage.getItem("main-unlocked")==="true"}
function isPreview(){return sessionStorage.getItem("preview-mode")==="true"}

function renderNav(){
  if(!isUnlocked()){topbar.hidden=true;return}
  topbar.hidden=false;
  const nav=$("#nav-btns");
  const cur=getPage();
  nav.innerHTML=NAV_ITEMS.map(it=>`<button class="nav-btn ${cur===it.hash?"active":""}" data-go="${it.hash}"><i class="fa-solid ${it.icon}"></i><span>${it.label}</span></button>`).join("");
  nav.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>go(btn.dataset.go)));
  $("#brand-home").onclick=()=>go("hub");
}

function renderCurrentPage(){
  const page=getPage();
  renderNav();
  app.innerHTML="";
  app.className="view view-anim";
  window.scrollTo({top:0,behavior:"smooth"});
  const pages={landing:pageLanding,hub:pageHub,journey:pageJourney,rime:pageRime,food:pageFood,gifts:pageGifts,game:pageGame,letter:pageLetter,wishjar:pageWishJar};
  const fn=pages[page]||pageLanding;
  if(page!=="landing"&&!isUnlocked()){go("landing");return}
  fn();
}

window.addEventListener("hashchange",renderCurrentPage);

/* ==================== COUNTDOWN ==================== */
let cdTimer=null;
function startCountdown(el){
  if(cdTimer)clearInterval(cdTimer);
  function render(){
    const diff=Math.max(0,TARGET_DATE-Date.now());
    const d=Math.floor(diff/864e5),h=Math.floor(diff/36e5%24),m=Math.floor(diff/6e4%60),s=Math.floor(diff/1e3%60);
    const done=diff===0;
    el.innerHTML=[{n:d,l:"days"},{n:pad(h),l:"hours"},{n:pad(m),l:"minutes"},{n:pad(s),l:"seconds"}]
      .map(c=>`<div class="cd-cell"><span class="cd-num">${c.n}</span><span class="cd-label">${c.l}</span></div>`).join("");
    return done;
  }
  const done=render();
  if(!done)cdTimer=setInterval(()=>{if(render()&&cdTimer)clearInterval(cdTimer)},1000);
  return done;
}

/* ==================== PAGE: LANDING ==================== */
function pageLanding(){
  const alreadyIn=isUnlocked();
  const preview=isPreview();
  app.innerHTML=`
    <p class="eyebrow">a gift, quietly counting</p>
    <h1 class="hero-title">for you, <em>M</em>.<br>until your day.</h1>
    <p class="hero-sub">every second closer to the 24<sup>th</sup> of august — the day the world got the best thing in it.</p>
    <section class="countdown-grid" id="cd-grid"></section>
    <div id="gate-area"></div>
  `;
  const cdGrid=$("#cd-grid");
  const done=startCountdown(cdGrid);
  const gateArea=$("#gate-area");

  if(done||alreadyIn||preview){
    showGate();
  } else {
    gateArea.innerHTML=`<p class="hero-sub" style="margin-top:40px;font-style:italic;color:var(--ink-mute)">the door opens when the countdown ends — or when you know the word.</p>`;
  }

  function showGate(){
    gateArea.innerHTML=`
      <div class="gate-wrap">
        <h3>the door is open</h3>
        <p>whisper the little word</p>
        <form id="gate-form">
          <input class="gate-input" type="password" id="gate-inp" placeholder="•••••••" autofocus />
          <div style="display:flex;gap:10px;justify-content:center;margin-top:18px">
            <button type="submit" class="btn btn-primary"><i class="fa-solid fa-heart"></i> unlock</button>
          </div>
          <div id="gate-msg" class="gate-hint">a whisper only you know</div>
        </form>
      </div>
    `;
    $("#gate-form").addEventListener("submit",e=>{
      e.preventDefault();
      const v=$("#gate-inp").value.trim().toLowerCase();
      if(v===MAIN_PASS){
        sessionStorage.setItem("main-unlocked","true");
        go("hub");
      } else {
        $("#gate-msg").className="gate-error";
        $("#gate-msg").textContent="that's not it my love... try again";
        setTimeout(()=>{const m=$("#gate-msg");if(m){m.className="gate-hint";m.textContent="a whisper only you know"}},2600);
      }
    });
  }
}

/* ==================== PAGE: HUB ==================== */
function pageHub(){
  const CARDS=[
    {to:"journey",title:"our journey",desc:"the little map of how we got here.",icon:"fa-road"},
    {to:"rime",title:"at RIME",desc:"the place we always meet — enter the four dates.",icon:"fa-map-pin",locked:true},
    {to:"food",title:"what we ate",desc:"the little tables, the shared bites.",icon:"fa-utensils"},
    {to:"gifts",title:"gifts from you",desc:"every little thing you gave me.",icon:"fa-gift"},
    {to:"game",title:"our little games",desc:"memory, quiz and a scratch card.",icon:"fa-puzzle-piece"},
    {to:"letter",title:"a handwritten letter",desc:"for your eyes only. (whisper 'ashu')",icon:"fa-envelope-open-text",locked:true},
    {to:"wishjar",title:"the wish jar",desc:"tap the jar for something sweet.",icon:"fa-star"},
  ];
  app.innerHTML=`
    <p class="eyebrow">welcome home, love</p>
    <h1 class="hero-title">everything, <em>for you</em>.</h1>
    <p class="hero-sub">seven little rooms i built, one for each way you make me smile. click anywhere and start wandering.</p>
    <section class="hub-grid" id="hub-grid"></section>
  `;
  const grid=$("#hub-grid");
  CARDS.forEach(c=>{
    const card=document.createElement("div");
    card.className="hub-card";
    card.innerHTML=`
      <div class="hc-icon"><i class="fa-solid ${c.icon}"></i></div>
      <div class="hc-title">${esc(c.title)}</div>
      <div class="hc-desc">${esc(c.desc)}</div>
      ${c.locked?'<div class="hc-locked"><i class="fa-solid fa-lock"></i> needs a whisper</div>':""}
    `;
    card.addEventListener("click",()=>go(c.to));
    card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();card.style.setProperty("--mx",e.clientX-r.left+"px");card.style.setProperty("--my",e.clientY-r.top+"px")});
    grid.appendChild(card);
  });
}

/* ==================== PAGE: JOURNEY ==================== */
function pageJourney(){
  app.innerHTML=`
    <p class="eyebrow">how we got here</p>
    <h1 class="hero-title">our little <em>journey</em>.</h1>
    <p class="hero-sub">every step that led to us — the first glance, the first word, and everything that followed.</p>
    <ol class="timeline" id="tl"></ol>
  `;
  const tl=$("#tl");
  JOURNEY_ITEMS.forEach(it=>{
    const li=document.createElement("li");
    li.className="tl-item";
    li.innerHTML=`<div class="tl-date">${esc(it.date)}</div><div class="tl-title">${esc(it.title)}</div><div class="tl-note">${esc(it.note)}</div>`;
    tl.appendChild(li);
  });
}

/* ==================== PAGE: RIME ==================== */
function pageRime(){
  let step=0;
  app.innerHTML=`
    <p class="eyebrow">at the place we call ours</p>
    <h1 class="hero-title">every time we met at <em>RIME</em>.</h1>
    <p class="hero-sub">four little numbers, four little days. type the date of each meeting — one at a time. (format: dd)</p>
    <div class="stage-track" id="rime-dots"></div>
    <div id="rime-area"></div>
  `;
  renderRimeStep();

  function renderDots(){
    const dots=$("#rime-dots");
    dots.innerHTML=RIME_PASSES.map((_,i)=>`<div class="stage-dot ${i<step?"done":i===step?"active":""}"></div>`).join("");
  }

  function renderRimeStep(){
    renderDots();
    const area=$("#rime-area");
    if(step>=RIME_PASSES.length){
      area.innerHTML=`
        <h2 class="section-title" style="margin-top:40px">the four evenings at RIME</h2>
        <p class="section-sub">each frame, a night we didn't want to end.</p>
        <div class="gallery" id="rime-gallery"></div>
      `;
      const g=$("#rime-gallery");
      RIME_PHOTOS.forEach(p=>{
        g.innerHTML+=`<figure class="g-cell"><img src="${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy"/><figcaption class="g-cap">${esc(p.cap)}</figcaption></figure>`;
      });
      if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2});
      return;
    }
    area.innerHTML=`
      <div class="gate-wrap">
        <h3>${esc(RIME_LABELS[step])}</h3>
        <p>what date did we meet?</p>
        <form id="rime-form">
          <input class="gate-input" type="text" inputmode="numeric" placeholder="dd" id="rime-inp" autofocus />
          <div style="display:flex;justify-content:center;margin-top:16px">
            <button type="submit" class="btn btn-primary"><i class="fa-solid fa-key"></i> unlock this meet</button>
          </div>
          <div id="rime-msg" class="gate-hint">just the day — like 12 or 07</div>
        </form>
      </div>
    `;
    $("#rime-form").addEventListener("submit",e=>{
      e.preventDefault();
      const v=$("#rime-inp").value.trim();
      if(v===RIME_PASSES[step]){
        step++;
        toast("unlocked ♡","success");
        renderRimeStep();
      } else {
        const m=$("#rime-msg");m.className="gate-error";m.textContent="not quite — think of the date, love";
        setTimeout(()=>{if(m){m.className="gate-hint";m.textContent="just the day — like 12 or 07"}},2400);
      }
    });
  }
}

/* ==================== PAGE: FOOD ==================== */
function pageFood(){
  app.innerHTML=`
    <p class="eyebrow">every table with you</p>
    <h1 class="hero-title">the things we <em>ate</em> together.</h1>
    <p class="hero-sub">food tastes better when you're across the table. here are some of the plates that had you in the background.</p>
    <section class="gallery" id="food-gallery"></section>
  `;
  const g=$("#food-gallery");
  FOOD_PHOTOS.forEach(p=>{
    g.innerHTML+=`<figure class="g-cell"><img src="${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy"/><figcaption class="g-cap">${esc(p.cap)}</figcaption></figure>`;
  });
}

/* ==================== PAGE: GIFTS ==================== */
function pageGifts(){
  app.innerHTML=`
    <p class="eyebrow">every little thing</p>
    <h1 class="hero-title">gifts from <em>you</em>.</h1>
    <p class="hero-sub">the things you gave me that i hold close — some you probably forgot about, but i never will.</p>
    <div class="gifts-grid" id="gifts-grid"></div>
  `;
  const g=$("#gifts-grid");
  GIFTS.forEach(it=>{
    g.innerHTML+=`<div class="gift-card"><div class="gift-icon"><i class="fa-solid ${it.icon}"></i></div><div class="gift-name">${esc(it.name)}</div><div class="gift-note">${esc(it.note)}</div></div>`;
  });
}

/* ==================== PAGE: LETTER ==================== */
function pageLetter(){
  const ok=sessionStorage.getItem("letter-unlocked")==="true";
  app.innerHTML=`
    <p class="eyebrow">for your eyes only</p>
    <h1 class="hero-title">a letter, in <em>my</em> hand.</h1>
    <p class="hero-sub">not typed, not perfect — written the way i think of you.</p>
    <div id="letter-area"></div>
  `;
  if(ok){showLetter();return}
  const area=$("#letter-area");
  area.innerHTML=`
    <div class="gate-wrap">
      <h3>whisper my name</h3>
      <p>the little word that opens things</p>
      <form id="letter-form">
        <input class="gate-input" type="password" placeholder="••••" id="letter-inp" autofocus />
        <div style="display:flex;justify-content:center;margin-top:16px">
          <button type="submit" class="btn btn-primary"><i class="fa-solid fa-envelope-open"></i> open the letter</button>
        </div>
        <div id="letter-msg" class="gate-hint">only four letters</div>
      </form>
    </div>
  `;
  $("#letter-form").addEventListener("submit",e=>{
    e.preventDefault();
    const v=$("#letter-inp").value.trim().toLowerCase();
    if(v===LETTER_PASS){
      sessionStorage.setItem("letter-unlocked","true");
      showLetter();
    } else {
      const m=$("#letter-msg");m.className="gate-error";m.textContent="close — try again, my love";
      setTimeout(()=>{if(m){m.className="gate-hint";m.textContent="only four letters"}},2400);
    }
  });

  function showLetter(){
    const area=$("#letter-area");
    area.innerHTML=`
      <article class="letter-paper">
        <p>my M,</p>
        <p>i keep starting this letter a hundred different ways and every time it ends the same — with your name.</p>
        <p>you have a way of making regular days feel like something worth remembering. the little laugh you do when you're not really trying to, the way you tilt your head when you're listening — i notice all of it, all the time.</p>
        <p>i don't have anything grand to say. just that you're the best thing i keep coming back to. every corner of this little site is a small way of saying: thank you for being here, thank you for being you.</p>
        <p>and if you're reading this in fullscreen (i hope you are) — smile once for me. that's all i need.</p>
        <p class="sign">— always yours,<br>ashu ♡</p>
      </article>
    `;
    if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:3});
  }
}

/* ==================== PAGE: WISH JAR ==================== */
function pageWishJar(){
  let lastIdx=-1;
  app.innerHTML=`
    <p class="eyebrow">a little jar of hopes</p>
    <h1 class="hero-title">the <em>wish</em> jar.</h1>
    <p class="hero-sub">tap the jar and pull out something sweet. every wish is a tiny prayer for us.</p>
    <div class="jar-wrap">
      <button class="jar-btn" id="jar-btn"><i class="fa-solid fa-star"></i></button>
      <div id="wish-out"></div>
    </div>
  `;
  $("#jar-btn").addEventListener("click",()=>{
    let idx;
    do{idx=Math.floor(Math.random()*WISHES.length)}while(idx===lastIdx&&WISHES.length>1);
    lastIdx=idx;
    $("#wish-out").innerHTML=`<div class="wish-card">"${esc(WISHES[idx])}"</div>`;
  });
}

/* ==================== PAGE: GAME ==================== */
function pageGame(){
  let tab="memory";
  const done={memory:false,quiz:false,scratch:false};
  app.innerHTML=`
    <p class="eyebrow">three tiny games</p>
    <h1 class="hero-title">play with <em>me</em>.</h1>
    <p class="hero-sub" id="game-sub">memory match, a little quiz about us, and a scratch card with something hidden underneath.</p>
    <div class="game-tabs" id="game-tabs"></div>
    <div id="game-area"></div>
  `;
  renderTabs();
  renderGame();

  function renderTabs(){
    const TABS=[{id:"memory",label:"memory match",icon:"fa-clone"},{id:"quiz",label:"little quiz",icon:"fa-circle-question"},{id:"scratch",label:"scratch to reveal",icon:"fa-hand-sparkles"}];
    const t=$("#game-tabs");
    t.innerHTML=TABS.map(tb=>`<button class="game-tab ${tab===tb.id?"active":""}" data-tab="${tb.id}"><i class="fa-solid ${tb.icon}"></i><span>${tb.label}</span>${done[tb.id]?'<span class="badge"><i class="fa-solid fa-check"></i></span>':""}</button>`).join("");
    t.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>{tab=b.dataset.tab;renderTabs();renderGame()}));
    const dc=Object.values(done).filter(Boolean).length;
    const sub=$("#game-sub");
    if(sub&&dc>0)sub.textContent=`memory match, a little quiz about us, and a scratch card. ${dc} / 3 finished so far ♡`;
  }

  function renderGame(){
    const area=$("#game-area");
    area.innerHTML="";
    if(tab==="memory")renderMemory(area);
    else if(tab==="quiz")renderQuiz(area);
    else renderScratch(area);
  }

  /* MEMORY */
  function renderMemory(area){
    const deck=shuffle([...MEM_IMGS,...MEM_IMGS].map((src,id)=>({id,src})));
    let flipped=[],matched=new Set(),moves=0;
    area.innerHTML=`<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:12px"><span class="mm-status" id="mm-st">pairs: 0 / ${MEM_IMGS.length} · moves: 0</span><button class="btn btn-ghost" id="mm-rst"><i class="fa-solid fa-rotate"></i> restart</button></div><div class="mm-board" id="mm-board"></div>`;
    const board=$("#mm-board");
    deck.forEach((c,idx)=>{
      const card=document.createElement("div");
      card.className="mm-card";card.dataset.idx=idx;
      card.innerHTML=`<div class="mm-inner"><div class="mm-face back"><i class="fa-solid fa-heart"></i></div><div class="mm-face front"><img src="${c.src}" alt="memory" loading="lazy"/></div></div>`;
      card.addEventListener("click",()=>clickCard(idx,card));
      board.appendChild(card);
    });
    $("#mm-rst").addEventListener("click",()=>renderMemory(area));

    function clickCard(idx,card){
      if(flipped.length>=2)return;if(flipped.includes(idx))return;if(matched.has(deck[idx].src))return;
      flipped.push(idx);card.classList.add("flipped");
      if(flipped.length===2){
        moves++;updateSt();
        const[a,b]=flipped;
        if(deck[a].src===deck[b].src){
          matched.add(deck[a].src);
          board.querySelectorAll(".mm-card").forEach(c=>{if([a,b].includes(+c.dataset.idx))c.classList.add("matched")});
          flipped=[];
          if(matched.size===MEM_IMGS.length){done.memory=true;renderTabs();toast("memory complete ♡","success");if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2})}
        } else {
          setTimeout(()=>{board.querySelectorAll(".mm-card").forEach(c=>{if([a,b].includes(+c.dataset.idx))c.classList.remove("flipped")});flipped=[]},900);
        }
      }
    }
    function updateSt(){const st=$("#mm-st");if(st)st.textContent=`pairs: ${matched.size} / ${MEM_IMGS.length} · moves: ${moves}`}
  }

  /* QUIZ */
  function renderQuiz(area){
    let qi=0,wrongs=0;
    render();
    function render(){
      if(qi>=QUIZ_QS.length){
        area.innerHTML=`<div class="quiz-done"><h4>you know ashu by heart. ♡</h4><p>that's love, M. that's us.</p></div>`;
        done.quiz=true;renderTabs();toast("quiz complete ♡","success");
        if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2});
        return;
      }
      const q=QUIZ_QS[qi];wrongs=0;
      area.innerHTML=`<div class="quiz-q">${esc(q.q)}</div><div class="quiz-options" id="q-opts"></div><div class="quiz-hint" id="q-hint"></div>`;
      const opts=$("#q-opts");
      q.opts.forEach((lbl,i)=>{
        const btn=document.createElement("button");btn.className="quiz-opt";btn.textContent=lbl;
        btn.addEventListener("click",()=>{
          if(i===q.ans){btn.classList.add("correct");opts.querySelectorAll(".quiz-opt").forEach(b=>b.disabled=true);setTimeout(()=>{qi++;render()},700)}
          else{btn.classList.add("wrong");wrongs++;
            const h=$("#q-hint");if(h)h.textContent="try again 💕";
            if(wrongs>=2){opts.children[q.ans].classList.add("correct");if(h)h.textContent="take the highlighted one 💝"}
            setTimeout(()=>btn.classList.remove("wrong"),600);
          }
        });
        opts.appendChild(btn);
      });
    }
  }

  /* SCRATCH */
  function renderScratch(area){
    area.innerHTML=`<div class="scratch-frame" id="sc-frame"><div class="scratch-under"><p class="scratch-msg">you are the reason i believe in forever, M ♡</p></div><canvas id="scratch-canvas"></canvas></div><div class="scratch-progress" id="sc-pct">0%</div>`;
    const cv=$("#scratch-canvas"),frame=$("#sc-frame");
    if(!cv||!frame)return;
    const rect=frame.getBoundingClientRect();
    const dpr=Math.min(window.devicePixelRatio||1,2);
    const w=Math.floor(rect.width),h=Math.floor(rect.height);
    cv.width=w*dpr;cv.height=h*dpr;cv.style.width=w+"px";cv.style.height=h+"px";
    const ctx=cv.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
    const grad=ctx.createLinearGradient(0,0,w,h);
    grad.addColorStop(0,"#8b5a67");grad.addColorStop(.5,"#b45067");grad.addColorStop(1,"#6d3a48");
    ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
    ctx.fillStyle="rgba(248,236,219,.85)";ctx.font="italic 500 20px 'Cormorant Garamond',serif";
    ctx.textBaseline="middle";ctx.textAlign="center";ctx.fillText("Scratch me M ♡",w/2,h/2);

    let drawing=false,revealed=false;
    function getPos(e){const r=cv.getBoundingClientRect();const t=e.touches?e.touches[0]:e;return{x:t.clientX-r.left,y:t.clientY-r.top}}
    function scratch(x,y){ctx.globalCompositeOperation="destination-out";ctx.beginPath();ctx.arc(x,y,22,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation="source-over";checkPct()}
    function checkPct(){
      if(revealed)return;
      try{
        const d=ctx.getImageData(0,0,cv.width,cv.height).data;
        let total=0,clear=0;
        for(let i=3;i<d.length;i+=32){total++;if(d[i]<12)clear++}
        const pct=clear/total*100;
        const el=$("#sc-pct");if(el)el.textContent=Math.round(pct)+"%";
        if(pct>55){revealed=true;ctx.clearRect(0,0,cv.width,cv.height);done.scratch=true;renderTabs();toast("scratch complete ♡","success");if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2})}
      }catch(e){}
    }
    cv.addEventListener("mousedown",e=>{e.preventDefault();drawing=true;const p=getPos(e);scratch(p.x,p.y)});
    cv.addEventListener("mousemove",e=>{if(!drawing)return;e.preventDefault();const p=getPos(e);scratch(p.x,p.y)});
    window.addEventListener("mouseup",()=>{drawing=false});
    cv.addEventListener("touchstart",e=>{e.preventDefault();drawing=true;const p=getPos(e);scratch(p.x,p.y)},{passive:false});
    cv.addEventListener("touchmove",e=>{if(!drawing)return;e.preventDefault();const p=getPos(e);scratch(p.x,p.y)},{passive:false});
    window.addEventListener("touchend",()=>{drawing=false});
  }
}

/* ==================== SHUFFLE ==================== */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

/* ==================== BOOT ==================== */
renderCurrentPage();

})();
