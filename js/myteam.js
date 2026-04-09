// ============================================
// MY TEAM DASHBOARD — Personal Stats Engine
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('entry-select');
  const searchInput = document.getElementById('entry-search');
  const dropdown = document.getElementById('entry-dropdown');
  const emptyState = document.getElementById('empty-state');
  const dashboard = document.getElementById('team-dashboard');

  // Sort entries alphabetically
  const sortedEntries = [...poolData.entries].sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  // Populate hidden select (for compatibility)
  sortedEntries.forEach(entry => {
    const opt = document.createElement('option');
    opt.value = entry.id;
    opt.textContent = entry.name;
    select.appendChild(opt);
  });

  function renderDropdown(filter) {
    const q = (filter || '').toLowerCase();
    const matches = q
      ? sortedEntries.filter(e => e.name.toLowerCase().includes(q))
      : sortedEntries;

    if (matches.length === 0) {
      dropdown.innerHTML = '<div style="padding:10px 16px; color:var(--text-light); font-size:0.9rem;">No matches</div>';
      dropdown.style.display = 'block';
      return;
    }

    dropdown.innerHTML = matches.map(e =>
      `<div class="entry-option" data-id="${e.id}" style="padding:10px 16px; cursor:pointer; font-family:var(--font-body); font-size:0.95rem; border-bottom:1px solid rgba(0,0,0,0.05);"
        onmouseover="this.style.background='rgba(26,71,49,0.06)'"
        onmouseout="this.style.background='transparent'">${e.name}</div>`
    ).join('');
    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.entry-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const id = parseInt(opt.dataset.id);
        const entry = poolData.entries.find(e => e.id === id);
        searchInput.value = entry.name;
        dropdown.style.display = 'none';
        select.value = id;
        localStorage.setItem('masters-my-entry', id);
        loadDashboard(id);
      });
    });
  }

  searchInput.addEventListener('focus', () => renderDropdown(searchInput.value));
  searchInput.addEventListener('input', () => renderDropdown(searchInput.value));

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });

  // Check URL param or localStorage for saved selection
  const params = new URLSearchParams(window.location.search);
  const savedId = params.get('entry') || localStorage.getItem('masters-my-entry');
  if (savedId) {
    const entry = poolData.entries.find(e => e.id === parseInt(savedId));
    if (entry) {
      searchInput.value = entry.name;
      select.value = savedId;
      loadDashboard(parseInt(savedId));
    }
  }
});

function loadDashboard(entryId) {
  const entry = poolData.entries.find(e => e.id === entryId);
  if (!entry) return;

  document.getElementById('empty-state').classList.add('hidden');
  document.getElementById('team-dashboard').classList.remove('hidden');

  renderHeroCard(entry);
  renderEarningsChart(entry);
  renderRoster(entry);
  renderGapAnalysis(entry);
  renderDifferentiators(entry);
  renderScenarioWidget(entry);
  renderSwapSimulator(entry);
}

// ============================================
// HERO CARD
// ============================================
function renderHeroCard(entry) {
  const rank = entry.currentRank;
  const change = getRankChange(entry);

  document.getElementById('hero-rank').textContent = rank;
  document.getElementById('hero-rank-suffix').textContent = getOrdinalSuffix(rank);
  document.getElementById('hero-name').textContent = entry.name;
  document.getElementById('hero-earnings').textContent = formatCurrency(entry.totalEarnings);
  document.getElementById('hero-total-entries').textContent = poolData.totalEntries;

  const movementEl = document.getElementById('hero-movement');
  if (change.direction === 'up') {
    movementEl.className = 'rank-hero-movement up';
    movementEl.textContent = `▲ ${change.amount} from last update`;
  } else if (change.direction === 'down') {
    movementEl.className = 'rank-hero-movement down';
    movementEl.textContent = `▼ ${change.amount} from last update`;
  } else {
    movementEl.className = 'rank-hero-movement same';
    movementEl.textContent = '— No change';
  }
}

