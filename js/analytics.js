// ============================================
// ANALYTICS — Pool Stats & Visualizations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const entries = poolData.entries;
  const allPlayers = getAllPlayers();

  // --- Summary Stats ---
  const uniquePlayers = new Set();
  entries.forEach(e => {
    Object.values(e.players).forEach(p => uniquePlayers.add(p.name));
  });

  const avgEarnings = entries.reduce((s, e) => s + e.totalEarnings, 0) / entries.length;
  const sortedByEarnings = [...entries].sort((a, b) => b.totalEarnings - a.totalEarnings);
  const spread = sortedByEarnings[0].totalEarnings - sortedByEarnings[sortedByEarnings.length - 1].totalEarnings;
  const zeroPlayers = allPlayers.filter(p => p.earnings === 0).length;

  document.getElementById('stat-unique-players').textContent = uniquePlayers.size;
  document.getElementById('stat-avg-earnings').textContent = formatCurrency(Math.round(avgEarnings));
  document.getElementById('stat-top-spread').textContent = formatCurrency(spread);
  document.getElementById('stat-zero-players').textContent = zeroPlayers;

  // --- Most Popular Picks by Group ---
  renderPopularPicks();

  // --- Earnings Distribution ---
  renderDistribution();

  // --- Risk Analysis ---
  renderRiskAnalysis();

  // --- Fun Facts ---
  renderFunFacts();

  // --- Combo Stats ---
  renderComboStats();
});

