// Masters Charity Pool 2026 — Data Layer
// Structure: 1A + 2B + 2C + 2D + 1E = 8 picks
// Entries loaded from Google Form responses — replace placeholder below

const poolData = {
  lastUpdated: "2026-04-10T22:15:58",
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
        "totalEarnings": 9156490,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
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
        "totalEarnings": 8040480,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 116550
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
        "totalEarnings": 7270130,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
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
        "id": 79,
        "name": "Crusty the Clown",
        "owner": "Crusty the Clown",
        "totalEarnings": 7044870,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 51940
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 4
    },
    {
        "id": 62,
        "name": "Kenner",
        "owner": "Kenner",
        "totalEarnings": 6917050,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 5
    },
    {
        "id": 29,
        "name": "Ana G.",
        "owner": "Ana G.",
        "totalEarnings": 6749400,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 304500
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-15",
        "previousRank": 0,
        "currentRank": 6
    },
    {
        "id": 26,
        "name": "Know Nothing About Golf",
        "owner": "Know Nothing About Golf",
        "totalEarnings": 6321350,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 7
    },
    {
        "id": 60,
        "name": "Rubin",
        "owner": "Rubin",
        "totalEarnings": 6258980,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 8
    },
    {
        "id": 85,
        "name": "Chris N",
        "owner": "Chris N",
        "totalEarnings": 5556180,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Ryan Gerard",
                "earnings": 160300
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 9
    },
    {
        "id": 69,
        "name": "Donny",
        "owner": "Donny",
        "totalEarnings": 5547220,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 116550
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 10
    },
    {
        "id": 40,
        "name": "KP#1",
        "owner": "KP#1",
        "totalEarnings": 5463920,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 11
    },
    {
        "id": 50,
        "name": "Snowdogg #1",
        "owner": "Snowdogg #1",
        "totalEarnings": 5445230,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116550
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 12
    },
    {
        "id": 75,
        "name": "Jost Kaempffer",
        "owner": "Jost Kaempffer",
        "totalEarnings": 5125190,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 304500
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 13
    },
    {
        "id": 24,
        "name": "Adam Martinez",
        "owner": "Adam Martinez",
        "totalEarnings": 5031950,
        "players": {
            "groupA": {
                "name": "Rory McIlroy",
                "earnings": 4200000
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 84000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 14
    },
    {
        "id": 13,
        "name": "Ange",
        "owner": "Ange",
        "totalEarnings": 5010040,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 15
    },
    {
        "id": 37,
        "name": "TWS19",
        "owner": "TWS19",
        "totalEarnings": 4961040,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 16
    },
    {
        "id": 33,
        "name": "I Like Big Putts and I Cannot Lie!",
        "owner": "I Like Big Putts and I Cannot Lie!",
        "totalEarnings": 4954600,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 589750
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 84000
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 17
    },
    {
        "id": 42,
        "name": "David Iudiciani #3",
        "owner": "David Iudiciani #3",
        "totalEarnings": 4750340,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 304500
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 18
    },
    {
        "id": 30,
        "name": "Rob Frawley",
        "owner": "Rob Frawley",
        "totalEarnings": 4461590,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 19
    },
    {
        "id": 48,
        "name": "Chapps",
        "owner": "Chapps",
        "totalEarnings": 4429740,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 1218000
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 20
    },
    {
        "id": 46,
        "name": "Shaun Coughlin",
        "owner": "Shaun Coughlin",
        "totalEarnings": 4319700,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 21
    },
    {
        "id": 52,
        "name": "Paul Clancy",
        "owner": "Paul Clancy",
        "totalEarnings": 4262790,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 22
    },
    {
        "id": 43,
        "name": "Mark Watson 2",
        "owner": "Mark Watson 2",
        "totalEarnings": 4247600,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupE": {
                "name": "Jake Knapp",
                "earnings": 304500
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 23
    },
    {
        "id": 90,
        "name": "Andy White",
        "owner": "Andy White",
        "totalEarnings": 4094790,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "Zach Johnson",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 24
    },
    {
        "id": 39,
        "name": "Stuartjames",
        "owner": "Stuartjames",
        "totalEarnings": 3956750,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 116550
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 25
    },
    {
        "id": 3,
        "name": "Stuart",
        "owner": "Stuart",
        "totalEarnings": 3789030,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 393750
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 26
    },
    {
        "id": 82,
        "name": "Spinner13",
        "owner": "Spinner13",
        "totalEarnings": 3686620,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 27
    },
    {
        "id": 59,
        "name": "Mike Allan",
        "owner": "Mike Allan",
        "totalEarnings": 3675980,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 28
    },
    {
        "id": 72,
        "name": "Liam McQuaid",
        "owner": "Liam McQuaid",
        "totalEarnings": 3660440,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 29
    },
    {
        "id": 83,
        "name": "Daniels",
        "owner": "Daniels",
        "totalEarnings": 3634680,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 30
    },
    {
        "id": 77,
        "name": "Greener",
        "owner": "Greener",
        "totalEarnings": 3528490,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116550
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 31
    },
    {
        "id": 22,
        "name": "Michael Blumer",
        "owner": "Michael Blumer",
        "totalEarnings": 3517150,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 589750
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 32
    },
    {
        "id": 56,
        "name": "Jordan Martinez",
        "owner": "Jordan Martinez",
        "totalEarnings": 3490480,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
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
        "currentRank": 33
    },
    {
        "id": 34,
        "name": "Shea DAWG",
        "owner": "Shea DAWG",
        "totalEarnings": 3465350,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 84000
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 1218000
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 84000
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 34
    },
    {
        "id": 65,
        "name": "Tyler-Made",
        "owner": "Tyler-Made",
        "totalEarnings": 3438540,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Sam Burns",
                "earnings": 1218000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 35
    },
    {
        "id": 10,
        "name": "Tigers Wood",
        "owner": "Tigers Wood",
        "totalEarnings": 3394090,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 36
    },
    {
        "id": 5,
        "name": "Jacob Hodgson",
        "owner": "Jacob Hodgson",
        "totalEarnings": 3376730,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Bubba Watson",
                "earnings": 0
            }
        },
        "tiebreaker": "-6",
        "previousRank": 0,
        "currentRank": 37
    },
    {
        "id": 88,
        "name": "Mike Cane",
        "owner": "Mike Cane",
        "totalEarnings": 3328780,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 65100
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 38
    },
    {
        "id": 84,
        "name": "Mark Watson 1",
        "owner": "Mark Watson 1",
        "totalEarnings": 3318140,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 116550
            },
            "groupE": {
                "name": "Nicolai Hojgaard",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 39
    },
    {
        "id": 8,
        "name": "Kinko the Clown",
        "owner": "Kinko the Clown",
        "totalEarnings": 3243590,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 40
    },
    {
        "id": 86,
        "name": "Maad Grenadez 1",
        "owner": "Maad Grenadez 1",
        "totalEarnings": 3239180,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Si Woo Kim",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Jacob Bridgeman",
                "earnings": 116550
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 65100
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 41
    },
    {
        "id": 21,
        "name": "Wren & Willow Webs",
        "owner": "Wren & Willow Webs",
        "totalEarnings": 3161340,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Wyndham Clark",
                "earnings": 589750
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 42
    },
    {
        "id": 67,
        "name": "Kelsey Webster",
        "owner": "Kelsey Webster",
        "totalEarnings": 3094980,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 304500
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 116550
            }
        },
        "tiebreaker": "11",
        "previousRank": 0,
        "currentRank": 43
    },
    {
        "id": 36,
        "name": "David Iudiciani #2",
        "owner": "David Iudiciani #2",
        "totalEarnings": 3060400,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 44
    },
    {
        "id": 6,
        "name": "Liam Regan",
        "owner": "Liam Regan",
        "totalEarnings": 2997400,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 84000
            },
            "groupE": {
                "name": "Bubba Watson",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 45
    },
    {
        "id": 32,
        "name": "David Iudiciani #1",
        "owner": "David Iudiciani #1",
        "totalEarnings": 2972620,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Gary Woodland",
                "earnings": 84000
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 46
    },
    {
        "id": 23,
        "name": "Maad grenadez 2",
        "owner": "Maad grenadez 2",
        "totalEarnings": 2970590,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupD2": {
                "name": "Brian Harman",
                "earnings": 51940
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 47
    },
    {
        "id": 81,
        "name": "FloydSwine2",
        "owner": "FloydSwine2",
        "totalEarnings": 2931950,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
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
                "earnings": 116550
            },
            "groupE": {
                "name": "Michael Kim",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 48
    },
    {
        "id": 58,
        "name": "Daniel Jennings",
        "owner": "Daniel Jennings",
        "totalEarnings": 2915150,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Sam Burns",
                "earnings": 1218000
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 49
    },
    {
        "id": 15,
        "name": "MacAtk",
        "owner": "MacAtk",
        "totalEarnings": 2898840,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 50
    },
    {
        "id": 28,
        "name": "Powell",
        "owner": "Powell",
        "totalEarnings": 2872590,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 51
    },
    {
        "id": 51,
        "name": "Lion Woods",
        "owner": "Lion Woods",
        "totalEarnings": 2836680,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Patrick Reed",
                "earnings": 2268000
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
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 52
    },
    {
        "id": 64,
        "name": "Patrick Charron",
        "owner": "Patrick Charron",
        "totalEarnings": 2733290,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 53
    },
    {
        "id": 41,
        "name": "David Iudiciani #4",
        "owner": "David Iudiciani #4",
        "totalEarnings": 2530780,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 589750
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 54
    },
    {
        "id": 49,
        "name": "Far from Par",
        "owner": "Far from Par",
        "totalEarnings": 2527700,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Sepp Straka",
                "earnings": 116550
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 55
    },
    {
        "id": 7,
        "name": "Alex Smith 2",
        "owner": "Alex Smith 2",
        "totalEarnings": 2525950,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 84000
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0
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
        "totalEarnings": 2497600,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Jordan Spieth",
                "earnings": 116550
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
                "earnings": 304500
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 393750
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 57
    },
    {
        "id": 1,
        "name": "Brendan McNulty",
        "owner": "Brendan McNulty",
        "totalEarnings": 2379090,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Ben Griffin",
                "earnings": 393750
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 58
    },
    {
        "id": 20,
        "name": "David Belcastro",
        "owner": "David Belcastro",
        "totalEarnings": 2355640,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-8",
        "previousRank": 0,
        "currentRank": 59
    },
    {
        "id": 78,
        "name": "Mike rik",
        "owner": "Mike rik",
        "totalEarnings": 2338140,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 60
    },
    {
        "id": 31,
        "name": "KrazMon",
        "owner": "KrazMon",
        "totalEarnings": 2320500,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Max Homa",
                "earnings": 304500
            },
            "groupD2": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-7",
        "previousRank": 0,
        "currentRank": 61
    },
    {
        "id": 17,
        "name": "DUIkitty",
        "owner": "DUIkitty",
        "totalEarnings": 2193100,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Chris Gotterup",
                "earnings": 393750
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
                "earnings": 116550
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 62
    },
    {
        "id": 71,
        "name": "Arnprior Bob",
        "owner": "Arnprior Bob",
        "totalEarnings": 2161950,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Justin Thomas",
                "earnings": 84000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Tyrell Hatton",
                "earnings": 589750
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 63
    },
    {
        "id": 11,
        "name": "French1",
        "owner": "French1",
        "totalEarnings": 2132900,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 64
    },
    {
        "id": 76,
        "name": "Carly Wilde",
        "owner": "Carly Wilde",
        "totalEarnings": 2049390,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Sunjae Im",
                "earnings": 0
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 65
    },
    {
        "id": 47,
        "name": "Alex Smith",
        "owner": "Alex Smith",
        "totalEarnings": 2019780,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Russell Henley",
                "earnings": 304500
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-13",
        "previousRank": 0,
        "currentRank": 66
    },
    {
        "id": 19,
        "name": "Logs",
        "owner": "Logs",
        "totalEarnings": 2004730,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 84000
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 67
    },
    {
        "id": 14,
        "name": "Maz",
        "owner": "Maz",
        "totalEarnings": 1953700,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Tommy Fleetwood",
                "earnings": 1218000
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
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
                "earnings": 116550
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 68
    },
    {
        "id": 35,
        "name": "Sami Sherry",
        "owner": "Sami Sherry",
        "totalEarnings": 1951390,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 69
    },
    {
        "id": 66,
        "name": "Ginger's R Us",
        "owner": "Ginger's R Us",
        "totalEarnings": 1925840,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
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
                "earnings": 51940
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 116550
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 70
    },
    {
        "id": 18,
        "name": "James Steels",
        "owner": "James Steels",
        "totalEarnings": 1856190,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 51940
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 71
    },
    {
        "id": 27,
        "name": "Know Nothing About Golf 2",
        "owner": "Know Nothing About Golf 2",
        "totalEarnings": 1841140,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Shane Lowry",
                "earnings": 798000
            },
            "groupD2": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 72
    },
    {
        "id": 44,
        "name": "James Talbot",
        "owner": "James Talbot",
        "totalEarnings": 1823150,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 84000
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-2",
        "previousRank": 0,
        "currentRank": 73
    },
    {
        "id": 53,
        "name": "Ian Watters",
        "owner": "Ian Watters",
        "totalEarnings": 1747830,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 74
    },
    {
        "id": 12,
        "name": "Dave Snowie",
        "owner": "Dave Snowie",
        "totalEarnings": 1742090,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Daniel Berger",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 75
    },
    {
        "id": 89,
        "name": "BoJack&Hersh",
        "owner": "BoJack&Hersh",
        "totalEarnings": 1741390,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116550
            },
            "groupD2": {
                "name": "Max Homa",
                "earnings": 304500
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 76
    },
    {
        "id": 68,
        "name": "Doink the Clown",
        "owner": "Doink the Clown",
        "totalEarnings": 1733340,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Jordan Spieth",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Jason Day",
                "earnings": 589750
            },
            "groupE": {
                "name": "Marco Penge",
                "earnings": 116550
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 77
    },
    {
        "id": 87,
        "name": "Tiger Woo",
        "owner": "Tiger Woo",
        "totalEarnings": 1681330,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 51940
            },
            "groupE": {
                "name": "Sergio Garcia",
                "earnings": 65100
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 78
    },
    {
        "id": 73,
        "name": "Jeff Pocock",
        "owner": "Jeff Pocock",
        "totalEarnings": 1680140,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 84000
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 79
    },
    {
        "id": 45,
        "name": "Steve Loder",
        "owner": "Steve Loder",
        "totalEarnings": 1668170,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 80
    },
    {
        "id": 38,
        "name": "Double Zero Dewey",
        "owner": "Double Zero Dewey",
        "totalEarnings": 1641640,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Robert MacIntyre",
                "earnings": 0
            },
            "groupD1": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupD2": {
                "name": "Adam Scott",
                "earnings": 84000
            },
            "groupE": {
                "name": "Harry English",
                "earnings": 160300
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 81
    },
    {
        "id": 16,
        "name": "Scott Boswall",
        "owner": "Scott Boswall",
        "totalEarnings": 1461390,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Chris Gotterup",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Danny Willett",
                "earnings": 0
            }
        },
        "tiebreaker": "-14",
        "previousRank": 0,
        "currentRank": 82
    },
    {
        "id": 25,
        "name": "Kristen Rose",
        "owner": "Kristen Rose",
        "totalEarnings": 1456280,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
            },
            "groupE": {
                "name": "Dustin Johnson",
                "earnings": 160300
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 83
    },
    {
        "id": 9,
        "name": "MartyBoy1",
        "owner": "MartyBoy1",
        "totalEarnings": 1440180,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "Cameron Smith",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 84
    },
    {
        "id": 61,
        "name": "FrenchGPT",
        "owner": "FrenchGPT",
        "totalEarnings": 1440180,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
            },
            "groupD2": {
                "name": "Corey Conners",
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-12",
        "previousRank": 0,
        "currentRank": 85
    },
    {
        "id": 54,
        "name": "Zack",
        "owner": "Zack",
        "totalEarnings": 1356040,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Cameron Young",
                "earnings": 589750
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
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
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-11",
        "previousRank": 0,
        "currentRank": 86
    },
    {
        "id": 57,
        "name": "Connor O",
        "owner": "Connor O",
        "totalEarnings": 1275890,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupC1": {
                "name": "Justin Rose",
                "earnings": 798000
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Patrick Cantlay",
                "earnings": 84000
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
        "currentRank": 87
    },
    {
        "id": 74,
        "name": "Josh Marks",
        "owner": "Josh Marks",
        "totalEarnings": 1273790,
        "players": {
            "groupA": {
                "name": "Bryson DeChambeau",
                "earnings": 65100
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Xander Schauffele",
                "earnings": 304500
            },
            "groupC1": {
                "name": "Hideki Matsuyama",
                "earnings": 393750
            },
            "groupC2": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupD1": {
                "name": "Sepp Straka",
                "earnings": 116550
            },
            "groupD2": {
                "name": "Si Woo Kim",
                "earnings": 51940
            },
            "groupE": {
                "name": "Maverick McNealy",
                "earnings": 65100
            }
        },
        "tiebreaker": "-10",
        "previousRank": 0,
        "currentRank": 88
    },
    {
        "id": 55,
        "name": "Kyle Palantzas",
        "owner": "Kyle Palantzas",
        "totalEarnings": 884730,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Jon Rahm",
                "earnings": 51940
            },
            "groupB2": {
                "name": "Matt Fitzpatrick",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Brooks Koepka",
                "earnings": 393750
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
                "earnings": 51940
            },
            "groupE": {
                "name": "JJ Spaun",
                "earnings": 0
            }
        },
        "tiebreaker": "-9",
        "previousRank": 0,
        "currentRank": 89
    },
    {
        "id": 4,
        "name": "Adam Valadao",
        "owner": "Adam Valadao",
        "totalEarnings": 799890,
        "players": {
            "groupA": {
                "name": "Scottie Scheffler",
                "earnings": 160300
            },
            "groupB1": {
                "name": "Ludvig \u00c5berg",
                "earnings": 160300
            },
            "groupB2": {
                "name": "Collin Morikawa",
                "earnings": 226800
            },
            "groupC1": {
                "name": "Viktor Hovland",
                "earnings": 116550
            },
            "groupC2": {
                "name": "Justin Thomas",
                "earnings": 84000
            },
            "groupD1": {
                "name": "Min Woo Lee",
                "earnings": 0
            },
            "groupD2": {
                "name": "Akshay Bhatia",
                "earnings": 51940
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
