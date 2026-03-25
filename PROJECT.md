# Masters Charity Pool 2026 — Project Reference

> Last updated: 2026-03-25. This file is the canonical reference for humans and AI working on this project.

## Overview

A charity golf pool for the 2026 Masters Tournament (April 9-12). Participants pay $30 to enter, pick 8 golfers across 5 tiers, and compete for prizes based on their players' combined tournament earnings. $5 from every entry goes to the **Ride to Conquer Cancer**.

**Co-organizers:** James Webster and Nathan Snowie

---

## Infrastructure

| Component | Detail |
|-----------|--------|
| **Repo** | [github.com/web-crypto/Masters-2026](https://github.com/web-crypto/Masters-2026) |
| **Hosting** | Vercel — auto-deploys on push to `main` |
| **Local path** | `~/.openclaw/workspace/projects/masters-pool-2026/` |
| **Stack** | Pure HTML/CSS/JS. No frameworks, no build step. |
| **Fonts** | Playfair Display (headings), Cormorant Garamond (body), IBM Plex Mono (data) |
| **Colors** | Masters green `#1a4731`, cream `#f5f0e8`, gold `#c9a84c` |
| **Google Form** | [Entry form](https://forms.gle/KRdUFj51c4FjHCxE7) — responses go to Sheet |
| **Google Sheet** | ID: `1ZF0JTZLClfA2O4Y3kaAXmZ-ua4NCLoZJJR9FLqtMj18` |
| **Firebase** | Project `masters-mini-golf`, DB: `https://masters-mini-golf-default-rtdb.firebaseio.com` |

---

## Site Pages

| Page | File | Description |
|------|------|-------------|
| Leaderboard | `index.html` | Augusta-style top-10 scoreboard with flip-tile animations |
| Enter | `enter.html` | Entry CTA, rules, group breakdown, FAQ, Google Form embed |
| Standings | `standings.html` | Full standings table with search/sort and expandable player details |
| Players | `players.html` | Golfer grid with earnings, group filters, ownership data |
| Analytics | `analytics.html` | Bold Picks, Fading the Field, risk analysis, combo stats |
| My Team | `myteam.html` | Personal entry dashboard: rank card, gap analysis, scenario sim |
| Predictions | `predictions.html` | Round-by-round low score predictions (bragging rights) |
| Highlights | `highlights.html` | Embedded YouTube Masters classics |
| Mini Golf | `game.html` | Playable 9-hole mini golf with Firebase daily leaderboard |

---

## Data Architecture

### `data/pool-data.js`
The single source of truth for the site. Contains:
- `totalEntries`, `prizePool`, `totalCharityRaised` — updated by cron
- `playerGroups` — the 5 tier definitions with player lists
- `entries[]` — populated after form closes (April 8); each entry has 8 player picks
- Helper functions: `formatCurrency()`, `getRankChange()`, `getTimeSinceUpdate()`, `getAllPlayers()`, `getGroupLabel()`

### Live Scores (tournament week)
- `scripts/fetch_scores.py` — hits ESPN hidden API (`event=401811941`), fuzzy-matches names, calculates prize money
- Outputs: `data/live-scores.json`, `data/pool-standings.json`
- Not yet scheduled as cron — set up before April 9 (every 15 min during rounds)

---

## Pool Structure (LOCKED)

**Entry fee:** $30 | **Charity:** $5/entry to Ride to Conquer Cancer | **Picks:** 8 per entry

| Group | Picks | Count | Range |
|-------|-------|-------|-------|
| A | 1 | 3 | Scheffler, McIlroy, DeChambeau |
| B | 2 | 7 | Rahm through Fitzpatrick (+1200–+2375) |
| C | 2 | 9 | Rose through Gotterup (+2500–+4000) |
| D | 2 | 21 | Lowry through Harman (+4500–+15000) |
| E | 1 | 15+ | Past champs + longshots (Tiger, Phil, etc.) + "Other" write-in |

**Payouts:** 1st $1,000 · 2nd $500 · 3rd $300 · 4th $200 · 5th $125 · Last $100
*(Payouts noted as TBC — scale with entry count)*

---

## Automation & Cron

### Pool Stats (`scripts/masters_pool_stats.py`)
- **Schedule:** Every 30 min
- **Action:** Reads entry count from Google Sheet → calculates prize pool + charity raised → patches `pool-data.js` → commits + pushes → Vercel auto-deploys
- **Log:** `data/masters-pool-stats.log`

### Payment Monitor (`scripts/masters_payment_check.py`)
- **Schedule:** Hourly
- **Action:** Scans Gmail for Interac e-transfer deposits, matches to pool entries, updates Payments tab in spreadsheet
- **State file:** `data/masters-payments-state.json`
- **Log:** `data/masters-payment-monitor.log`

### Live Score Fetcher (`scripts/fetch_scores.py`) — NOT YET SCHEDULED
- **When:** Tournament week only (April 9-12), every 15 min during rounds
- **Action:** ESPN API → score parsing → pool standings update → commit + push

---

## File Structure

```
masters-pool-2026/
├── index.html              # Leaderboard (Top 10)
├── enter.html              # Entry page + form
├── standings.html          # Full standings
├── players.html            # Player grid
├── analytics.html          # Pool analytics
├── myteam.html             # Personal dashboard
├── predictions.html        # Round predictions
├── highlights.html         # YouTube highlights
├── game.html               # Mini golf game
├── data/
│   └── pool-data.js        # All pool data + helpers (cron-updated)
├── js/
│   ├── leaderboard.js      # Scoreboard + standings logic
│   ├── analytics.js        # Charts + stats
│   ├── myteam.js           # Personal dashboard engine
│   └── game.js             # Mini golf game engine
├── styles/
│   ├── main.css            # Global styles + layout
│   ├── leaderboard.css     # Scoreboard + standings table
│   ├── myteam.css          # My Team dashboard
│   └── game.css            # Mini golf UI
├── audio/
│   ├── augusta-theme.mp3   # Georgia on My Mind
│   └── track2.mp3          # Augusta theme
├── scripts/
│   ├── fetch_scores.py     # ESPN live score fetcher
│   ├── apps-script-welcome-email.js
│   └── create-payments-tab.gs
├── vercel.json             # Deployment config (clean URLs, security headers, caching)
├── README.md               # Public readme
└── PROJECT.md              # This file
```

---

## External Scripts (in workspace `scripts/`)

These live outside the repo in `~/.openclaw/workspace/scripts/`:
- `masters_pool_stats.py` — the hourly pool stats updater (described above)
- `masters_payment_check.py` — payment monitor
- `masters-payment-monitor.sh` — payment monitor wrapper

---

## Discord

| Item | Value |
|------|-------|
| Channel | #masters-pool-2026 (`1486086665419227218`) |
| Category | Masters Pool 2026 (`1486155812627026070`) |

**Role:** "Snowie" — needs manual creation by James + category permissions. Nathan Snowie (nathansnowie@gmail.com) is co-organizer.

---

## Email Updates (Tournament Week)

Style from 2023-2024 archives:
- **Format:** Hook → top-10 leaderboard → key player callouts with ownership % → MFF → wrap-up/PS
- **MFF** = Masters Fun Fact (genuinely obscure, not Wikipedia top-line)
- 🐯 = Tiger emoji shorthand
- Ownership % drives the narrative
- Sign-off: "James and Nathan"

---

## Key Dates

| Date | Event |
|------|-------|
| Now – April 8 | Entries open, form collecting responses |
| April 8 | Entries close. Finalize pool-data.js entries array. |
| April 9 | Masters Round 1 begins (8:00 AM EDT). Start live score cron. |
| April 9-12 | Tournament week. Live updates, email recaps. |
| April 12 | Final round. Declare winner. |

---

## Pending Tasks

- [ ] Schedule live score cron before April 9 (every 15 min during rounds)
- [ ] Populate `entries[]` in pool-data.js from form responses after close
- [ ] James to finalize Google Form player lists
- [ ] Create "Snowie" Discord role + set category permissions
- [ ] Scale payout structure based on final entry count
