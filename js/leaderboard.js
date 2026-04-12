// ============================================
// MASTERS LEADERBOARD — Animation & Interaction
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
  if (typeof loadLivePoolData === 'function') {
    await loadLivePoolData();
  }
  initLeaderboard();
  initStandings();
});

function initLeaderboard() {
  const scoreboardRows = document.getElementById('scoreboard-rows');
  if (!scoreboardRows) return;

  const top10 = poolData.entries.slice(0, 10);

  // Always update aggregate stats from poolData totals (updates hourly via cron)
  const statEntries = document.getElementById('stat-entries');
  if (statEntries) statEntries.textContent = poolData.totalEntries > 0 ? poolData.totalEntries : '—';

  const statPrize = document.getElementById('stat-prize-pool');
  if (statPrize) statPrize.textContent = poolData.prizePool > 0 ? '$' + poolData.prizePool.toLocaleString() : '—';

  const statCharity = document.getElementById('stat-charity');
  if (statCharity) statCharity.textContent = poolData.totalCharityRaised > 0 ? '$' + poolData.totalCharityRaised.toLocaleString() : '$5/entry';

  // Only show leader name once entries array is populated (post-close)
  const statLeader = document.getElementById('stat-leader');
  if (statLeader && top10.length > 0) {
    statLeader.textContent = top10[0].name;
    statLeader.style.fontSize = '0.95rem';
  }

  // Empty state: no entries yet
  if (top10.length === 0) {
    scoreboardRows.innerHTML = `
      <div style="text-align:center; padding:40px 20px;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.85rem; color:rgba(255,255,255,0.6); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:8px;">Entries Open</div>
        <div style="font-family:'Playfair Display',serif; font-size:1.1rem; color:#ffffff; margin-bottom:12px;">Leaderboard populates when the tournament begins</div>
        <a href="enter.html" style="font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:#c9a84c; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase;">Enter the Pool →</a>
      </div>
    `;

    // Still update last-updated even in empty state
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) lastUpdated.textContent = `Last updated: ${getTimeSinceUpdate()}`;
    const boardTime = document.getElementById('board-update-time');
    if (boardTime) boardTime.textContent = getTimeSinceUpdate();
    return;
  }

  // Update last updated
  const lastUpdated = document.getElementById('last-updated');
  if (lastUpdated) {
    lastUpdated.textContent = `Last updated: ${getTimeSinceUpdate()}`;
  }
  const boardTime = document.getElementById('board-update-time');
  if (boardTime) {
    boardTime.textContent = getTimeSinceUpdate();
  }

  // Render scoreboard rows with staggered animation
  top10.forEach((entry, index) => {
    const row = createScoreboardRow(entry, index);
    scoreboardRows.appendChild(row);

    // Stagger the reveal animation
    setTimeout(() => {
      row.classList.add('revealed');
    }, 200 + (index * 120));
  });
}

