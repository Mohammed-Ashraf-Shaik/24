(function(){
"use strict";
/* ==================== CONFIG ==================== */
const TARGET_DATE = new Date("2026-08-24T00:00:00").getTime();
const MAIN_PASS = "ashuashu";
const LETTER_PASS = "ashu";
const RIME_PASSES = ["1","2","3","4"];

const RIME_LABELS = [
  "1st meet — the very first time - VIOLET - HMM SOMTG HAPPENED",
  "2nd meet — the one after - YELLOW - HMM IDK BA",
  "3rd meet — getting braver - BISCUIT - HMM QUIT ONE",
  "4th meet — feeling like ours - GREEN - NO WORDS ONLY FINGERS"
];

const NAV_ITEMS = [
  {hash:"hub",label:"Home",icon:"fa-heart"},
  {hash:"journey",label:"Journey",icon:"fa-road"},
  {hash:"rime",label:"RIME",icon:"fa-map-pin"},
  {hash:"hands",label:"Our Hands",icon:"fa-hand-holding-heart"},
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

const HANDS_PHOTOS = [
  {src:"assets/hands/IMG-20250617-WA0004.jpg",cap:"our hands ❤️"},
  {src:"assets/hands/IMG-20250617-WA0015.jpg",cap:"holding on"},
  {src:"assets/hands/IMG-20250822-WA0103.jpg",cap:"never letting go"},
  {src:"assets/hands/IMG-20250823-WA0017.jpg",cap:"always"},
  {src:"assets/hands/IMG-20250823-WA0019.jpg",cap:"safe with you"},
  {src:"assets/hands/IMG-20250823-WA0021.jpg",cap:"my favourite place"},
  {src:"assets/hands/IMG-20250823-WA0030.jpg",cap:"together"},
  {src:"assets/hands/IMG-20250824-WA0044.jpg",cap:"our hands ❤️"},
  {src:"assets/hands/IMG-20250824-WA0045.jpg",cap:"holding on"},
  {src:"assets/hands/IMG-20250824-WA0094.jpg",cap:"never letting go"},
  {src:"assets/hands/IMG-20250824-WA0095.jpg",cap:"always"},
  {src:"assets/hands/IMG-20250824-WA0123.jpg",cap:"safe with you"},
  {src:"assets/hands/IMG-20250824-WA0124.jpg",cap:"my favourite place"},
  {src:"assets/hands/IMG-20251013-WA0215.jpg",cap:"together"},
  {src:"assets/hands/IMG-20251123-WA0003.jpg",cap:"our hands ❤️"},
  {src:"assets/hands/IMG-20251124-WA0010.jpg",cap:"holding on"},
  {src:"assets/hands/IMG-20251130-WA0007.jpg",cap:"never letting go"},
  {src:"assets/hands/IMG-20260119-WA0012.jpg",cap:"always"},
  {src:"assets/hands/IMG-20260205-WA0001.jpg",cap:"safe with you"},
  {src:"assets/hands/IMG-20260417-WA0011.jpg",cap:"my favourite place"},
  {src:"assets/hands/IMG-20260503-WA0025.jpg",cap:"together"},
  {src:"assets/hands/IMG-20260511-WA0002.jpg",cap:"our hands ❤️"},
  {src:"assets/hands/IMG-20260516-WA0018.jpg",cap:"holding on"},
  {src:"assets/hands/IMG-20260516-WA0024.jpg",cap:"never letting go"},
  {src:"assets/hands/IMG-20260529-WA0000.jpg",cap:"always"},
  {src:"assets/hands/IMG-20260605-WA0392.jpg",cap:"safe with you"},
  {src:"assets/hands/IMG-20260605-WA0432.jpg",cap:"my favourite place"},
  {src:"assets/hands/IMG-20260605-WA0475.jpg",cap:"together"},
  {src:"assets/hands/IMG-20260605-WA0496.jpg",cap:"our hands ❤️"},
  {src:"assets/hands/IMG-20260617-WA0091.jpg",cap:"holding on"},
  {src:"assets/hands/IMG-20260629-WA0034.jpg",cap:"never letting go"},
  {src:"assets/hands/IMG-20260630-WA0186.jpg",cap:"always"},
  {src:"assets/hands/IMG-20260630-WA0187.jpg",cap:"safe with you"},
  {src:"assets/hands/Screenshot 2026-07-22 204036.png",cap:"my favourite place"},
  {src:"assets/hands/Screenshot_20251031_164833.jpg",cap:"together"},
  {src:"assets/hands/Snapchat-2066195542.jpg",cap:"our hands ❤️"},
];

const RIME_PHOTOS = [
    {src:"assets/rime/1.jpg",cap:"Our first RIME ❤️"},
    {src:"assets/rime/2.jpg",cap:"Beautiful B ღ memory"},
    {src:"assets/rime/111.jpg",cap:"Edi uke peta 💞(1 n 2 pic lo nenu ravadam ledu ani) ❤️"},
    {src:"assets/rime/22.jpg",cap:"So Sweet ♥ kada"},
    {src:"assets/rime/3.jpg",cap:"Just us ❤️"},
    {src:"assets/rime/4.jpg",cap:"My favorite 💗 moment"},
    {src:"assets/rime/5.jpg",cap:"This pic 🤎 is good another vadu le"},
    {src:"assets/rime/6.jpg",cap:"Another 3 beautiful memory "},
    {src:"assets/rime/7.jpg",cap:"So shy haha ❤️"},
    {src:"assets/rime/8.jpg",cap:"My favorite pic too"},
    {src:"assets/rime/9.jpg",cap:"This onr kuda❤️"},
    {src:"assets/rime/10.jpg",cap:"Another 4 beautiful memory"},
    {src:"assets/rime/11.jpg",cap:"Just us exploring ❤️"},
    {src:"assets/rime/12.png",cap:"F enough?"}
];
const MORE_RIME_PHOTOS = [
    {src:"assets/rime2/1.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/2.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/3.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/4.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/5.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/6.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/7.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/8.jpg",cap:"🖤🤎",type:"portrait"},
    {src:"assets/rime2/9.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/10.jpg",cap:"🖤🤎",type:"portrait"},
    {src:"assets/rime2/11.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/12.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/13.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/14.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/15.jpg",cap:"🖤🤎",type:"landscape"},
    {src:"assets/rime2/16.jpg",cap:"🖤🤎",type:"portrait"},
    {src:"assets/rime2/17.jpg",cap:"🖤🤎",type:"portrait"},
    {src:"assets/rime2/18.jpg",cap:"🖤🤎",type:"portrait"},
    {src:"assets/rime2/19.jpg",cap:"🖤🤎",type:"portrait"},
    {src:"assets/rime2/20.jpg",cap:"🖤🤎",type:"portrait"}
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
  {q:"What does ashu love the most about Maha?",opts:["Your smile","Your nose","Your eyes","Everything about you ♡"],ans:2},
  {q:"What's our favorite thing to do together?",opts:["Late night talks","Going on adventures","Being Happy together","All of the above ♡"],ans:3},
  {q:"When ashu thinks of Maha, what comes to mind first?",opts:["Butterflies","Home","Happiness","Forever ♡"],ans:1},
  {q:"How much does ashu love Maha?",opts:["A lot","More than words can say","To the moon and stars","less than Arey I Love U more than u love me ♡"],ans:3},
];

const MEM_IMGS = [
  "assets/memorymatch/IMG-20250804-WA0072.jpg",
  "assets/memorymatch/IMG-20250804-WA0111.jpg",
  "assets/memorymatch/IMG-20250901-WA0033.jpg",
  "assets/memorymatch/IMG-20251217-WA0025.jpg",
  "assets/memorymatch/IMG-20260111-WA0041.jpg",
  "assets/memorymatch/Snapchat-398149092.jpg",
  "assets/memorymatch/her.jpg",
  "assets/memorymatch/IMG-20260731-WA0069.jpg",
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
  const pages={landing:pageLanding,hub:pageHub,journey:pageJourney,rime:pageRime,hands:pageHands,gifts:pageGifts,game:pageGame,letter:pageLetter,wishjar:pageWishJar};
  const fn=pages[page]||pageLanding;
  if(page!=="landing"&&!isUnlocked()){go("landing");return}
  fn();
}

window.addEventListener("hashchange",renderCurrentPage);

/* ==================== COUNTDOWN ==================== */
let cdTimer=null;
function startCountdown(el, onTickOver){
  if(cdTimer)clearInterval(cdTimer);
  function render(isInit){
    const diff=Math.max(0,TARGET_DATE-Date.now());
    const d=Math.floor(diff/864e5),h=Math.floor(diff/36e5%24),m=Math.floor(diff/6e4%60),s=Math.floor(diff/1e3%60);
    const done=diff===0;
    el.innerHTML=[{n:d,l:"days"},{n:pad(h),l:"hours"},{n:pad(m),l:"minutes"},{n:pad(s),l:"seconds"}]
      .map(c=>`<div class="cd-cell"><span class="cd-num">${c.n}</span><span class="cd-label">${c.l}</span></div>`).join("");
    if(done && !isInit && onTickOver) onTickOver();
    return done;
  }
  const done=render(true);
  if(!done)cdTimer=setInterval(()=>{if(render(false)&&cdTimer)clearInterval(cdTimer)},1000);
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
  const gateArea=$("#gate-area");
  
  function playAnimationAndShowGate() {
    if(sessionStorage.getItem("bday-anim-seen")) {
      showGate();
      return;
    }
    sessionStorage.setItem("bday-anim-seen", "true");
    
    gateArea.innerHTML = "";
    
    const overlay = document.createElement("div");
    overlay.className = "birthday-overlay";
    overlay.innerHTML = `<div class="bday-text">HAPPY BIRTHDAY<br>MAHA</div>`;
    document.body.appendChild(overlay);
    
    setTimeout(() => {
      overlay.classList.add("fade-out");
      showGate();
      setTimeout(() => overlay.remove(), 1500);
    }, 5500);
  }

  const done=startCountdown(cdGrid, () => {
    playAnimationAndShowGate();
  });

  if(done||alreadyIn||preview){
    if(done && !alreadyIn && !preview) {
      playAnimationAndShowGate();
    } else {
      showGate();
    }
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
        toast("Finally it's your day.., love ♡");
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
    {to:"hands",title:"our hands",desc:"holding on to you, never letting go.",icon:"fa-hand-holding-heart",locked:true},
    {to:"gifts",title:"gifts from you",desc:"every little thing you gave me.",icon:"fa-gift"},
    {to:"game",title:"our little games",desc:"memory, quiz and a scratch card.",icon:"fa-puzzle-piece",locked:true},
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
    <p class="hero-sub">four little numbers, four little days. type the date of each meeting — one at a time. (format: dd) remember mental </p>
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
        <h2 class="section-title" style="margin-top:40px">the four Goood afternoons at RIME</h2>
        <p class="section-sub">each frame, a night we didn't want to end.</p>
        <div class="gallery" id="rime-gallery"></div>
      `;
      const g=$("#rime-gallery");
   RIME_PHOTOS.forEach(p=>{
    g.innerHTML+=`<figure class="g-cell">
        <img src="${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy"/>
        <figcaption class="g-cap">${esc(p.cap)}</figcaption>
    </figure>`;
});

g.innerHTML += `
<div class="memory-box" id="memory-box">

    <div class="box-lid"></div>

    <div class="box-base">
        <div class="box-glow"></div>
        <i class="fa-solid fa-heart"></i>

    </div>

    <h3>Our Memory Box ❤️</h3>

    <p>
        Some memories are too precious
        to leave outside...
    </p>

    <button class="btn btn-primary" id="open-box">

        Open Box

    </button>

</div>
`;
g.innerHTML += `
<div id="more-gallery" class="more-gallery" hidden>

    <h2 class="section-title">More Beautiful Memories ❤️</h2>

    <div class="gallery" id="more-gallery-grid"></div>

</div>
`;

document.getElementById("open-box").onclick = () => {

    const box = document.getElementById("memory-box");
    const grid = document.getElementById("more-gallery-grid");
    const moreGallery = document.getElementById("more-gallery");

    box.classList.add("shake");

    setTimeout(() => {

        box.classList.remove("shake");
        box.classList.add("open");

        createParticles(box);

        if(typeof window.triggerFireworks==="function")
            window.triggerFireworks({bursts:2});

        setTimeout(() => {

            moreGallery.hidden = false;
            grid.innerHTML = "";

            const cards = MORE_RIME_PHOTOS.map((p) => {
                const card = document.createElement("figure");
                card.className = `g-cell ${p.type || ""}`;
                card.innerHTML = `
                    <img src="${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy">
                    <figcaption class="g-cap">${esc(p.cap)}</figcaption>
                `;
                card.style.opacity = "0"; 
                grid.appendChild(card);
                return card;
            });

            // Force layout calculation
            const _ = grid.offsetHeight;

            const boxRect = box.getBoundingClientRect();
            const boxCenterX = boxRect.left + boxRect.width / 2;
            const boxCenterY = boxRect.top + boxRect.height / 2;

            let settledCount = 0;

            cards.forEach((card, i) => {
                setTimeout(() => {
                    const finalRect = card.getBoundingClientRect();
                    const finalCenterX = finalRect.left + finalRect.width / 2;
                    const finalCenterY = finalRect.top + finalRect.height / 2;
                    
                    const deltaX = boxCenterX - finalCenterX;
                    const deltaY = boxCenterY - finalCenterY;
                    
                    card.style.transition = "none";
                    card.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2) rotate(-10deg)`;
                    card.style.opacity = "0";
                    
                    // Force repaint
                    const __ = card.offsetHeight;
                    
                    card.style.transition = "transform 1s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.8s ease";
                    
                    requestAnimationFrame(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translate(0px, 0px) scale(1) rotate(0deg)";
                    });
                    
                    setTimeout(() => {
                        card.style.transition = "";
                        card.style.transform = "";
                        settledCount++;
                        
                        if (settledCount === cards.length) {
                            box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                            box.style.opacity = "0";
                            box.style.transform = "scale(0.8)";
                            setTimeout(() => { box.remove(); }, 600);
                        }
                    }, 1000);
                    
                }, i * 150);
            });

        }, 800);

    }, 400);

};

