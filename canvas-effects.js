(function(){
  "use strict";
  const cv=document.getElementById("petal-canvas");
  if(!cv)return;
  const ctx=cv.getContext("2d");
  const reduced=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  let W=0,H=0,dpr=1,petals=[],sparks=[],raf=null,frame=0;

  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    W=window.innerWidth;H=window.innerHeight;
    cv.width=Math.floor(W*dpr);cv.height=Math.floor(H*dpr);
    cv.style.width=W+"px";cv.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    petals.forEach(p=>{if(p.x>W)p.x=Math.random()*W;if(p.y>H)p.y=Math.random()*H});
  }

  function makePetal(){
    const t=Math.random()<.35?"heart":"dot";
    return{x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.15,vy:-.07-Math.random()*.16,
      sz:t==="heart"?5+Math.random()*5:1+Math.random()*1.6,a:.15+Math.random()*.4,
      type:t,hue:Math.random()<.5?"rose":"gold",ph:Math.random()*Math.PI*2};
  }

  function init(){
    const n=reduced?0:Math.max(20,Math.min(55,Math.floor(W*H/26000)));
    petals=[];for(let i=0;i<n;i++)petals.push(makePetal());
  }

  function drawHeart(x,y,s,a,hue){
    ctx.save();ctx.globalAlpha=a;ctx.fillStyle=hue==="rose"?"#f4b6c2":"#e6c78a";
    ctx.beginPath();ctx.moveTo(x,y+s*.25);
    ctx.bezierCurveTo(x,y,x-s,y,x-s,y+s*.35);ctx.bezierCurveTo(x-s,y+s*.75,x,y+s*.95,x,y+s*1.15);
    ctx.bezierCurveTo(x,y+s*.95,x+s,y+s*.75,x+s,y+s*.35);ctx.bezierCurveTo(x+s,y,x,y,x,y+s*.25);
    ctx.closePath();ctx.fill();ctx.restore();
  }

  function step(){
    ctx.fillStyle="rgba(13,10,15,.16)";ctx.fillRect(0,0,W,H);
    for(const p of petals){
      p.x+=p.vx;p.y+=p.vy;p.ph+=.02;p.a+=Math.sin(p.ph)*.003;
      if(p.y<-20){p.y=H+10;p.x=Math.random()*W}
      if(p.x<-20)p.x=W+10;if(p.x>W+20)p.x=-10;
      if(p.type==="heart")drawHeart(p.x,p.y,p.sz,Math.min(.55,Math.max(.05,p.a)),p.hue);
      else{ctx.save();ctx.globalAlpha=Math.min(.8,Math.max(.1,p.a));ctx.fillStyle=p.hue==="rose"?"#f4b6c2":"#f8ecdb";ctx.beginPath();ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);ctx.fill();ctx.restore()}
    }
    // sparks
    for(const s of sparks){s.x+=s.vx;s.y+=s.vy;s.vy+=.04;s.life--;s.a=Math.max(0,s.life/s.ml)}
    for(const s of sparks){if(s.a<=0)continue;ctx.save();ctx.globalAlpha=s.a;ctx.fillStyle=s.c;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();ctx.restore()}
    sparks=sparks.filter(s=>s.life>0);
    if(frame%220===0&&Math.random()<.6)spawnFirework();
    frame++;
  }

  function spawnFirework(x,y){
    if(reduced)return;
    const colors=["#f4b6c2","#e28c9d","#e6c78a","#f8ecdb","#b45067"];
    const cx=x??W*(.2+Math.random()*.6),cy=y??H*(.2+Math.random()*.5);
    const n=W<600?30:55;
    for(let i=0;i<n;i++){
      const a=Math.PI*2*i/n+Math.random()*.2,spd=2+Math.random()*3.2;
      sparks.push({x:cx,y:cy,vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:1.4+Math.random()*1.4,c:colors[Math.floor(Math.random()*colors.length)],life:55+Math.floor(Math.random()*35),ml:90,a:1});
    }
  }

  function loop(){if(reduced){ctx.clearRect(0,0,W,H);return}step();raf=requestAnimationFrame(loop)}

  window.triggerFireworks=function(opts){
    if(reduced)return;const b=(opts&&opts.bursts)||3;
    for(let i=0;i<b;i++)setTimeout(()=>spawnFirework(),i*200);
  };

  let rto=null;
  window.addEventListener("resize",()=>{if(rto)clearTimeout(rto);rto=setTimeout(()=>{resize();init()},120)});
  resize();init();raf=requestAnimationFrame(loop);
})();
