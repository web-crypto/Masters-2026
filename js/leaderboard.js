// ============================================
// MASTERS LEADERBOARD — Animation & Interaction
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initLeaderboard();
  initStandings();
});

function initLeaderboard() {
  const scoreboardRows = document.getElementById('scoreboard-rows');
  if (!scoreboardRows) return;

  const top10 = poolData.entries.slice(0, 10);

  // Update stats
  const statLeader = document.getElementById('stat-leader');
  if (statLeader && top10.length > 0) {
    statLeader.textContent = top10[0].name;
    statLeader.style.fontSize = '0.95rem';
  }

  // Update last updated
  const lastUpdated = document.getElementById('last-updated');
  if (lastUpdated) {
    lastUpdated.textContent = `Last updated: ${getTimeSinceUpdate()}`;
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

  row.innerHTML = `
    <div class="rank-cell">
      <div class="rank-plate ${index < 3 ? 'top-three' : ''}">${entry.currentRank}</div>
    </div>
    <div class="entry-name">
      ${entry.name}
      <span class="entry-owner">${entry.owner}</span>
    </div>
    <div class="earnings-cell">
      <span class="earnings-amount" data-amount="${entry.totalEarnings}">$0</span>
    </div>
    <div class="movement-cell">
      ${movementHtml}
    </div>
    <div class="row-detail" id="detail-${entry.id}">
      <div class="player-grid">
        ${Object.entries(entry.players).map(([group, player]) => `
          <div class="player-chip">
            <div>
              <div class="player-chip-name">${player.name}</div>
              <div class="player-chip-group">${getGroupLabel(group)}</div>
            </div>
            <div class="player-chip-earnings">${formatCurrency(player.earnings)}</div>
          </div>
        `).join('')}
      </div>
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

  // Reveal animation observer
  const revealObserver = {
    reveal: () => {
      row.style.opacity = '1';
      row.style.transform = 'translateX(0)';

      // Animate the earnings counter
      const earningsEl = row.querySelector('.earnings-amount');
      if (earningsEl) {
        animateCounter(earningsEl, 0, entry.totalEarnings, 800 + (index * 100));
      }
    }
  };

  // Use class-based reveal
  const originalClassList = row.classList;
  Object.defineProperty(row, 'classList', {
    get() {
      return originalClassList;
    }
  });

  const originalAdd = row.classList.add.bind(row.classList);
  row.classList.add = function(...args) {
    originalAdd(...args);
    if (args.includes('revealed')) {
      revealObserver.reveal();
    }
  };

  return row;
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * eased);

    element.textContent = formatCurrency(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = formatCurrency(end);
    }
  }

  requestAnimationFrame(update);
}

// ============================================
// STANDINGS PAGE
// ============================================

function initStandings() {
  const standingsBody = document.getElementById('standings-body');
  if (!standingsBody) return;

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
          <span class="owner-name">${entry.owner}</span>
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