function createParticles(box) {
    const boxRect = box.getBoundingClientRect();
    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "gold-particle";
        const x = boxRect.left + boxRect.width * 0.2 + Math.random() * (boxRect.width * 0.6);
        const y = boxRect.top + 20 + Math.random() * 20;
        p.style.left = x + "px";
        p.style.top = y + "px";
        
        const driftX = (Math.random() - 0.5) * 200;
        const driftY = -100 - Math.random() * 200;
        p.style.setProperty("--x", driftX + "px");
        p.style.setProperty("--y", driftY + "px");
        
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1800);
    }
}
if(typeof window.triggerFireworks==="function")
    window.triggerFireworks({bursts:2});

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
        toast("NICE UNLOCKED haha ♡");
        renderRimeStep();
        if ($("#rime-inp")) $("#rime-inp").focus();
      } else {
        const m=$("#rime-msg");m.className="gate-error";m.textContent="not quite — think of the date, love";
        setTimeout(()=>{if(m){m.className="gate-hint";m.textContent="just the day — like 12 or 07"}},2400);
      }
    });
  }
}

/* ==================== PAGE: HANDS ==================== */
function pageHands(){
  const ok=sessionStorage.getItem("hands-unlocked")==="true";
  app.innerHTML=`
    <p class="eyebrow">every time we touch</p>
    <h1 class="hero-title">our <em>hands</em> together.</h1>
    <p class="hero-sub">my favourite place is holding onto you. here are all the times our hands found each other.</p>
    <div id="hands-area"></div>
  `;
  if(ok){showHandsGallery();return}
  
  const area=$("#hands-area");
  area.innerHTML=`
    <div class="gate-wrap">
      <h3>unlock our hands</h3>
      <p>ur mom mobile no</p>
      <form id="hands-form">
        <input class="gate-input" type="password" placeholder="••••••••••" id="hands-inp" autofocus />
        <div style="display:flex;justify-content:center;margin-top:16px">
          <button type="submit" class="btn btn-primary"><i class="fa-solid fa-lock-open"></i> unlock</button>
        </div>
        <div id="hands-msg" class="gate-hint">enter the 10 digits</div>
      </form>
    </div>
  `;
  
  $("#hands-form").addEventListener("submit",e=>{
    e.preventDefault();
    const v=$("#hands-inp").value.trim();
    if(v==="8500686769"){
      sessionStorage.setItem("hands-unlocked","true");
      showHandsGallery();
    } else {
      const m=$("#hands-msg");m.className="gate-error";m.textContent="that's not it, try again";
      setTimeout(()=>{if(m){m.className="gate-hint";m.textContent="enter the 10 digits"}},2400);
    }
  });
}