// ============================================
// EARNINGS BREAKDOWN CHART
// ============================================
function renderEarningsChart(entry) {
  const chart = document.getElementById('earnings-chart');
  chart.innerHTML = '';

  const maxEarnings = Math.max(...Object.values(entry.players).map(p => p.earnings), 1);

  const groupOrder = ['groupA', 'groupB1', 'groupB2', 'groupC1', 'groupC2', 'groupD1', 'groupD2', 'groupE'];

  groupOrder.forEach((group, i) => {
    const player = entry.players[group];
    const pct = (player.earnings / maxEarnings) * 100;
    const tierClass = group === 'groupD' ? 'tier-d' : group.startsWith('groupA') ? 'tier-a' : group.startsWith('groupB') ? 'tier-b' : 'tier-c';

    const row = document.createElement('div');
    row.className = 'echart-row';
    row.innerHTML = `
      <span class="echart-label">${getGroupLabel(group).replace('Group ', '')}</span>
      <span class="echart-player">${player.name}</span>
      <div class="echart-bar-track">
        <div class="echart-bar-fill ${tierClass}" style="width: 0%" data-width="${pct}">
          ${pct > 20 ? `<span class="echart-bar-amount">${formatCurrency(player.earnings)}</span>` : ''}
        </div>
      </div>
      <span class="echart-amount-outside">${formatCurrency(player.earnings)}</span>
    `;

    chart.appendChild(row);

    // Animate bar
    setTimeout(() => {
      const fill = row.querySelector('.echart-bar-fill');
      fill.style.width = fill.dataset.width + '%';
    }, 100 + i * 80);
  });
}

// ============================================
// ROSTER — 8 Players with vs. the field
// ============================================
function renderRoster(entry) {
  const grid = document.getElementById('roster-grid');
  grid.innerHTML = '';

  const groupOrder = ['groupA', 'groupB1', 'groupB2', 'groupC1', 'groupC2', 'groupD1', 'groupD2', 'groupE'];

  groupOrder.forEach((group, i) => {
    const player = entry.players[group];
    const fieldStats = getFieldStats(group, player.name);

    const card = document.createElement('div');
    card.className = `roster-player-card ${group === 'groupD' ? 'tier-d' : ''}`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';

    card.innerHTML = `
      <div class="roster-player-top">
        <span class="roster-player-name">${player.name}</span>
        <span class="roster-player-group">${getGroupLabel(group)}</span>
      </div>
      <div class="roster-player-earnings ${player.earnings === 0 ? 'zero' : ''}">${formatCurrency(player.earnings)}</div>
      <div class="roster-vs-field">
        <span class="rank-highlight">#${fieldStats.rank} in ${getGroupLabel(group)}</span> out of ${fieldStats.totalPicked} picked players.
        <span class="popularity-note">${fieldStats.pickPct}% of entries have ${player.name.split(' ')[1] || player.name}.</span>
      </div>
    `;

    grid.appendChild(card);

    setTimeout(() => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 80 + i * 60);
  });
}

// Map sub-slots to parent groups
const _parentSlots = {
  groupA: ['groupA'], groupB1: ['groupB1','groupB2'], groupB2: ['groupB1','groupB2'],
  groupC1: ['groupC1','groupC2'], groupC2: ['groupC1','groupC2'],
  groupD1: ['groupD1','groupD2'], groupD2: ['groupD1','groupD2'],
  groupE: ['groupE'],
};

function getFieldStats(group, playerName) {
  // Count picks across the entire parent group (not just one slot)
  const slots = _parentSlots[group] || [group];
  const pickCounts = {};
  const earningsMap = {};

  poolData.entries.forEach(entry => {
    const seen = new Set();
    slots.forEach(slot => {
      const pick = entry.players[slot];
      if (pick && !seen.has(pick.name)) {
        pickCounts[pick.name] = (pickCounts[pick.name] || 0) + 1;
        earningsMap[pick.name] = pick.earnings;
        seen.add(pick.name);
      }
    });
  });

  const sorted = Object.entries(earningsMap).sort((a, b) => b[1] - a[1]);
  const rank = sorted.findIndex(([name]) => name === playerName) + 1;
  const pickPct = Math.round(((pickCounts[playerName] || 0) / poolData.entries.length) * 100);

  return {
    rank: rank || '?',
    totalPicked: sorted.length,
    pickCount: pickCounts[playerName] || 0,
    pickPct: pickPct
  };
}

