(function(){
  "use strict";
  const cv=document.getElementById("petal-canvas");
  if(!cv)return;
  const ctx=cv.getContext("2d");
  const reduced=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  let W=0,H=0,dpr=1,petals=[],sparks=[],shootingStars=[],raf=null,frame=0;

  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    W=window.innerWidth;H=window.innerHeight;
    cv.width=Math.floor(W*dpr);cv.height=Math.floor(H*dpr);
    cv.style.width=W+"px";cv.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    petals.forEach(p=>{if(p.x>W)p.x=Math.random()*W;if(p.y>H)p.y=Math.random()*H});
  }

  function makeParticle(){
    const r=Math.random();
    const type=r < 0.4 ? "petal" : (r < 0.75 ? "heart" : "star");
    return {
      x: Math.random()*W,
      y: Math.random()*H,
      vx: (Math.random() - 0.5) * 0.2,
      vy: type === "petal" ? (0.15 + Math.random()*0.25) : (-0.05 - Math.random()*0.15),
      sz: type === "petal" ? (5 + Math.random()*6) : (type === "heart" ? 3.5 + Math.random()*4 : 1 + Math.random()*1.8),
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.02,
      a: 0.12 + Math.random()*0.35,
      type: type,
      hue: Math.random() < 0.6 ? "rose" : (Math.random() < 0.85 ? "gold" : "crimson"),
      ph: Math.random() * Math.PI * 2
    };
  }

  function init(){
    const n=reduced ? 0 : Math.max(20, Math.min(45, Math.floor(W*H/32000)));
    petals=[];
    for(let i=0; i<n; i++) petals.push(makeParticle());
  }

  function drawRosePetal(x, y, s, rot, a, hue){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = a;

    const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, s);
    if(hue === "rose"){
      grad.addColorStop(0, "rgba(244, 182, 194, 0.9)");
      grad.addColorStop(0.7, "rgba(226, 140, 157, 0.65)");
      grad.addColorStop(1, "rgba(180, 80, 103, 0.2)");
    } else if(hue === "crimson"){
      grad.addColorStop(0, "rgba(220, 75, 100, 0.9)");
      grad.addColorStop(0.7, "rgba(160, 45, 70, 0.65)");
      grad.addColorStop(1, "rgba(100, 25, 45, 0.2)");
    } else {
      grad.addColorStop(0, "rgba(230, 199, 138, 0.9)");
      grad.addColorStop(0.8, "rgba(185, 141, 74, 0.55)");
      grad.addColorStop(1, "rgba(120, 90, 40, 0.2)");
    }
    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.bezierCurveTo(s*0.8, -s*0.8, s, s*0.2, 0, s*1.1);
    ctx.bezierCurveTo(-s, s*0.2, -s*0.8, -s*0.8, 0, -s);
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(x, y, s, a, hue){
    ctx.save();
    ctx.globalAlpha = a;
    const color = hue === "rose" ? "#f4b6c2" : (hue === "crimson" ? "#e28c9d" : "#e6c78a");
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = s * 2.5;

    ctx.beginPath();
    ctx.moveTo(x, y + s*0.25);
    ctx.bezierCurveTo(x, y, x - s, y, x - s, y + s*0.35);
    ctx.bezierCurveTo(x - s, y + s*0.75, x, y + s*0.95, x, y + s*1.15);
    ctx.bezierCurveTo(x, y + s*0.95, x + s, y + s*0.75, x + s, y + s*0.35);
    ctx.bezierCurveTo(x + s, y, x, y, x, y + s*0.25);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawStar(x, y, s, a, hue){
    ctx.save();
    ctx.globalAlpha = a;
    const color = hue === "gold" ? "#e6c78a" : "#f8ecdb";
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = s * 3.5;

    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function spawnShootingStar(){
    if(reduced) return;
    shootingStars.push({
      x: Math.random() * W * 0.8,
      y: Math.random() * H * 0.4,
      len: 90 + Math.random() * 110,
      speed: 8 + Math.random() * 6,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
      opacity: 1,
      life: 0,
      maxLife: 42
    });
  }

  function step(){
    ctx.clearRect(0, 0, W, H);

    // Particles
    for(const p of petals){
      p.x += p.vx + Math.sin(p.ph) * 0.25;
      p.y += p.vy;
      p.rot += p.vrot;
      p.ph += 0.025;
      const alpha = Math.min(0.7, Math.max(0.1, p.a + Math.sin(p.ph)*0.1));

      // Wrap around bounds
      if(p.type === "petal"){
        if(p.y > H + 20){ p.y = -20; p.x = Math.random() * W; }
      } else {
        if(p.y < -20){ p.y = H + 20; p.x = Math.random() * W; }
      }
      if(p.x < -30) p.x = W + 30;
      if(p.x > W + 30) p.x = -30;

      if(p.type === "petal") drawRosePetal(p.x, p.y, p.sz, p.rot, alpha, p.hue);
      else if(p.type === "heart") drawHeart(p.x, p.y, p.sz, alpha, p.hue);
      else drawStar(p.x, p.y, p.sz, alpha, p.hue);
    }

    // Shooting Stars
    for(let i = shootingStars.length - 1; i >= 0; i--){
      const st = shootingStars[i];
      st.life++;
      const progress = st.life / st.maxLife;
      const currentX = st.x + Math.cos(st.angle) * st.speed * st.life;
      const currentY = st.y + Math.sin(st.angle) * st.speed * st.life;
      const tailX = currentX - Math.cos(st.angle) * st.len;
      const tailY = currentY - Math.sin(st.angle) * st.len;

      const alpha = Math.sin(progress * Math.PI) * 0.85;

      ctx.save();
      ctx.globalAlpha = alpha;
      const grad = ctx.createLinearGradient(tailX, tailY, currentX, currentY);
      grad.addColorStop(0, "rgba(244, 182, 194, 0)");
      grad.addColorStop(0.7, "rgba(244, 182, 194, 0.6)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0.95)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      // Glowing head
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#f4b6c2";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(currentX, currentY, 2.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if(st.life >= st.maxLife) shootingStars.splice(i, 1);
    }

    // Sparks (Fireworks)
    for(const s of sparks){
      s.x += s.vx; s.y += s.vy; s.vy += 0.04; s.life--;
      s.a = Math.max(0, s.life / s.ml);
    }
    for(const s of sparks){
      if(s.a <= 0) continue;
      ctx.save(); ctx.globalAlpha = s.a; ctx.fillStyle = s.c;
      ctx.shadowColor = s.c; ctx.shadowBlur = 6;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }
    sparks = sparks.filter(s => s.life > 0);

    // Random periodic events
    if(frame % 280 === 0 && Math.random() < 0.7) spawnShootingStar();
    if(frame % 220 === 0 && Math.random() < 0.5) spawnFirework();
    frame++;
  }

  function spawnFirework(x, y){
    if(reduced) return;
    const colors = ["#f4b6c2", "#e28c9d", "#e6c78a", "#f8ecdb", "#ff758c"];
    const cx = x ?? W * (0.2 + Math.random() * 0.6);
    const cy = y ?? H * (0.2 + Math.random() * 0.5);
    const n = W < 600 ? 35 : 60;
    for(let i = 0; i < n; i++){
      const a = Math.PI * 2 * i / n + Math.random() * 0.2;
      const spd = 2 + Math.random() * 3.5;
      sparks.push({
        x: cx, y: cy,
        vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
        r: 1.5 + Math.random() * 1.5,
        c: colors[Math.floor(Math.random() * colors.length)],
        life: 55 + Math.floor(Math.random() * 35),
        ml: 90, a: 1
      });
    }
  }

  function loop(){
    if(reduced){ ctx.clearRect(0,0,W,H); return; }
    step();
    raf = requestAnimationFrame(loop);
  }

  window.triggerFireworks = function(opts){
    if(reduced) return;
    const b = (opts && opts.bursts) || 3;
    for(let i = 0; i < b; i++) setTimeout(() => spawnFirework(), i * 220);
  };

  let rto = null;
  window.addEventListener("resize", () => {
    if(rto) clearTimeout(rto);
    rto = setTimeout(() => { resize(); init(); }, 120);
  });

  resize(); init();
  raf = requestAnimationFrame(loop);
})();
