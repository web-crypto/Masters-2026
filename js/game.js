// ============================================
// AUGUSTA MINI GOLF — 6-Hole Game Engine
// Pull-back to shoot | Shaped fairways | Slopes | Fast zones
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
  // boundary: optional array of {x, y} points forming playable fairway polygon
  // slope: { x, y, w, h, dirX, dirY, strength }
  // tunnel: { side, pos, width } on entry/exit — ball teleports through border

  // Helper: generate smooth oval/capsule boundary
  function makeCapsule(cx, cy, rx, ry, steps) {
    const pts = [];
    steps = steps || 28;
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push({ x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry });
    }
    return pts;
  }

  const HOLES = [
    {
      // #1 Tea Olive — Opener. Gentle oval fairway with subtle right drift.
      name: 'Tea Olive',
      par: 3,
      ball: { x: 110, y: 250 },
      hole: { x: 690, y: 220 },
      boundary: [
        { x: 50,  y: 260 }, { x: 55,  y: 205 }, { x: 80,  y: 160 }, { x: 125, y: 130 },
        { x: 180, y: 115 }, { x: 240, y: 108 }, { x: 320, y: 105 }, { x: 410, y: 108 },
        { x: 500, y: 115 }, { x: 580, y: 125 }, { x: 650, y: 138 }, { x: 710, y: 160 },
        { x: 745, y: 195 }, { x: 760, y: 235 }, { x: 758, y: 275 }, { x: 740, y: 315 },
        { x: 700, y: 350 }, { x: 640, y: 375 }, { x: 560, y: 390 }, { x: 470, y: 398 },
        { x: 370, y: 395 }, { x: 270, y: 385 }, { x: 190, y: 370 }, { x: 125, y: 345 },
        { x: 80,  y: 315 }, { x: 58,  y: 290 },
      ],
      walls: [],
      obstacles: [
        { type: 'sand', x: 600, y: 260, r: 22 },
        { type: 'sand', x: 635, y: 195, r: 20 },
      ],
      slopes: [
        { x: 80, y: 100, w: 680, h: 300, dirX: 0.3, dirY: 0.15, strength: 0.014 },
      ],
      fastZones: [],
    },

    {
      // #12 Golden Bell — Iconic Par 3 with Rae's Creek in front. Small kidney green.
      name: 'Golden Bell',
      par: 3,
      ball: { x: 400, y: 440 },
      hole: { x: 400, y: 90 },
      boundary: [
        // Bottom tee pad (wide)
        { x: 120, y: 480 }, { x: 280, y: 485 }, { x: 400, y: 488 },
        { x: 520, y: 485 }, { x: 680, y: 480 }, { x: 720, y: 440 },
        { x: 735, y: 380 }, { x: 720, y: 330 }, { x: 680, y: 300 },
        // Narrow waist (creek crossing)
        { x: 620, y: 275 }, { x: 560, y: 260 }, { x: 520, y: 240 },
        { x: 530, y: 210 }, { x: 580, y: 190 }, { x: 650, y: 170 },
        // Top green area (wide)
        { x: 720, y: 140 }, { x: 745, y: 95 },  { x: 720, y: 45 },
        { x: 640, y: 25 },  { x: 520, y: 18 },  { x: 400, y: 15 },
        { x: 280, y: 18 },  { x: 160, y: 25 },  { x: 80,  y: 45 },
        { x: 55,  y: 95 },  { x: 80,  y: 140 }, { x: 150, y: 170 },
        { x: 220, y: 190 }, { x: 270, y: 210 }, { x: 280, y: 240 },
        { x: 240, y: 260 }, { x: 180, y: 275 }, { x: 120, y: 300 },
        { x: 80,  y: 330 }, { x: 65,  y: 380 }, { x: 80,  y: 440 },
      ],
      walls: [],
      obstacles: [
        // Rae's Creek - three water bodies forming a ribbon across the waist
        { type: 'water', x: 260, y: 250, r: 30 },
        { type: 'water', x: 400, y: 245, r: 35 },
        { type: 'water', x: 500, y: 245, r: 30 },
        // Three bunkers behind/around the green
        { type: 'sand',  x: 300, y: 70,  r: 20 },
        { type: 'sand',  x: 400, y: 55,  r: 22 },
        { type: 'sand',  x: 500, y: 70,  r: 20 },
      ],
      slopes: [
        // Green tilts gently back toward creek — overshoots roll off the back
        { x: 80, y: 20, w: 640, h: 160, dirX: 0, dirY: 0.5, strength: 0.018 },
      ],
      fastZones: [
        { x: 120, y: 40, w: 560, h: 140 }, // fast green
      ],
    },

    {
      // #13 Azalea — Sharp dogleg left par 5. Creek winds around the corner.
      name: 'Azalea',
      par: 5,
      ball: { x: 90, y: 90 },
      hole: { x: 720, y: 430 },
      boundary: [
        // Outer edge: starts top-left, sweeps right along top, curves down-right to green
        { x: 55,  y: 110 }, { x: 80,  y: 65 },  { x: 150, y: 40 },  { x: 250, y: 30 },
        { x: 360, y: 30 },  { x: 460, y: 40 },  { x: 550, y: 65 },  { x: 630, y: 105 },
        { x: 695, y: 155 }, { x: 740, y: 220 }, { x: 760, y: 300 }, { x: 760, y: 380 },
        { x: 745, y: 440 }, { x: 710, y: 475 }, { x: 650, y: 485 }, { x: 580, y: 480 },
        // Inner curve — carve out the dogleg
        { x: 520, y: 455 }, { x: 470, y: 420 }, { x: 430, y: 370 },
        { x: 400, y: 315 }, { x: 360, y: 270 }, { x: 310, y: 240 },
        { x: 250, y: 220 }, { x: 180, y: 205 }, { x: 120, y: 190 },
        { x: 75,  y: 170 },
      ],
      walls: [],
      obstacles: [
        // Creek along the inside of the dogleg (the "Rae's Creek" that wraps around 13 green)
        { type: 'water', x: 460, y: 340, r: 30 },
        { type: 'water', x: 520, y: 380, r: 32 },
        { type: 'water', x: 590, y: 420, r: 30 },
        // Greenside bunkers
        { type: 'sand',  x: 680, y: 380, r: 20 },
        { type: 'sand',  x: 700, y: 450, r: 18 },
      ],
      slopes: [
        // Top fairway drifts right
        { x: 70,  y: 40,  w: 620, h: 130, dirX: 0.6, dirY: 0.1, strength: 0.018 },
        // Approach slopes toward hole (down-right)
        { x: 480, y: 170, w: 280, h: 300, dirX: 0.3, dirY: 0.5, strength: 0.022 },
      ],
      fastZones: [
        { x: 180, y: 60, w: 380, h: 100 },
      ],
      tunnels: [
        // Secret shortcut: top border at x=400, pops out near the green
        { entry: { side: 'top', pos: 400, width: 22 },
          exit:  { side: 'right', pos: 430 } },
      ],
    },

    {
      // #15 Firethorn — Reachable par 5 with water short AND behind the green.
      name: 'Firethorn',
      par: 5,
      ball: { x: 80, y: 340 },
      hole: { x: 700, y: 150 },
      boundary: [
        // Diagonal capsule running lower-left to upper-right
        { x: 45,  y: 360 }, { x: 70,  y: 400 }, { x: 130, y: 425 }, { x: 210, y: 440 },
        { x: 300, y: 440 }, { x: 390, y: 420 }, { x: 470, y: 385 }, { x: 540, y: 340 },
        { x: 600, y: 285 }, { x: 650, y: 230 }, { x: 700, y: 185 }, { x: 745, y: 150 },
        { x: 760, y: 110 }, { x: 755, y: 65 },  { x: 720, y: 30 },  { x: 650, y: 25 },
        { x: 570, y: 45 },  { x: 490, y: 85 },  { x: 410, y: 135 }, { x: 330, y: 190 },
        { x: 250, y: 235 }, { x: 180, y: 270 }, { x: 120, y: 295 }, { x: 75,  y: 315 },
        { x: 50,  y: 335 },
      ],
      walls: [],
      obstacles: [
        // Water short of green
        { type: 'water', x: 620, y: 200, r: 30 },
        // Bunker behind green
        { type: 'sand',  x: 735, y: 80,  r: 22 },
        // Sand trap left of approach
        { type: 'sand',  x: 480, y: 330, r: 20 },
      ],
      slopes: [
        // Fairway slopes up-right toward green
        { x: 70, y: 30, w: 700, h: 420, dirX: 0.5, dirY: -0.3, strength: 0.018 },
      ],
      fastZones: [
        { x: 350, y: 150, w: 280, h: 180 },
      ],
    },

    {
      // #11 White Dogwood — Gentle dogleg left par 4, pond guards green on left.
      name: 'White Dogwood',
      par: 4,
      ball: { x: 100, y: 130 },
      hole: { x: 690, y: 410 },
      boundary: [
        // Outer edge: tee top-left, sweeps right then down to green bottom-right
        { x: 50,  y: 150 }, { x: 70,  y: 95 },  { x: 120, y: 55 },  { x: 200, y: 40 },
        { x: 290, y: 45 },  { x: 370, y: 65 },  { x: 440, y: 95 },  { x: 510, y: 135 },
        { x: 575, y: 180 }, { x: 640, y: 230 }, { x: 695, y: 285 }, { x: 735, y: 345 },
        { x: 760, y: 400 }, { x: 760, y: 445 }, { x: 730, y: 475 }, { x: 660, y: 485 },
        { x: 580, y: 480 }, { x: 510, y: 465 }, { x: 450, y: 440 }, { x: 395, y: 405 },
        // Inner curve
        { x: 355, y: 360 }, { x: 315, y: 310 }, { x: 275, y: 260 }, { x: 235, y: 220 },
        { x: 190, y: 195 }, { x: 140, y: 185 }, { x: 95,  y: 180 }, { x: 60,  y: 190 },
      ],
      walls: [],
      obstacles: [
        // Pond left of green (guards the left pin)
        { type: 'water', x: 550, y: 440, r: 38 },
        // Bunker right of green
        { type: 'sand',  x: 720, y: 355, r: 22 },
        // Fairway bunker in the landing area
        { type: 'sand',  x: 340, y: 140, r: 24 },
      ],
      slopes: [
        // Fairway drifts right and slightly down
        { x: 70, y: 50, w: 700, h: 430, dirX: 0.4, dirY: 0.3, strength: 0.016 },
        // Approach: steep downhill right into the green
        { x: 500, y: 280, w: 260, h: 210, dirX: 0.4, dirY: 0.5, strength: 0.024 },
      ],
      fastZones: [],
    },

    {
      // #18 Holly — Uphill finishing hole, dogleg right, big bunker left.
      name: 'Holly',
      par: 4,
      ball: { x: 150, y: 440 },
      hole: { x: 680, y: 100 },
      boundary: [
        { x: 55,  y: 440 }, { x: 90,  y: 480 }, { x: 180, y: 490 }, { x: 290, y: 480 },
        { x: 390, y: 455 }, { x: 480, y: 415 }, { x: 555, y: 360 }, { x: 620, y: 300 },
        { x: 680, y: 235 }, { x: 725, y: 170 }, { x: 755, y: 110 }, { x: 755, y: 60 },
        { x: 720, y: 25 },  { x: 640, y: 15 },  { x: 560, y: 25 },  { x: 490, y: 50 },
        { x: 430, y: 90 },  { x: 375, y: 140 }, { x: 325, y: 195 }, { x: 280, y: 250 },
        { x: 240, y: 305 }, { x: 200, y: 360 }, { x: 160, y: 410 }, { x: 110, y: 445 },
        { x: 60,  y: 460 },
      ],
      walls: [],
      obstacles: [
        // Big fairway bunker on the inside of the bend (left of fairway)
        { type: 'sand', x: 260, y: 400, r: 32 },
        { type: 'sand', x: 320, y: 330, r: 24 },
        // Greenside bunkers
        { type: 'sand', x: 620, y: 70,  r: 22 },
        { type: 'sand', x: 720, y: 155, r: 20 },
      ],
      slopes: [
        // Uphill diagonally toward the green
        { x: 60, y: 30, w: 700, h: 470, dirX: 0.5, dirY: -0.5, strength: 0.020 },
        // Approach: funnels toward the hole from below
        { x: 560, y: 30, w: 200, h: 180, dirX: 0.2, dirY: -0.3, strength: 0.022 },
      ],
      fastZones: [
        { x: 450, y: 140, w: 280, h: 160 },
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

  // --- Dog Easter Egg ---
  let dog = {
    active: false,       // currently visible on green
    x: 0, y: 0,         // position
    spawnAt: 0,          // timestamp to appear
    expiresAt: 0,        // timestamp to leave
    scheduled: false,    // whether a dog visit is planned this hole
    carrying: false,     // dog grabbed the ball
    dropAt: 0,           // when to drop the ball
    dropX: 0, dropY: 0, // where to drop
    runDir: 1,           // running direction for animation
    frame: 0,            // animation frame counter
  };

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
    scoreSubmitted = false;
    loadHole();
    gameState = 'playing';
    // Re-enable submit button for new game
    const btn = document.getElementById('submit-score-btn');
    if (btn) { btn.textContent = 'Submit Score'; btn.disabled = false; }
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
    scheduleDog();
  }

  // --- Dog Logic ---
  function scheduleDog() {
    dog.active = false;
    dog.carrying = false;
    dog.scheduled = false;
    // ~10% chance per hole
    if (Math.random() < 0.10) {
      dog.scheduled = true;
      // Appear 3-30 seconds into the hole
      dog.spawnAt = Date.now() + 3000 + Math.random() * 27000;
    }
  }

  function spawnDog() {
    const hole = HOLES[currentHole];
    const hasBoundary = hole.boundary && hole.boundary.length >= 3;
    let tries = 0;
    while (tries < 80) {
      const dx = 60 + Math.random() * (CANVAS_W - 120);
      const dy = 60 + Math.random() * (CANVAS_H - 120);
      const distBall = Math.sqrt((dx - ball.x) ** 2 + (dy - ball.y) ** 2);
      const distHole = Math.sqrt((dx - hole.hole.x) ** 2 + (dy - hole.hole.y) ** 2);
      const insideFairway = !hasBoundary || pointInPolygon(dx, dy, hole.boundary);
      if (distBall > 80 && distHole > 50 && insideFairway) {
        dog.x = dx;
        dog.y = dy;
        break;
      }
      tries++;
    }
    dog.active = true;
    dog.expiresAt = Date.now() + 5000;
    dog.runDir = Math.random() < 0.5 ? -1 : 1;
    dog.frame = 0;
  }

  function updateDog() {
    const now = Date.now();

    // Spawn check
    if (dog.scheduled && !dog.active && !dog.carrying && now >= dog.spawnAt) {
      spawnDog();
      dog.scheduled = false;
    }

    // Expire check — dog runs off
    if (dog.active && !dog.carrying && now >= dog.expiresAt) {
      dog.active = false;
    }

    // Animation frame
    if (dog.active) dog.frame++;

    // Ball-dog collision (only while rolling and dog is visible, not already carrying)
    if (dog.active && !dog.carrying && gameState === 'rolling') {
      const dist = Math.sqrt((ball.x - dog.x) ** 2 + (ball.y - dog.y) ** 2);
      if (dist < BALL_RADIUS + 14) {
        dogGrabBall();
      }
    }

    // Drop the ball after carrying delay
    if (dog.carrying && now >= dog.dropAt) {
      ball.x = dog.dropX;
      ball.y = dog.dropY;
      ball.vx = 0;
      ball.vy = 0;
      dog.carrying = false;
      dog.active = false;
      // Check if dog dropped it in the hole
      const hole = HOLES[currentHole];
      const hd = Math.sqrt((ball.x - hole.hole.x) ** 2 + (ball.y - hole.hole.y) ** 2);
      if (hd < HOLE_RADIUS) {
        holeComplete();
      } else {
        gameState = 'playing';
      }
    }
  }

  function dogGrabBall() {
    const hole = HOLES[currentHole];
    dog.carrying = true;
    ball.vx = 0;
    ball.vy = 0;
    // Hide ball off-screen while dog carries it
    ball.x = -100;
    ball.y = -100;
    dog.dropAt = Date.now() + 1200; // dog runs for 1.2s

    const roll = Math.random();
    if (roll < 0.03) {
      // 3%: drop in the hole
      dog.dropX = hole.hole.x;
      dog.dropY = hole.hole.y;
    } else if (roll < 0.25) {
      // 22%: random spot
      dog.dropX = 60 + Math.random() * (CANVAS_W - 120);
      dog.dropY = 60 + Math.random() * (CANVAS_H - 120);
    } else {
      // 75%: direct line to hole — place ball nearby with clear path
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 60; // 40-100px from hole
      dog.dropX = Math.max(30, Math.min(CANVAS_W - 30, hole.hole.x + Math.cos(angle) * dist));
      dog.dropY = Math.max(30, Math.min(CANVAS_H - 30, hole.hole.y + Math.sin(angle) * dist));
    }
  }

  function drawDog() {
    if (!dog.active) return;
    ctx.save();
    const x = dog.x, y = dog.y;
    const bounce = Math.sin(dog.frame * 0.15) * 2;
    const flip = dog.carrying ? 1 : dog.runDir;

    ctx.translate(x, y + bounce);
    ctx.scale(flip, 1);

    // Body
    ctx.fillStyle = '#c08040';
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#a06830';
    ctx.beginPath();
    ctx.arc(14, -6, 8, 0, Math.PI * 2);
    ctx.fill();

    // Ear
    ctx.fillStyle = '#805020';
    ctx.beginPath();
    ctx.ellipse(18, -12, 4, 6, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Eye
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(18, -7, 2, 0, Math.PI * 2);
    ctx.fill();

    // Nose
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(22, -4, 2, 0, Math.PI * 2);
    ctx.fill();

    // Tail (wagging)
    const tailWag = Math.sin(dog.frame * 0.25) * 0.4;
    ctx.strokeStyle = '#c08040';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-14, -2);
    ctx.quadraticCurveTo(-22, -10 + tailWag * 10, -18, -16);
    ctx.stroke();

    // Legs (animated)
    const legAnim = Math.sin(dog.frame * 0.2) * 3;
    ctx.strokeStyle = '#a06830';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-6, 8); ctx.lineTo(-6 - legAnim, 16);
    ctx.moveTo(6, 8);  ctx.lineTo(6 + legAnim, 16);
    ctx.moveTo(-2, 8); ctx.lineTo(-2 + legAnim, 16);
    ctx.moveTo(10, 8); ctx.lineTo(10 - legAnim, 16);
    ctx.stroke();

    // Ball in mouth when carrying
    if (dog.carrying) {
      ctx.fillStyle = COLORS.ball;
      ctx.beginPath();
      ctx.arc(22, -2, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
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

    if (gameState === 'rolling' && !dog.carrying) updateBall();
    updateDog();

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

    // --- Secret tunnel check (before border bounce) ---
    let tunneled = false;
    (hole.tunnels || []).forEach(t => {
      if (tunneled) return;
      const e = t.entry, ex = t.exit;
      const halfW = e.width / 2;
      let hit = false;

      if (e.side === 'top' && ball.y - BALL_RADIUS < 0 &&
          ball.x >= e.pos - halfW && ball.x <= e.pos + halfW) hit = true;
      if (e.side === 'bottom' && ball.y + BALL_RADIUS > CANVAS_H &&
          ball.x >= e.pos - halfW && ball.x <= e.pos + halfW) hit = true;
      if (e.side === 'left' && ball.x - BALL_RADIUS < 0 &&
          ball.y >= e.pos - halfW && ball.y <= e.pos + halfW) hit = true;
      if (e.side === 'right' && ball.x + BALL_RADIUS > CANVAS_W &&
          ball.y >= e.pos - halfW && ball.y <= e.pos + halfW) hit = true;

      if (hit) {
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        // Aim exit velocity toward the hole with speed scaled down
        const hx = hole.hole.x, hy = hole.hole.y;
        let exitX, exitY;
        if (ex.side === 'top')    { exitX = ex.pos; exitY = BALL_RADIUS + 2; }
        if (ex.side === 'bottom') { exitX = ex.pos; exitY = CANVAS_H - BALL_RADIUS - 2; }
        if (ex.side === 'left')   { exitX = BALL_RADIUS + 2; exitY = ex.pos; }
        if (ex.side === 'right')  { exitX = CANVAS_W - BALL_RADIUS - 2; exitY = ex.pos; }

        ball.x = exitX;
        ball.y = exitY;

        const dxH = hx - exitX, dyH = hy - exitY;
        const dH = Math.sqrt(dxH * dxH + dyH * dyH);
        // Exit speed: gentle shots (low speed) get a nice roll toward hole,
        // hard shots overshoot
        const exitSpeed = speed * 0.45;
        ball.vx = (dxH / dH) * exitSpeed;
        ball.vy = (dyH / dH) * exitSpeed;
        tunneled = true;
      }
    });

    // --- Boundary collisions ---
    if (!tunneled) {
      if (hole.boundary && hole.boundary.length >= 3) {
        handleBoundaryCollision(ball, hole.boundary);
      } else {
        // Fallback: canvas edges
        if (ball.x - BALL_RADIUS < 0)        { ball.x = BALL_RADIUS;            ball.vx = -ball.vx * WALL_BOUNCE; }
        if (ball.x + BALL_RADIUS > CANVAS_W) { ball.x = CANVAS_W - BALL_RADIUS;  ball.vx = -ball.vx * WALL_BOUNCE; }
        if (ball.y - BALL_RADIUS < 0)        { ball.y = BALL_RADIUS;            ball.vy = -ball.vy * WALL_BOUNCE; }
        if (ball.y + BALL_RADIUS > CANVAS_H) { ball.y = CANVAS_H - BALL_RADIUS;  ball.vy = -ball.vy * WALL_BOUNCE; }
      }
    }

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

  // --- Polygon boundary helpers ---
  function pointInPolygon(px, py, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i].x, yi = poly[i].y;
      const xj = poly[j].x, yj = poly[j].y;
      const intersect = ((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  function closestPointOnSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return { x: x1, y: y1 };
    let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
    if (t < 0) t = 0; else if (t > 1) t = 1;
    return { x: x1 + t * dx, y: y1 + t * dy };
  }

  function handleBoundaryCollision(b, poly) {
    // Find nearest edge
    let nearestDist = Infinity;
    let nearestCpX = 0, nearestCpY = 0;
    for (let i = 0; i < poly.length; i++) {
      const p1 = poly[i];
      const p2 = poly[(i + 1) % poly.length];
      const cp = closestPointOnSegment(b.x, b.y, p1.x, p1.y, p2.x, p2.y);
      const dx = b.x - cp.x;
      const dy = b.y - cp.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < nearestDist) {
        nearestDist = d;
        nearestCpX = cp.x;
        nearestCpY = cp.y;
      }
    }

    const inside = pointInPolygon(b.x, b.y, poly);
    if (nearestDist >= BALL_RADIUS && inside) return; // plenty of clearance

    // Compute normal from edge toward ball (or reversed if outside)
    let nx = b.x - nearestCpX;
    let ny = b.y - nearestCpY;
    const nlen = Math.sqrt(nx * nx + ny * ny) || 1;
    nx /= nlen; ny /= nlen;
    if (!inside) { nx = -nx; ny = -ny; }

    // Push ball back inside
    b.x = nearestCpX + nx * (BALL_RADIUS + 0.5);
    b.y = nearestCpY + ny * (BALL_RADIUS + 0.5);

    // Reflect velocity if ball is moving into the edge
    const dot = b.vx * nx + b.vy * ny;
    if (dot < 0) {
      b.vx -= 2 * dot * nx;
      b.vy -= 2 * dot * ny;
      b.vx *= WALL_BOUNCE;
      b.vy *= WALL_BOUNCE;
    }
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
    if (strokes === 1)   label = 'Hole in One! 🐯';
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
      `${totalStrokes} strokes (${diffStr}) over ${HOLES.length} holes at Augusta Mini Golf`;
    document.getElementById('end-overlay').classList.remove('hidden');
  }

  // --- Firebase Realtime Database (REST, no SDK needed) ---
  const FB_URL = 'https://masters-mini-golf-default-rtdb.firebaseio.com';
  const TOTAL_PAR = HOLES.reduce((s, h) => s + h.par, 0);

  function todayKey() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  }

  let scoreSubmitted = false;

  async function submitScore() {
    if (scoreSubmitted) return;

    const nameInput = document.getElementById('player-name-input');
    const name = nameInput.value.trim() || 'Anonymous';
    const btn = document.getElementById('submit-score-btn');

    btn.textContent = 'Saving...';
    btn.disabled = true;
    scoreSubmitted = true;

    const entry = {
      name: name.substring(0, 40),
      score: totalStrokes,
      par: TOTAL_PAR,
      timestamp: Date.now()
    };

    try {
      const res = await fetch(`${FB_URL}/scores/${todayKey()}.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
      });
      if (!res.ok) throw new Error('Firebase write failed');
      nameInput.value = '';
      btn.textContent = 'Submitted! 🐯';
      await loadLeaderboard();
    } catch (e) {
      console.error('Score submit failed:', e);
      btn.textContent = 'Error — try again';
      scoreSubmitted = false; // allow retry on actual error
      btn.disabled = false;
      return;
    }

    // Keep button disabled permanently for this game
    btn.textContent = 'Score Submitted ✓';
    btn.disabled = true;
  }

  async function loadLeaderboard() {
    const list = document.getElementById('daily-scores');
    list.innerHTML = '<li class="no-scores">Loading...</li>';

    try {
      const res = await fetch(`${FB_URL}/scores/${todayKey()}.json`);
      if (!res.ok) throw new Error('Firebase read failed');
      const data = await res.json();

      if (!data) {
        list.innerHTML = '<li class="no-scores">No scores today. Be the first to play!</li>';
        return;
      }

      // data is an object of pushId → entry — flatten, sort by score asc
      const entries = Object.values(data)
        .sort((a, b) => a.score - b.score)
        .slice(0, 20);

      list.innerHTML = entries.map((s, i) => {
        const diff = s.score - (s.par || TOTAL_PAR);
        const diffStr = diff === 0 ? 'E' : (diff > 0 ? `+${diff}` : `${diff}`);
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
        return `<li>
          <span class="lb-rank">${medal}</span>
          <span class="lb-name">${escapeHtml(s.name)}</span>
          <span class="lb-score">${s.score} (${diffStr})</span>
        </li>`;
      }).join('');
    } catch (e) {
      console.error('Leaderboard load failed:', e);
      list.innerHTML = '<li class="no-scores">Leaderboard unavailable.</li>';
    }
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

    drawFelt(hole);
    // Clip inner drawings to the fairway polygon so they don't bleed into the rough
    const hasBoundary = hole.boundary && hole.boundary.length >= 3;
    if (hasBoundary) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(hole.boundary[0].x, hole.boundary[0].y);
      for (let i = 1; i < hole.boundary.length; i++) {
        ctx.lineTo(hole.boundary[i].x, hole.boundary[i].y);
      }
      ctx.closePath();
      ctx.clip();
    }
    drawFastZones(hole.fastZones || []);
    drawSlopes(hole.slopes || []);
    (hole.obstacles || []).forEach(o => drawObstacle(o));
    (hole.walls || []).forEach(w => drawWall(w));
    drawTarget(hole.hole);
    if (hasBoundary) {
      ctx.restore(); // release the clip — ball/dog/aim draw above the rough
    }
    drawDog();
    if (aiming) drawAimLine();
    drawBall();

    ctx.save();
    ctx.font = '700 13px "IBM Plex Mono", monospace';
    ctx.fillStyle = 'rgba(245,240,232,0.28)';
    ctx.textAlign = 'right';
    ctx.fillText(`Hole ${currentHole + 1} · Par ${hole.par}`, CANVAS_W - 12, 22);
    ctx.restore();
  }

  function drawFelt(hole) {
    const hasBoundary = hole && hole.boundary && hole.boundary.length >= 3;

    if (hasBoundary) {
      // Draw rough (dark, mottled) across the whole canvas
      ctx.fillStyle = '#1a2e18';
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Mottled rough texture
      ctx.save();
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 180; i++) {
        const rx = Math.random() * CANVAS_W;
        const ry = Math.random() * CANVAS_H;
        const rr = 4 + Math.random() * 10;
        ctx.fillStyle = Math.random() < 0.5 ? '#244021' : '#12240f';
        ctx.beginPath();
        ctx.arc(rx, ry, rr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // Fairway felt — either a polygon or full rectangle fallback
    ctx.save();
    if (hasBoundary) {
      ctx.beginPath();
      ctx.moveTo(hole.boundary[0].x, hole.boundary[0].y);
      for (let i = 1; i < hole.boundary.length; i++) {
        ctx.lineTo(hole.boundary[i].x, hole.boundary[i].y);
      }
      ctx.closePath();

      // Soft rough→fairway transition (drop shadow on the edge of the fairway)
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.45)';
      ctx.shadowBlur = 12;
      ctx.fillStyle = COLORS.felt;
      ctx.fill();
      ctx.restore();

      ctx.clip();
    } else {
      ctx.fillStyle = COLORS.felt;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    }

    // Mowing stripes inside the fairway
    ctx.globalAlpha = 0.05;
    for (let y = 0; y < CANVAS_H; y += 14) {
      ctx.fillStyle = y % 28 === 0 ? COLORS.feltLight : COLORS.feltDark;
      ctx.fillRect(0, y, CANVAS_W, 14);
    }
    ctx.globalAlpha = 1;

    // Vignette inside fairway
    const vig = ctx.createRadialGradient(CANVAS_W / 2, CANVAS_H / 2, CANVAS_W * 0.25, CANVAS_W / 2, CANVAS_H / 2, CANVAS_W * 0.75);
    vig.addColorStop(0, 'transparent');
    vig.addColorStop(1, 'rgba(0,0,0,0.18)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.restore();

    // Fairway border line (subtle)
    if (hasBoundary) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(hole.boundary[0].x, hole.boundary[0].y);
      for (let i = 1; i < hole.boundary.length; i++) {
        ctx.lineTo(hole.boundary[i].x, hole.boundary[i].y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(200,210,150,0.18)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }
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
    if (dog.carrying) return; // ball is in dog's mouth
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