// ============================================
// GAP ANALYSIS — What You Need
// ============================================
function renderGapAnalysis(entry) {
  const body = document.getElementById('gap-body');
  const subtitle = document.getElementById('gap-subtitle');
  body.innerHTML = '';

  const leader = poolData.entries[0]; // Already sorted by totalEarnings

  // If this IS the leader
  if (leader.id === entry.id) {
    subtitle.textContent = "You're #1!";
    const secondPlace = poolData.entries[1];
    const lead = entry.totalEarnings - secondPlace.totalEarnings;
    body.innerHTML = `
      <div class="gap-summary">
        <div class="gap-amount leading">+${formatCurrency(lead)}</div>
        <div class="gap-description">
          You're leading <strong>${secondPlace.name}</strong> by ${formatCurrency(lead)}. Keep the pressure on.
        </div>
      </div>
    `;
    renderGapGrid(body, entry, secondPlace, true);
    return;
  }

  const gap = leader.totalEarnings - entry.totalEarnings;
  subtitle.textContent = `${formatCurrency(gap)} behind #1`;

  body.innerHTML = `
    <div class="gap-summary">
      <div class="gap-amount">-${formatCurrency(gap)}</div>
      <div class="gap-description">
        <strong>${leader.name}</strong> leads with ${formatCurrency(leader.totalEarnings)}.
        Here's where their players are outearning yours, and where you're fighting back.
      </div>
    </div>
  `;

  renderGapGrid(body, entry, leader, false);
}

function renderGapGrid(container, myEntry, otherEntry, isLeading) {
  const gridDiv = document.createElement('div');
  gridDiv.className = 'gap-comparison-grid';

  const groupOrder = ['groupA', 'groupB1', 'groupB2', 'groupC1', 'groupC2', 'groupD1', 'groupD2', 'groupE'];

  groupOrder.forEach(group => {
    const mine = myEntry.players[group];
    const theirs = otherEntry.players[group];
    const diff = mine.earnings - theirs.earnings;

    let rowClass, diffClass, diffText;
    if (diff > 0) {
      rowClass = 'winning';
      diffClass = 'positive';
      diffText = `+${formatCurrency(diff)}`;
    } else if (diff < 0) {
      rowClass = 'losing';
      diffClass = 'negative';
      diffText = `-${formatCurrency(Math.abs(diff))}`;
    } else {
      rowClass = 'tied';
      diffClass = 'neutral';
      diffText = 'Even';
    }

    const row = document.createElement('div');
    row.className = `gap-row ${rowClass}`;
    row.innerHTML = `
      <span class="gap-group-label">${getGroupLabel(group).replace('Group ', '')}</span>
      <div class="gap-players">
        <span class="gap-your-pick">${mine.name} (${formatCurrency(mine.earnings)})</span>
        <span class="gap-their-pick">vs. ${theirs.name} (${formatCurrency(theirs.earnings)})</span>
      </div>
      <span class="gap-diff ${diffClass}">${diffText}</span>
    `;

    gridDiv.appendChild(row);
  });

  container.appendChild(gridDiv);
}

// ============================================
// DIFFERENTIATORS — Bold / Unique Picks
// ============================================
function renderDifferentiators(entry) {
  const body = document.getElementById('diff-body');
  body.innerHTML = '';

  const groupOrder = ['groupA', 'groupB1', 'groupB2', 'groupC1', 'groupC2', 'groupD1', 'groupD2', 'groupE'];
  const callouts = [];

  groupOrder.forEach(group => {
    const player = entry.players[group];
    const stats = getFieldStats(group, player.name);

    // "Bold pick" threshold: picked by fewer than 10% of entries
    const threshold = Math.ceil(poolData.entries.length * 0.10);

    if (stats.pickCount <= 3) {
      const word = stats.pickCount === 1 ? "only you" : `${stats.pickCount} entries`;
      callouts.push({
        icon: '💎',
        html: `<strong>${player.name}</strong> (${getGroupLabel(group)}) — ${word} · ${formatCurrency(player.earnings)}`
      });
    } else if (stats.pickCount <= threshold) {
      callouts.push({
        icon: '🎯',
        html: `<strong>${player.name}</strong> (${getGroupLabel(group)}) — ${stats.pickCount} entries (${stats.pickPct}%) · ${formatCurrency(player.earnings)}`
      });
    }
  });

  // Check if they have a popular consensus pick
  groupOrder.forEach(group => {
    const player = entry.players[group];
    const stats = getFieldStats(group, player.name);
    if (stats.pickPct >= 60) {
      callouts.push({
        icon: '📢',
        html: `<strong>${player.name}</strong> (${getGroupLabel(group)}) — ${stats.pickPct}% ownership · ${formatCurrency(player.earnings)}`
      });
    }
  });

  if (callouts.length === 0) {
    body.innerHTML = '<div class="no-diff-message">Your picks are right in the middle of the pack. No extreme outliers here.</div>';
    return;
  }

  callouts.forEach(c => {
    const div = document.createElement('div');
    div.className = 'diff-callout';
    div.innerHTML = `
      <span class="diff-icon">${c.icon}</span>
      <div class="diff-text">${c.html}</div>
    `;
    body.appendChild(div);
  });
}

