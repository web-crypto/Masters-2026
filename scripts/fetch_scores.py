#!/usr/bin/env python3
"""
fetch_scores.py — Masters 2026 Pool Live Score Fetcher
Fetches ESPN leaderboard data and updates pool standings.

Usage:
    python3 scripts/fetch_scores.py            # fetch + write output files
    python3 scripts/fetch_scores.py --dry-run  # fetch + print, no writes
    python3 scripts/fetch_scores.py --verbose  # extra debug output
    python3 scripts/fetch_scores.py --final    # treat as complete tournament
"""

import argparse
import json
import os
import sys
import time
import unicodedata
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

ESPN_URL = "http://site.api.espn.com/apis/site/v2/sports/golf/pga/scoreboard?event=401811941"
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
POOL_DATA_JS = PROJECT_DIR / "data" / "pool-data.js"
LIVE_SCORES_JSON = PROJECT_DIR / "data" / "live-scores.json"
POOL_STANDINGS_JSON = PROJECT_DIR / "data" / "pool-standings.json"

RETRY_DELAYS = [2, 4, 8]

# ---------------------------------------------------------------------------
# Masters 2026 Prize Purse (based on 2025 $20M purse)
# ---------------------------------------------------------------------------

PRIZE_MAP = {
    1:  3_600_000,
    2:  2_160_000,
    3:  1_360_000,
    4:    960_000,
    5:    800_000,
    6:    720_000,
    7:    670_000,
    8:    620_000,
    9:    580_000,
    10:   540_000,
    11:   500_000,
    12:   465_000,
    13:   430_000,
    14:   400_000,
    15:   370_000,
    16:   345_000,
    17:   320_000,
    18:   295_000,
    19:   275_000,
    20:   255_000,
}

def get_prize_for_position(pos: int) -> int:
    if pos in PRIZE_MAP:
        return PRIZE_MAP[pos]
    if 21 <= pos <= 25:
        return 225_000
    if 26 <= pos <= 30:
        return 185_000
    if 31 <= pos <= 35:
        return 160_000
    if 36 <= pos <= 40:
        return 140_000
    if 41 <= pos <= 45:
        return 120_000
    if 46 <= pos <= 50:
        return 105_000
    if 51 <= pos <= 55:
        return 90_000
    if 56 <= pos <= 65:
        return 79_000
    return 57_500


def calculate_tied_prize(positions: list[int]) -> int:
    """Average prize money for a group of tied positions."""
    if not positions:
        return 0
    total = sum(get_prize_for_position(p) for p in positions)
    return round(total / len(positions))


# ---------------------------------------------------------------------------
# Name normalization for fuzzy matching
# ---------------------------------------------------------------------------

def normalize_name(name: str) -> str:
    """Normalize to ASCII lowercase for fuzzy matching."""
    nfkd = unicodedata.normalize("NFKD", name)
    ascii_str = "".join(c for c in nfkd if not unicodedata.combining(c))
    return ascii_str.lower().strip()


# ---------------------------------------------------------------------------
# ESPN fetch
# ---------------------------------------------------------------------------

def fetch_espn(verbose: bool = False) -> dict:
    last_error = None
    delays = RETRY_DELAYS + [None]
    for attempt, delay in enumerate(delays, 1):
        try:
            if verbose:
                print(f"  [fetch] Attempt {attempt}: GET {ESPN_URL}")
            req = urllib.request.Request(
                ESPN_URL,
                headers={"User-Agent": "Mozilla/5.0 (compatible; MastersPool/1.0)"}
            )
            with urllib.request.urlopen(req, timeout=15) as resp:
                raw = resp.read().decode("utf-8")
                data = json.loads(raw)
                if "events" not in data or not data["events"]:
                    raise ValueError("ESPN response missing events")
                return data
        except (urllib.error.URLError, urllib.error.HTTPError, ValueError, json.JSONDecodeError) as e:
            last_error = e
            ts = datetime.now(timezone.utc).strftime("%H:%M:%S")
            print(f"[{ts}] Fetch attempt {attempt} failed: {e}", file=sys.stderr)
            if delay is not None:
                time.sleep(delay)

    print(f"ERROR: All fetch attempts failed. Last error: {last_error}", file=sys.stderr)
    sys.exit(1)


