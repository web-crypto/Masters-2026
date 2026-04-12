// Masters Charity Pool 2026 — Data Layer
// Structure: 1A + 2B + 2C + 2D + 1E = 8 picks
// Entries loaded from Google Form responses — replace placeholder below

const poolData = {
  lastUpdated: "2026-04-12T17:00:49",
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
        "totalEarnings": 9013725,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
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
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 1
    },
    {
        "id": 22,
        "name": "Michael Blumer",
        "owner": "Michael Blumer",
        "totalEarnings": 7047250,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
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
        "id": 33,
        "name": "I Like Big Putts and I Cannot Lie!",
        "owner": "I Like Big Putts and I Cannot Lie!",
        "totalEarnings": 7021875,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 3
    },
    {
        "id": 48,
        "name": "Chapps",
        "owner": "Chapps",
        "totalEarnings": 6615000,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
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
                "earnings": 1428000,
                "position": 3,
                "toPar": -10,
                "toParDisplay": "-10",
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
        "currentRank": 4
    },
    {
        "id": 65,
        "name": "Tyler-Made",
        "owner": "Tyler-Made",
        "totalEarnings": 6534360,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sam Burns",
                "earnings": 1428000,
                "position": 3,
                "toPar": -10,
                "toParDisplay": "-10",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "id": 58,
        "name": "Daniel Jennings",
        "owner": "Daniel Jennings",
        "totalEarnings": 6332025,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 1428000,
                "position": 3,
                "toPar": -10,
                "toParDisplay": "-10",
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
        "currentRank": 6
    },
    {
        "id": 36,
        "name": "David Iudiciani #2",
        "owner": "David Iudiciani #2",
        "totalEarnings": 6291775,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 7
    },
    {
        "id": 63,
        "name": "MaryLou Snowie",
        "owner": "MaryLou Snowie",
        "totalEarnings": 5860050,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
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
        "currentRank": 8
    },
    {
        "id": 43,
        "name": "Mark Watson 2",
        "owner": "Mark Watson 2",
        "totalEarnings": 5831700,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
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
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 9
    },
    {
        "id": 23,
        "name": "Maad grenadez 2",
        "owner": "Maad grenadez 2",
        "totalEarnings": 5821550,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Brian Harman",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 10
    },
    {
        "id": 90,
        "name": "Andy White",
        "owner": "Andy White",
        "totalEarnings": 5717250,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
        "currentRank": 11
    },
    {
        "id": 70,
        "name": "Ryan\u2019s Fighting Irish",
        "owner": "Ryan\u2019s Fighting Irish",
        "totalEarnings": 5559750,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
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
                "earnings": 65100,
                "position": 46,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 12
    },
    {
        "id": 26,
        "name": "Know Nothing About Golf",
        "owner": "Know Nothing About Golf",
        "totalEarnings": 5478550,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 13
    },
    {
        "id": 49,
        "name": "Far from Par",
        "owner": "Far from Par",
        "totalEarnings": 5461050,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
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
        "currentRank": 14
    },
    {
        "id": 77,
        "name": "Greener",
        "owner": "Greener",
        "totalEarnings": 5386185,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 15
    },
    {
        "id": 88,
        "name": "Mike Cane",
        "owner": "Mike Cane",
        "totalEarnings": 5289060,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 16
    },
    {
        "id": 24,
        "name": "Adam Martinez",
        "owner": "Adam Martinez",
        "totalEarnings": 4834900,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 60900,
                "position": 47,
                "toPar": 3,
                "toParDisplay": "+3",
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
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 17
    },
    {
        "id": 29,
        "name": "Ana G.",
        "owner": "Ana G.",
        "totalEarnings": 4723600,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
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
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-15",
        "previousRank": 0,
        "currentRank": 18
    },
    {
        "id": 69,
        "name": "Donny",
        "owner": "Donny",
        "totalEarnings": 4659585,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
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
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 65100,
                "position": 46,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 19
    },
    {
        "id": 52,
        "name": "Paul Clancy",
        "owner": "Paul Clancy",
        "totalEarnings": 4635435,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 20
    },
    {
        "id": 16,
        "name": "Scott Boswall",
        "owner": "Scott Boswall",
        "totalEarnings": 4635435,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 21
    },
    {
        "id": 79,
        "name": "Crusty the Clown",
        "owner": "Crusty the Clown",
        "totalEarnings": 4594380,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
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
        "currentRank": 22
    },
    {
        "id": 60,
        "name": "Rubin",
        "owner": "Rubin",
        "totalEarnings": 4509435,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 23
    },
    {
        "id": 66,
        "name": "Ginger's R Us",
        "owner": "Ginger's R Us",
        "totalEarnings": 4453785,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 65100,
                "position": 46,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 24
    },
    {
        "id": 85,
        "name": "Chris N",
        "owner": "Chris N",
        "totalEarnings": 4449060,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ryan Gerard",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 25
    },
    {
        "id": 50,
        "name": "Snowdogg #1",
        "owner": "Snowdogg #1",
        "totalEarnings": 4448010,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 26
    },
    {
        "id": 54,
        "name": "Zack",
        "owner": "Zack",
        "totalEarnings": 4445070,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Si Woo Kim",
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
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
        "id": 80,
        "name": "FloydSwine 1",
        "owner": "FloydSwine 1",
        "totalEarnings": 4354350,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
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
        "currentRank": 28
    },
    {
        "id": 75,
        "name": "Jost Kaempffer",
        "owner": "Jost Kaempffer",
        "totalEarnings": 4319700,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
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
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 29
    },
    {
        "id": 72,
        "name": "Liam McQuaid",
        "owner": "Liam McQuaid",
        "totalEarnings": 4276650,
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
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
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
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 30
    },
    {
        "id": 40,
        "name": "KP#1",
        "owner": "KP#1",
        "totalEarnings": 4240810,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
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
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 31
    },
    {
        "id": 28,
        "name": "Powell",
        "owner": "Powell",
        "totalEarnings": 4129685,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 32
    },
    {
        "id": 34,
        "name": "Shea DAWG",
        "owner": "Shea DAWG",
        "totalEarnings": 4090800,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 60900,
                "position": 47,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 1428000,
                "position": 3,
                "toPar": -10,
                "toParDisplay": "-10",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 33
    },
    {
        "id": 84,
        "name": "Mark Watson 1",
        "owner": "Mark Watson 1",
        "totalEarnings": 4070500,
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
                "earnings": 3234000,
                "position": 1,
                "toPar": -11,
                "toParDisplay": "-11",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
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
        "currentRank": 34
    },
    {
        "id": 46,
        "name": "Shaun Coughlin",
        "owner": "Shaun Coughlin",
        "totalEarnings": 3608325,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
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
        "currentRank": 35
    },
    {
        "id": 78,
        "name": "Mike rik",
        "owner": "Mike rik",
        "totalEarnings": 3561075,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 36
    },
    {
        "id": 64,
        "name": "Patrick Charron",
        "owner": "Patrick Charron",
        "totalEarnings": 3458070,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
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
        "currentRank": 37
    },
    {
        "id": 42,
        "name": "David Iudiciani #3",
        "owner": "David Iudiciani #3",
        "totalEarnings": 3424050,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
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
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 38
    },
    {
        "id": 31,
        "name": "KrazMon",
        "owner": "KrazMon",
        "totalEarnings": 3310825,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-7",
        "previousRank": 0,
        "currentRank": 39
    },
    {
        "id": 1,
        "name": "Brendan McNulty",
        "owner": "Brendan McNulty",
        "totalEarnings": 3265710,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 40
    },
    {
        "id": 20,
        "name": "David Belcastro",
        "owner": "David Belcastro",
        "totalEarnings": 3109435,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 41
    },
    {
        "id": 12,
        "name": "Dave Snowie",
        "owner": "Dave Snowie",
        "totalEarnings": 2876685,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 42
    },
    {
        "id": 7,
        "name": "Alex Smith 2",
        "owner": "Alex Smith 2",
        "totalEarnings": 2854950,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 130200,
                "position": 31,
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
        "currentRank": 43
    },
    {
        "id": 39,
        "name": "Stuartjames",
        "owner": "Stuartjames",
        "totalEarnings": 2849525,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
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
        "totalEarnings": 2791425,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Thomas",
                "earnings": 60900,
                "position": 47,
                "toPar": 3,
                "toParDisplay": "+3",
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
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 45
    },
    {
        "id": 15,
        "name": "MacAtk",
        "owner": "MacAtk",
        "totalEarnings": 2782185,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 46
    },
    {
        "id": 6,
        "name": "Liam Regan",
        "owner": "Liam Regan",
        "totalEarnings": 2770950,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 130200,
                "position": 31,
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
        "currentRank": 47
    },
    {
        "id": 21,
        "name": "Wren & Willow Webs",
        "owner": "Wren & Willow Webs",
        "totalEarnings": 2761150,
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
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Wyndham Clark",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 48
    },
    {
        "id": 37,
        "name": "TWS19",
        "owner": "TWS19",
        "totalEarnings": 2749075,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 49
    },
    {
        "id": 27,
        "name": "Know Nothing About Golf 2",
        "owner": "Know Nothing About Golf 2",
        "totalEarnings": 2597875,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 50
    },
    {
        "id": 56,
        "name": "Jordan Martinez",
        "owner": "Jordan Martinez",
        "totalEarnings": 2571310,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
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
        "currentRank": 51
    },
    {
        "id": 5,
        "name": "Jacob Hodgson",
        "owner": "Jacob Hodgson",
        "totalEarnings": 2543310,
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
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 52
    },
    {
        "id": 13,
        "name": "Ange",
        "owner": "Ange",
        "totalEarnings": 2542050,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 567000,
                "position": 9,
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
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 53
    },
    {
        "id": 44,
        "name": "James Talbot",
        "owner": "James Talbot",
        "totalEarnings": 2524200,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Adam Scott",
                "earnings": 130200,
                "position": 31,
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
        "currentRank": 54
    },
    {
        "id": 83,
        "name": "Daniels",
        "owner": "Daniels",
        "totalEarnings": 2474535,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 55
    },
    {
        "id": 82,
        "name": "Spinner13",
        "owner": "Spinner13",
        "totalEarnings": 2474535,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 56
    },
    {
        "id": 11,
        "name": "French1",
        "owner": "French1",
        "totalEarnings": 2464350,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
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
                "earnings": 567000,
                "position": 9,
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
        "currentRank": 57
    },
    {
        "id": 3,
        "name": "Stuart",
        "owner": "Stuart",
        "totalEarnings": 2448285,
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
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 58
    },
    {
        "id": 19,
        "name": "Logs",
        "owner": "Logs",
        "totalEarnings": 2447935,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 60900,
                "position": 47,
                "toPar": 3,
                "toParDisplay": "+3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 1008000,
                "position": 4,
                "toPar": -9,
                "toParDisplay": "-9",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 59
    },
    {
        "id": 2,
        "name": "Mike Graham",
        "owner": "Mike Graham",
        "totalEarnings": 2425500,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
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
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 60
    },
    {
        "id": 67,
        "name": "Kelsey Webster",
        "owner": "Kelsey Webster",
        "totalEarnings": 2318085,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 65100,
                "position": 46,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "11",
        "previousRank": 0,
        "currentRank": 61
    },
    {
        "id": 35,
        "name": "Sami Sherry",
        "owner": "Sami Sherry",
        "totalEarnings": 2274160,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
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
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 62
    },
    {
        "id": 38,
        "name": "Double Zero Dewey",
        "owner": "Double Zero Dewey",
        "totalEarnings": 2231635,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
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
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 63
    },
    {
        "id": 68,
        "name": "Doink the Clown",
        "owner": "Doink the Clown",
        "totalEarnings": 2223900,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
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
                "name": "Jason Day",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 65100,
                "position": 46,
                "toPar": 2,
                "toParDisplay": "+2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 64
    },
    {
        "id": 25,
        "name": "Kristen Rose",
        "owner": "Kristen Rose",
        "totalEarnings": 2199400,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 65
    },
    {
        "id": 61,
        "name": "FrenchGPT",
        "owner": "FrenchGPT",
        "totalEarnings": 2154285,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 66
    },
    {
        "id": 9,
        "name": "MartyBoy1",
        "owner": "MartyBoy1",
        "totalEarnings": 2154285,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 67
    },
    {
        "id": 57,
        "name": "Connor O",
        "owner": "Connor O",
        "totalEarnings": 2147425,
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
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
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
        "currentRank": 68
    },
    {
        "id": 87,
        "name": "Tiger Woo",
        "owner": "Tiger Woo",
        "totalEarnings": 2135070,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
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
        "currentRank": 69
    },
    {
        "id": 59,
        "name": "Mike Allan",
        "owner": "Mike Allan",
        "totalEarnings": 2102625,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
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
        "currentRank": 70
    },
    {
        "id": 45,
        "name": "Steve Loder",
        "owner": "Steve Loder",
        "totalEarnings": 2080260,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 71
    },
    {
        "id": 47,
        "name": "Alex Smith",
        "owner": "Alex Smith",
        "totalEarnings": 2060100,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 130200,
                "position": 31,
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
                "name": "Russell Henley",
                "earnings": 567000,
                "position": 9,
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
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 72
    },
    {
        "id": 73,
        "name": "Jeff Pocock",
        "owner": "Jeff Pocock",
        "totalEarnings": 2029125,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
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
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 73
    },
    {
        "id": 18,
        "name": "James Steels",
        "owner": "James Steels",
        "totalEarnings": 2001895,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
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
                "name": "Si Woo Kim",
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 74
    },
    {
        "id": 10,
        "name": "Tigers Wood",
        "owner": "Tigers Wood",
        "totalEarnings": 1968435,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 75
    },
    {
        "id": 89,
        "name": "BoJack&Hersh",
        "owner": "BoJack&Hersh",
        "totalEarnings": 1921150,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 76
    },
    {
        "id": 81,
        "name": "FloydSwine2",
        "owner": "FloydSwine2",
        "totalEarnings": 1818775,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
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
        "currentRank": 77
    },
    {
        "id": 4,
        "name": "Adam Valadao",
        "owner": "Adam Valadao",
        "totalEarnings": 1789200,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 441000,
                "position": 12,
                "toPar": -5,
                "toParDisplay": "-5",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 60900,
                "position": 47,
                "toPar": 3,
                "toParDisplay": "+3",
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
        "currentRank": 78
    },
    {
        "id": 32,
        "name": "David Iudiciani #1",
        "owner": "David Iudiciani #1",
        "totalEarnings": 1752135,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 79
    },
    {
        "id": 76,
        "name": "Carly Wilde",
        "owner": "Carly Wilde",
        "totalEarnings": 1738660,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 80
    },
    {
        "id": 51,
        "name": "Lion Woods",
        "owner": "Lion Woods",
        "totalEarnings": 1676535,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 81
    },
    {
        "id": 30,
        "name": "Rob Frawley",
        "owner": "Rob Frawley",
        "totalEarnings": 1594985,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Sungjae Im",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 82
    },
    {
        "id": 17,
        "name": "DUIkitty",
        "owner": "DUIkitty",
        "totalEarnings": 1576050,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
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
                "name": "Sepp Straka",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
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
        "currentRank": 83
    },
    {
        "id": 53,
        "name": "Ian Watters",
        "owner": "Ian Watters",
        "totalEarnings": 1500135,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
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
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 84
    },
    {
        "id": 41,
        "name": "David Iudiciani #4",
        "owner": "David Iudiciani #4",
        "totalEarnings": 1499785,
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
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 172725,
                "position": 23,
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
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
                "toPar": 6,
                "toParDisplay": "+6",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 798000,
                "position": 5,
                "toPar": -8,
                "toParDisplay": "-8",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 85
    },
    {
        "id": 8,
        "name": "Kinko the Clown",
        "owner": "Kinko the Clown",
        "totalEarnings": 1401435,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Corey Conners",
                "earnings": 51660,
                "position": 50,
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
        "currentRank": 86
    },
    {
        "id": 74,
        "name": "Josh Marks",
        "owner": "Josh Marks",
        "totalEarnings": 1390095,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "active",
                "thru": 18
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 130200,
                "position": 31,
                "toPar": -2,
                "toParDisplay": "-2",
                "status": "active",
                "thru": 18
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 87
    },
    {
        "id": 55,
        "name": "Kyle Palantzas",
        "owner": "Kyle Palantzas",
        "totalEarnings": 1230600,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 677250,
                "position": 7,
                "toPar": -7,
                "toParDisplay": "-7",
                "status": "active",
                "thru": 18
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 305025,
                "position": 15,
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
        "currentRank": 88
    },
    {
        "id": 86,
        "name": "Maad Grenadez 1",
        "owner": "Maad Grenadez 1",
        "totalEarnings": 1191295,
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
                "earnings": 75600,
                "position": 42,
                "toPar": 1,
                "toParDisplay": "+1",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 567000,
                "position": 9,
                "toPar": -6,
                "toParDisplay": "-6",
                "status": "active",
                "thru": 18
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
                "toPar": -3,
                "toParDisplay": "-3",
                "status": "active",
                "thru": 18
            },
            "groupD1": {
                "name": "Si Woo Kim",
                "earnings": 56070,
                "position": 48,
                "toPar": 5,
                "toParDisplay": "+5",
                "status": "active",
                "thru": 18
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 96775,
                "position": 36,
                "toPar": 0,
                "toParDisplay": "E",
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
        "currentRank": 89
    },
    {
        "id": 14,
        "name": "Maz",
        "owner": "Maz",
        "totalEarnings": 898800,
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
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 305025,
                "position": 15,
                "toPar": -4,
                "toParDisplay": "-4",
                "status": "active",
                "thru": 18
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 172725,
                "position": 23,
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
                "name": "Sepp Straka",
                "earnings": 116025,
                "position": 34,
                "toPar": -1,
                "toParDisplay": "-1",
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
      if (!playerMap[player.name]) {
        playerMap[player.name] = {
          name: player.name,
          group,
          earnings: player.earnings,
          entries: [],
          position: player.position ?? null,
          toPar: player.toPar ?? null,
          toParDisplay: player.toParDisplay ?? '—',
          status: player.status || 'active',
          thru: player.thru ?? null,
        };
      }
      playerMap[player.name].entries.push(entry.name);
      playerMap[player.name].earnings = player.earnings;
      if (player.position !== undefined) playerMap[player.name].position = player.position;
      if (player.toPar !== undefined) playerMap[player.name].toPar = player.toPar;
      if (player.toParDisplay !== undefined) playerMap[player.name].toParDisplay = player.toParDisplay;
      if (player.status !== undefined) playerMap[player.name].status = player.status;
      if (player.thru !== undefined) playerMap[player.name].thru = player.thru;
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