// ============================================
// SCENARIO SIMULATOR — What If?
// ============================================
function renderScenarioWidget(entry) {
  const playerSelect = document.getElementById('scenario-player-select');
  const results = document.getElementById('scenario-results');

  // Clear existing options (keep placeholder)
  playerSelect.innerHTML = '<option value="">Choose a player...</option>';

  const groupOrder = ['groupA', 'groupB1', 'groupB2', 'groupC1', 'groupC2', 'groupD1', 'groupD2', 'groupE'];
  groupOrder.forEach(group => {
    const player = entry.players[group];
    const opt = document.createElement('option');
    opt.value = group;
    opt.textContent = `${player.name} (${getGroupLabel(group)})`;
    playerSelect.appendChild(opt);
  });

  playerSelect.onchange = () => {
    const group = playerSelect.value;
    if (!group) {
      results.classList.add('hidden');
      return;
    }
    results.classList.remove('hidden');
    simulateScenarios(entry, group, results);
  };

  // Reset on new entry
  results.classList.add('hidden');
  playerSelect.value = '';
}

function simulateScenarios(entry, group, container) {
  container.innerHTML = '';

  const player = entry.players[group];
  const playerName = player.name;

  const scenarios = [
    { label: 'Wins the Masters', newEarnings: 4200000 },
    { label: 'Top 5 Finish', newEarnings: 840000 },
    { label: 'Top 10 Finish', newEarnings: 567000 },
    { label: 'Top 25 Finish', newEarnings: 184800 },
    { label: 'Makes the Cut', newEarnings: 52920 },
    { label: 'Misses the Cut', newEarnings: 0 }
  ];

  scenarios.forEach(scenario => {
    const earningsDelta = scenario.newEarnings - player.earnings;

    // Recalculate the ENTIRE pool: every entry that has this player gets the same delta
    const simTotals = poolData.entries.map(e => {
      let delta = 0;
      Object.values(e.players).forEach(p => {
        if (p.name === playerName) {
          delta += scenario.newEarnings - p.earnings;
        }
      });
      return { id: e.id, total: e.totalEarnings + delta };
    });

    // Sort and find new rank
    simTotals.sort((a, b) => b.total - a.total);
    const mySimTotal = entry.totalEarnings + earningsDelta;
    const newRank = simTotals.findIndex(e => e.id === entry.id) + 1;

    const rankDelta = entry.currentRank - newRank;
    let rankClass, rankText;
    if (rankDelta > 0) {
      rankClass = 'improved';
      rankText = `▲ ${rankDelta} to #${newRank}`;
    } else if (rankDelta < 0) {
      rankClass = 'worsened';
      rankText = `▼ ${Math.abs(rankDelta)} to #${newRank}`;
    } else {
      rankClass = 'unchanged';
      rankText = `Stays #${newRank}`;
    }

    const outcomeDiv = document.createElement('div');
    outcomeDiv.className = 'scenario-outcome';
    outcomeDiv.innerHTML = `
      <div class="scenario-finish">${scenario.label}</div>
      <div class="scenario-new-earnings">${formatCurrency(mySimTotal)}</div>
      <div class="scenario-rank-change ${rankClass}">${rankText}</div>
    `;

    container.appendChild(outcomeDiv);
  });
}