function showHandsGallery() {
  const area=$("#hands-area");
  area.innerHTML=`<section class="gallery" id="hands-gallery"></section>`;
  const g=$("#hands-gallery");
  HANDS_PHOTOS.forEach(p=>{
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

  const ok=sessionStorage.getItem("game-unlocked")==="true";
  app.innerHTML=`
    <p class="eyebrow">three tiny games</p>
    <h1 class="hero-title">play with <em>me</em>.</h1>
    <p class="hero-sub" id="game-sub">memory match, a little quiz about us, and a scratch card with something hidden underneath.</p>
    <div id="game-main-area"></div>
  `;
  
  if(ok){showGames();return;}
  
  const area=$("#game-main-area");
  area.innerHTML=`
    <div class="gate-wrap">
      <h3>unlock our games</h3>
      <p>Remember the month and date you met my mom.</p>
      <form id="game-form">
        <input class="gate-input" type="text" placeholder="month date" id="game-inp" autofocus />
        <div style="display:flex;justify-content:center;margin-top:16px">
          <button type="submit" class="btn btn-primary"><i class="fa-solid fa-lock-open"></i> unlock</button>
        </div>
        <div id="game-msg" class="gate-hint">e.g. january 01</div>
      </form>
    </div>
  `;
  
  $("#game-form").addEventListener("submit",e=>{
    e.preventDefault();
    const v=$("#game-inp").value.trim().toLowerCase();
    if(v==="june 27" || v==="june27" || v==="27 june" || v==="27th june"){
      sessionStorage.setItem("game-unlocked","true");
      showGames();
    } else {
      const m=$("#game-msg");m.className="gate-error";m.textContent="that's not it, try again";
      setTimeout(()=>{if(m){m.className="gate-hint";m.textContent="e.g. january 01"}},2400);
    }
  });

  function showGames() {
    const area=$("#game-main-area");
    area.innerHTML=`
      <div class="game-tabs" id="game-tabs"></div>
      <div id="game-area"></div>
    `;
    renderTabs();
    renderGame();
  }

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
          if(matched.size===MEM_IMGS.length){
            done.memory=true;
            renderTabs();
            toast("memory complete ♡");
            if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2});
            pixelReveal(board, "assets/memorymatch/reveal.jpg");
          }
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
        area.innerHTML=`<div class="quiz-done" style="text-align:center;"><h4>you know ashu by heart. ♡</h4><p>that's love, M. that's us.</p><div id="quiz-reveal-board" style="margin-top:24px;width:100%;max-width:500px;margin-inline:auto;"></div></div>`;
        done.quiz=true;renderTabs();toast("quiz complete ♡");
        if(typeof window.triggerFireworks==="function")window.triggerFireworks({bursts:2});
        pixelReveal($("#quiz-reveal-board"), "assets/memorymatch/reveal2.jpg");
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
    area.innerHTML=`<div class="scratch-frame" id="sc-frame"><div class="scratch-under"><p class="scratch-msg">Some promises are meant to be proven ♡</p></div><canvas id="scratch-canvas" class="scratch-canvas"></canvas></div><div class="scratch-progress"><span id="sc-pct">0%</span><div class="scratch-bar"><div class="scratch-fill" id="sc-fill"></div></div></div>`;
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

/* ==================== PIXEL REVEAL ==================== */
function pixelReveal(boardElement, imageSrc) {
  const w = boardElement.clientWidth || 400;
  
  const img = new Image();
  img.src = imageSrc || "assets/memorymatch/reveal.jpg";
  img.onload = () => {
    const imgAspect = img.width / img.height;
    const h = Math.round(w / imgAspect);
    
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = "100%";
    canvas.style.height = h + "px";
    canvas.style.borderRadius = "12px";
    
    boardElement.innerHTML = "";
    boardElement.style.display = "block";
    boardElement.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    
    const blockSize = 20; // 20x20 pixel blocks
    const cols = Math.ceil(w / blockSize);
    const rows = Math.ceil(h / blockSize);
    
    let blocks = [];
    for(let c=0; c<cols; c++){
      for(let r=0; r<rows; r++){
        blocks.push({c, r});
      }
    }
    blocks = shuffle(blocks);
    
    let i = 0;
    const blocksPerFrame = Math.max(1, Math.ceil(blocks.length / 90)); // Finish in ~1.5 sec
    
    function draw() {
      for(let b=0; b<blocksPerFrame; b++){
        if(i >= blocks.length) break;
        const blk = blocks[i++];
        const x = blk.c * blockSize;
        const y = blk.r * blockSize;
        
        const srcX = (x / w) * img.width;
        const srcY = (y / h) * img.height;
        const srcW = (blockSize / w) * img.width;
        const srcH = (blockSize / h) * img.height;
        
        ctx.drawImage(img, srcX, srcY, srcW, srcH, x, y, blockSize, blockSize);
      }
      
      if(i < blocks.length){
        requestAnimationFrame(draw);
      } else {
        const finalImg = document.createElement("img");
        finalImg.src = img.src;
        finalImg.style.width = "100%";
        finalImg.style.height = "auto";
        finalImg.style.display = "block";
        finalImg.style.borderRadius = "12px";
        finalImg.style.animation = "fade-in 1s forwards";
        
        setTimeout(() => {
          boardElement.innerHTML = "";
          boardElement.appendChild(finalImg);
        }, 500);
      }
    }
    
    ctx.fillStyle = "var(--bg-0)";
    ctx.fillRect(0,0,w,h);
    draw();
  };
}

/* ==================== SHUFFLE ==================== */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

/* ==================== BOOT ==================== */
renderCurrentPage();

})();
