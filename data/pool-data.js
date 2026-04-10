// Masters Charity Pool 2026 — Data Layer
// Structure: 1A + 2B + 2C + 2D + 1E = 8 picks
// Entries loaded from Google Form responses — replace placeholder below

const poolData = {
  lastUpdated: "2026-04-10T15:45:53",
  tournamentYear: 2026,
  tournamentName: "The Masters Tournament",
  charityName: "Ride to Conquer Cancer",
  entryFee: 30,
  charityPerEntry: 5,
  totalEntries: 90,
  totalCharityRaised: 450,  // 2 × $5
  prizePool: 2250,           // (2 × $30) - $10
  payoutStructure: {
    first: 1000,
    second: 500,
    third: 300,
    fourth: 200,
    fifth: 125,
    lastPlace: 100
  },

  // ── Player groups ────────────────────────────────────────────────────────────
  // Pick counts: 1A · 2B · 2C · 2D · 1E
  playerGroups: {
    groupA: {
      label: "Group A",
      picks: 1,
      description: "The Big 3 — pick 1",
      players: [
        "Scottie Scheffler",
        "Rory McIlroy",
        "Bryson DeChambeau"
      ]
    },
    groupB: {
      label: "Group B",
      picks: 2,
      description: "Top Contenders — pick 2",
      players: [
        "Jon Rahm",
        "Ludvig Åberg",
        "Xander Schauffele",
        "Tommy Fleetwood",
        "Cameron Young",
        "Collin Morikawa",
        "Matt Fitzpatrick"
      ]
    },
    groupC: {
      label: "Group C",
      picks: 2,
      description: "Strong Mid-Tier — pick 2",
      players: [
        "Justin Rose",
        "Patrick Reed",
        "Brooks Koepka",
        "Hideki Matsuyama",
        "Viktor Hovland",
        "Jordan Spieth",
        "Robert MacIntyre",
        "Justin Thomas",
        "Chris Gotterup"
      ]
    },
    groupD: {
      label: "Group D",
      picks: 2,
      description: "Longshot Value — pick 2",
      players: [
        "Shane Lowry",
        "Patrick Cantlay",
        "Tyrrell Hatton",
        "Min Woo Lee",
        "Akshay Bhatia",
        "Russell Henley",
        "Joaquin Niemann",
        "Sepp Straka",
        "Corey Conners",
        "Jacob Bridgeman",
        "Si Woo Kim",
        "Jason Day",
        "Sam Burns",
        "Sungjae Im",
        "Adam Scott",
        "Max Homa",
        "Sahith Theegala",
        "Wyndham Clark",
        "Tony Finau",
        "Keegan Bradley",
        "Brian Harman"
      ]
    },
    groupE: {
      label: "Group E",
      picks: 1,
      description: "Past Champs & Longshots — pick 1",
      players: [
        "Tiger Woods",
        "Phil Mickelson",
        "Dustin Johnson",
        "Bubba Watson",
        "Charl Schwartzel",
        "Danny Willett",
        "Zach Johnson",
        "Fred Couples",
        "Mike Weir",
        "Vijay Singh",
        "Ben Griffin",
        "Harry English",
        "Will Zalatoris",
        "JJ Spaun",
        "Daniel Berger",
        "Marco Penge",
        "Maverick McNealy",
        "Sergio Garcia"
      ]
    }
  },

  // ── Entries ──────────────────────────────────────────────────────────────────
  // Replace with real entries from Google Form responses.
  // Each entry has: id, name (team name), owner, players (one per group key),
  // totalEarnings, previousRank.
  // Group keys: groupA, groupB1, groupB2, groupC1, groupC2, groupD1, groupD2, groupE
  // (2 picks from B/C/D are stored as groupB1+groupB2, groupC1+groupC2, groupD1+groupD2)

  // Entries will be loaded from Google Form responses before April 9.
  entries: [
    {
        "id": 63,
        "name": "MaryLou Snowie",
        "owner": "MaryLou Snowie",
        "totalEarnings": 5989057,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-6",
        "previousRank": 0,
        "currentRank": 1
    },
    {
        "id": 70,
        "name": "Ryan\u2019s Fighting Irish",
        "owner": "Ryan\u2019s Fighting Irish",
        "totalEarnings": 5648456,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 77700
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 2
    },
    {
        "id": 80,
        "name": "FloydSwine 1",
        "owner": "FloydSwine 1",
        "totalEarnings": 5514266,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 3
    },
    {
        "id": 34,
        "name": "Shea DAWG",
        "owner": "Shea DAWG",
        "totalEarnings": 5439859,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 77700
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 3234000
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 4
    },
    {
        "id": 79,
        "name": "Crusty the Clown",
        "owner": "Crusty the Clown",
        "totalEarnings": 5175345,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 5
    },
    {
        "id": 26,
        "name": "Know Nothing About Golf",
        "owner": "Know Nothing About Golf",
        "totalEarnings": 5055158,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 6
    },
    {
        "id": 48,
        "name": "Chapps",
        "owner": "Chapps",
        "totalEarnings": 4898202,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 3234000
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 7
    },
    {
        "id": 62,
        "name": "Kenner",
        "owner": "Kenner",
        "totalEarnings": 4894050,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 8
    },
    {
        "id": 85,
        "name": "Chris N",
        "owner": "Chris N",
        "totalEarnings": 4732092,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Ryan Gerard",
                "earnings": 182318
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 9
    },
    {
        "id": 29,
        "name": "Ana G.",
        "owner": "Ana G.",
        "totalEarnings": 4649553,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 397091
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-15",
        "previousRank": 0,
        "currentRank": 10
    },
    {
        "id": 69,
        "name": "Donny",
        "owner": "Donny",
        "totalEarnings": 4612946,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 77700
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 11
    },
    {
        "id": 65,
        "name": "Tyler-Made",
        "owner": "Tyler-Made",
        "totalEarnings": 4524001,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Sam Burns",
                "earnings": 3234000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 12
    },
    {
        "id": 40,
        "name": "KP#1",
        "owner": "KP#1",
        "totalEarnings": 4434780,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 13
    },
    {
        "id": 50,
        "name": "Snowdogg #1",
        "owner": "Snowdogg #1",
        "totalEarnings": 4159365,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 14
    },
    {
        "id": 60,
        "name": "Rubin",
        "owner": "Rubin",
        "totalEarnings": 4115389,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 15
    },
    {
        "id": 58,
        "name": "Daniel Jennings",
        "owner": "Daniel Jennings",
        "totalEarnings": 4081665,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 3234000
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 16
    },
    {
        "id": 24,
        "name": "Adam Martinez",
        "owner": "Adam Martinez",
        "totalEarnings": 3954281,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 77700
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 17
    },
    {
        "id": 22,
        "name": "Michael Blumer",
        "owner": "Michael Blumer",
        "totalEarnings": 3933634,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 1092000
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 18
    },
    {
        "id": 75,
        "name": "Jost Kaempffer",
        "owner": "Jost Kaempffer",
        "totalEarnings": 3933071,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 397091
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 19
    },
    {
        "id": 37,
        "name": "TWS19",
        "owner": "TWS19",
        "totalEarnings": 3539550,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 20
    },
    {
        "id": 33,
        "name": "I Like Big Putts and I Cannot Lie!",
        "owner": "I Like Big Putts and I Cannot Lie!",
        "totalEarnings": 3436583,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 1092000
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 21
    },
    {
        "id": 42,
        "name": "David Iudiciani #3",
        "owner": "David Iudiciani #3",
        "totalEarnings": 3410715,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 22
    },
    {
        "id": 21,
        "name": "Wren & Willow Webs",
        "owner": "Wren & Willow Webs",
        "totalEarnings": 3227891,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Wyndham Clark",
                "earnings": 679875
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 23
    },
    {
        "id": 13,
        "name": "Ange",
        "owner": "Ange",
        "totalEarnings": 3071441,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 24
    },
    {
        "id": 82,
        "name": "Spinner13",
        "owner": "Spinner13",
        "totalEarnings": 2801858,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 25
    },
    {
        "id": 83,
        "name": "Daniels",
        "owner": "Daniels",
        "totalEarnings": 2690558,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 26
    },
    {
        "id": 39,
        "name": "Stuartjames",
        "owner": "Stuartjames",
        "totalEarnings": 2689002,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 182318
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 27
    },
    {
        "id": 68,
        "name": "Doink the Clown",
        "owner": "Doink the Clown",
        "totalEarnings": 2611302,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 1092000
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 77700
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 28
    },
    {
        "id": 46,
        "name": "Shaun Coughlin",
        "owner": "Shaun Coughlin",
        "totalEarnings": 2541964,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 29
    },
    {
        "id": 64,
        "name": "Patrick Charron",
        "owner": "Patrick Charron",
        "totalEarnings": 2538451,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 30
    },
    {
        "id": 30,
        "name": "Rob Frawley",
        "owner": "Rob Frawley",
        "totalEarnings": 2519074,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 31
    },
    {
        "id": 52,
        "name": "Paul Clancy",
        "owner": "Paul Clancy",
        "totalEarnings": 2519074,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 32
    },
    {
        "id": 1,
        "name": "Brendan McNulty",
        "owner": "Brendan McNulty",
        "totalEarnings": 2505720,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 397091
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 33
    },
    {
        "id": 41,
        "name": "David Iudiciani #4",
        "owner": "David Iudiciani #4",
        "totalEarnings": 2339763,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 1092000
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 34
    },
    {
        "id": 10,
        "name": "Tigers Wood",
        "owner": "Tigers Wood",
        "totalEarnings": 2303156,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 35
    },
    {
        "id": 36,
        "name": "David Iudiciani #2",
        "owner": "David Iudiciani #2",
        "totalEarnings": 2289267,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 36
    },
    {
        "id": 3,
        "name": "Stuart",
        "owner": "Stuart",
        "totalEarnings": 2281946,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 397091
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 37
    },
    {
        "id": 90,
        "name": "Andy White",
        "owner": "Andy White",
        "totalEarnings": 2254493,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Zach Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 38
    },
    {
        "id": 32,
        "name": "David Iudiciani #1",
        "owner": "David Iudiciani #1",
        "totalEarnings": 2233283,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 39
    },
    {
        "id": 5,
        "name": "Jacob Hodgson",
        "owner": "Jacob Hodgson",
        "totalEarnings": 2210422,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Bubba Watson",
                "earnings": 0
            }
        },
        "tiebreaker": "-6",
        "previousRank": 0,
        "currentRank": 40
    },
    {
        "id": 15,
        "name": "MacAtk",
        "owner": "MacAtk",
        "totalEarnings": 2166446,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 41
    },
    {
        "id": 2,
        "name": "Mike Graham",
        "owner": "Mike Graham",
        "totalEarnings": 2164766,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 397091
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 42
    },
    {
        "id": 8,
        "name": "Kinko the Clown",
        "owner": "Kinko the Clown",
        "totalEarnings": 2144873,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 77700
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 43
    },
    {
        "id": 43,
        "name": "Mark Watson 2",
        "owner": "Mark Watson 2",
        "totalEarnings": 2083009,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 44
    },
    {
        "id": 71,
        "name": "Arnprior Bob",
        "owner": "Arnprior Bob",
        "totalEarnings": 2073349,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Justin Thomas",
                "earnings": 77700
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 45
    },
    {
        "id": 56,
        "name": "Jordan Martinez",
        "owner": "Jordan Martinez",
        "totalEarnings": 2067173,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 46
    },
    {
        "id": 59,
        "name": "Mike Allan",
        "owner": "Mike Allan",
        "totalEarnings": 2021517,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 47
    },
    {
        "id": 51,
        "name": "Lion Woods",
        "owner": "Lion Woods",
        "totalEarnings": 2010683,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 48
    },
    {
        "id": 67,
        "name": "Kelsey Webster",
        "owner": "Kelsey Webster",
        "totalEarnings": 1972883,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 397091
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 77700
            }
        },
        "tiebreaker": "11",
        "previousRank": 0,
        "currentRank": 49
    },
    {
        "id": 19,
        "name": "Logs",
        "owner": "Logs",
        "totalEarnings": 1969876,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 77700
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 50
    },
    {
        "id": 31,
        "name": "KrazMon",
        "owner": "KrazMon",
        "totalEarnings": 1958355,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 397091
            },
            "groupD2": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-7",
        "previousRank": 0,
        "currentRank": 51
    },
    {
        "id": 23,
        "name": "Maad grenadez 2",
        "owner": "Maad grenadez 2",
        "totalEarnings": 1956675,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 397091
            },
            "groupD2": {
                "name": "Brian Harman",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 52
    },
    {
        "id": 7,
        "name": "Alex Smith 2",
        "owner": "Alex Smith 2",
        "totalEarnings": 1936276,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 182318
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 77700
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 53
    },
    {
        "id": 35,
        "name": "Sami Sherry",
        "owner": "Sami Sherry",
        "totalEarnings": 1847055,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 54
    },
    {
        "id": 20,
        "name": "David Belcastro",
        "owner": "David Belcastro",
        "totalEarnings": 1844048,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 55
    },
    {
        "id": 88,
        "name": "Mike Cane",
        "owner": "Mike Cane",
        "totalEarnings": 1831992,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 56
    },
    {
        "id": 27,
        "name": "Know Nothing About Golf 2",
        "owner": "Know Nothing About Golf 2",
        "totalEarnings": 1824165,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 57
    },
    {
        "id": 73,
        "name": "Jeff Pocock",
        "owner": "Jeff Pocock",
        "totalEarnings": 1812920,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 182318
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 58
    },
    {
        "id": 72,
        "name": "Liam McQuaid",
        "owner": "Liam McQuaid",
        "totalEarnings": 1789391,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 59
    },
    {
        "id": 17,
        "name": "DUIkitty",
        "owner": "DUIkitty",
        "totalEarnings": 1767675,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 60
    },
    {
        "id": 6,
        "name": "Liam Regan",
        "owner": "Liam Regan",
        "totalEarnings": 1758110,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 182318
            },
            "groupE": {
                "name": "Bubba Watson",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 61
    },
    {
        "id": 12,
        "name": "Dave Snowie",
        "owner": "Dave Snowie",
        "totalEarnings": 1732748,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 62
    },
    {
        "id": 78,
        "name": "Mike rik",
        "owner": "Mike rik",
        "totalEarnings": 1709858,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 63
    },
    {
        "id": 86,
        "name": "Maad Grenadez 1",
        "owner": "Maad Grenadez 1",
        "totalEarnings": 1702126,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 182318
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 111300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 64
    },
    {
        "id": 77,
        "name": "Greener",
        "owner": "Greener",
        "totalEarnings": 1666388,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 65
    },
    {
        "id": 49,
        "name": "Far from Par",
        "owner": "Far from Par",
        "totalEarnings": 1638840,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 679875
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 66
    },
    {
        "id": 38,
        "name": "Double Zero Dewey",
        "owner": "Double Zero Dewey",
        "totalEarnings": 1632282,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 182318
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 397091
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 67
    },
    {
        "id": 66,
        "name": "Ginger's R Us",
        "owner": "Ginger's R Us",
        "totalEarnings": 1605240,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 77700
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 68
    },
    {
        "id": 81,
        "name": "FloydSwine2",
        "owner": "FloydSwine2",
        "totalEarnings": 1590826,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 182318
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 69
    },
    {
        "id": 9,
        "name": "MartyBoy1",
        "owner": "MartyBoy1",
        "totalEarnings": 1575792,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 77700
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 70
    },
    {
        "id": 84,
        "name": "Mark Watson 1",
        "owner": "Mark Watson 1",
        "totalEarnings": 1574618,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 1092000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 182318
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 71
    },
    {
        "id": 61,
        "name": "FrenchGPT",
        "owner": "FrenchGPT",
        "totalEarnings": 1498092,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 72
    },
    {
        "id": 89,
        "name": "BoJack&Hersh",
        "owner": "BoJack&Hersh",
        "totalEarnings": 1437908,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 397091
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 73
    },
    {
        "id": 18,
        "name": "James Steels",
        "owner": "James Steels",
        "totalEarnings": 1378946,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 74
    },
    {
        "id": 53,
        "name": "Ian Watters",
        "owner": "Ian Watters",
        "totalEarnings": 1378946,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 75
    },
    {
        "id": 44,
        "name": "James Talbot",
        "owner": "James Talbot",
        "totalEarnings": 1361019,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 182318
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-2",
        "previousRank": 0,
        "currentRank": 76
    },
    {
        "id": 45,
        "name": "Steve Loder",
        "owner": "Steve Loder",
        "totalEarnings": 1268791,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 77
    },
    {
        "id": 87,
        "name": "Tiger Woo",
        "owner": "Tiger Woo",
        "totalEarnings": 1268791,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 111300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 78
    },
    {
        "id": 47,
        "name": "Alex Smith",
        "owner": "Alex Smith",
        "totalEarnings": 1255590,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 79
    },
    {
        "id": 28,
        "name": "Powell",
        "owner": "Powell",
        "totalEarnings": 1255590,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 80
    },
    {
        "id": 74,
        "name": "Josh Marks",
        "owner": "Josh Marks",
        "totalEarnings": 1142963,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 679875
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 81
    },
    {
        "id": 11,
        "name": "French1",
        "owner": "French1",
        "totalEarnings": 1089480,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 82
    },
    {
        "id": 25,
        "name": "Kristen Rose",
        "owner": "Kristen Rose",
        "totalEarnings": 1040817,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 111300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 83
    },
    {
        "id": 76,
        "name": "Carly Wilde",
        "owner": "Carly Wilde",
        "totalEarnings": 874707,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 84
    },
    {
        "id": 57,
        "name": "Connor O",
        "owner": "Connor O",
        "totalEarnings": 792855,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 679875
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 85
    },
    {
        "id": 55,
        "name": "Kyle Palantzas",
        "owner": "Kyle Palantzas",
        "totalEarnings": 768409,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 397091
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 86
    },
    {
        "id": 14,
        "name": "Maz",
        "owner": "Maz",
        "totalEarnings": 747199,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 397091
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 111300
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 87
    },
    {
        "id": 16,
        "name": "Scott Boswall",
        "owner": "Scott Boswall",
        "totalEarnings": 677861,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 397091
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 56490
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 88
    },
    {
        "id": 54,
        "name": "Zack",
        "owner": "Zack",
        "totalEarnings": 588916,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 111300
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 182318
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56490
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 89
    },
    {
        "id": 4,
        "name": "Adam Valadao",
        "owner": "Adam Valadao",
        "totalEarnings": 561998,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 182318
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 56490
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 77700
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 56490
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 77700
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 111300
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 90
    }
]
};

