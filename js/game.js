// ============================================
// AUGUSTA MINI GOLF — 9-Hole Game Engine
// Pull-back to shoot | Slopes | Fast zones
// ============================================

(function () {
  'use strict';

  // --- Constants ---
  const CANVAS_W = 800;
  const CANVAS_H = 500;
  const BALL_RADIUS = 7;
  const HOLE_RADIUS = 12;
  const FRICTION = 0.985;
  const FRICTION_FAST = 0.9985;   // speed-glass zones
  const FRICTION_SAND = 0.91;     // per-frame in sand
  const MIN_VELOCITY = 0.12;
  const MAX_POWER = 18;
  const MAX_DRAG_PX = 150;        // px drag = full power
  const WALL_BOUNCE = 0.65;

  const COLORS = {
    felt: '#2d5a34',
    feltDark: '#1f4226',
    feltLight: '#3a7044',
    feltFast: '#3d7a4a',
    border: '#1a3520',
    wall: '#5a3e1b',
    wallLight: '#8b6914',
    hole: '#0a1a0d',
    holeRim: '#1a3520',
    ball: '#f5f0e8',
    ballShadow: 'rgba(0,0,0,0.25)',
    aim: 'rgba(245,240,232,0.7)',
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
  // slope: { x, y, w, h, dirX, dirY, strength }
  // Multiple small slopes per hole = realistic multi-break greens
  const HOLES = [
    {
      // Tea Olive: classic S-curve break. Left side slopes toward bottom,
      // right side slopes toward top. Ball must read the green.
      name: 'Tea Olive',
      par: 3,
      ball: { x: 80, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        { x: 310, y: 140, w: 18, h: 210 },
      ],
      obstacles: [],
      slopes: [
        // Left third: slopes downward (toward bottom of screen)
        { x: 0,   y: 0, w: 260, h: 500, dirX: 0,    dirY:  0.6, strength: 0.020 },
        // Center: flat-ish with slight left drift
        { x: 260, y: 0, w: 220, h: 500, dirX: -0.2, dirY:  0,   strength: 0.010 },
        // Right third: slopes upward (toward top of screen) — opposite break
        { x: 480, y: 0, w: 320, h: 500, dirX: 0,    dirY: -0.5, strength: 0.018 },
      ],
      fastZones: [],
    },
    {
      // Pink Dogwood: upper half drains left, lower half drains right.
      // Ridge runs horizontally across the middle.
      name: 'Pink Dogwood',
      par: 3,
      ball: { x: 80, y: 420 },
      hole: { x: 700, y: 80 },
      walls: [
        { x: 260, y: 0, w: 18, h: 290 },
        { x: 510, y: 210, w: 18, h: 290 },
      ],
      obstacles: [],
      slopes: [
        // Upper half: drains left
        { x: 0, y: 0,   w: 800, h: 220, dirX: -0.5, dirY: 0,   strength: 0.022 },
        // Narrow ridge band: gentle push downward
        { x: 0, y: 220, w: 800, h: 60,  dirX:  0,   dirY: 0.3, strength: 0.012 },
        // Lower half: drains right
        { x: 0, y: 280, w: 800, h: 220, dirX:  0.5, dirY: 0,   strength: 0.022 },
      ],
      fastZones: [],
    },
    {
      // Flowering Peach: three zones. Top slopes toward water hazard,
      // bottom slopes away, right side slopes toward hole.
      name: 'Flowering Peach',
      par: 4,
      ball: { x: 80, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        { x: 210, y: 90,  w: 18, h: 170 },
        { x: 210, y: 310, w: 18, h: 170 },
        { x: 460, y: 0,   w: 18, h: 210 },
        { x: 460, y: 290, w: 18, h: 210 },
      ],
      obstacles: [
        { type: 'water', x: 340, y: 250, r: 38 },
      ],
      slopes: [
        // Top corridor: diagonal toward water
        { x: 150, y: 0,   w: 320, h: 200, dirX:  0.4, dirY:  0.5, strength: 0.024 },
        // Bottom corridor: slopes away from water downward
        { x: 150, y: 310, w: 320, h: 190, dirX:  0.3, dirY: -0.4, strength: 0.018 },
        // Right section: slopes toward hole (right)
        { x: 480, y: 100, w: 320, h: 300, dirX:  0.6, dirY:  0,   strength: 0.020 },
      ],
      fastZones: [],
    },
    {
      // Crab Apple: four quadrant swirl + full fast green. Chaos by design.
      name: 'Flowering Crab Apple',
      par: 3,
      ball: { x: 400, y: 440 },
      hole: { x: 400, y: 60 },
      walls: [],
      obstacles: [],
      slopes: [
        { x: 0,   y: 0,   w: 400, h: 250, dirX:  0.7, dirY:  0.3, strength: 0.018 },
        { x: 400, y: 0,   w: 400, h: 250, dirX: -0.3, dirY:  0.7, strength: 0.018 },
        { x: 400, y: 250, w: 400, h: 250, dirX: -0.7, dirY: -0.3, strength: 0.018 },
        { x: 0,   y: 250, w: 400, h: 250, dirX:  0.3, dirY: -0.7, strength: 0.018 },
      ],
      fastZones: [
        { x: 0, y: 0, w: 800, h: 500 },
      ],
    },
    {
      // Magnolia: three tiers. Top tier flat, middle slopes right,
      // bottom tier steep toward hole.
      name: 'Magnolia',
      par: 4,
      ball: { x: 80, y: 80 },
      hole: { x: 700, y: 420 },
      walls: [
        { x: 190, y: 0,   w: 18, h: 200 },
        { x: 360, y: 180, w: 18, h: 320 },
        { x: 510, y: 0,   w: 18, h: 280 },
        { x: 640, y: 200, w: 18, h: 300 },
      ],
      obstacles: [
        { type: 'sand', x: 590, y: 340, r: 35 },
      ],
      slopes: [
        // Top tier: relatively flat, slight drift right
        { x: 0, y: 0,   w: 800, h: 170, dirX:  0.3, dirY:  0.1, strength: 0.012 },
        // Middle tier: slopes right and down
        { x: 0, y: 170, w: 800, h: 160, dirX:  0.5, dirY:  0.4, strength: 0.025 },
        // Bottom tier: steep toward hole (bottom-right corner)
        { x: 0, y: 330, w: 800, h: 170, dirX:  0.4, dirY:  0.7, strength: 0.035 },
      ],
      fastZones: [],
    },
    {
      // Juniper: left zone slopes into left water, right zone into right water,
      // center corridor is flat but fast.
      name: 'Juniper',
      par: 3,
      ball: { x: 400, y: 430 },
      hole: { x: 400, y: 70 },
      walls: [
        { x: 140, y: 190, w: 210, h: 18 },
        { x: 450, y: 190, w: 210, h: 18 },
        { x: 320, y: 270, w: 160, h: 18 },
      ],
      obstacles: [
        { type: 'water', x: 240, y: 110, r: 42 },
        { type: 'water', x: 560, y: 110, r: 42 },
      ],
      slopes: [
        // Left zone: drains toward left water (up-left)
        { x: 0,   y: 0,   w: 310, h: 210, dirX: -0.5, dirY: -0.5, strength: 0.026 },
        // Right zone: drains toward right water (up-right)
        { x: 490, y: 0,   w: 310, h: 210, dirX:  0.5, dirY: -0.5, strength: 0.026 },
        // Lower half: slopes upward (toward hole) — reward good approach
        { x: 100, y: 260, w: 600, h: 240, dirX:  0,   dirY: -0.4, strength: 0.016 },
      ],
      fastZones: [
        { x: 310, y: 0, w: 180, h: 200 },
      ],
    },
    {
      // Azalea/Amen Corner: left section flat, center fast corridor slopes
      // down toward water, right section near hole slopes upward.
      name: 'Azalea — Amen Corner',
      par: 4,
      ball: { x: 80, y: 250 },
      hole: { x: 700, y: 250 },
      walls: [
        { x: 230, y: 90,  w: 18, h: 150 },
        { x: 230, y: 300, w: 18, h: 160 },
        { x: 400, y: 0,   w: 18, h: 190 },
        { x: 400, y: 280, w: 18, h: 220 },
        { x: 570, y: 110, w: 18, h: 150 },
        { x: 570, y: 330, w: 18, h: 160 },
      ],
      obstacles: [
        { type: 'sand',  x: 315, y: 250, r: 26 },
        { type: 'water', x: 490, y: 250, r: 32 },
      ],
      slopes: [
        // Approach: slight downhill right
        { x: 0,   y: 150, w: 230, h: 200, dirX:  0.3, dirY: 0,    strength: 0.014 },
        // Center fast zone: slopes down toward water hazard
        { x: 248, y: 180, w: 250, h: 140, dirX:  0.4, dirY: 0.5,  strength: 0.028 },
        // Right of water: upslope — ball won't easily run past hole
        { x: 530, y: 160, w: 200, h: 180, dirX: -0.3, dirY: 0,    strength: 0.018 },
      ],
      fastZones: [
        { x: 80, y: 195, w: 560, h: 110 },
      ],
    },
    {
      // Carolina Cherry: long hole, three lateral sections with different breaks.
      // Each corridor has its own slope direction.
      name: 'Carolina Cherry',
      par: 5,
      ball: { x: 60, y: 60 },
      hole: { x: 720, y: 440 },
      walls: [
        { x: 160, y: 0,   w: 18, h: 160 },
        { x: 160, y: 220, w: 18, h: 120 },
        { x: 160, y: 400, w: 18, h: 100 },
        { x: 360, y: 80,  w: 18, h: 160 },
        { x: 360, y: 300, w: 18, h: 200 },
        { x: 560, y: 0,   w: 18, h: 220 },
        { x: 560, y: 280, w: 18, h: 100 },
        { x: 560, y: 440, w: 18, h: 60  },
      ],
      obstacles: [
        { type: 'sand',  x: 260, y: 360, r: 30 },
        { type: 'water', x: 460, y: 150, r: 36 },
        { type: 'sand',  x: 650, y: 300, r: 26 },
      ],
      slopes: [
        // First corridor (left): slopes downward
        { x: 0,   y: 0,   w: 160, h: 500, dirX:  0.1, dirY:  0.5, strength: 0.020 },
        // Second corridor (mid-left): slopes right and slightly up
        { x: 178, y: 0,   w: 182, h: 500, dirX:  0.5, dirY: -0.2, strength: 0.022 },
        // Third corridor (mid-right): slopes toward water hazard
        { x: 378, y: 0,   w: 182, h: 500, dirX:  0.2, dirY: -0.4, strength: 0.020 },
        // Fourth corridor (right): steep downhill toward hole
        { x: 578, y: 0,   w: 222, h: 500, dirX:  0.3, dirY:  0.6, strength: 0.028 },
      ],
      fastZones: [
        { x: 180, y: 200, w: 185, h: 110 },
        { x: 578, y: 340, w: 222, h: 120 },
      ],
    },
    {
      // Holly 18th: three-zone green. Left drains away, center is the
      // approach ridge, right tilts down toward fortress.
      name: 'Holly — 18th Green',
      par: 4,
      ball: { x: 80, y: 250 },
      hole: { x: 680, y: 250 },
      walls: [
        { x: 585, y: 155, w: 130, h: 16 },
        { x: 585, y: 329, w: 130, h: 16 },
        { x: 585, y: 171, w: 16, h: 68 },
        { x: 585, y: 261, w: 16, h: 68 },
        { x: 290, y: 40,  w: 16, h: 180 },
        { x: 290, y: 280, w: 16, h: 180 },
      ],
      obstacles: [
        { type: 'sand', x: 190, y: 130, r: 26 },
        { type: 'sand', x: 190, y: 370, r: 26 },
      ],
      slopes: [
        // Left section: drains left (away from hole)
        { x: 0,   y: 0,   w: 290, h: 500, dirX: -0.5, dirY:  0,   strength: 0.020 },
        // Center approach: ridge tilts slightly downward
        { x: 306, y: 0,   w: 280, h: 500, dirX:  0.2, dirY:  0.3, strength: 0.014 },
        // Right near fortress: tilts down toward hole from above,
        // up toward hole from below (funnels in)
        { x: 586, y: 155, w: 130, h: 80,  dirX:  0,   dirY:  0.5, strength: 0.025 },
        { x: 586, y: 265, w: 130, h: 80,  dirX:  0,   dirY: -0.5, strength: 0.025 },
      ],
      fastZones: [
        { x: 430, y: 155, w: 155, h: 190 },
      ],
    },
  ];

  // --- Game State ---
  let canvas, ctx;
  let gameState = 'start';
  let currentHole = 0;
  let strokes = 0;
  let totalStrokes = 0;
  let scores = [];
  let ball = { x: 0, y: 0, vx: 0, vy: 0 };
  let aiming = false;
  let aimCurrent = { x: 0, y: 0 };
  let animFrameId;

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('submit-score-btn').addEventListener('click', submitScore);
    document.getElementById('play-again-btn').addEventListener('click', startGame);
    document.getElementById('clear-scores-btn').addEventListener('click', clearScores);

    renderScorecard();
    loadLeaderboard();
    drawHole();
  });

  function resizeCanvas() {
    const wrapper = canvas.parentElement;
    const rect = wrapper.getBoundingClientRect();
    const scale = rect.width / CANVAS_W;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = (CANVAS_H * scale) + 'px';
  }

  // Returns canvas-space coords — NO clamping so drag outside canvas works
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

  function onDocMouseMove(e) {
    handlePointerMove(getCanvasCoords(e));
  }

  function onDocMouseUp(e) {
    handlePointerUp();
    document.removeEventListener('mousemove', onDocMouseMove);
    document.removeEventListener('mouseup', onDocMouseUp);
  }

  function onTouchStart(e) {
    e.preventDefault();
    handlePointerDown(getCanvasCoords(e.touches[0]));
  }

  function onTouchMove(e) {
    e.preventDefault();
    handlePointerMove(getCanvasCoords(e.touches[0]));
  }

  function onTouchEnd(e) {
    handlePointerUp();
  }

  function handlePointerDown(pos) {
    if (gameState !== 'playing') return;

    const dx = pos.x - ball.x;
    const dy = pos.y - ball.y;
    if (Math.sqrt(dx * dx + dy * dy) < 50) {
      aiming = true;
      aimCurrent = pos;
      document.addEventListener('mousemove', onDocMouseMove);
      document.addEventListener('mouseup', onDocMouseUp);
    }
  }

  function handlePointerMove(pos) {
    if (aiming) {
      aimCurrent = pos;
      updatePowerFromDrag();
    }
  }

  function handlePointerUp() {
    if (aiming && gameState === 'playing') {
      shoot();
    }
    aiming = false;
  }

  // --- Pull-back Power ---
  function getDragInfo() {
    const dx = aimCurrent.x - ball.x;
    const dy = aimCurrent.y - ball.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const power = Math.min(dist / MAX_DRAG_PX, 1);
    return { dx, dy, dist, power };
  }

  function updatePowerFromDrag() {
    const { power } = getDragInfo();
    updatePowerBar(power);
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
    aiming = false;

    document.getElementById('hud-hole').textContent = currentHole + 1;
    document.getElementById('hud-par').textContent = hole.par;
    document.getElementById('hud-hole-name').textContent = hole.name;
    document.getElementById('hud-strokes').textContent = strokes;
    document.getElementById('hud-total').textContent = totalStrokes;
    updatePowerBar(0);
  }

  function shoot() {
    const { dx, dy, dist, power } = getDragInfo();
    if (power < 0.03 || dist < 3) { aiming = false; return; }

    // Shot direction is OPPOSITE of drag (pull back = shoot forward)
    const dirX = -dx / dist;
    const dirY = -dy / dist;
    const shootPower = power * MAX_POWER;

    ball.vx = dirX * shootPower;
    ball.vy = dirY * shootPower;

    strokes++;
    totalStrokes++;
    document.getElementById('hud-strokes').textContent = strokes;
    document.getElementById('hud-total').textContent = totalStrokes;

    gameState = 'rolling';
    updatePowerBar(0);
  }

  function gameLoop() {
    if (gameState === 'start' || gameState === 'game-over') return;

    if (gameState === 'rolling') updateBall();

    drawHole();
    animFrameId = requestAnimationFrame(gameLoop);
  }

  function pointInRect(px, py, r) {
    return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
  }

  function updateBall() {
    const hole = HOLES[currentHole];

    // --- Slopes (apply acceleration before friction) ---
    (hole.slopes || []).forEach(s => {
      if (pointInRect(ball.x, ball.y, s)) {
        ball.vx += s.dirX * s.strength;
        ball.vy += s.dirY * s.strength;
      }
    });

    // --- Apply velocity ---
    ball.x += ball.vx;
    ball.y += ball.vy;

    // --- Friction (fast zone overrides normal) ---
    let inFast = (hole.fastZones || []).some(fz => pointInRect(ball.x, ball.y, fz));
    let inSand = false;

    // --- Obstacle interactions ---
    (hole.obstacles || []).forEach(obs => {
      const dx = ball.x - obs.x;
      const dy = ball.y - obs.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < obs.r + BALL_RADIUS) {
        if (obs.type === 'water') {
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
          inSand = true;
        }
      }
    });

    if (inSand) {
      ball.vx *= FRICTION_SAND;
      ball.vy *= FRICTION_SAND;
    } else if (inFast) {
      ball.vx *= FRICTION_FAST;
      ball.vy *= FRICTION_FAST;
    } else {
      ball.vx *= FRICTION;
      ball.vy *= FRICTION;
    }

    // --- Wall collisions ---
    (hole.walls || []).forEach(wall => {
      const col = checkWallCollision(ball, wall);
      if (col) {
        if (col.axis === 'x') { ball.vx = -ball.vx * WALL_BOUNCE; ball.x = col.newPos; }
        else                  { ball.vy = -ball.vy * WALL_BOUNCE; ball.y = col.newPos; }
      }
    });

    // --- Border collisions ---
    if (ball.x - BALL_RADIUS < 0)        { ball.x = BALL_RADIUS;            ball.vx = -ball.vx * WALL_BOUNCE; }
    if (ball.x + BALL_RADIUS > CANVAS_W)  { ball.x = CANVAS_W - BALL_RADIUS; ball.vx = -ball.vx * WALL_BOUNCE; }
    if (ball.y - BALL_RADIUS < 0)        { ball.y = BALL_RADIUS;            ball.vy = -ball.vy * WALL_BOUNCE; }
    if (ball.y + BALL_RADIUS > CANVAS_H)  { ball.y = CANVAS_H - BALL_RADIUS; ball.vy = -ball.vy * WALL_BOUNCE; }

    // --- Stop check ---
    const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    if (speed < MIN_VELOCITY) {
      ball.vx = 0;
      ball.vy = 0;
      gameState = 'playing';
    }

    // --- Hole check ---
    const hx = hole.hole.x, hy = hole.hole.y;
    const hd = Math.sqrt((ball.x - hx) ** 2 + (ball.y - hy) ** 2);
    if (hd < HOLE_RADIUS && speed < 12) holeComplete();
  }

  function checkWallCollision(ball, wall) {
    const bL = ball.x - BALL_RADIUS, bR = ball.x + BALL_RADIUS;
    const bT = ball.y - BALL_RADIUS, bB = ball.y + BALL_RADIUS;
    const wL = wall.x, wR = wall.x + wall.w;
    const wT = wall.y, wB = wall.y + wall.h;

    if (bR > wL && bL < wR && bB > wT && bT < wB) {
      const oL = bR - wL, oR = wR - bL;
      const oT = bB - wT, oB = wB - bT;
      const m = Math.min(oL, oR, oT, oB);
      if (m === oL) return { axis: 'x', newPos: wL - BALL_RADIUS };
      if (m === oR) return { axis: 'x', newPos: wR + BALL_RADIUS };
      if (m === oT) return { axis: 'y', newPos: wT - BALL_RADIUS };
      return { axis: 'y', newPos: wB + BALL_RADIUS };
    }
    return null;
  }

  function holeComplete() {
    const hole = HOLES[currentHole];
    const diff = strokes - hole.par;
    scores.push(strokes);

    let label;
    if (strokes === 1)   label = 'Hole in One! 🏆';
    else if (diff <= -2) label = 'Eagle! 🦅';
    else if (diff === -1) label = 'Birdie! 🐦';
    else if (diff === 0) label = 'Par';
    else if (diff === 1) label = 'Bogey';
    else if (diff === 2) label = 'Double Bogey';
    else                 label = `+${diff}`;

    showToast(label, `${strokes} ${strokes === 1 ? 'stroke' : 'strokes'} on ${hole.name}`);
    renderScorecard();

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
    setTimeout(() => { toast.className = 'hole-complete-toast'; }, 2200);
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
    const key = 'masters-minigolf-scores';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ name, score: totalStrokes, par: HOLES.reduce((s, h) => s + h.par, 0), date: today, timestamp: Date.now() });
    existing.sort((a, b) => a.score - b.score);
    if (existing.length > 20) existing.length = 20;
    localStorage.setItem(key, JSON.stringify(existing));
    nameInput.value = '';
    loadLeaderboard();
    const btn = document.getElementById('submit-score-btn');
    btn.textContent = 'Submitted!';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Submit Score'; btn.disabled = false; }, 2000);
  }

  function clearScores() {
    if (confirm('Clear all saved scores?')) {
      localStorage.removeItem('masters-minigolf-scores');
      loadLeaderboard();
    }
  }

  function loadLeaderboard() {
    const list = document.getElementById('daily-scores');
    const entries = JSON.parse(localStorage.getItem('masters-minigolf-scores') || '[]');
    if (!entries.length) {
      list.innerHTML = '<li class="no-scores">No scores yet. Be the first to play!</li>';
      return;
    }
    list.innerHTML = entries.map((s, i) => {
      const par = s.par || HOLES.reduce((sum, h) => sum + h.par, 0);
      const diff = s.score - par;
      const diffStr = diff === 0 ? 'E' : (diff > 0 ? `+${diff}` : `${diff}`);
      return `<li>
        <span class="lb-rank">${i + 1}.</span>
        <span class="lb-name">${escapeHtml(s.name)}</span>
        <span class="lb-score">${s.score} (${diffStr})</span>
        <span class="lb-date">${s.date}</span>
      </li>`;
    }).join('');
  }

  function escapeHtml(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  // ============================================
  // DRAWING
  // ============================================

  function drawHole() {
    const hole = HOLES[currentHole];
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    drawFelt();
    drawFastZones(hole.fastZones || []);
    drawSlopes(hole.slopes || []);
    (hole.obstacles || []).forEach(o => drawObstacle(o));
    (hole.walls || []).forEach(w => drawWall(w));
    drawTarget(hole.hole);
    if (aiming) drawAimLine();
    drawBall();

    ctx.save();
    ctx.font = '700 13px "IBM Plex Mono", monospace';
    ctx.fillStyle = 'rgba(245,240,232,0.28)';
    ctx.textAlign = 'right';
    ctx.fillText(`Hole ${currentHole + 1} · Par ${hole.par}`, CANVAS_W - 12, 22);
    ctx.restore();
  }

  function drawFelt() {
    ctx.fillStyle = COLORS.felt;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Subtle mowing stripes
    ctx.save();
    ctx.globalAlpha = 0.05;
    for (let y = 0; y < CANVAS_H; y += 14) {
      ctx.fillStyle = y % 28 === 0 ? COLORS.feltLight : COLORS.feltDark;
      ctx.fillRect(0, y, CANVAS_W, 14);
    }
    ctx.restore();

    // Vignette
    const vig = ctx.createRadialGradient(CANVAS_W / 2, CANVAS_H / 2, CANVAS_W * 0.25, CANVAS_W / 2, CANVAS_H / 2, CANVAS_W * 0.75);
    vig.addColorStop(0, 'transparent');
    vig.addColorStop(1, 'rgba(0,0,0,0.18)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
  }

  function drawFastZones(fastZones) {
    fastZones.forEach(fz => {
      ctx.save();
      ctx.fillStyle = 'rgba(100,210,130,0.10)';
      ctx.strokeStyle = 'rgba(140,230,160,0.28)';
      ctx.lineWidth = 1;
      ctx.fillRect(fz.x, fz.y, fz.w, fz.h);
      ctx.strokeRect(fz.x, fz.y, fz.w, fz.h);

      // ⚡ label at center
      ctx.font = '11px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚡', fz.x + fz.w / 2, fz.y + fz.h / 2);
      ctx.restore();
    });
  }

  function drawSlopes(slopes) {
    slopes.forEach(s => {
      ctx.save();

      // Gradient: light (uphill) → dark (downhill)
      const cx = s.x + s.w / 2, cy = s.y + s.h / 2;
      const gx0 = cx - s.dirX * s.w * 0.5;
      const gy0 = cy - s.dirY * s.h * 0.5;
      const gx1 = cx + s.dirX * s.w * 0.5;
      const gy1 = cy + s.dirY * s.h * 0.5;
      const grad = ctx.createLinearGradient(gx0, gy0, gx1, gy1);
      grad.addColorStop(0, 'rgba(255,255,255,0.09)');
      grad.addColorStop(1, 'rgba(0,0,0,0.13)');
      ctx.fillStyle = grad;
      ctx.fillRect(s.x, s.y, s.w, s.h);

      // Grid of arrows across the slope area
      // Space them ~90px apart so a 800×500 field gets ~5×4 = 20 max, no crowding
      const ARROW_LEN = 16;
      const HEAD_LEN  = 6;
      const angle = Math.atan2(s.dirY, s.dirX);
      const SPACING_X = 90;
      const SPACING_Y = 85;

      // Start half a spacing in from each edge so arrows don't sit on the border
      const startX = s.x + SPACING_X / 2;
      const startY = s.y + SPACING_Y / 2;

      ctx.strokeStyle = 'rgba(255,255,255,0.30)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);

      for (let gx = startX; gx < s.x + s.w; gx += SPACING_X) {
        for (let gy = startY; gy < s.y + s.h; gy += SPACING_Y) {
          const ex = gx + s.dirX * ARROW_LEN;
          const ey = gy + s.dirY * ARROW_LEN;

          // Shaft
          ctx.beginPath();
          ctx.moveTo(gx, gy);
          ctx.lineTo(ex, ey);
          ctx.stroke();

          // Arrowhead
          ctx.beginPath();
          ctx.moveTo(ex, ey);
          ctx.lineTo(ex - Math.cos(angle - 0.42) * HEAD_LEN, ey - Math.sin(angle - 0.42) * HEAD_LEN);
          ctx.moveTo(ex, ey);
          ctx.lineTo(ex - Math.cos(angle + 0.42) * HEAD_LEN, ey - Math.sin(angle + 0.42) * HEAD_LEN);
          ctx.stroke();
        }
      }

      ctx.restore();
    });
  }

  function drawWall(wall) {
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.fillRect(wall.x + 3, wall.y + 3, wall.w, wall.h);
    const grad = ctx.createLinearGradient(wall.x, wall.y, wall.x + wall.w, wall.y + wall.h);
    grad.addColorStop(0, COLORS.wallLight);
    grad.addColorStop(0.5, COLORS.wall);
    grad.addColorStop(1, '#3d2a0f');
    ctx.fillStyle = grad;
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
    ctx.fillStyle = 'rgba(255,255,255,0.14)';
    ctx.fillRect(wall.x, wall.y, wall.w, 2);
    ctx.fillRect(wall.x, wall.y, 2, wall.h);
  }

  function drawObstacle(obs) {
    ctx.save();
    if (obs.type === 'water') {
      const grd = ctx.createRadialGradient(obs.x, obs.y, 0, obs.x, obs.y, obs.r);
      grd.addColorStop(0, COLORS.waterLight);
      grd.addColorStop(1, COLORS.water);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2);
      ctx.fill();

      const t = Date.now() / 1000;
      ctx.strokeStyle = 'rgba(255,255,255,0.14)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        const rr = ((t * 0.7 + i * 0.5) % 1.5) / 1.5 * obs.r;
        ctx.globalAlpha = 1 - rr / obs.r;
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, rr, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else if (obs.type === 'sand') {
      const grd = ctx.createRadialGradient(obs.x, obs.y, 0, obs.x, obs.y, obs.r);
      grd.addColorStop(0, COLORS.sandLight);
      grd.addColorStop(1, COLORS.sand);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(139,105,20,0.18)';
      for (let i = 0; i < 22; i++) {
        const a = (i / 22) * Math.PI * 2 + i * 1.618;
        const r = (i / 22) * obs.r * 0.8;
        ctx.beginPath();
        ctx.arc(obs.x + Math.cos(a) * r, obs.y + Math.sin(a) * r, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawTarget(pos) {
    ctx.fillStyle = 'rgba(0,0,0,0.38)';
    ctx.beginPath();
    ctx.arc(pos.x + 2, pos.y + 2, HOLE_RADIUS + 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLORS.holeRim;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, HOLE_RADIUS + 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLORS.hole;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, HOLE_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#777';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(pos.x, pos.y - 40);
    ctx.stroke();
    ctx.fillStyle = COLORS.flag;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y - 40);
    ctx.lineTo(pos.x + 18, pos.y - 34);
    ctx.lineTo(pos.x, pos.y - 28);
    ctx.closePath();
    ctx.fill();
  }

  function drawBall() {
    ctx.fillStyle = COLORS.ballShadow;
    ctx.beginPath();
    ctx.arc(ball.x + 2, ball.y + 2, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    const grd = ctx.createRadialGradient(ball.x - 2, ball.y - 2, 1, ball.x, ball.y, BALL_RADIUS);
    grd.addColorStop(0, '#ffffff');
    grd.addColorStop(0.6, COLORS.ball);
    grd.addColorStop(1, '#d8d0c0');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawAimLine() {
    const { dx, dy, dist, power } = getDragInfo();
    if (dist < 3) return;

    // Aim direction is opposite of drag
    const dirX = -dx / dist;
    const dirY = -dy / dist;
    const lineLen = power * 130 + 20;

    // Dotted aim line in shot direction
    ctx.save();
    ctx.strokeStyle = COLORS.aim;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 8]);
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    ctx.lineTo(ball.x + dirX * lineLen, ball.y + dirY * lineLen);
    ctx.stroke();
    ctx.restore();

    // Pull-back line (ball to cursor)
    ctx.save();
    ctx.strokeStyle = 'rgba(245,200,100,0.45)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    ctx.lineTo(aimCurrent.x, aimCurrent.y);
    ctx.stroke();
    ctx.restore();

    // Power arc around ball
    ctx.save();
    ctx.strokeStyle = COLORS.gold;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.4 + power * 0.55;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, BALL_RADIUS + 5 + power * 9, 0, Math.PI * 2 * power);
    ctx.stroke();
    ctx.restore();
  }

  // --- UI ---
  function updatePowerBar(pwr) {
    const fill = document.getElementById('power-fill');
    const pct  = document.getElementById('power-pct');
    if (fill) fill.style.width = (pwr * 100) + '%';
    if (pct)  pct.textContent = Math.round(pwr * 100) + '%';
  }

  function renderScorecard() {
    const grid = document.getElementById('scorecard-grid');
    const totalEl = document.getElementById('scorecard-total');
    if (!grid) return;
    grid.innerHTML = '';
    const totalPar = HOLES.reduce((s, h) => s + h.par, 0);

    HOLES.forEach((hole, i) => {
      const div = document.createElement('div');
      let scoreClass = '', scoreText = '';
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
      }
      div.className = `scorecard-hole ${div.className}`;
      div.innerHTML = `
        <div class="hole-num">Hole ${i + 1}</div>
        <div class="hole-par">Par ${hole.par}</div>
        <div class="hole-score ${scoreClass}">${scoreText}</div>
      `;
      grid.appendChild(div);
    });

    if (scores.length > 0) {
      const diff = totalStrokes - totalPar;
      const diffStr = diff === 0 ? 'E' : (diff > 0 ? `+${diff}` : `${diff}`);
      totalEl.textContent = `Total: ${totalStrokes} (${diffStr})`;
    } else {
      totalEl.textContent = 'Total: E';
    }
  }

})();
