// Masters Charity Pool 2026 — Data Layer
// Structure: 1A + 2B + 2C + 2D + 1E = 8 picks
// Entries loaded from Google Form responses — replace placeholder below

const poolData = {
  lastUpdated: "2026-04-09T13:46:27",
  tournamentYear: 2026,
  tournamentName: "The Masters Tournament",
  charityName: "Ride to Conquer Cancer",
  entryFee: 30,
  charityPerEntry: 5,
  totalEntries: 92,
  totalCharityRaised: 460,  // 2 × $5
  prizePool: 2300,           // (2 × $30) - $10
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
        "id": 1,
        "name": "Scottie Doesn't Know",
        "owner": "Scottie Doesn't Know",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-14"
    },
    {
        "id": 2,
        "name": "Webs",
        "owner": "Webs",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 3,
        "name": "Tigers Wood",
        "owner": "Tigers Wood",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-14"
    },
    {
        "id": 4,
        "name": "Greener",
        "owner": "Greener",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 5,
        "name": "James Talbot",
        "owner": "James Talbot",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-2"
    },
    {
        "id": 6,
        "name": "Know Nothing About Golf",
        "owner": "Know Nothing About Golf",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 7,
        "name": "Know Nothing About Golf 2",
        "owner": "Know Nothing About Golf 2",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 8,
        "name": "Rubin",
        "owner": "Rubin",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 9,
        "name": "Arnprior Bob",
        "owner": "Arnprior Bob",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Thomas",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 0
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 10,
        "name": "Ginger's R Us",
        "owner": "Ginger's R Us",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 11,
        "name": "Chris N",
        "owner": "Chris N",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Ryan Gerard",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 12,
        "name": "Steve Loder",
        "owner": "Steve Loder",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 13,
        "name": "Sami Sherry",
        "owner": "Sami Sherry",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 14,
        "name": "Shaun Coughlin",
        "owner": "Shaun Coughlin",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 15,
        "name": "Liam McQuaid",
        "owner": "Liam McQuaid",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 16,
        "name": "James Steels",
        "owner": "James Steels",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 17,
        "name": "Brendan McNulty",
        "owner": "Brendan McNulty",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 0
            }
        },
        "tiebreaker": "-8"
    },
    {
        "id": 18,
        "name": "Kelsey Webster",
        "owner": "Kelsey Webster",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 0
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 0
            }
        },
        "tiebreaker": "11"
    },
    {
        "id": 19,
        "name": "French1",
        "owner": "French1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tony Finau",
                "earnings": 0
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 20,
        "name": "FrenchGPT",
        "owner": "FrenchGPT",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 21,
        "name": "Logs",
        "owner": "Logs",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 22,
        "name": "Andy White",
        "owner": "Andy White",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Zach Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 23,
        "name": "Kenner",
        "owner": "Kenner",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 24,
        "name": "Powell",
        "owner": "Powell",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 25,
        "name": "David Belcastro",
        "owner": "David Belcastro",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-8"
    },
    {
        "id": 26,
        "name": "Dave Snowie",
        "owner": "Dave Snowie",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 27,
        "name": "MaryLou Snowie",
        "owner": "MaryLou Snowie",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-6"
    },
    {
        "id": 28,
        "name": "Ana G.",
        "owner": "Ana G.",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sahith Theegala",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-15"
    },
    {
        "id": 29,
        "name": "Alex Smith",
        "owner": "Alex Smith",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 30,
        "name": "Alex Smith 2",
        "owner": "Alex Smith 2",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 0
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 31,
        "name": "Chapps",
        "owner": "Chapps",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 32,
        "name": "Kinko the Clown",
        "owner": "Kinko the Clown",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0
            }
        },
        "tiebreaker": "-8"
    },
    {
        "id": 33,
        "name": "Doink the Clown",
        "owner": "Doink the Clown",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 0
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 34,
        "name": "Crusty the Clown",
        "owner": "Crusty the Clown",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 0
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-8"
    },
    {
        "id": 35,
        "name": "Mike rik",
        "owner": "Mike rik",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 36,
        "name": "Far from Par",
        "owner": "Far from Par",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 37,
        "name": "David Iudiciani #1",
        "owner": "David Iudiciani #1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 38,
        "name": "David Iudiciani #2",
        "owner": "David Iudiciani #2",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 39,
        "name": "David Iudiciani #3",
        "owner": "David Iudiciani #3",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 40,
        "name": "David Iudiciani #4",
        "owner": "David Iudiciani #4",
        "totalEarnings": 0,
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
                "earnings": 0
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 41,
        "name": "Donny",
        "owner": "Donny",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 42,
        "name": "Snowdogg #1",
        "owner": "Snowdogg #1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-14"
    },
    {
        "id": 43,
        "name": "TWS19",
        "owner": "TWS19",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 44,
        "name": "Lion Woods",
        "owner": "Lion Woods",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 45,
        "name": "Jeff Pocock",
        "owner": "Jeff Pocock",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 46,
        "name": "Ryan\u2019s Fighting Irish",
        "owner": "Ryan\u2019s Fighting Irish",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 47,
        "name": "FloydSwine 1",
        "owner": "FloydSwine 1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 48,
        "name": "FloydSwine2",
        "owner": "FloydSwine2",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 49,
        "name": "Paul Clancy",
        "owner": "Paul Clancy",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 50,
        "name": "Josh Marks",
        "owner": "Josh Marks",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 51,
        "name": "Liam Regan",
        "owner": "Liam Regan",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 52,
        "name": "Wren & Willow Webs",
        "owner": "Wren & Willow Webs",
        "totalEarnings": 0,
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
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Wyndham Clark",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 53,
        "name": "Patrick Charron",
        "owner": "Patrick Charron",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 54,
        "name": "Scott Boswall",
        "owner": "Scott Boswall",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-14"
    },
    {
        "id": 55,
        "name": "Ian Watters",
        "owner": "Ian Watters",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 56,
        "name": "I Like Big Putts and I Cannot Lie!",
        "owner": "I Like Big Putts and I Cannot Lie!",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Russell Henley",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 0
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 57,
        "name": "Spinner13",
        "owner": "Spinner13",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 58,
        "name": "Adam Valadao",
        "owner": "Adam Valadao",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 59,
        "name": "Jost Kaempffer",
        "owner": "Jost Kaempffer",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tony Finau",
                "earnings": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 60,
        "name": "Zack",
        "owner": "Zack",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 61,
        "name": "Ange",
        "owner": "Ange",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 0
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 62,
        "name": "Kyle Palantzas",
        "owner": "Kyle Palantzas",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9"
    },
    {
        "id": 63,
        "name": "Michael Blumer",
        "owner": "Michael Blumer",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 64,
        "name": "DUIkitty",
        "owner": "DUIkitty",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 65,
        "name": "Scott Boswall",
        "owner": "Scott Boswall",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-14"
    },
    {
        "id": 66,
        "name": "Maad Grenadez 1",
        "owner": "Maad Grenadez 1",
        "totalEarnings": 0,
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
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tony Finau",
                "earnings": 0
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 67,
        "name": "Maad grenadez 2",
        "owner": "Maad grenadez 2",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 0
            },
            "groupD2": {
                "name": "Brian Harman",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-13"
    },
    {
        "id": 68,
        "name": "DUIkitty",
        "owner": "DUIkitty",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 69,
        "name": "Double Zero Dewey",
        "owner": "Double Zero Dewey",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 0
            }
        },
        "tiebreaker": "-14"
    },
    {
        "id": 70,
        "name": "Jordan Martinez",
        "owner": "Jordan Martinez",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
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
        "tiebreaker": "-14"
    },
    {
        "id": 71,
        "name": "Maz",
        "owner": "Maz",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 72,
        "name": "Tyler-Made",
        "owner": "Tyler-Made",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 73,
        "name": "Mike Graham",
        "owner": "Mike Graham",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 0
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
                "earnings": 0
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 74,
        "name": "MartyBoy1",
        "owner": "MartyBoy1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 75,
        "name": "Adam Martinez",
        "owner": "Adam Martinez",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 0
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 76,
        "name": "Stuart",
        "owner": "Stuart",
        "totalEarnings": 0,
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
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 0
            },
            "groupD2": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 77,
        "name": "Connor O",
        "owner": "Connor O",
        "totalEarnings": 0,
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
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
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
        "tiebreaker": "-13"
    },
    {
        "id": 78,
        "name": "Carly Wilde",
        "owner": "Carly Wilde",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
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
        "tiebreaker": "-11"
    },
    {
        "id": 79,
        "name": "Stuartjames",
        "owner": "Stuartjames",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 80,
        "name": "Tiger Woo",
        "owner": "Tiger Woo",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 0
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 81,
        "name": "Daniel Jennings",
        "owner": "Daniel Jennings",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
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
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 82,
        "name": "Daniels",
        "owner": "Daniels",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 83,
        "name": "Rob Frawley",
        "owner": "Rob Frawley",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 84,
        "name": "KP#1",
        "owner": "KP#1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 85,
        "name": "Mark Watson 1",
        "owner": "Mark Watson 1",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 0
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 86,
        "name": "Mark Watson 2",
        "owner": "Mark Watson 2",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 0
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 0
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 87,
        "name": "Kristen Rose",
        "owner": "Kristen Rose",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 0
            },
            "groupD2": {
                "name": "Joaquin Niemann",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-10"
    },
    {
        "id": 88,
        "name": "Shea DAWG",
        "owner": "Shea DAWG",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 0
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 0
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 0
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 89,
        "name": "BoJack&Hersh",
        "owner": "BoJack&Hersh",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tony Finau",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-12"
    },
    {
        "id": 90,
        "name": "KrazMon",
        "owner": "KrazMon",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 0
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 0
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 0
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 0
            },
            "groupD2": {
                "name": "Tony Finau",
                "earnings": 0
            },
            "groupE": {
                "name": "Will Zalatoris",
                "earnings": 0
            }
        },
        "tiebreaker": "-7"
    },
    {
        "id": 91,
        "name": "Mike Cane",
        "owner": "Mike Cane",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 0
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 0
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 0
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
    },
    {
        "id": 92,
        "name": "Mike Allan",
        "owner": "Mike Allan",
        "totalEarnings": 0,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 0
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 0
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 0
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 0
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 0
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 0
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11"
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