# ---------------------------------------------------------------------------
# Parse ESPN response
# ---------------------------------------------------------------------------

def parse_score_to_int(score_str: str) -> int | None:
    """Convert 'E', '-5', '+3' to integer."""
    if not score_str or score_str in ("E", ""):
        return 0
    try:
        return int(score_str.replace("+", ""))
    except ValueError:
        return None


def parse_espn_data(data: dict, force_final: bool = False, verbose: bool = False) -> dict:
    event = data["events"][0]
    competition = event["competitions"][0]
    status = competition["status"]
    competitors = competition["competitors"]

    # Determine tournament status
    status_name = status["type"]["name"]  # STATUS_SCHEDULED, STATUS_IN_PROGRESS, STATUS_FINAL
    status_state = status["type"]["state"]  # pre, in, post

    if force_final or status_state == "post":
        tourney_status = "complete"
    elif status_state == "in":
        tourney_status = "in_progress"
    else:
        tourney_status = "pre"

    if verbose:
        print(f"  [parse] Tournament status: {tourney_status} ({status_name})")
        print(f"  [parse] Competitors: {len(competitors)}")

    # Parse each player
    players_raw = []
    for c in competitors:
        name = c["athlete"]["fullName"]
        espn_id = c["id"]
        score_str = c.get("score", "E")
        to_par = parse_score_to_int(score_str)

        # Round scores from linescores
        linescores = c.get("linescores", [])
        rounds = []
        for ls in linescores:
            val = ls.get("value")
            if val is not None:
                rounds.append(int(val))
            else:
                rounds.append(None)
        # Pad to 4 rounds
        while len(rounds) < 4:
            rounds.append(None)
        rounds = rounds[:4]

        # Determine player status
        player_status = "active"
        status_detail = c.get("status", {})
        if isinstance(status_detail, dict):
            display = status_detail.get("displayValue", "").upper()
            if "WD" in display or "WITHDRAW" in display:
                player_status = "wd"
            elif "DQ" in display:
                player_status = "dq"
            elif "CUT" in display or "MC" in display:
                player_status = "cut"

        # Current round and holes completed
        current_round = len([r for r in rounds if r is not None])
        thru = 0
        # If in-progress, check status detail for "thru X"
        if isinstance(status_detail, dict):
            sd = status_detail.get("displayValue", "")
            if "thru" in sd.lower():
                try:
                    thru = int(sd.lower().replace("thru", "").strip().split()[0])
                except (ValueError, IndexError):
                    thru = 0
            elif sd == "F" or sd == "F*":
                thru = 18
        if thru == 0 and current_round > 0:
            thru = 18  # completed rounds

        position = c.get("order", 999)

        players_raw.append({
            "espnId": espn_id,
            "name": name,
            "nameLower": normalize_name(name),
            "position": position,
            "toPar": to_par if to_par is not None else 0,
            "toParDisplay": score_str if score_str else "E",
            "rounds": rounds,
            "status": player_status,
            "thru": thru,
            "currentRound": current_round,
        })

    # Determine current round of tournament
    completed_rounds = [len([r for r in p["rounds"] if r is not None]) for p in players_raw]
    if completed_rounds:
        max_round = max(completed_rounds)
        current_tourney_round = max(1, max_round) if max_round > 0 else 1
    else:
        current_tourney_round = 1

    # Calculate prize earnings with tie handling
    # Group active players by position
    active_players = [p for p in players_raw if p["status"] == "active"]
    pos_groups: dict[int, list] = {}
    for p in active_players:
        pos = p["position"]
        pos_groups.setdefault(pos, []).append(p)

    # Assign earnings
    for pos, group in pos_groups.items():
        tied_positions = list(range(pos, pos + len(group)))
        prize = calculate_tied_prize(tied_positions)
        for p in group:
            p["projectedEarnings"] = prize

    # Cut/WD players get $0
    for p in players_raw:
        if p["status"] in ("cut", "wd", "dq"):
            p["projectedEarnings"] = 0
        elif "projectedEarnings" not in p:
            p["projectedEarnings"] = 0

    # Remove internal field
    for p in players_raw:
        p.pop("nameLower", None)
        p.pop("currentRound", None)

    return {
        "fetchedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "tournamentStatus": tourney_status,
        "currentRound": current_tourney_round,
        "players": players_raw,
        "_nameLookup": {normalize_name(p["name"]): p for p in players_raw},
    }


