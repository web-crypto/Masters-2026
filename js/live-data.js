async function loadLivePoolData() {
  const fallback = window.poolData;
  try {
    const bust = Date.now();
    const [poolRes, standingsRes] = await Promise.all([
      fetch(`data/pool-data.js?v=${bust}`, { cache: 'no-store' }),
      fetch(`data/pool-standings.json?v=${bust}`, { cache: 'no-store' })
    ]);

    if (!poolRes.ok || !standingsRes.ok) {
      throw new Error(`fetch failed: pool=${poolRes.status} standings=${standingsRes.status}`);
    }

    const poolJs = await poolRes.text();
    const standings = await standingsRes.json();

    const sandbox = {};
    const evaluator = new Function('sandbox', `${poolJs}; sandbox.poolData = poolData;`);
    evaluator(sandbox);

    const livePoolData = sandbox.poolData;
    if (!livePoolData || !Array.isArray(livePoolData.entries)) {
      throw new Error('invalid poolData payload');
    }

    if (Array.isArray(standings.entries) && standings.entries.length) {
      const rankMap = new Map(standings.entries.map(entry => [entry.id, entry]));
      livePoolData.entries = livePoolData.entries.map(entry => {
        const latest = rankMap.get(entry.id);
        if (!latest) return entry;
        return {
          ...entry,
          totalEarnings: latest.totalEarnings,
          currentRank: latest.currentRank,
          previousRank: latest.previousRank,
          players: latest.players || entry.players,
        };
      }).sort((a, b) => {
        if ((a.currentRank ?? 999) !== (b.currentRank ?? 999)) {
          return (a.currentRank ?? 999) - (b.currentRank ?? 999);
        }
        return (b.totalEarnings || 0) - (a.totalEarnings || 0);
      });
    }

    window.poolData = livePoolData;
    return livePoolData;
  } catch (err) {
    console.warn('Live data fetch failed, using fallback poolData.', err);
    return fallback;
  }
}