function createScoreboardRow(entry, index) {
  const change = getRankChange(entry);

  const row = document.createElement('div');
  row.className = 'scoreboard-row';
  row.style.opacity = '0';
  row.style.transform = 'translateX(-20px)';
  row.style.transition = `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

  // Build movement indicator
  let movementHtml;
  if (change.direction === 'up') {
    movementHtml = `<span class="movement up"><span class="movement-arrow">▲</span>${change.amount}</span>`;
  } else if (change.direction === 'down') {
    movementHtml = `<span class="movement down"><span class="movement-arrow">▼</span>${change.amount}</span>`;
  } else {
    movementHtml = `<span class="movement same">—</span>`;
  }

  const chipRows = Object.entries(entry.players).map(([group, player]) => {
    const chipEarningsClass = player.earnings === 0 ? 'player-chip-earnings zero' : 'player-chip-earnings';
    return `
      <div class="player-chip">
        <div>
          <div class="player-chip-name">${player.name.toUpperCase()}</div>
          <div class="player-chip-group">${getGroupLabel(group)}</div>
        </div>
        <div class="${chipEarningsClass}">${formatCurrency(player.earnings)}</div>
      </div>`;
  }).join('');

  const earningsZero = entry.totalEarnings === 0;
  const earningsFaceClass = earningsZero ? 'flip-tile-face zero' : 'flip-tile-face';

  row.innerHTML = `
    <div class="rank-cell">
      <div class="rank-plate ${index < 3 ? 'top-three' : ''}">${entry.currentRank}</div>
    </div>
    <div class="entry-cell">
      <div class="entry-name">${entry.name.toUpperCase()}</div>
    </div>
    <div class="earnings-cell">
      <div class="flip-tile" data-amount="${entry.totalEarnings}">
        <span class="${earningsFaceClass}">$0</span>
      </div>
    </div>
    <div class="movement-cell">
      ${movementHtml}
    </div>
    <div class="row-detail" id="detail-${entry.id}">
      <div class="player-grid">${chipRows}</div>
    </div>
  `;

  // Click to expand
  row.addEventListener('click', (e) => {
    const detail = row.querySelector('.row-detail');
    const isOpen = detail.classList.contains('open');

    // Close all other details
    document.querySelectorAll('.row-detail.open').forEach(d => d.classList.remove('open'));

    if (!isOpen) {
      detail.classList.add('open');
    }
  });

  // Intercept "revealed" class to trigger flip animation
  const originalAdd = row.classList.add.bind(row.classList);
  row.classList.add = function(...args) {
    originalAdd(...args);
    if (args.includes('revealed')) {
      row.style.opacity = '1';
      row.style.transform = 'translateX(0)';
      // Flip the earnings tile in with a delay per row
      const tile = row.querySelector('.flip-tile');
      if (tile) {
        const amount = parseInt(tile.dataset.amount || '0', 10);
        const delay = 300 + index * 120;
        setTimeout(() => flipTileTo(tile, formatCurrency(amount), amount === 0), delay);
      }
    }
  };

  return row;
}

/**
 * Flip tile animation — old number drops off, new number falls in.
 * Mimics the physical Augusta scoreboard number replacement.
 */
function flipTileTo(tileEl, newText, isZero) {
  const face = tileEl.querySelector('.flip-tile-face');
  if (!face) return;

  const currentText = face.textContent;
  if (currentText === newText) return;

  // Drop old number off
  face.classList.add('dropping');

  setTimeout(() => {
    // Swap text and flip new one in
    face.textContent = newText;
    face.className = isZero ? 'flip-tile-face zero flipping-in' : 'flip-tile-face flipping-in';

    // Clean up animation class after it's done
    setTimeout(() => {
      face.classList.remove('flipping-in');
    }, 350);
  }, 220);
}

/**
 * Update a live tile (called when standings refresh during tournament).
 * Shows the "number being pulled off the board" effect.
 */
function updateFlipTile(tileEl, newAmount) {
  const newText = formatCurrency(newAmount);
  const isZero = newAmount === 0;
  flipTileTo(tileEl, newText, isZero);
  tileEl.dataset.amount = newAmount;
}

// ============================================
// STANDINGS PAGE
// ============================================

function initStandings() {
  const standingsBody = document.getElementById('standings-body');
  if (!standingsBody) return;

  if (poolData.entries.length === 0) {
    standingsBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:40px; color:#888; font-family:'IBM Plex Mono',monospace; font-size:0.85rem;">Standings will appear once entries are loaded and the tournament begins.<br><a href="enter.html" style="color:#1b3425;">Enter the Pool →</a></td></tr>`;
    return;
  }

  const searchInput = document.getElementById('standings-search');
  const resultsCount = document.getElementById('results-count');
  let currentFilter = '';

  function renderStandings(filter = '') {
    standingsBody.innerHTML = '';

    const filtered = poolData.entries.filter(entry => {
      if (!filter) return true;
      const q = filter.toLowerCase();
      return entry.name.toLowerCase().includes(q) ||
             entry.owner.toLowerCase().includes(q) ||
             Object.values(entry.players).some(p => p.name.toLowerCase().includes(q));
    });

    if (resultsCount) {
      resultsCount.textContent = `${filtered.length} of ${poolData.entries.length} entries`;
    }

    filtered.forEach((entry, index) => {
      const change = getRankChange(entry);
      let movementClass, movementText;

      if (change.direction === 'up') {
        movementClass = 'up';
        movementText = `▲ ${change.amount}`;
      } else if (change.direction === 'down') {
        movementClass = 'down';
        movementText = `▼ ${change.amount}`;
      } else {
        movementClass = 'same';
        movementText = '—';
      }

      const tr = document.createElement('tr');
      tr.className = entry.currentRank <= 3 ? 'top-three' : '';
      tr.innerHTML = `
        <td class="rank-num">${entry.currentRank}</td>
        <td class="entry-name-cell">
          ${entry.name}
        </td>
        <td class="earnings">${formatCurrency(entry.totalEarnings)}</td>
        <td class="movement-indicator ${movementClass}">${movementText}</td>
      `;

      // Create expandable detail row
      const detailTr = document.createElement('tr');
      detailTr.className = 'standings-detail-row';
      detailTr.innerHTML = `
        <td colspan="4">
          <div class="detail-players-grid">
            ${Object.entries(entry.players).map(([group, player]) => `
              <div class="detail-player-card">
                <div class="detail-player-info">
                  <span class="detail-player-name">${player.name}</span>
                  <span class="detail-player-group">${getGroupLabel(group)}</span>
                </div>
                <span class="detail-player-earnings">${formatCurrency(player.earnings)}</span>
              </div>
            `).join('')}
          </div>
        </td>
      `;

      tr.addEventListener('click', () => {
        // Close all others
        document.querySelectorAll('.standings-detail-row.open').forEach(r => {
          if (r !== detailTr) r.classList.remove('open');
        });
        detailTr.classList.toggle('open');
      });

      standingsBody.appendChild(tr);
      standingsBody.appendChild(detailTr);

      // Animate in
      tr.style.opacity = '0';
      tr.style.transform = 'translateY(10px)';
      setTimeout(() => {
        tr.style.transition = 'all 0.4s ease';
        tr.style.opacity = '1';
        tr.style.transform = 'translateY(0)';
      }, 50 + (index * 30));
    });
  }

  // Search handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilter = e.target.value;
      renderStandings(currentFilter);
    });
  }

  renderStandings();
}
