export default async function handler(req, res) {
  const base = 'https://raw.githubusercontent.com/web-crypto/Masters-2026/main/data';

  try {
    const [standingsRes, poolDataRes, liveScoresRes] = await Promise.all([
      fetch(`${base}/pool-standings.json`, { cache: 'no-store' }),
      fetch(`${base}/pool-data.js`, { cache: 'no-store' }),
      fetch(`${base}/live-scores.json`, { cache: 'no-store' }),
    ]);

    if (!standingsRes.ok || !poolDataRes.ok || !liveScoresRes.ok) {
      return res.status(502).json({
        ok: false,
        error: 'upstream_fetch_failed',
        statuses: {
          standings: standingsRes.status,
          poolData: poolDataRes.status,
          liveScores: liveScoresRes.status,
        },
      });
    }

    const [standings, poolDataJs, liveScores] = await Promise.all([
      standingsRes.json(),
      poolDataRes.text(),
      liveScoresRes.json(),
    ]);

    const match = poolDataJs.match(/const\s+poolData\s*=\s*(\{[\s\S]*\});\s*$/);
    if (!match) {
      return res.status(500).json({ ok: false, error: 'pool_data_parse_failed' });
    }

    const poolData = Function(`return (${match[1]})`)();

    const rankMap = new Map((standings.entries || []).map(entry => [entry.id, entry]));
    poolData.entries = (poolData.entries || []).map(entry => {
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

    res.setHeader('Cache-Control', 'no-store, max-age=0');
    return res.status(200).json({
      ok: true,
      fetchedAt: new Date().toISOString(),
      liveScoresUpdatedAt: liveScores.lastUpdated || null,
      poolData,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message || 'unknown_error' });
  }
}
