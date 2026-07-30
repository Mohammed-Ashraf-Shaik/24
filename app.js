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

/* ---------- Journey milestones (from reference) ---------- */
const MILESTONES = [
  {date:"the first hello",title:"we met.",note:"you looked away and i looked twice. i knew already."},
  {date:"the first RIME night",title:"our table.",note:"we stayed until they turned the lights lower. you laughed too loud at something small."},
  {date:"the first 'us'",title:"we became a thing.",note:"no announcement, no big moment — just quietly true one day."},
  {date:"the first fight",title:"we survived it.",note:"we chose each other again the next morning. that's how i knew."},
  {date:"the first gift",title:"you wrapped it in your handwriting.",note:"i still have the paper."},
  {date:"the trips",title:"roads, windows, playlists.",note:"you fell asleep on my shoulder — the world was very quiet then."},
  {date:"the today",title:"still here, still choosing you.",note:"and every day after this is another line on this list."},
  {date:"the next chapter",title:"everything ahead.",note:"quiet mornings. loud kitchens. our little forever."},
];

const FOOD_PHOTOS = [
  {src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=70",cap:"the first plate we shared"},
  {src:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=70",cap:"you smiled with your mouth full"},
  {src:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=70",cap:"dessert first? always."},
  {src:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=70",cap:"candlelit noodles"},
  {src:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=70",cap:"colours on the plate, like you"},
  {src:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=70",cap:"we ordered too much again"},
  {src:"https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=70",cap:"your favourite bite"},
  {src:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=70",cap:"sunday morning, our kitchen"},
];

const RIME_PHOTOS = [
  {src:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70",cap:"table for two, forever"},
  {src:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=70",cap:"the corner we always pick"},
  {src:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=70",cap:"your favourite drink"},
  {src:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=70",cap:"the light on your face"},
  {src:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=70",cap:"warm evenings"},
  {src:"https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=70",cap:"one more please"},
];

const GIFT_PHOTOS = [
  {src:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=70",cap:"the little box you handed me"},
  {src:"https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=70",cap:"wrapped in your handwriting"},
  {src:"https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=800&q=70",cap:"you knew exactly what i needed"},
  {src:"https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=70",cap:"the surprise one"},
  {src:"https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=70",cap:"with a bow, of course"},
  {src:"https://images.unsplash.com/photo-1481794998337-2cef1f761e83?auto=format&fit=crop&w=800&q=70",cap:"small thing, big feeling"},
];

/* ---------- Wish jar wishes (from reference) ---------- */
const WISHES = [
  "you're the softest part of my day.",
  "i hope your coffee is warm and your worries are small.",
  "every song reminds me of you now — even the ones that don't.",
  "you laugh, and my chest does that thing.",
  "you're not a chapter — you're the whole spine.",
  "if love had a colour, it'd be the one on your cheeks.",
  "i'd choose you again, in every version of every life.",
  "you make the ordinary feel like a keepsake.",
  "your hands. that's it. that's the wish.",
  "someday soon, and every day after — that's my plan.",
  "you're allowed to be the main character today, ok?",
  "even RIME's tables miss you when you're gone.",
  "i saved you a seat, forever.",
  "you are the reason i pay attention.",
  "you smell like home to me.",
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

let toastTimer=null;
function toast(msg,ms=2600){
  const el=$("#toast-el");if(!el)return;
  el.textContent=msg;el.hidden=false;el.style.animation="none";el.offsetHeight;el.style.animation="";
  if(toastTimer)clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{el.hidden=true},ms);
}

/* ==================== CURSOR ==================== */
(function initCursor(){
  if(window.matchMedia&&window.matchMedia("(pointer:coarse)").matches)return;
  const dot=$("#cursor-dot"),ring=$("#cursor-ring");
  if(!dot||!ring)return;
  let tx=0,ty=0,rx=0,ry=0;
  document.addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;dot.style.transform=`translate(${tx}px,${ty}px) translate(-50%,-50%)`});
  (function tick(){rx+=(tx-rx)*.18;ry+=(ty-ry)*.18;ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(tick)})();
  document.addEventListener("mouseover",e=>{if(e.target.closest("button,a,.hub-card,.g-cell,.mm-card,.quiz-opt,.wj-jar,.gift-card"))document.body.classList.add("cursor-hover")});
  document.addEventListener("mouseout",e=>{if(e.target.closest("button,a,.hub-card,.g-cell,.mm-card,.quiz-opt,.wj-jar,.gift-card"))document.body.classList.remove("cursor-hover")});
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
  $("#cat-fs-btn").addEventListener("click",async()=>{try{await document.documentElement.requestFullscreen()}catch(e){}modal.hidden=true});
  $("#cat-dismiss-btn").addEventListener("click",()=>{dismissed=true;modal.hidden=true});
  const gif=$("#cat-gif");
  if(gif)gif.addEventListener("error",()=>{gif.src="https://media.tenor.com/2roX3uxz_68AAAAj/cat-kawaii.gif"});
})();

/* ==================== PREVIEW MODE (secret key) ==================== */
(function initPreview(){
  let buf="";
  window.addEventListener("keydown",e=>{
    if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;
    buf=(buf+(e.key||"")).toLowerCase().slice(-8);
    if(buf.includes("ashu")){sessionStorage.setItem("preview-mode","true");buf="";toast("preview mode activated ♡");renderCurrentPage()}
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
  app.className="view";
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
    gateArea.innerHTML=`
      <p class="hero-sub" style="margin-top:40px;font-style:italic;color:var(--ink-mute)">the door opens when the countdown reaches zero. patience, love.</p>
    `;
    // tiny hidden preview button
    const pb=document.createElement("button");
    pb.title="preview";
    pb.setAttribute("aria-label","creator preview");
    Object.assign(pb.style,{position:"fixed",bottom:"14px",right:"14px",zIndex:"30",width:"12px",height:"12px",borderRadius:"50%",background:"rgba(244,182,194,0.18)",border:"1px solid rgba(244,182,194,0.35)",cursor:"pointer",padding:"0"});
    pb.addEventListener("click",()=>{sessionStorage.setItem("preview-mode","true");renderCurrentPage()});
    document.body.appendChild(pb);
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
        if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:3});
        toast("welcome home, love ♡");
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
    card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();card.style.setProperty("--mx",(e.clientX-r.left)+"px");card.style.setProperty("--my",(e.clientY-r.top)+"px")});
    grid.appendChild(card);
  });
}

/* ==================== PAGE: JOURNEY ==================== */
function pageJourney(){
  app.innerHTML=`
    <p class="eyebrow">how we got here</p>
    <h1 class="hero-title">our <em>journey</em>, one line at a time.</h1>
    <p class="hero-sub">not every moment made the cut — only the ones i keep replaying.</p>
    <ol class="jr-timeline" id="tl"></ol>
  `;
  const tl=$("#tl");
  MILESTONES.forEach((m,i)=>{
    const li=document.createElement("li");
    li.className="jr-item";
    li.style.animationDelay=`${i*90}ms`;
    li.innerHTML=`
      <div class="jr-dot"><i class="fa-solid fa-heart"></i></div>
      <div class="jr-body">
        <div class="jr-date">${esc(m.date)}</div>
        <div class="jr-title">${esc(m.title)}</div>
        <div class="jr-note">${esc(m.note)}</div>
      </div>
    `;
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
        toast("unlocked ♡");
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
    <p class="eyebrow">everything you handed me</p>
    <h1 class="hero-title">gifts from <em>you</em>.</h1>
    <p class="hero-sub">the box wasn't the gift — you were. still, here they are.</p>
    <section class="gallery" id="gifts-gallery"></section>
  `;
  const g=$("#gifts-gallery");
  GIFT_PHOTOS.forEach(p=>{
    g.innerHTML+=`<figure class="g-cell"><img src="${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy"/><figcaption class="g-cap">${esc(p.cap)}</figcaption></figure>`;
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
  let used=[];
  app.innerHTML=`
    <p class="eyebrow">a little jar of feelings</p>
    <h1 class="hero-title">tap the <em>jar</em>.</h1>
    <p class="hero-sub">every tap, one little thing i've been meaning to say.</p>
    <section class="wj-scene">
      <svg class="wj-jar" id="wj-jar" width="200" height="240" viewBox="0 0 200 240" role="button" aria-label="Draw a wish">
        <defs>
          <linearGradient id="jarGlass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(244,182,194,0.35)"/>
            <stop offset="100%" stop-color="rgba(107,63,44,0.35)"/>
          </linearGradient>
          <linearGradient id="jarLid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e6c78a"/>
            <stop offset="100%" stop-color="#b98d4a"/>
          </linearGradient>
        </defs>
        <rect x="46" y="18" width="108" height="26" rx="6" fill="url(#jarLid)" stroke="#4a2e22" stroke-width="1.2"/>
        <rect x="52" y="42" width="96" height="8" rx="3" fill="#6b3f2c"/>
        <path d="M40 60 Q40 50 50 50 L150 50 Q160 50 160 60 L160 210 Q160 224 146 224 L54 224 Q40 224 40 210 Z" fill="url(#jarGlass)" stroke="#f4b6c2" stroke-width="1.2"/>
        <text x="100" y="150" text-anchor="middle" font-family="'Cormorant Garamond',serif" font-size="20" font-style="italic" fill="#f8ecdb" opacity="0.7">tap me</text>
        <circle cx="75" cy="120" r="5" fill="#f4b6c2" opacity="0.3"/>
        <circle cx="120" cy="100" r="4" fill="#e6c78a" opacity="0.3"/>
        <circle cx="90" cy="180" r="6" fill="#e28c9d" opacity="0.25"/>
        <circle cx="130" cy="170" r="3" fill="#f4b6c2" opacity="0.35"/>
      </svg>
      <div id="wish-out"></div>
    </section>
  `;
  const jar=$("#wj-jar");
  jar.addEventListener("click",()=>{
    jar.classList.remove("shake");void jar.offsetWidth;jar.classList.add("shake");
    const pool=WISHES.filter((_,i)=>!used.includes(i));
    if(pool.length===0){used=[];$("#wish-out").innerHTML=`<div class="wj-msg">(refilled the jar for you) tap again</div>`;return}
    const pickInPool=Math.floor(Math.random()*pool.length);
    const originalIdx=WISHES.indexOf(pool[pickInPool]);
    used.push(originalIdx);
    $("#wish-out").innerHTML=`<div class="wj-msg">"${esc(pool[pickInPool])}"</div>`;
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
    const area=$("#game-area");area.innerHTML="";
    if(tab==="memory")renderMemory(area);
    else if(tab==="quiz")renderQuiz(area);
    else renderScratch(area);
  }

  /* MEMORY */
  function renderMemory(area){
    const deck=shuffle([...MEM_IMGS,...MEM_IMGS].map((src,id)=>({id,src})));
    let flipped=[],matched=new Set(),moves=0;
    area.innerHTML=`<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><span class="mm-status" id="mm-st">pairs: 0 / ${MEM_IMGS.length} · moves: 0</span><button class="btn btn-ghost" id="mm-rst"><i class="fa-solid fa-rotate"></i> restart</button></div><div class="mm-board" id="mm-board"></div>`;
    const board=$("#mm-board");
    deck.forEach((c,idx)=>{
      const card=document.createElement("div");card.className="mm-card";card.dataset.idx=idx;
      card.innerHTML=`<div class="mm-inner"><div class="mm-face back"><i class="fa-solid fa-heart"></i></div><div class="mm-face front"><img src="${c.src}" alt="memory" loading="lazy"/></div></div>`;
      card.addEventListener("click",()=>clickCard(idx,card));
      board.appendChild(card);
    });
    $("#mm-rst").addEventListener("click",()=>renderMemory(area));

    function clickCard(idx,card){
      if(flipped.length>=2||flipped.includes(idx)||matched.has(deck[idx].src))return;
      flipped.push(idx);card.classList.add("flipped");
      if(flipped.length===2){
        moves++;updateSt();
        const[a,b]=flipped;
        if(deck[a].src===deck[b].src){
          matched.add(deck[a].src);
          board.querySelectorAll(".mm-card").forEach(c=>{if([a,b].includes(+c.dataset.idx))c.classList.add("matched")});
          flipped=[];
          if(matched.size===MEM_IMGS.length){done.memory=true;renderTabs();toast("memory complete ♡");if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2})}
        } else {
          setTimeout(()=>{board.querySelectorAll(".mm-card").forEach(c=>{if([a,b].includes(+c.dataset.idx))c.classList.remove("flipped")});flipped=[]},900);
        }
      }
    }
    function updateSt(){const st=$("#mm-st");if(st)st.textContent=`pairs: ${matched.size} / ${MEM_IMGS.length} · moves: ${moves}`}
  }

  /* QUIZ */
  function renderQuiz(area){
    let qi=0;
    render();
    function render(){
      if(qi>=QUIZ_QS.length){
        area.innerHTML=`<div class="quiz-done"><h4>you know ashu by heart. ♡</h4><p>that's love, M. that's us.</p></div>`;
        done.quiz=true;renderTabs();toast("quiz complete ♡");
        if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2});
        return;
      }
      const q=QUIZ_QS[qi];
      area.innerHTML=`<div class="quiz-stage"><div class="quiz-progress">question ${qi+1} / ${QUIZ_QS.length}</div><div class="quiz-q">${esc(q.q)}</div><div class="quiz-options" id="q-opts"></div><div class="quiz-hint" id="q-hint"></div></div>`;
      const opts=$("#q-opts");
      q.opts.forEach((lbl,i)=>{
        const btn=document.createElement("button");btn.className="quiz-opt";btn.textContent=lbl;
        btn.addEventListener("click",()=>{
          if(i===q.ans){btn.classList.add("correct");opts.querySelectorAll(".quiz-opt").forEach(b=>b.disabled=true);setTimeout(()=>{qi++;render()},700)}
          else{btn.classList.add("wrong");btn.disabled=true;
            const h=$("#q-hint");if(h)h.textContent="not quite — try again 💕";
            setTimeout(()=>btn.classList.remove("wrong"),600);
          }
        });
        opts.appendChild(btn);
      });
    }
  }

  /* SCRATCH */
  function renderScratch(area){
    area.innerHTML=`<div class="scratch-frame" id="sc-frame"><div class="scratch-under"><p class="scratch-msg">you are the reason i believe in forever, M ♡</p></div><canvas id="scratch-canvas" class="scratch-canvas"></canvas></div><div class="scratch-progress"><span id="sc-pct">0%</span><div class="scratch-bar"><div class="scratch-fill" id="sc-fill"></div></div></div>`;
    const cv=$("#scratch-canvas"),frame=$("#sc-frame");
    if(!cv||!frame)return;
    const rect=frame.getBoundingClientRect();
    const dpr=Math.min(window.devicePixelRatio||1,2);
    const w=Math.floor(rect.width),h=Math.floor(rect.height);
    cv.width=w*dpr;cv.height=h*dpr;cv.style.width=w+"px";cv.style.height=h+"px";
    const ctx=cv.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
    const grad=ctx.createLinearGradient(0,0,w,h);
    grad.addColorStop(0,"#6b3f2c");grad.addColorStop(.5,"#b45067");grad.addColorStop(1,"#3b1c26");
    ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
    ctx.fillStyle="rgba(248,236,219,.85)";ctx.font="italic 500 22px 'Cormorant Garamond',serif";
    ctx.textBaseline="middle";ctx.textAlign="center";ctx.fillText("scratch me M ♡",w/2,h/2);

    let drawing=false,revealed=false;
    function getPos(e){const r=cv.getBoundingClientRect();const t=e.touches?e.touches[0]:e;return{x:t.clientX-r.left,y:t.clientY-r.top}}
    function scratch(x,y){ctx.globalCompositeOperation="destination-out";ctx.beginPath();ctx.arc(x,y,24,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation="source-over";checkPct()}
    function checkPct(){
      if(revealed)return;
      try{
        const d=ctx.getImageData(0,0,cv.width,cv.height).data;
        let total=0,clear=0;
        for(let i=3;i<d.length;i+=32){total++;if(d[i]<12)clear++}
        const pct=Math.round(clear/total*100);
        const el=$("#sc-pct");if(el)el.textContent=pct+"%";
        const fill=$("#sc-fill");if(fill)fill.style.width=Math.min(pct*1.8,100)+"%";
        if(pct>55){revealed=true;ctx.clearRect(0,0,cv.width,cv.height);done.scratch=true;renderTabs();toast("scratch complete ♡");if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2})}
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