function renderPopularPicks() {
  const container = document.getElementById('popular-picks');
  if (!container) return;

  const groups = ['groupA', 'groupB1', 'groupB2', 'groupB3', 'groupC1', 'groupC2', 'groupC3', 'groupD'];

  groups.forEach(group => {
    const pickCounts = {};
    poolData.entries.forEach(entry => {
      const player = entry.players[group];
      if (player) {
        pickCounts[player.name] = (pickCounts[player.name] || 0) + 1;
      }
    });

    const sorted = Object.entries(pickCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);

    const maxCount = sorted[0] ? sorted[0][1] : 1;

    const groupDiv = document.createElement('div');
    groupDiv.className = 'pick-bar-group';
    groupDiv.innerHTML = `
      <div class="pick-bar-group-label">${getGroupLabel(group)}</div>
      ${sorted.map(([name, count]) => {
        const pct = (count / maxCount) * 100;
        return `
          <div class="pick-bar-item">
            <span class="pick-bar-name">${name}</span>
            <div class="pick-bar-track">
              <div class="pick-bar-fill" style="width: 0%" data-width="${pct}">
                ${pct > 25 ? `<span class="pick-bar-count">${count}</span>` : ''}
              </div>
            </div>
            ${pct <= 25 ? `<span class="pick-bar-count-outside">${count}</span>` : ''}
          </div>
        `;
      }).join('')}
    `;

    container.appendChild(groupDiv);

    // Animate bars after a delay
    setTimeout(() => {
      groupDiv.querySelectorAll('.pick-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }, 300);
  });
}

function renderDistribution() {
  const chart = document.getElementById('dist-chart');
  if (!chart) return;

  const earnings = poolData.entries.map(e => e.totalEarnings);
  const min = Math.min(...earnings);
  const max = Math.max(...earnings);

  document.getElementById('dist-min').textContent = formatCurrency(min);
  document.getElementById('dist-max').textContent = formatCurrency(max);

  // Create 15 buckets
  const buckets = 15;
  const range = max - min || 1;
  const bucketSize = range / buckets;
  const counts = new Array(buckets).fill(0);

  earnings.forEach(e => {
    const idx = Math.min(Math.floor((e - min) / bucketSize), buckets - 1);
    counts[idx]++;
  });

  const maxCount = Math.max(...counts);

  counts.forEach((count, i) => {
    const bar = document.createElement('div');
    bar.className = 'dist-bar';
    const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
    bar.style.height = '0%';

    const bucketMin = min + (i * bucketSize);
    const bucketMax = min + ((i + 1) * bucketSize);
    bar.innerHTML = `
      <div class="dist-tooltip">
        ${formatCurrency(Math.round(bucketMin))} - ${formatCurrency(Math.round(bucketMax))}<br>
        ${count} ${count === 1 ? 'entry' : 'entries'}
      </div>
    `;

    chart.appendChild(bar);

    // Animate
    setTimeout(() => {
      bar.style.height = height + '%';
    }, 500 + (i * 60));
  });
}

function renderRiskAnalysis() {
  const container = document.getElementById('risk-analysis');
  if (!container) return;

  // Calculate "risk" as variance in player earnings per entry
  const entriesWithVariance = poolData.entries.map(entry => {
    const playerEarnings = Object.values(entry.players).map(p => p.earnings);
    const mean = playerEarnings.reduce((s, e) => s + e, 0) / playerEarnings.length;
    const variance = playerEarnings.reduce((s, e) => s + Math.pow(e - mean, 2), 0) / playerEarnings.length;
    const zeroCount = playerEarnings.filter(e => e === 0).length;
    return { ...entry, variance, zeroCount };
  });

  // Sort by variance
  const sorted = [...entriesWithVariance].sort((a, b) => a.variance - b.variance);

  // Safest (lowest variance) — top 3
  const safest = sorted.slice(0, 3);
  // Riskiest (highest variance) — top 3
  const riskiest = sorted.slice(-3).reverse();

  let html = '<div style="margin-bottom: var(--space-md)">';
  html += '<div class="pick-bar-group-label" style="margin-bottom: var(--space-sm)">Safest Entries (most balanced)</div>';
  safest.forEach(entry => {
    html += `
      <div class="risk-entry">
        <div>
          <div class="risk-name">${entry.name}</div>
          <div class="risk-detail">${entry.zeroCount} players at $0</div>
        </div>
        <span class="risk-badge safe">SAFE</span>
      </div>
    `;
  });
  html += '</div>';

  html += '<div>';
  html += '<div class="pick-bar-group-label" style="margin-bottom: var(--space-sm)">Riskiest Entries (boom or bust)</div>';
  riskiest.forEach(entry => {
    html += `
      <div class="risk-entry">
        <div>
          <div class="risk-name">${entry.name}</div>
          <div class="risk-detail">${entry.zeroCount} players at $0</div>
        </div>
        <span class="risk-badge risky">RISKY</span>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}

function renderFunFacts() {
  const container = document.getElementById('fun-facts');
  if (!container) return;

  const entries = poolData.entries;
  const totalEntries = entries.length;

  // --- Build player ownership + earnings map per group slot ---
  // group slot → { playerName → { count, earnings } }
  const groupSlots = {};
  entries.forEach(entry => {
    Object.entries(entry.players).forEach(([group, player]) => {
      if (!groupSlots[group]) groupSlots[group] = {};
      if (!groupSlots[group][player.name]) {
        groupSlots[group][player.name] = { count: 0, earnings: player.earnings };
      }
      groupSlots[group][player.name].count++;
      // Keep earnings in sync (same player always has same earnings)
      groupSlots[group][player.name].earnings = player.earnings;
    });
  });

  // --- Compute group median earnings per slot ---
  function groupMedian(slot) {
    const earningsArr = Object.values(slot).map(p => p.earnings).sort((a, b) => a - b);
    if (!earningsArr.length) return 0;
    const mid = Math.floor(earningsArr.length / 2);
    return earningsArr.length % 2 !== 0
      ? earningsArr[mid]
      : (earningsArr[mid - 1] + earningsArr[mid]) / 2;
  }

  // Check if tournament has started (any earnings > 0)
  const tournamentStarted = entries.some(e =>
    Object.values(e.players).some(p => p.earnings > 0)
  );

  // --- Bold Picks: low ownership (≤20%) AND above group median ---
  const boldPicks = [];
  const fadingField = [];

  Object.entries(groupSlots).forEach(([group, players]) => {
    const median = groupMedian(players);
    Object.entries(players).forEach(([name, { count, earnings }]) => {
      const ownershipPct = count / totalEntries;
      if (ownershipPct <= 0.20 && earnings > median && earnings > 0) {
        const label = earnings > median * 1.5
          ? 'Exclusivity paying off 🔥'
          : 'Flying under the radar 👀';
        boldPicks.push({ name, ownershipPct, earnings, label, group });
      }
      // Fading the field: high ownership (>40%) and below group median
      if (ownershipPct > 0.40 && earnings < median) {
        fadingField.push({ name, ownershipPct, earnings, group });
      }
    });
  });

  boldPicks.sort((a, b) => b.earnings - a.earnings);
  fadingField.sort((a, b) => b.ownershipPct - a.ownershipPct);

  // --- Render ---
  if (!tournamentStarted) {
    container.innerHTML = `
      <div class="fun-fact" style="grid-column:1/-1; text-align:center; opacity:0.6;">
        <div class="fun-fact-label">Bold Picks</div>
        <div class="fun-fact-value" style="font-size:1rem;">Tournament hasn't started yet</div>
        <div class="fun-fact-detail">Low-owned players outperforming the field will surface here during tournament week.</div>
      </div>`;
    return;
  }

  let html = '';

  if (boldPicks.length === 0) {
    html += `<div class="fun-fact" style="grid-column:1/-1">
      <div class="fun-fact-label">Bold Picks</div>
      <div class="fun-fact-value" style="font-size:1rem;">None yet</div>
      <div class="fun-fact-detail">No low-owned players are currently outperforming the field.</div>
    </div>`;
  } else {
    boldPicks.slice(0, 5).forEach(pick => {
      const pct = Math.round(pick.ownershipPct * 100);
      html += `
        <div class="fun-fact bold-pick">
          <div class="fun-fact-label">${pick.label}</div>
          <div class="fun-fact-value">${pick.name}</div>
          <div class="fun-fact-detail">
            Only ${pct}% ownership · ${formatCurrency(pick.earnings)} earned
          </div>
        </div>`;
    });
  }

  if (fadingField.length > 0) {
    fadingField.slice(0, 3).forEach(pick => {
      const pct = Math.round(pick.ownershipPct * 100);
      html += `
        <div class="fun-fact fading-pick">
          <div class="fun-fact-label">Popular pick not delivering</div>
          <div class="fun-fact-value">${pick.name}</div>
          <div class="fun-fact-detail">
            ${pct}% of entries · Only ${formatCurrency(pick.earnings)} so far
          </div>
        </div>`;
    });
  }

  container.innerHTML = html;
}

function renderComboStats() {
  const container = document.getElementById('combo-stats');
  if (!container) return;

  const entries = poolData.entries;

  // Count unique Group A + Group D combos
  const combos = new Set();
  entries.forEach(e => {
    combos.add(`${e.players.groupA.name}|${e.players.groupD.name}`);
  });

  // Entries with all players earning money
  const allEarning = entries.filter(e => {
    return Object.values(e.players).every(p => p.earnings > 0);
  });

  // Entries where Group D outperforms Group A
  const dBeatsA = entries.filter(e => {
    return e.players.groupD.earnings > e.players.groupA.earnings;
  });

  // Total pool earnings
  const totalPoolEarnings = entries.reduce((s, e) => s + e.totalEarnings, 0);

  const stats = [
    { icon: '🎯', title: 'Unique A+D Combos', desc: 'Different elite + longshot pairings', value: combos.size },
    { icon: '💰', title: 'All Players Earning', desc: 'Entries with zero $0 golfers', value: allEarning.length },
    { icon: '🐎', title: 'Dark Horse Wins', desc: 'Group D outearned Group A', value: dBeatsA.length },
    { icon: '🏦', title: 'Total Pool Earnings', desc: 'Combined across all entries', value: formatCurrency(totalPoolEarnings) }
  ];

  container.innerHTML = stats.map(s => `
    <div class="combo-stat">
      <div class="combo-icon">${s.icon}</div>
      <div class="combo-info">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
      <span class="combo-value">${s.value}</span>
    </div>
  `).join('');
}