# ---------------------------------------------------------------------------
# Pool data parser (reads pool-data.js)
# ---------------------------------------------------------------------------

def parse_pool_data(verbose: bool = False) -> list[dict]:
    """
    Extract entries from pool-data.js by parsing the JS as text.
    Returns list of entry dicts with id, name, owner, players.
    """
    if not POOL_DATA_JS.exists():
        print(f"WARNING: {POOL_DATA_JS} not found, cannot compute pool standings.", file=sys.stderr)
        return []

    js_text = POOL_DATA_JS.read_text(encoding="utf-8")

    # Extract the JSON-like entries array using a simple state machine
    # Find "entries: [" and extract until matching "]"
    entries_start = js_text.find('"entries"')
    if entries_start == -1:
        entries_start = js_text.find("entries:")
    if entries_start == -1:
        print("WARNING: Could not find entries in pool-data.js", file=sys.stderr)
        return []

    bracket_start = js_text.find("[", entries_start)
    if bracket_start == -1:
        return []

    depth = 0
    i = bracket_start
    for i, ch in enumerate(js_text[bracket_start:], bracket_start):
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                break

    entries_str = js_text[bracket_start:i+1]

    # Convert JS object to JSON: remove trailing commas, handle unquoted keys
    import re
    # Quote unquoted object keys
    entries_str = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)', r'\1"\2"\3', entries_str)
    # Remove trailing commas before } or ]
    entries_str = re.sub(r',\s*([}\]])', r'\1', entries_str)
    # Remove JS comments
    entries_str = re.sub(r'//[^\n]*', '', entries_str)

    try:
        entries = json.loads(entries_str)
    except json.JSONDecodeError as e:
        print(f"WARNING: Could not parse entries from pool-data.js: {e}", file=sys.stderr)
        return []

    if verbose:
        print(f"  [pool] Loaded {len(entries)} entries from pool-data.js")

    return entries


# ---------------------------------------------------------------------------
# Build pool standings
# ---------------------------------------------------------------------------