// ── Auto-calculate totals & ranks ────────────────────────────────────────────
poolData.entries.forEach(entry => {
  entry.totalEarnings = Object.values(entry.players).reduce((s, p) => s + p.earnings, 0);
});

poolData.entries.sort((a, b) => b.totalEarnings - a.totalEarnings);
poolData.entries.forEach((entry, i) => { entry.currentRank = i + 1; });

// ── Helper functions ─────────────────────────────────────────────────────────
function formatCurrency(amount) {
  if (amount >= 1000000) return '$' + (amount / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (amount >= 1000)    return '$' + (amount / 1000).toFixed(0) + 'K';
  return '$' + amount.toLocaleString('en-US');
}

function getRankChange(entry) {
  const change = (entry.previousRank || entry.currentRank) - entry.currentRank;
  if (change > 0) return { direction: 'up',   amount: change };
  if (change < 0) return { direction: 'down', amount: Math.abs(change) };
  return { direction: 'same', amount: 0 };
}

function getTimeSinceUpdate() {
  const updated = new Date(poolData.lastUpdated);
  const now = new Date();
  const diffMins = Math.floor((now - updated) / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays > 0)  return `${diffDays}d ago`;
  if (diffHours > 0) return `${diffHours}h ago`;
  if (diffMins > 0)  return `${diffMins}m ago`;
  return 'Just now';
}

function getAllPlayers() {
  const playerMap = {};
  poolData.entries.forEach(entry => {
    Object.entries(entry.players).forEach(([group, player]) => {
      if (!playerMap[player.name]) {
        playerMap[player.name] = { name: player.name, group, earnings: player.earnings, entries: [] };
      }
      playerMap[player.name].entries.push(entry.name);
      playerMap[player.name].earnings = player.earnings;
    });
  });
  return Object.values(playerMap).sort((a, b) => b.earnings - a.earnings);
}

function getGroupLabel(groupKey) {
  const labels = {
    groupA:  'Group A',
    groupB1: 'Group B (pick 1)',
    groupB2: 'Group B (pick 2)',
    groupC1: 'Group C (pick 1)',
    groupC2: 'Group C (pick 2)',
    groupD1: 'Group D (pick 1)',
    groupD2: 'Group D (pick 2)',
    groupE:  'Group E'
  };
  return labels[groupKey] || groupKey;
}
