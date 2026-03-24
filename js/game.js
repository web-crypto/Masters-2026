// ============================================
// AUGUSTA MINI GOLF — 9-Hole Game Engine
// Canvas-based with physics, walls, and friction
// ============================================

(function() {
  'use strict';

  // --- Constants ---
  const CANVAS_W = 800;
  const CANVAS_H = 500;
  const BALL_RADIUS = 7;
  const HOLE_RADIUS = 12;
  const FRICTION = 0.985;
  const MIN_VELOCITY = 0.15;
  const MAX_POWER = 18;
  const WALL_BOUNCE = 0.65;
  const POWER_RATE = 0.025; // Power accumulation rate per frame

  // Masters colors
  const COLORS = {
    felt: '#2d5a34',
    feltDark: '#1f4226',
    feltLight: '#3a7044',
    border: '#1a3520',
    wall: '#5a3e1b',
    wallLight: '#8b6914',
    hole: '#0a1a0d',
    holeRim: '#1a3520',
    ball: '#f5f0e8',
    ballShadow: 'rgba(0,0,0,0.25)',
    aim: 'rgba(245,240,232,0.6)',
    aimDot: 'rgba(245,240,232,0.3)',
    gold: '#c9a84c',
    goldLight: '#dcc277',
    water: '#1a4a7a',
    waterLight: '#2a6aaa',
    sand: '#d4b86a',
    sandLight: '#e8d08a',
    flag: '#c0392b',
    text: '#f5f0e8'
  };

  // --- Hole Definitions ---
  const HOLES = [
    {
      name: 'Tea Olive',
      par: 3,
      ball: { x: 100, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        { x: 300, y: 150, w: 20, h: 200 },
      ],
      obstacles: []
    },
    {
      name: 'Pink Dogwood',
      par: 3,
      ball: { x: 100, y: 400 },
      hole: { x: 700, y: 100 },
      walls: [
        { x: 250, y: 0, w: 20, h: 300 },
        { x: 500, y: 200, w: 20, h: 300 },
      ],
      obstacles: []
    },
    {
      name: 'Flowering Peach',
      par: 4,
      ball: { x: 100, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        { x: 200, y: 100, w: 20, h: 180 },
        { x: 200, y: 320, w: 20, h: 180 },
        { x: 450, y: 0, w: 20, h: 220 },
        { x: 450, y: 300, w: 20, h: 200 },
      ],
      obstacles: []
    },
    {
      name: 'Flowering Crab Apple',
      par: 3,
      ball: { x: 400, y: 430 },
      hole: { x: 400, y: 70 },
      walls: [
        { x: 200, y: 180, w: 180, h: 20 },
        { x: 420, y: 180, w: 180, h: 20 },
        { x: 200, y: 300, w: 180, h: 20 },
        { x: 420, y: 300, w: 180, h: 20 },
      ],
      obstacles: []
    },
    {
      name: 'Magnolia',
      par: 4,
      ball: { x: 80, y: 80 },
      hole: { x: 720, y: 420 },
      walls: [
        { x: 180, y: 0, w: 20, h: 200 },
        { x: 350, y: 180, w: 20, h: 320 },
        { x: 500, y: 0, w: 20, h: 280 },
        { x: 630, y: 200, w: 20, h: 300 },
      ],
      obstacles: [
        { type: 'sand', x: 600, y: 350, r: 35 }
      ]
    },
    {
      name: 'Juniper',
      par: 3,
      ball: { x: 400, y: 420 },
      hole: { x: 400, y: 80 },
      walls: [
        { x: 150, y: 200, w: 200, h: 20 },
        { x: 450, y: 200, w: 200, h: 20 },
        { x: 320, y: 280, w: 160, h: 20 },
      ],
      obstacles: [
        { type: 'water', x: 250, y: 120, r: 40 },
        { type: 'water', x: 550, y: 120, r: 40 }
      ]
    },
    {
      name: 'Azalea',
      par: 4,
      ball: { x: 100, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        { x: 230, y: 100, w: 20, h: 150 },
        { x: 230, y: 300, w: 20, h: 150 },
        { x: 400, y: 0, w: 20, h: 200 },
        { x: 400, y: 280, w: 20, h: 220 },
        { x: 570, y: 120, w: 20, h: 160 },
        { x: 570, y: 340, w: 20, h: 160 },
      ],
      obstacles: [
        { type: 'sand', x: 320, y: 250, r: 25 },
        { type: 'water', x: 490, y: 250, r: 30 }
      ]
    },
    {
      name: 'Carolina Cherry',
      par: 5,
      ball: { x: 60, y: 60 },
      hole: { x: 740, y: 440 },
      walls: [
        { x: 150, y: 0, w: 20, h: 160 },
        { x: 150, y: 220, w: 20, h: 120 },
        { x: 150, y: 400, w: 20, h: 100 },
        { x: 350, y: 80, w: 20, h: 160 },
        { x: 350, y: 300, w: 20, h: 200 },
        { x: 550, y: 0, w: 20, h: 220 },
        { x: 550, y: 280, w: 20, h: 100 },
        { x: 550, y: 440, w: 20, h: 60 },
      ],
      obstacles: [
        { type: 'sand', x: 250, y: 350, r: 30 },
        { type: 'water', x: 450, y: 150, r: 35 },
        { type: 'sand', x: 650, y: 300, r: 25 }
      ]
    },
    {
      name: 'Holly',
      par: 4,
      ball: { x: 100, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        // Circular fortress around the hole
        { x: 600, y: 160, w: 120, h: 15 },
        { x: 600, y: 325, w: 120, h: 15 },
        { x: 600, y: 175, w: 15, h: 70 },
        { x: 600, y: 260, w: 15, h: 65 },
        // Corridor walls
        { x: 300, y: 50, w: 15, h: 180 },
        { x: 300, y: 280, w: 15, h: 180 },
      ],
      obstacles: [
        { type: 'water', x: 430, y: 250, r: 45 },
        { type: 'sand', x: 200, y: 130, r: 25 },
        { type: 'sand', x: 200, y: 370, r: 25 }
      ]
    }
  ];

  // --- Game State ---
  let canvas, ctx;
  let gameState = 'start'; // start, playing, aiming, rolling, hole-complete, game-over
  let currentHole = 0;
  let strokes = 0;
  let totalStrokes = 0;
  let scores = [];
  let ball = { x: 0, y: 0, vx: 0, vy: 0 };
  let aiming = false;
  let aimStart = { x: 0, y: 0 };
  let aimCurrent = { x: 0, y: 0 };
  let power = 0;
  let powerCharging = false;
  let mouseDown = false;
  let mousePos = { x: 0, y: 0 };
  let animFrameId;

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('game-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');

    // Handle responsive canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Event listeners
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('submit-score-btn').addEventListener('click', submitScore);
    document.getElementById('play-again-btn').addEventListener('click', startGame);
    document.getElementById('clear-scores-btn').addEventListener('click', clearScores);

    // Render initial scorecard
    renderScorecard();
    loadLeaderboard();

    // Draw initial state
    drawHole();
  });

  function resizeCanvas() {
    const wrapper = canvas.parentElement;
    const rect = wrapper.getBoundingClientRect();
    const scale = rect.width / CANVAS_W;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = (CANVAS_H * scale) + 'px';
  }

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  // --- Input Handlers ---
  function onMouseDown(e) {
    e.preventDefault();
    const pos = getCanvasCoords(e);
    handlePointerDown(pos);
  }

  function onMouseMove(e) {
    const pos = getCanvasCoords(e);
    handlePointerMove(pos);
  }

  function onMouseUp(e) {
    handlePointerUp();
  }

  function onTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const pos = getCanvasCoords(touch);
    handlePointerDown(pos);
  }

  function onTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const pos = getCanvasCoords(touch);
    handlePointerMove(pos);
  }

  function onTouchEnd(e) {
    handlePointerUp();
  }

  function handlePointerDown(pos) {
    if (gameState !== 'playing') return;
    mouseDown = true;
    mousePos = pos;

    // Check if near ball
    const dx = pos.x - ball.x;
    const dy = pos.y - ball.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 50) {
      aiming = true;
      powerCharging = true;
      power = 0;
      aimStart = { x: ball.x, y: ball.y };
      aimCurrent = pos;
    }
  }

  function handlePointerMove(pos) {
    mousePos = pos;
    if (aiming) {
      aimCurrent = pos;
    }
  }

  function handlePointerUp() {
    if (aiming && gameState === 'playing') {
      shoot();
    }
    mouseDown = false;
    aiming = false;
    powerCharging = false;
  }

  // --- Game Logic ---
  function startGame() {
    document.getElementById('start-overlay').classList.add('hidden');
    document.getElementById('end-overlay').classList.add('hidden');

    currentHole = 0;
    totalStrokes = 0;
    scores = [];
    loadHole();
    gameState = 'playing';

    renderScorecard();
    gameLoop();
  }

  function loadHole() {
    const hole = HOLES[currentHole];
    ball.x = hole.ball.x;
    ball.y = hole.ball.y;
    ball.vx = 0;
    ball.vy = 0;
    strokes = 0;
    power = 0;

    // Update HUD
    document.getElementById('hud-hole').textContent = currentHole + 1;
    document.getElementById('hud-par').textContent = hole.par;
    document.getElementById('hud-hole-name').textContent = hole.name;
    document.getElementById('hud-strokes').textContent = strokes;
    document.getElementById('hud-total').textContent = totalStrokes;

    updatePowerBar(0);
  }

  function shoot() {
    if (power < 0.05) {
      aiming = false;
      powerCharging = false;
      return;
    }

    // Direction is from aim point back to ball (opposite of drag)
    const dx = ball.x - aimCurrent.x;
    const dy = ball.y - aimCurrent.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 5) {
      aiming = false;
      powerCharging = false;
      return;
    }

    const dirX = dx / dist;
    const dirY = dy / dist;

    const shootPower = power * MAX_POWER;
    ball.vx = dirX * shootPower;
    ball.vy = dirY * shootPower;

    strokes++;
    totalStrokes++;
    document.getElementById('hud-strokes').textContent = strokes;
    document.getElementById('hud-total').textContent = totalStrokes;

    gameState = 'rolling';
    power = 0;
    updatePowerBar(0);
  }

  function gameLoop() {
    if (gameState === 'start' || gameState === 'game-over') return;

    // Charge power while aiming
    if (powerCharging && aiming) {
      power = Math.min(power + POWER_RATE, 1);
      updatePowerBar(power);
    }

    if (gameState === 'rolling') {
      updateBall();
    }

    drawHole();
    animFrameId = requestAnimationFrame(gameLoop);
  }

  function updateBall() {
    const hole = HOLES[currentHole];

    // Apply velocity
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Check obstacle interactions
    hole.obstacles.forEach(obs => {
      const dx = ball.x - obs.x;
      const dy = ball.y - obs.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < obs.r + BALL_RADIUS) {
        if (obs.type === 'water') {
          // Reset to start position for this hole
          ball.x = hole.ball.x;
          ball.y = hole.ball.y;
          ball.vx = 0;
          ball.vy = 0;
          strokes++;
          totalStrokes++;
          document.getElementById('hud-strokes').textContent = strokes;
          document.getElementById('hud-total').textContent = totalStrokes;
          gameState = 'playing';
          return;
        } else if (obs.type === 'sand') {
          // Slow down significantly in sand
          ball.vx *= 0.92;
          ball.vy *= 0.92;
        }
      }
    });

    // Wall collisions
    hole.walls.forEach(wall => {
      const wallCollision = checkWallCollision(ball, wall);
      if (wallCollision) {
        if (wallCollision.axis === 'x') {
          ball.vx = -ball.vx * WALL_BOUNCE;
          ball.x = wallCollision.newPos;
        } else {
          ball.vy = -ball.vy * WALL_BOUNCE;
          ball.y = wallCollision.newPos;
        }
      }
    });

    // Border collisions
    if (ball.x - BALL_RADIUS < 0) {
      ball.x = BALL_RADIUS;
      ball.vx = -ball.vx * WALL_BOUNCE;
    }
    if (ball.x + BALL_RADIUS > CANVAS_W) {
      ball.x = CANVAS_W - BALL_RADIUS;
      ball.vx = -ball.vx * WALL_BOUNCE;
    }
    if (ball.y - BALL_RADIUS < 0) {
      ball.y = BALL_RADIUS;
      ball.vy = -ball.vy * WALL_BOUNCE;
    }
    if (ball.y + BALL_RADIUS > CANVAS_H) {
      ball.y = CANVAS_H - BALL_RADIUS;
      ball.vy = -ball.vy * WALL_BOUNCE;
    }

    // Friction
    ball.vx *= FRICTION;
    ball.vy *= FRICTION;

    // Stop if slow enough
    const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    if (speed < MIN_VELOCITY) {
      ball.vx = 0;
      ball.vy = 0;
      gameState = 'playing';
    }

    // Check hole
    const hx = hole.hole.x;
    const hy = hole.hole.y;
    const hdx = ball.x - hx;
    const hdy = ball.y - hy;
    const hdist = Math.sqrt(hdx * hdx + hdy * hdy);

    // Ball must be slow enough to fall in
    if (hdist < HOLE_RADIUS && speed < 12) {
      holeComplete();
    }
  }

  function checkWallCollision(ball, wall) {
    const bLeft = ball.x - BALL_RADIUS;
    const bRight = ball.x + BALL_RADIUS;
    const bTop = ball.y - BALL_RADIUS;
    const bBottom = ball.y + BALL_RADIUS;

    const wLeft = wall.x;
    const wRight = wall.x + wall.w;
    const wTop = wall.y;
    const wBottom = wall.y + wall.h;

    // Check overlap
    if (bRight > wLeft && bLeft < wRight && bBottom > wTop && bTop < wBottom) {
      // Determine which side was penetrated least
      const overlapLeft = bRight - wLeft;
      const overlapRight = wRight - bLeft;
      const overlapTop = bBottom - wTop;
      const overlapBottom = wBottom - bTop;

      const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

      if (minOverlap === overlapLeft) {
        return { axis: 'x', newPos: wLeft - BALL_RADIUS };
      } else if (minOverlap === overlapRight) {
        return { axis: 'x', newPos: wRight + BALL_RADIUS };
      } else if (minOverlap === overlapTop) {
        return { axis: 'y', newPos: wTop - BALL_RADIUS };
      } else {
        return { axis: 'y', newPos: wBottom + BALL_RADIUS };
      }
    }

    return null;
  }

  function holeComplete() {
    const hole = HOLES[currentHole];
    const par = hole.par;
    const diff = strokes - par;

    scores.push(strokes);

    // Show toast
    let scoreName;
    if (strokes === 1) scoreName = 'Hole in One!';
    else if (diff <= -2) scoreName = 'Eagle!';
    else if (diff === -1) scoreName = 'Birdie!';
    else if (diff === 0) scoreName = 'Par';
    else if (diff === 1) scoreName = 'Bogey';
    else if (diff === 2) scoreName = 'Double Bogey';
    else scoreName = `+${diff}`;

    showToast(scoreName, `${strokes} ${strokes === 1 ? 'stroke' : 'strokes'} on ${hole.name}`);

    renderScorecard();

    // Next hole or game over
    setTimeout(() => {
      if (currentHole < HOLES.length - 1) {
        currentHole++;
        loadHole();
        gameState = 'playing';
      } else {
        gameOver();
      }
    }, 2000);

    gameState = 'hole-complete';
  }

  function showToast(name, detail) {
    const toast = document.getElementById('hole-toast');
    document.getElementById('toast-name').textContent = name;
    document.getElementById('toast-strokes').textContent = detail;
    toast.className = 'hole-complete-toast show';

    setTimeout(() => {
      toast.className = 'hole-complete-toast';
    }, 2200);
  }

  function gameOver() {
    gameState = 'game-over';
    cancelAnimationFrame(animFrameId);

    const totalPar = HOLES.reduce((s, h) => s + h.par, 0);
    const diff = totalStrokes - totalPar;
    const diffStr = diff === 0 ? 'E' : (diff > 0 ? `+${diff}` : `${diff}`);

    document.getElementById('end-summary').textContent =
      `${totalStrokes} strokes (${diffStr}) over 9 holes at Augusta Mini Golf`;

    document.getElementById('end-overlay').classList.remove('hidden');
  }

  function submitScore() {
    const nameInput = document.getElementById('player-name-input');
    const name = nameInput.value.trim() || 'Anonymous';

    const today = new Date().toISOString().split('T')[0];
    const scoresKey = 'masters-minigolf-scores';
    const existing = JSON.parse(localStorage.getItem(scoresKey) || '[]');

    existing.push({
      name: name,
      score: totalStrokes,
      par: HOLES.reduce((s, h) => s + h.par, 0),
      date: today,
      timestamp: Date.now()
    });

    // Keep top 20, sorted by score ascending
    existing.sort((a, b) => a.score - b.score);
    if (existing.length > 20) existing.length = 20;

    localStorage.setItem(scoresKey, JSON.stringify(existing));

    nameInput.value = '';
    loadLeaderboard();

    // Show feedback
    document.getElementById('submit-score-btn').textContent = 'Submitted!';
    document.getElementById('submit-score-btn').disabled = true;
    setTimeout(() => {
      document.getElementById('submit-score-btn').textContent = 'Submit Score';
      document.getElementById('submit-score-btn').disabled = false;
    }, 2000);
  }

  function clearScores() {
    if (confirm('Clear all saved scores?')) {
      localStorage.removeItem('masters-minigolf-scores');
      loadLeaderboard();
    }
  }

  function loadLeaderboard() {
    const list = document.getElementById('daily-scores');
    const scores = JSON.parse(localStorage.getItem('masters-minigolf-scores') || '[]');

    if (scores.length === 0) {
      list.innerHTML = '<li class="no-scores">No scores yet. Be the first to play!</li>';
      return;
    }

    list.innerHTML = scores.map((s, i) => {
      const totalPar = s.par || HOLES.reduce((sum, h) => sum + h.par, 0);
      const diff = s.score - totalPar;
      const diffStr = diff === 0 ? 'E' : (diff > 0 ? `+${diff}` : `${diff}`);

      return `
        <li>
          <span class="lb-rank">${i + 1}.</span>
          <span class="lb-name">${escapeHtml(s.name)}</span>
          <span class="lb-score">${s.score} (${diffStr})</span>
          <span class="lb-date">${s.date}</span>
        </li>
      `;
    }).join('');
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // --- Drawing ---
  function drawHole() {
    const hole = HOLES[currentHole];

    // Clear
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // Draw felt background
    drawFelt();

    // Draw obstacles
    hole.obstacles.forEach(obs => drawObstacle(obs));

    // Draw walls
    hole.walls.forEach(wall => drawWall(wall));

    // Draw hole
    drawTarget(hole.hole);

    // Draw aim line
    if (aiming) {
      drawAimLine();
    }

    // Draw ball
    drawBall();

    // Draw hole number label
    ctx.save();
    ctx.font = '700 14px "Playfair Display", serif';
    ctx.fillStyle = 'rgba(245,240,232,0.3)';
    ctx.textAlign = 'right';
    ctx.fillText(`Hole ${currentHole + 1}`, CANVAS_W - 15, 25);
    ctx.restore();
  }

  function drawFelt() {
    // Base green
    ctx.fillStyle = COLORS.felt;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Subtle grass pattern
    ctx.save();
    ctx.globalAlpha = 0.06;
    for (let y = 0; y < CANVAS_H; y += 12) {
      ctx.fillStyle = y % 24 === 0 ? COLORS.feltLight : COLORS.feltDark;
      ctx.fillRect(0, y, CANVAS_W, 12);
    }
    ctx.restore();

    // Vignette
    const vignette = ctx.createRadialGradient(
      CANVAS_W / 2, CANVAS_H / 2, CANVAS_W * 0.3,
      CANVAS_W / 2, CANVAS_H / 2, CANVAS_W * 0.7
    );
    vignette.addColorStop(0, 'transparent');
    vignette.addColorStop(1, 'rgba(0,0,0,0.15)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
  }

  function drawWall(wall) {
    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(wall.x + 3, wall.y + 3, wall.w, wall.h);

    // Wall body
    const gradient = ctx.createLinearGradient(wall.x, wall.y, wall.x + wall.w, wall.y + wall.h);
    gradient.addColorStop(0, COLORS.wallLight);
    gradient.addColorStop(0.5, COLORS.wall);
    gradient.addColorStop(1, '#3d2a0f');
    ctx.fillStyle = gradient;
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);

    // Highlight
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillRect(wall.x, wall.y, wall.w, 2);
    ctx.fillRect(wall.x, wall.y, 2, wall.h);
  }

  function drawObstacle(obs) {
    ctx.save();
    if (obs.type === 'water') {
      // Water hazard
      const grd = ctx.createRadialGradient(obs.x, obs.y, 0, obs.x, obs.y, obs.r);
      grd.addColorStop(0, COLORS.waterLight);
      grd.addColorStop(1, COLORS.water);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2);
      ctx.fill();

      // Ripple effect
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      const time = Date.now() / 1000;
      for (let i = 0; i < 3; i++) {
        const rippleR = ((time + i * 0.5) % 1.5) / 1.5 * obs.r;
        ctx.globalAlpha = 1 - (rippleR / obs.r);
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, rippleR, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else if (obs.type === 'sand') {
      // Sand trap
      const grd = ctx.createRadialGradient(obs.x, obs.y, 0, obs.x, obs.y, obs.r);
      grd.addColorStop(0, COLORS.sandLight);
      grd.addColorStop(1, COLORS.sand);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2);
      ctx.fill();

      // Sand texture dots
      ctx.fillStyle = 'rgba(139,105,20,0.2)';
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2 + (i * 1.618);
        const r = (i / 20) * obs.r * 0.8;
        ctx.beginPath();
        ctx.arc(obs.x + Math.cos(angle) * r, obs.y + Math.sin(angle) * r, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawTarget(pos) {
    // Hole shadow
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.arc(pos.x + 2, pos.y + 2, HOLE_RADIUS + 3, 0, Math.PI * 2);
    ctx.fill();

    // Rim
    ctx.fillStyle = COLORS.holeRim;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, HOLE_RADIUS + 3, 0, Math.PI * 2);
    ctx.fill();

    // Hole
    ctx.fillStyle = COLORS.hole;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, HOLE_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    // Flag pole
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(pos.x, pos.y - 40);
    ctx.stroke();

    // Flag
    ctx.fillStyle = COLORS.flag;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y - 40);
    ctx.lineTo(pos.x + 18, pos.y - 34);
    ctx.lineTo(pos.x, pos.y - 28);
    ctx.closePath();
    ctx.fill();
  }

  function drawBall() {
    // Shadow
    ctx.fillStyle = COLORS.ballShadow;
    ctx.beginPath();
    ctx.arc(ball.x + 2, ball.y + 2, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    // Ball
    const grd = ctx.createRadialGradient(
      ball.x - 2, ball.y - 2, 1,
      ball.x, ball.y, BALL_RADIUS
    );
    grd.addColorStop(0, '#ffffff');
    grd.addColorStop(0.6, COLORS.ball);
    grd.addColorStop(1, '#d8d0c0');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    // Dimple effect
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.stroke();
  }

  function drawAimLine() {
    const dx = ball.x - aimCurrent.x;
    const dy = ball.y - aimCurrent.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 5) return;

    const dirX = dx / dist;
    const dirY = dy / dist;

    // Aim line (dotted, in the direction of shot)
    ctx.save();
    ctx.strokeStyle = COLORS.aim;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 8]);
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    const lineLen = power * 120 + 30;
    ctx.lineTo(ball.x + dirX * lineLen, ball.y + dirY * lineLen);
    ctx.stroke();
    ctx.restore();

    // Power indicator circle around ball
    ctx.save();
    ctx.strokeStyle = COLORS.gold;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5 + power * 0.5;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, BALL_RADIUS + 4 + power * 8, 0, Math.PI * 2 * power);
    ctx.stroke();
    ctx.restore();

    // Drag line from ball to cursor (subtle)
    ctx.save();
    ctx.strokeStyle = 'rgba(245,240,232,0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    ctx.lineTo(aimCurrent.x, aimCurrent.y);
    ctx.stroke();
    ctx.restore();
  }

  // --- UI Updates ---
  function updatePowerBar(pwr) {
    const fill = document.getElementById('power-fill');
    const pct = document.getElementById('power-pct');
    if (fill) fill.style.width = (pwr * 100) + '%';
    if (pct) pct.textContent = Math.round(pwr * 100) + '%';
  }

  function renderScorecard() {
    const grid = document.getElementById('scorecard-grid');
    const totalEl = document.getElementById('scorecard-total');
    if (!grid) return;

    grid.innerHTML = '';

    const totalPar = HOLES.reduce((s, h) => s + h.par, 0);

    HOLES.forEach((hole, i) => {
      const div = document.createElement('div');
      let scoreClass = '';
      let scoreText = '';

      if (scores[i] !== undefined) {
        scoreText = scores[i];
        const diff = scores[i] - hole.par;
        if (diff <= -2) scoreClass = 'eagle';
        else if (diff === -1) scoreClass = 'birdie';
        else if (diff >= 1) scoreClass = 'bogey';
        div.classList.add('completed');
      } else if (i === currentHole && gameState !== 'start' && gameState !== 'game-over') {
        div.classList.add('current');
        scoreText = strokes > 0 ? strokes : '—';
      } else {
        scoreText = '';
      }

      div.className = `scorecard-hole ${div.className}`;
      div.innerHTML = `
        <div class="hole-num">Hole ${i + 1}</div>
        <div class="hole-par">Par ${hole.par}</div>
        <div class="hole-score ${scoreClass}">${scoreText}</div>
      `;

      grid.appendChild(div);
    });

    // Update total
    if (scores.length > 0) {
      const diff = totalStrokes - totalPar;
      const diffStr = diff === 0 ? 'E' : (diff > 0 ? `+${diff}` : `${diff}`);
      totalEl.textContent = `Total: ${totalStrokes} (${diffStr})`;
    } else {
      totalEl.textContent = 'Total: E';
    }
  }

})();
