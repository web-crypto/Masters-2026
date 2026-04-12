// Masters Charity Pool 2026 — Data Layer
// Structure: 1A + 2B + 2C + 2D + 1E = 8 picks
// Entries loaded from Google Form responses — replace placeholder below

const poolData = {
  lastUpdated: "2026-04-12T19:15:25",
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
        "id": 62,
        "name": "Kenner",
        "owner": "Kenner",
        "totalEarnings": 9397290,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 1
    },
    {
        "id": 22,
        "name": "Michael Blumer",
        "owner": "Michael Blumer",
        "totalEarnings": 8773852,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 2
    },
    {
        "id": 36,
        "name": "David Iudiciani #2",
        "owner": "David Iudiciani #2",
        "totalEarnings": 8522850,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 3
    },
    {
        "id": 33,
        "name": "I Like Big Putts and I Cannot Lie!",
        "owner": "I Like Big Putts and I Cannot Lie!",
        "totalEarnings": 8413177,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 4
    },
    {
        "id": 65,
        "name": "Tyler-Made",
        "owner": "Tyler-Made",
        "totalEarnings": 7771050,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sam Burns",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 5
    },
    {
        "id": 48,
        "name": "Chapps",
        "owner": "Chapps",
        "totalEarnings": 7620900,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 6
    },
    {
        "id": 23,
        "name": "Maad grenadez 2",
        "owner": "Maad grenadez 2",
        "totalEarnings": 7268099,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Brian Harman",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 7
    },
    {
        "id": 43,
        "name": "Mark Watson 2",
        "owner": "Mark Watson 2",
        "totalEarnings": 7212555,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 8
    },
    {
        "id": 88,
        "name": "Mike Cane",
        "owner": "Mike Cane",
        "totalEarnings": 6987435,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 50400,
                "position": 52,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 9
    },
    {
        "id": 90,
        "name": "Andy White",
        "owner": "Andy White",
        "totalEarnings": 6717165,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Zach Johnson",
                "earnings": 0,
                "position": 62,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 10
    },
    {
        "id": 77,
        "name": "Greener",
        "owner": "Greener",
        "totalEarnings": 6698580,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 11
    },
    {
        "id": 49,
        "name": "Far from Par",
        "owner": "Far from Par",
        "totalEarnings": 6674325,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 12
    },
    {
        "id": 58,
        "name": "Daniel Jennings",
        "owner": "Daniel Jennings",
        "totalEarnings": 6565650,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 13
    },
    {
        "id": 54,
        "name": "Zack",
        "owner": "Zack",
        "totalEarnings": 6512100,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 14
    },
    {
        "id": 52,
        "name": "Paul Clancy",
        "owner": "Paul Clancy",
        "totalEarnings": 5848500,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 15
    },
    {
        "id": 16,
        "name": "Scott Boswall",
        "owner": "Scott Boswall",
        "totalEarnings": 5519850,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0,
                "position": 57,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 16
    },
    {
        "id": 66,
        "name": "Ginger's R Us",
        "owner": "Ginger's R Us",
        "totalEarnings": 5370645,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 17
    },
    {
        "id": 28,
        "name": "Powell",
        "owner": "Powell",
        "totalEarnings": 5287222,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 65100,
                "position": 46,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 18
    },
    {
        "id": 26,
        "name": "Know Nothing About Golf",
        "owner": "Know Nothing About Golf",
        "totalEarnings": 5203012,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 19
    },
    {
        "id": 72,
        "name": "Liam McQuaid",
        "owner": "Liam McQuaid",
        "totalEarnings": 5047770,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 20
    },
    {
        "id": 84,
        "name": "Mark Watson 1",
        "owner": "Mark Watson 1",
        "totalEarnings": 4758180,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 4200000,
                "position": 1,
                "toPar": -12,
                "toParDisplay": "-12",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0,
                "position": 60,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 21
    },
    {
        "id": 78,
        "name": "Mike rik",
        "owner": "Mike rik",
        "totalEarnings": 4678590,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 22
    },
    {
        "id": 70,
        "name": "Ryan\u2019s Fighting Irish",
        "owner": "Ryan\u2019s Fighting Irish",
        "totalEarnings": 4478600,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 23
    },
    {
        "id": 64,
        "name": "Patrick Charron",
        "owner": "Patrick Charron",
        "totalEarnings": 4473525,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 24
    },
    {
        "id": 63,
        "name": "MaryLou Snowie",
        "owner": "MaryLou Snowie",
        "totalEarnings": 4358690,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-6",
        "previousRank": 0,
        "currentRank": 25
    },
    {
        "id": 31,
        "name": "KrazMon",
        "owner": "KrazMon",
        "totalEarnings": 4160502,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-7",
        "previousRank": 0,
        "currentRank": 26
    },
    {
        "id": 46,
        "name": "Shaun Coughlin",
        "owner": "Shaun Coughlin",
        "totalEarnings": 4123980,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 27
    },
    {
        "id": 29,
        "name": "Ana G.",
        "owner": "Ana G.",
        "totalEarnings": 4080352,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-15",
        "previousRank": 0,
        "currentRank": 28
    },
    {
        "id": 20,
        "name": "David Belcastro",
        "owner": "David Belcastro",
        "totalEarnings": 4009687,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 29
    },
    {
        "id": 34,
        "name": "Shea DAWG",
        "owner": "Shea DAWG",
        "totalEarnings": 3964012,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 30
    },
    {
        "id": 1,
        "name": "Brendan McNulty",
        "owner": "Brendan McNulty",
        "totalEarnings": 3961650,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 31
    },
    {
        "id": 71,
        "name": "Arnprior Bob",
        "owner": "Arnprior Bob",
        "totalEarnings": 3961440,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Thomas",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 32
    },
    {
        "id": 24,
        "name": "Adam Martinez",
        "owner": "Adam Martinez",
        "totalEarnings": 3894502,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 33
    },
    {
        "id": 69,
        "name": "Donny",
        "owner": "Donny",
        "totalEarnings": 3880485,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 34
    },
    {
        "id": 75,
        "name": "Jost Kaempffer",
        "owner": "Jost Kaempffer",
        "totalEarnings": 3866520,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 35
    },
    {
        "id": 6,
        "name": "Liam Regan",
        "owner": "Liam Regan",
        "totalEarnings": 3775380,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Bubba Watson",
                "earnings": 0,
                "position": 58,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 36
    },
    {
        "id": 40,
        "name": "KP#1",
        "owner": "KP#1",
        "totalEarnings": 3728585,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 37
    },
    {
        "id": 19,
        "name": "Logs",
        "owner": "Logs",
        "totalEarnings": 3663922,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 38
    },
    {
        "id": 60,
        "name": "Rubin",
        "owner": "Rubin",
        "totalEarnings": 3610950,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 39
    },
    {
        "id": 85,
        "name": "Chris N",
        "owner": "Chris N",
        "totalEarnings": 3593922,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ryan Gerard",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 40
    },
    {
        "id": 15,
        "name": "MacAtk",
        "owner": "MacAtk",
        "totalEarnings": 3482150,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0,
                "position": 70,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 41
    },
    {
        "id": 27,
        "name": "Know Nothing About Golf 2",
        "owner": "Know Nothing About Golf 2",
        "totalEarnings": 3475902,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 42
    },
    {
        "id": 50,
        "name": "Snowdogg #1",
        "owner": "Snowdogg #1",
        "totalEarnings": 3455025,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 43
    },
    {
        "id": 44,
        "name": "James Talbot",
        "owner": "James Talbot",
        "totalEarnings": 3453975,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-2",
        "previousRank": 0,
        "currentRank": 44
    },
    {
        "id": 7,
        "name": "Alex Smith 2",
        "owner": "Alex Smith 2",
        "totalEarnings": 3453975,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0,
                "position": 68,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 45
    },
    {
        "id": 42,
        "name": "David Iudiciani #3",
        "owner": "David Iudiciani #3",
        "totalEarnings": 3407565,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 46
    },
    {
        "id": 67,
        "name": "Kelsey Webster",
        "owner": "Kelsey Webster",
        "totalEarnings": 3322095,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "11",
        "previousRank": 0,
        "currentRank": 47
    },
    {
        "id": 79,
        "name": "Crusty the Clown",
        "owner": "Crusty the Clown",
        "totalEarnings": 3266340,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0,
                "position": 72,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 48
    },
    {
        "id": 12,
        "name": "Dave Snowie",
        "owner": "Dave Snowie",
        "totalEarnings": 3252165,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0,
                "position": 70,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 49
    },
    {
        "id": 68,
        "name": "Doink the Clown",
        "owner": "Doink the Clown",
        "totalEarnings": 3245025,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 50
    },
    {
        "id": 87,
        "name": "Tiger Woo",
        "owner": "Tiger Woo",
        "totalEarnings": 3186225,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 50400,
                "position": 52,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 51
    },
    {
        "id": 45,
        "name": "Steve Loder",
        "owner": "Steve Loder",
        "totalEarnings": 3128685,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 52
    },
    {
        "id": 89,
        "name": "BoJack&Hersh",
        "owner": "BoJack&Hersh",
        "totalEarnings": 3128562,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 53
    },
    {
        "id": 80,
        "name": "FloydSwine 1",
        "owner": "FloydSwine 1",
        "totalEarnings": 3055290,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 2268000,
                "position": 2,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0,
                "position": 72,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 54
    },
    {
        "id": 25,
        "name": "Kristen Rose",
        "owner": "Kristen Rose",
        "totalEarnings": 3055062,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 55
    },
    {
        "id": 59,
        "name": "Mike Allan",
        "owner": "Mike Allan",
        "totalEarnings": 3018540,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 56
    },
    {
        "id": 2,
        "name": "Mike Graham",
        "owner": "Mike Graham",
        "totalEarnings": 2982315,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
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
        "totalEarnings": 2972340,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 58
    },
    {
        "id": 39,
        "name": "Stuartjames",
        "owner": "Stuartjames",
        "totalEarnings": 2955330,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 59
    },
    {
        "id": 38,
        "name": "Double Zero Dewey",
        "owner": "Double Zero Dewey",
        "totalEarnings": 2946300,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 60
    },
    {
        "id": 35,
        "name": "Sami Sherry",
        "owner": "Sami Sherry",
        "totalEarnings": 2946300,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 61
    },
    {
        "id": 61,
        "name": "FrenchGPT",
        "owner": "FrenchGPT",
        "totalEarnings": 2888060,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 62
    },
    {
        "id": 9,
        "name": "MartyBoy1",
        "owner": "MartyBoy1",
        "totalEarnings": 2888060,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0,
                "position": 68,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 63
    },
    {
        "id": 56,
        "name": "Jordan Martinez",
        "owner": "Jordan Martinez",
        "totalEarnings": 2841825,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 65100,
                "position": 46,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 64
    },
    {
        "id": 21,
        "name": "Wren & Willow Webs",
        "owner": "Wren & Willow Webs",
        "totalEarnings": 2779437,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Wyndham Clark",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 65
    },
    {
        "id": 37,
        "name": "TWS19",
        "owner": "TWS19",
        "totalEarnings": 2772840,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 66
    },
    {
        "id": 76,
        "name": "Carly Wilde",
        "owner": "Carly Wilde",
        "totalEarnings": 2745750,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 65100,
                "position": 46,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 67
    },
    {
        "id": 83,
        "name": "Daniels",
        "owner": "Daniels",
        "totalEarnings": 2657025,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0,
                "position": 60,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 68
    },
    {
        "id": 82,
        "name": "Spinner13",
        "owner": "Spinner13",
        "totalEarnings": 2657025,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0,
                "position": 60,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 69
    },
    {
        "id": 11,
        "name": "French1",
        "owner": "French1",
        "totalEarnings": 2655590,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0,
                "position": 70,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 70
    },
    {
        "id": 47,
        "name": "Alex Smith",
        "owner": "Alex Smith",
        "totalEarnings": 2653455,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 71
    },
    {
        "id": 5,
        "name": "Jacob Hodgson",
        "owner": "Jacob Hodgson",
        "totalEarnings": 2406635,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Bubba Watson",
                "earnings": 0,
                "position": 58,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-6",
        "previousRank": 0,
        "currentRank": 72
    },
    {
        "id": 3,
        "name": "Stuart",
        "owner": "Stuart",
        "totalEarnings": 2364600,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 73
    },
    {
        "id": 4,
        "name": "Adam Valadao",
        "owner": "Adam Valadao",
        "totalEarnings": 2298240,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 74
    },
    {
        "id": 81,
        "name": "FloydSwine2",
        "owner": "FloydSwine2",
        "totalEarnings": 2221380,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0,
                "position": 72,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 75
    },
    {
        "id": 13,
        "name": "Ange",
        "owner": "Ange",
        "totalEarnings": 2176440,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0,
                "position": 70,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 76
    },
    {
        "id": 32,
        "name": "David Iudiciani #1",
        "owner": "David Iudiciani #1",
        "totalEarnings": 2020462,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 77
    },
    {
        "id": 57,
        "name": "Connor O",
        "owner": "Connor O",
        "totalEarnings": 2015265,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 65100,
                "position": 46,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 78
    },
    {
        "id": 74,
        "name": "Josh Marks",
        "owner": "Josh Marks",
        "totalEarnings": 1965180,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 79
    },
    {
        "id": 51,
        "name": "Lion Woods",
        "owner": "Lion Woods",
        "totalEarnings": 1919400,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 80
    },
    {
        "id": 17,
        "name": "DUIkitty",
        "owner": "DUIkitty",
        "totalEarnings": 1896300,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0,
                "position": 57,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 81
    },
    {
        "id": 18,
        "name": "James Steels",
        "owner": "James Steels",
        "totalEarnings": 1841787,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 82
    },
    {
        "id": 55,
        "name": "Kyle Palantzas",
        "owner": "Kyle Palantzas",
        "totalEarnings": 1711640,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 1218000,
                "position": 3,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 83
    },
    {
        "id": 8,
        "name": "Kinko the Clown",
        "owner": "Kinko the Clown",
        "totalEarnings": 1648500,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0,
                "position": 68,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 84
    },
    {
        "id": 53,
        "name": "Ian Watters",
        "owner": "Ian Watters",
        "totalEarnings": 1612275,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0,
                "position": 63,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0,
                "position": 59,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 85
    },
    {
        "id": 30,
        "name": "Rob Frawley",
        "owner": "Rob Frawley",
        "totalEarnings": 1509112,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 65100,
                "position": 46,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 101062,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 86
    },
    {
        "id": 10,
        "name": "Tigers Wood",
        "owner": "Tigers Wood",
        "totalEarnings": 1468040,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 325500,
                "position": 16,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 171500,
                "position": 25,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0,
                "position": 70,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 87
    },
    {
        "id": 86,
        "name": "Maad Grenadez 1",
        "owner": "Maad Grenadez 1",
        "totalEarnings": 1343580,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 236040,
                "position": 20,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Si Woo Kim",
                "earnings": 60900,
                "position": 47,
                "toPar": 4,
                "toParDisplay": "+4",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 50400,
                "position": 52,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 88
    },
    {
        "id": 41,
        "name": "David Iudiciani #4",
        "owner": "David Iudiciani #4",
        "totalEarnings": 1272810,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 86100,
                "position": 40,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 53760,
                "position": 49,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 737625,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 89
    },
    {
        "id": 14,
        "name": "Maz",
        "owner": "Maz",
        "totalEarnings": 1246350,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0,
                "position": 61,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "cut",
                "thru": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 445200,
                "position": 11,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 139650,
                "position": 28,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 588000,
                "position": 9,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0,
                "position": 64,
                "toPar": 7,
                "toParDisplay": "+7",
                "status": "cut",
                "thru": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0,
                "position": 82,
                "toPar": 11,
                "toParDisplay": "+11",
                "status": "cut",
                "thru": 0
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 73500,
                "position": 43,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0,
                "position": 70,
                "toPar": 8,
                "toParDisplay": "+8",
                "status": "cut",
                "thru": 0
            }
        },
        "tiebreaker": "-10",
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
      if (!player || !player.name) return;

      const liveEarnings = Number.isFinite(player.projectedEarnings)
        ? player.projectedEarnings
        : (Number.isFinite(player.earnings) ? player.earnings : 0);

      if (!playerMap[player.name]) {
        playerMap[player.name] = {
          name: player.name,
          group,
          earnings: liveEarnings,
          entries: [],
          position: player.position ?? null,
          toPar: player.toPar ?? null,
          toParDisplay: player.toParDisplay ?? '—',
          status: player.status || 'active',
          thru: player.thru ?? null,
        };
      }
      playerMap[player.name].entries.push(entry.name);
      playerMap[player.name].earnings = liveEarnings;
      if (player.position !== undefined) playerMap[player.name].position = player.position;
      if (player.toPar !== undefined) playerMap[player.name].toPar = player.toPar;
      if (player.toParDisplay !== undefined) playerMap[player.name].toParDisplay = player.toParDisplay;
      if (player.status !== undefined) playerMap[player.name].status = player.status;
      if (player.thru !== undefined) playerMap[player.name].thru = player.thru;
    });
  });
  return Object.values(playerMap).sort((a, b) => {
    const earningsDiff = (b.earnings || 0) - (a.earnings || 0);
    if (earningsDiff !== 0) return earningsDiff;
    const posA = Number.isFinite(a.position) ? a.position : 999;
    const posB = Number.isFinite(b.position) ? b.position : 999;
    if (posA !== posB) return posA - posB;
    return a.name.localeCompare(b.name);
  });
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
