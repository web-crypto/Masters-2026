# Masters Charity Pool 2026 ⛳

A premium static website for a Masters Tournament charity pool. 89 entries, $30 each, with $5 per entry going to the **Ride to Conquer Cancer**.

## Live Pages

| Page | Description |
|------|-------------|
| `index.html` | Augusta-style leaderboard (Top 10 with animated score reveals) |
| `standings.html` | Full 89-entry standings with search, sort, and expandable player details |
| `players.html` | Player grid with earnings, group filters, and ownership data |
| `analytics.html` | Pool stats: popular picks, earnings distribution, risk analysis, fun facts |
| `myteam.html` | Personal dashboard: rank card, earnings breakdown, gap analysis, scenario simulator |
| `game.html` | Playable 9-hole mini golf game with daily localStorage leaderboard |

## Design

Augusta National meets luxury sports editorial:
- **Colors**: Masters green (#1a4731), cream (#f5f0e8), gold (#c9a84c)
- **Typography**: Playfair Display (headings), Cormorant Garamond (body), IBM Plex Mono (numbers)
- **Leaderboard**: Styled after Augusta's iconic yellow scoreboard with 3D rank plates
- **Animations**: Staggered reveals, counter animations, bar chart transitions

## Stack

Pure HTML/CSS/JS. No frameworks, no build step. Google Fonts via CDN.

## Data

All pool data lives in `data/pool-data.js`. To update standings:
1. Edit the `entries` array with new earnings
2. The file auto-recalculates totals and ranks on load

## Deployment

Static hosting (Vercel, Netlify, GitHub Pages). `vercel.json` included with clean URLs and caching headers.

```bash
# Vercel
vercel deploy

# Or any static host — just serve the root directory
npx serve .
```

## File Structure

```
masters-pool-2026/
├── index.html          # Leaderboard (Top 10)
├── standings.html      # Full standings
├── players.html        # Player grid
├── analytics.html      # Pool analytics
├── myteam.html         # Personal dashboard
├── game.html           # Mini golf game
├── styles/
│   ├── main.css        # Global styles + layout
│   ├── leaderboard.css # Scoreboard + standings table
│   ├── myteam.css      # My Team dashboard
│   └── game.css        # Mini golf UI
├── js/
│   ├── leaderboard.js  # Scoreboard + standings logic
│   ├── analytics.js    # Charts + stats
│   ├── myteam.js       # Personal dashboard engine
│   └── game.js         # Mini golf game engine
├── data/
│   └── pool-data.js    # Pool entries + helper functions
├── vercel.json         # Deployment config
└── README.md
```

## Pool Rules

- 8 picks per entry (Group A + B1-B3 + C1-C3 + D)
- Standings = sum of all 8 players' Masters prize earnings
- Prizes: 1st ($1,000), 2nd ($500), 3rd ($300), 4th ($200), 5th ($125), Last ($100)
- $5/entry to Ride to Conquer Cancer ($445 total)