// ============================================
// SWAP SIMULATOR — Hindsight 20/20
// ============================================
function renderSwapSimulator(entry) {
  const fromSelect = document.getElementById('swap-from-select');
  const toSelect = document.getElementById('swap-to-select');
  const results = document.getElementById('swap-results');

  fromSelect.innerHTML = '<option value="">Your player...</option>';
  toSelect.innerHTML = '<option value="">Swap to...</option>';
  toSelect.disabled = true;
  results.classList.add('hidden');

  // Map slots to parent group keys for looking up available players
  const slotToGroup = {
    groupA: 'groupA', groupB1: 'groupB', groupB2: 'groupB',
    groupC1: 'groupC', groupC2: 'groupC', groupD1: 'groupD', groupD2: 'groupD',
    groupE: 'groupE',
  };

  const groupOrder = ['groupA', 'groupB1', 'groupB2', 'groupC1', 'groupC2', 'groupD1', 'groupD2', 'groupE'];
  groupOrder.forEach(slot => {
    const player = entry.players[slot];
    const opt = document.createElement('option');
    opt.value = slot;
    opt.textContent = `${player.name} (${getGroupLabel(slot)})`;
    fromSelect.appendChild(opt);
  });

  // Build earnings lookup from live data across all entries
  function getPlayerEarnings(name) {
    for (const e of poolData.entries) {
      for (const p of Object.values(e.players)) {
        if (p.name === name) return p.earnings;
      }
    }
    return 0;
  }

  fromSelect.onchange = () => {
    const slot = fromSelect.value;
    toSelect.innerHTML = '<option value="">Swap to...</option>';
    results.classList.add('hidden');

    if (!slot) {
      toSelect.disabled = true;
      return;
    }

    const currentPlayer = entry.players[slot].name;
    const parentGroup = slotToGroup[slot];
    const groupPlayers = poolData.groups[parentGroup]?.players || [];

    // Add all players in the group except the current pick
    groupPlayers.filter(p => p !== currentPlayer).forEach(name => {
      const earnings = getPlayerEarnings(name);
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = `${name} (${formatCurrency(earnings)})`;
      toSelect.appendChild(opt);
    });

    toSelect.disabled = false;
  };

  toSelect.onchange = () => {
    const slot = fromSelect.value;
    const swapTo = toSelect.value;
    if (!slot || !swapTo) {
      results.classList.add('hidden');
      return;
    }
    results.classList.remove('hidden');
    computeSwap(entry, slot, swapTo, results);
  };
}

function computeSwap(entry, slot, swapToName, container) {
  const currentPlayer = entry.players[slot];

  // Find swap player's current earnings from any entry that has them
  let swapEarnings = 0;
  for (const e of poolData.entries) {
    for (const p of Object.values(e.players)) {
      if (p.name === swapToName) { swapEarnings = p.earnings; break; }
    }
    if (swapEarnings > 0) break;
  }

  const earningsDelta = swapEarnings - currentPlayer.earnings;
  const newTotal = entry.totalEarnings + earningsDelta;

  // Recalculate full pool standings
  const simTotals = poolData.entries.map(e => ({
    id: e.id,
    total: e.id === entry.id ? newTotal : e.totalEarnings,
  }));
  simTotals.sort((a, b) => b.total - a.total);
  const newRank = simTotals.findIndex(e => e.id === entry.id) + 1;
  const rankDelta = entry.currentRank - newRank;

  let rankClass, rankText;
  if (rankDelta > 0) {
    rankClass = 'improved';
    rankText = `▲ ${rankDelta} to #${newRank}`;
  } else if (rankDelta < 0) {
    rankClass = 'worsened';
    rankText = `▼ ${Math.abs(rankDelta)} to #${newRank}`;
  } else {
    rankClass = 'unchanged';
    rankText = `Stays #${newRank}`;
  }

  const diffSign = earningsDelta >= 0 ? '+' : '-';
  const diffClass = earningsDelta > 0 ? 'positive' : earningsDelta < 0 ? 'negative' : 'neutral';

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin-bottom:var(--space-md);">
      <div style="text-align:center; padding:var(--space-sm); background:rgba(192,57,43,0.06); border-radius:6px;">
        <div style="font-family:var(--font-mono); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-light); margin-bottom:4px;">You picked</div>
        <div style="font-family:var(--font-display); font-size:1rem; font-weight:600;">${currentPlayer.name}</div>
        <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--text-secondary);">${formatCurrency(currentPlayer.earnings)}</div>
      </div>
      <div style="text-align:center; padding:var(--space-sm); background:rgba(39,174,96,0.06); border-radius:6px;">
        <div style="font-family:var(--font-mono); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-light); margin-bottom:4px;">If you picked</div>
        <div style="font-family:var(--font-display); font-size:1rem; font-weight:600;">${swapToName}</div>
        <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--text-secondary);">${formatCurrency(swapEarnings)}</div>
      </div>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; padding:var(--space-sm) var(--space-md); background:var(--cream); border-radius:6px;">
      <div>
        <div style="font-family:var(--font-mono); font-size:0.85rem; font-weight:700;">${formatCurrency(newTotal)}</div>
        <div style="font-family:var(--font-body); font-size:0.8rem; color:var(--text-light);">New total (<span class="${diffClass}" style="font-weight:600;">${diffSign}${formatCurrency(Math.abs(earningsDelta))}</span>)</div>
      </div>
      <div class="scenario-rank-change ${rankClass}" style="font-size:0.9rem;">${rankText}</div>
    </div>
  `;
}

// ============================================
// HELPERS
// ============================================
function getOrdinalSuffix(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