def build_standings(live_data: dict, entries: list[dict], verbose: bool = False) -> list[dict]:
    name_lookup = live_data["_nameLookup"]

    def find_player(name: str) -> dict | None:
        norm = normalize_name(name)
        if norm in name_lookup:
            return name_lookup[norm]
        # Fuzzy: try last name match
        last = norm.split()[-1] if norm.split() else norm
        matches = [p for k, p in name_lookup.items() if last in k]
        if len(matches) == 1:
            return matches[0]
        if verbose and not matches:
            print(f"  [warn] No ESPN match for pool player: {name!r}")
        return None

    standing_entries = []
    for entry in entries:
        players_out = {}
        total = 0
        prev_rank = entry.get("previousRank", 0)
        raw_players = entry.get("players", {})

        for group_key, player_data in raw_players.items():
            pname = player_data.get("name", "")
            espn_p = find_player(pname)
            if espn_p:
                earnings = espn_p["projectedEarnings"]
                players_out[group_key] = {
                    "name": pname,
                    "earnings": earnings,
                    "position": espn_p["position"],
                    "toPar": espn_p["toPar"],
                    "toParDisplay": espn_p["toParDisplay"],
                    "status": espn_p["status"],
                }
            else:
                # Player not in ESPN field (e.g. pre-tournament, WD before start)
                players_out[group_key] = {
                    "name": pname,
                    "earnings": 0,
                    "position": 999,
                    "toPar": 0,
                    "toParDisplay": "E",
                    "status": "unknown",
                }
            total += players_out[group_key]["earnings"]

        standing_entries.append({
            "id": entry.get("id"),
            "name": entry.get("name", ""),
            "owner": entry.get("owner", ""),
            "players": players_out,
            "totalEarnings": total,
            "previousRank": prev_rank,
        })

    # Sort by earnings desc and assign rank
    standing_entries.sort(key=lambda x: -x["totalEarnings"])
    for i, e in enumerate(standing_entries, 1):
        e["rank"] = i

    return standing_entries


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Fetch Masters 2026 live scores and update pool standings.")
    parser.add_argument("--dry-run", action="store_true", help="Fetch and print, do not write files")
    parser.add_argument("--verbose", action="store_true", help="Extra debug output")
    parser.add_argument("--final", action="store_true", help="Force treat tournament as complete")
    args = parser.parse_args()

    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] Fetching Masters leaderboard...")

    # 1. Fetch ESPN data
    raw = fetch_espn(verbose=args.verbose)

    # 2. Parse
    live_data = parse_espn_data(raw, force_final=args.final, verbose=args.verbose)

    players = live_data["players"]
    tourney_status = live_data["tournamentStatus"]
    current_round = live_data["currentRound"]

    # Summary header
    status_label = {"pre": "pre-tournament", "in_progress": "in progress", "complete": "complete"}.get(tourney_status, tourney_status)
    print(f"[{ts}] Fetched Masters leaderboard (Round {current_round}, {status_label})")

    # Top 5
    active = [p for p in players if p["status"] == "active"]
    active.sort(key=lambda x: x["position"])
    if active:
        leader = active[0]
        print(f"Leader: {leader['name']} {leader['toParDisplay']} (thru {leader['thru']})")
        top5_str = ", ".join(f"{p['name'].split()[-1]} {p['toParDisplay']}" for p in active[:5])
        print(f"Top 5:  {top5_str}")

    # 3. Pool standings
    entries = parse_pool_data(verbose=args.verbose)
    standings = build_standings(live_data, entries, verbose=args.verbose)

    if standings:
        leader_entry = standings[0]
        print(f"Pool leader: \"{leader_entry['name']}\" ({leader_entry['owner']}) — ${leader_entry['totalEarnings']:,}")

    # 4. Build output objects
    live_scores_out = {
        "fetchedAt": live_data["fetchedAt"],
        "tournamentStatus": tourney_status,
        "currentRound": current_round,
        "players": players,
    }

    pool_standings_out = {
        "fetchedAt": live_data["fetchedAt"],
        "tournamentStatus": tourney_status,
        "currentRound": current_round,
        "entries": standings,
    }

    if args.dry_run:
        print("\n--- DRY RUN: would write ---")
        print(f"  {LIVE_SCORES_JSON}  ({len(players)} players)")
        print(f"  {POOL_STANDINGS_JSON}  ({len(standings)} entries)")
        if args.verbose:
            print("\n--- live-scores.json (first 3 players) ---")
            print(json.dumps(players[:3], indent=2))
            print("\n--- pool-standings.json (top 3 entries) ---")
            print(json.dumps(standings[:3], indent=2))
        return

    # 5. Write files
    LIVE_SCORES_JSON.parent.mkdir(parents=True, exist_ok=True)
    LIVE_SCORES_JSON.write_text(json.dumps(live_scores_out, indent=2), encoding="utf-8")
    POOL_STANDINGS_JSON.write_text(json.dumps(pool_standings_out, indent=2), encoding="utf-8")

    print(f"Updated: {LIVE_SCORES_JSON.name}, {POOL_STANDINGS_JSON.name}")


if __name__ == "__main__":
    main()
