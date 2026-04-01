// Masters Charity Pool 2024 — Historical Data
// Structure: 2A + 3B + 2C + 1D = 8 picks
// Parsed from Historical Masters Results.xlsx

const pool2024 = {
  "year": 2024,
  "totalEntries": 82,
  "groupStructure": {
    "groupA": {
      "label": "Group A",
      "picks": 2,
      "description": "Pick 2 Golfers"
    },
    "groupB": {
      "label": "Group B",
      "picks": 3,
      "description": "Pick 3 Golfers"
    },
    "groupC": {
      "label": "Group C",
      "picks": 2,
      "description": "Pick 2 Golfers"
    },
    "groupD": {
      "label": "Group D",
      "picks": 1,
      "description": "Pick 1 Golfer"
    }
  },
  "dailyStandings": {
    "fridayMorning": [
      {
        "rank": 1,
        "name": "Kyle Palantzas",
        "earnings": 5968005
      },
      {
        "rank": 2,
        "name": "Corey Koneczny Alias Crusty the Clown",
        "earnings": 5917245
      },
      {
        "rank": 3,
        "name": "Mike Feng",
        "earnings": 5821980
      },
      {
        "rank": 4,
        "name": "Kenny Coughlin",
        "earnings": 5789790
      },
      {
        "rank": 5,
        "name": "Jesse Callan",
        "earnings": 5733180
      },
      {
        "rank": 6,
        "name": "Mike Rik",
        "earnings": 5476590
      },
      {
        "rank": 7,
        "name": "Liam McQuaid",
        "earnings": 5419365
      },
      {
        "rank": 8,
        "name": "Ben sherren",
        "earnings": 4303470
      },
      {
        "rank": 9,
        "name": "MacAtk 1",
        "earnings": 4246155
      }
    ],
    "saturdayMorning": [
      {
        "rank": 1,
        "name": "Grandma Debs",
        "earnings": 5509500
      },
      {
        "rank": 2,
        "name": "Brendan McNulty",
        "earnings": 5359380
      },
      {
        "rank": 3,
        "name": "The Chaud",
        "earnings": 5138460
      },
      {
        "rank": 4,
        "name": "MacAtk 1",
        "earnings": 5062064
      },
      {
        "rank": 5,
        "name": "Ana Gil",
        "earnings": 4858124
      },
      {
        "rank": 6,
        "name": "Corey Koneczny Alias Crusty the Clown",
        "earnings": 4848044
      },
      {
        "rank": 7,
        "name": "Kyle Palantzas",
        "earnings": 4718024
      },
      {
        "rank": 8,
        "name": "Robert Dube",
        "earnings": 4708980
      },
      {
        "rank": 9,
        "name": "Mike Rik",
        "earnings": 4661700
      },
      {
        "rank": 10,
        "name": "Jesse Callan",
        "earnings": 4661700
      }
    ],
    "sundayMorning": [
      {
        "rank": 1,
        "name": "Brendan McNulty",
        "earnings": 6662340
      },
      {
        "rank": 2,
        "name": "B Shearer",
        "earnings": 6459638
      },
      {
        "rank": 3,
        "name": "Shaun Coughlin",
        "earnings": 6386018
      },
      {
        "rank": 4,
        "name": "Grandma Debs",
        "earnings": 5938560
      },
      {
        "rank": 5,
        "name": "Jeff Pockock",
        "earnings": 5849618
      },
      {
        "rank": 6,
        "name": "Steve Graham",
        "earnings": 5824238
      },
      {
        "rank": 7,
        "name": "The Chaud",
        "earnings": 5550615
      },
      {
        "rank": 8,
        "name": "MacAtk 1",
        "earnings": 5547038
      },
      {
        "rank": 9,
        "name": "Robert Dube-2",
        "earnings": 5371200
      },
      {
        "rank": 10,
        "name": "Ana Gil",
        "earnings": 5141835
      }
    ]
  },
  "entries": [
    {
      "id": 1,
      "name": "MacAtk 1",
      "owner": "MacAtk 1",
      "totalEarnings": 6662900,
      "finalRank": 1,
      "tiebreaker": 276,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "J.T. Poston",
          "earnings": 124200
        }
      }
    },
    {
      "id": 2,
      "name": "Jared Doyle",
      "owner": "Jared Doyle",
      "totalEarnings": 6556700,
      "finalRank": 2,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupD": {
          "name": "Chris Kirk",
          "earnings": 310000
        }
      }
    },
    {
      "id": 3,
      "name": "Shaun Coughlin",
      "owner": "Shaun Coughlin",
      "totalEarnings": 6481900,
      "finalRank": 3,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Harris English",
          "earnings": 175500
        }
      }
    },
    {
      "id": 4,
      "name": "Grandma Debs",
      "owner": "Grandma Debs",
      "totalEarnings": 6354700,
      "finalRank": 4,
      "tiebreaker": 279,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupD": {
          "name": "Chris Kirk",
          "earnings": 310000
        }
      }
    },
    {
      "id": 5,
      "name": "Carly Wilde",
      "owner": "Carly Wilde",
      "totalEarnings": 6286300,
      "finalRank": 5,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 6,
      "name": "Grandma Debs 2",
      "owner": "Grandma Debs 2",
      "totalEarnings": 6146500,
      "finalRank": 6,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    },
    {
      "id": 7,
      "name": "B Shearer",
      "owner": "B Shearer",
      "totalEarnings": 6004300,
      "finalRank": 7,
      "tiebreaker": 276,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 8,
      "name": "Brendan McNulty",
      "owner": "Brendan McNulty",
      "totalEarnings": 5895200,
      "finalRank": 8,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 9,
      "name": "Mac Atk 3",
      "owner": "Mac Atk 3",
      "totalEarnings": 5760100,
      "finalRank": 9,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Denny McCarthy",
          "earnings": 57200
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 10,
      "name": "The Chaud",
      "owner": "The Chaud",
      "totalEarnings": 5753700,
      "finalRank": 10,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupD": {
          "name": "Harris English",
          "earnings": 175500
        }
      }
    },
    {
      "id": 11,
      "name": "Ryan",
      "owner": "Ryan",
      "totalEarnings": 5542200,
      "finalRank": 11,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 12,
      "name": "Mike Daniels",
      "owner": "Mike Daniels",
      "totalEarnings": 5536700,
      "finalRank": 12,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB2": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Matthieu Pavon",
          "earnings": 405000
        }
      }
    },
    {
      "id": 13,
      "name": "Corey Koneczny Alias Crusty the Clown",
      "owner": "Corey Koneczny Alias Crusty the Clown",
      "totalEarnings": 5491600,
      "finalRank": 13,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupD": {
          "name": "Keegan Bradley",
          "earnings": 175500
        }
      }
    },
    {
      "id": 14,
      "name": "Steve Graham",
      "owner": "Steve Graham",
      "totalEarnings": 5447400,
      "finalRank": 14,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 15,
      "name": "ben sherren",
      "owner": "ben sherren",
      "totalEarnings": 5405600,
      "finalRank": 15,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 16,
      "name": "Alex Smith",
      "owner": "Alex Smith",
      "totalEarnings": 5392500,
      "finalRank": 16,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "Chris Kirk",
          "earnings": 310000
        }
      }
    },
    {
      "id": 17,
      "name": "Kristen Rose",
      "owner": "Kristen Rose",
      "totalEarnings": 5361400,
      "finalRank": 17,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 18,
      "name": "Robert Dube-2",
      "owner": "Robert Dube-2",
      "totalEarnings": 5284000,
      "finalRank": 18,
      "tiebreaker": -7,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Denny McCarthy",
          "earnings": 57200
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    },
    {
      "id": 19,
      "name": "Mike Feng",
      "owner": "Mike Feng",
      "totalEarnings": 5258900,
      "finalRank": 19,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 20,
      "name": "Jeff Pocock",
      "owner": "Jeff Pocock",
      "totalEarnings": 5208400,
      "finalRank": 20,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Denny McCarthy",
          "earnings": 57200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 21,
      "name": "Proud Victor",
      "owner": "Proud Victor",
      "totalEarnings": 5130100,
      "finalRank": 21,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Denny McCarthy",
          "earnings": 57200
        },
        "groupD": {
          "name": "Harris English",
          "earnings": 175500
        }
      }
    },
    {
      "id": 22,
      "name": "Ana Gil",
      "owner": "Ana Gil",
      "totalEarnings": 5113300,
      "finalRank": 22,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 23,
      "name": "Robert Dube",
      "owner": "Robert Dube",
      "totalEarnings": 5104900,
      "finalRank": 23,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Denny McCarthy",
          "earnings": 57200
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 24,
      "name": "Kelsey Webster",
      "owner": "Kelsey Webster",
      "totalEarnings": 5093500,
      "finalRank": 24,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Nick Dunlap",
          "earnings": 0
        }
      }
    },
    {
      "id": 25,
      "name": "Corey Koneczny alias Kinko the Clown",
      "owner": "Corey Koneczny alias Kinko the Clown",
      "totalEarnings": 5077200,
      "finalRank": 25,
      "tiebreaker": 276,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Chris Kirk",
          "earnings": 310000
        }
      }
    },
    {
      "id": 26,
      "name": "Ange Palantzas 1",
      "owner": "Ange Palantzas 1",
      "totalEarnings": 4979700,
      "finalRank": 26,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "Gary Woodland",
          "earnings": 0
        }
      }
    },
    {
      "id": 27,
      "name": "Chris Chappell #2",
      "owner": "Chris Chappell #2",
      "totalEarnings": 4927500,
      "finalRank": 27,
      "tiebreaker": 278,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 28,
      "name": "Adam Martinez",
      "owner": "Adam Martinez",
      "totalEarnings": 4889300,
      "finalRank": 28,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB2": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 29,
      "name": "Andrew Powell",
      "owner": "Andrew Powell",
      "totalEarnings": 4849700,
      "finalRank": 29,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 30,
      "name": "SuperTic",
      "owner": "SuperTic",
      "totalEarnings": 4840700,
      "finalRank": 30,
      "tiebreaker": -16,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Sepp Straka",
          "earnings": 310000
        }
      }
    },
    {
      "id": 31,
      "name": "Mitch MacAdam",
      "owner": "Mitch MacAdam",
      "totalEarnings": 4778100,
      "finalRank": 31,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB2": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 32,
      "name": "Jesse Callan",
      "owner": "Jesse Callan",
      "totalEarnings": 4775200,
      "finalRank": 32,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 33,
      "name": "James Steels",
      "owner": "James Steels",
      "totalEarnings": 4734000,
      "finalRank": 33,
      "tiebreaker": -14,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    },
    {
      "id": 34,
      "name": "Kyle Palantzas",
      "owner": "Kyle Palantzas",
      "totalEarnings": 4725300,
      "finalRank": 34,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 35,
      "name": "Mike rik",
      "owner": "Mike rik",
      "totalEarnings": 4723900,
      "finalRank": 35,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 36,
      "name": "Snowie’s Sandbaggers",
      "owner": "Snowie’s Sandbaggers",
      "totalEarnings": 4711000,
      "finalRank": 36,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Hideki Matsuyama",
          "earnings": 86000
        },
        "groupB1": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB2": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupD": {
          "name": "Sepp Straka",
          "earnings": 310000
        }
      }
    },
    {
      "id": 37,
      "name": "Michael Blumer",
      "owner": "Michael Blumer",
      "totalEarnings": 4647000,
      "finalRank": 37,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 38,
      "name": "Dylan Callan",
      "owner": "Dylan Callan",
      "totalEarnings": 4632300,
      "finalRank": 38,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Jake Knapp",
          "earnings": 44400
        }
      }
    },
    {
      "id": 39,
      "name": "Tom James",
      "owner": "Tom James",
      "totalEarnings": 4615200,
      "finalRank": 39,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Harris English",
          "earnings": 175500
        }
      }
    },
    {
      "id": 40,
      "name": "Kenny Coughlin",
      "owner": "Kenny Coughlin",
      "totalEarnings": 4613700,
      "finalRank": 40,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Adam Scott",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Nick Dunlap",
          "earnings": 0
        }
      }
    },
    {
      "id": 41,
      "name": "Tyler",
      "owner": "Tyler",
      "totalEarnings": 4613300,
      "finalRank": 41,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Jake Knapp",
          "earnings": 44400
        }
      }
    },
    {
      "id": 42,
      "name": "Ken Broaderip 2",
      "owner": "Ken Broaderip 2",
      "totalEarnings": 4594000,
      "finalRank": 42,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    },
    {
      "id": 43,
      "name": "Sarah Moignard",
      "owner": "Sarah Moignard",
      "totalEarnings": 4583700,
      "finalRank": 43,
      "tiebreaker": 278,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 44,
      "name": "Jordan MacDonald",
      "owner": "Jordan MacDonald",
      "totalEarnings": 4577300,
      "finalRank": 44,
      "tiebreaker": 276,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 45,
      "name": "Liam McQuaid 2",
      "owner": "Liam McQuaid 2",
      "totalEarnings": 4572100,
      "finalRank": 45,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Wyndham Clark",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Denny McCarthy",
          "earnings": 57200
        },
        "groupD": {
          "name": "Nick Dunlap",
          "earnings": 0
        }
      }
    },
    {
      "id": 46,
      "name": "David Belcastro",
      "owner": "David Belcastro",
      "totalEarnings": 4570300,
      "finalRank": 46,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 47,
      "name": "Ryan Lloyd",
      "owner": "Ryan Lloyd",
      "totalEarnings": 4511700,
      "finalRank": 47,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Wyndham Clark",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB2": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 48,
      "name": "Liam McQuaid",
      "owner": "Liam McQuaid",
      "totalEarnings": 4482100,
      "finalRank": 48,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nicolai Højgaard",
          "earnings": 310000
        }
      }
    },
    {
      "id": 49,
      "name": "Mark Watson (2)",
      "owner": "Mark Watson (2)",
      "totalEarnings": 4481700,
      "finalRank": 49,
      "tiebreaker": -17,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Hideki Matsuyama",
          "earnings": 86000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Cameron Davis",
          "earnings": 405000
        }
      }
    },
    {
      "id": 50,
      "name": "Justine Pendergast",
      "owner": "Justine Pendergast",
      "totalEarnings": 4458700,
      "finalRank": 50,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 51,
      "name": "Chris Chappell #1",
      "owner": "Chris Chappell #1",
      "totalEarnings": 4445600,
      "finalRank": 51,
      "tiebreaker": -14,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 52,
      "name": "Mac Atk 2",
      "owner": "Mac Atk 2",
      "totalEarnings": 4324100,
      "finalRank": 52,
      "tiebreaker": -16,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 53,
      "name": "Josh French",
      "owner": "Josh French",
      "totalEarnings": 4295100,
      "finalRank": 53,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Patrick Cantlay",
          "earnings": 175500
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupC1": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 54,
      "name": "Scott Boswall",
      "owner": "Scott Boswall",
      "totalEarnings": 4272800,
      "finalRank": 54,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Sam Burns",
          "earnings": 0
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    },
    {
      "id": 55,
      "name": "Grant El",
      "owner": "Grant El",
      "totalEarnings": 4263600,
      "finalRank": 55,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 56,
      "name": "Jesse Knight",
      "owner": "Jesse Knight",
      "totalEarnings": 4258000,
      "finalRank": 56,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Adam Scott",
          "earnings": 175500
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 57,
      "name": "Kirtan Patel",
      "owner": "Kirtan Patel",
      "totalEarnings": 4151800,
      "finalRank": 57,
      "tiebreaker": -16,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 58,
      "name": "Brian Darlow",
      "owner": "Brian Darlow",
      "totalEarnings": 4140300,
      "finalRank": 58,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 59,
      "name": "Mike Moutrey",
      "owner": "Mike Moutrey",
      "totalEarnings": 4076700,
      "finalRank": 59,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Hideki Matsuyama",
          "earnings": 86000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 60,
      "name": "Nanny",
      "owner": "Nanny",
      "totalEarnings": 4042900,
      "finalRank": 60,
      "tiebreaker": -14,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB2": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 61,
      "name": "The McCormack's",
      "owner": "The McCormack's",
      "totalEarnings": 3904700,
      "finalRank": 61,
      "tiebreaker": null,
      "players": {
        "groupA1": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB2": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 62,
      "name": "David Iudiciani",
      "owner": "David Iudiciani",
      "totalEarnings": 3854600,
      "finalRank": 62,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Wyndham Clark",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 63,
      "name": "Dave Snowie",
      "owner": "Dave Snowie",
      "totalEarnings": 3849200,
      "finalRank": 63,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Scottie Scheffler",
          "earnings": 3600000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Sungjae Im",
          "earnings": 0
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    },
    {
      "id": 64,
      "name": "Andrew Wilkins",
      "owner": "Andrew Wilkins",
      "totalEarnings": 3615100,
      "finalRank": 64,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Ludvig Åberg",
          "earnings": 2160000
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 65,
      "name": "Michael Ruta",
      "owner": "Michael Ruta",
      "totalEarnings": 3123900,
      "finalRank": 65,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupC1": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 66,
      "name": "LoLed aka Mrs. WORLDWIDE",
      "owner": "LoLed aka Mrs. WORLDWIDE",
      "totalEarnings": 2938100,
      "finalRank": 66,
      "tiebreaker": -15,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Ludvig Åberg",
          "earnings": 2160000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupD": {
          "name": "Thorbjørn Olesen",
          "earnings": 41400
        }
      }
    },
    {
      "id": 67,
      "name": "Corey Koneczny alias Doink the Clown",
      "owner": "Corey Koneczny alias Doink the Clown",
      "totalEarnings": 2932400,
      "finalRank": 67,
      "tiebreaker": -14,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupD": {
          "name": "Chris Kirk",
          "earnings": 310000
        }
      }
    },
    {
      "id": 68,
      "name": "ben sherren 2",
      "owner": "ben sherren 2",
      "totalEarnings": 2662200,
      "finalRank": 68,
      "tiebreaker": -10,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Bryson DeChambeau",
          "earnings": 695000
        },
        "groupC1": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupC2": {
          "name": "Sergio Garcia",
          "earnings": 0
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 69,
      "name": "Floyd Swine",
      "owner": "Floyd Swine",
      "totalEarnings": 2621200,
      "finalRank": 69,
      "tiebreaker": -18,
      "players": {
        "groupA1": {
          "name": "Wyndham Clark",
          "earnings": 0
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Tommy Fleetwood",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupC2": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupD": {
          "name": "Chris Kirk",
          "earnings": 310000
        }
      }
    },
    {
      "id": 70,
      "name": "Liam Regan",
      "owner": "Liam Regan",
      "totalEarnings": 2154500,
      "finalRank": 70,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupA2": {
          "name": "Hideki Matsuyama",
          "earnings": 86000
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Collin Morikawa",
          "earnings": 1040000
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 71,
      "name": "Mark Watson",
      "owner": "Mark Watson",
      "totalEarnings": 2090700,
      "finalRank": 71,
      "tiebreaker": -13,
      "players": {
        "groupA1": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 72,
      "name": "Kraz",
      "owner": "Kraz",
      "totalEarnings": 1933700,
      "finalRank": 72,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Patrick Cantlay",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupC1": {
          "name": "Adam Scott",
          "earnings": 175500
        },
        "groupC2": {
          "name": "Justin Rose",
          "earnings": 0
        },
        "groupD": {
          "name": "Nicolai Højgaard",
          "earnings": 310000
        }
      }
    },
    {
      "id": 73,
      "name": "Kevin Campbell",
      "owner": "Kevin Campbell",
      "totalEarnings": 1803600,
      "finalRank": 73,
      "tiebreaker": -12,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Sam Burns",
          "earnings": 0
        },
        "groupC1": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupC2": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupD": {
          "name": "Bubba Watson",
          "earnings": 0
        }
      }
    },
    {
      "id": 74,
      "name": "Jesse Callan 2",
      "owner": "Jesse Callan 2",
      "totalEarnings": 1722400,
      "finalRank": 74,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Patrick Cantlay",
          "earnings": 175500
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupD": {
          "name": "Sepp Straka",
          "earnings": 310000
        }
      }
    },
    {
      "id": 75,
      "name": "Josh Marks",
      "owner": "Josh Marks",
      "totalEarnings": 1720100,
      "finalRank": 75,
      "tiebreaker": -9,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Brian Harman",
          "earnings": 0
        },
        "groupB2": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupC1": {
          "name": "Patrick Reed",
          "earnings": 405000
        },
        "groupC2": {
          "name": "Min Woo Lee",
          "earnings": 175500
        },
        "groupD": {
          "name": "Tom Kim",
          "earnings": 124200
        }
      }
    },
    {
      "id": 76,
      "name": "B Shearer 2",
      "owner": "B Shearer 2",
      "totalEarnings": 1613300,
      "finalRank": 76,
      "tiebreaker": -18,
      "players": {
        "groupA1": {
          "name": "Jon Rahm",
          "earnings": 57200
        },
        "groupA2": {
          "name": "Hideki Matsuyama",
          "earnings": 86000
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 77,
      "name": "Adam Neumark",
      "owner": "Adam Neumark",
      "totalEarnings": 1540900,
      "finalRank": 77,
      "tiebreaker": 276,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Max Homa",
          "earnings": 1040000
        },
        "groupB2": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Phil Mickelson",
          "earnings": 72000
        }
      }
    },
    {
      "id": 78,
      "name": "Nathan Snowie",
      "owner": "Nathan Snowie",
      "totalEarnings": 1522900,
      "finalRank": 78,
      "tiebreaker": -15,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Rickie Fowler",
          "earnings": 124200
        },
        "groupD": {
          "name": "Nick Taylor",
          "earnings": 0
        }
      }
    },
    {
      "id": 79,
      "name": "David Iudiciani 2",
      "owner": "David Iudiciani 2",
      "totalEarnings": 1407500,
      "finalRank": 79,
      "tiebreaker": -8,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Xander Schauffele",
          "earnings": 620000
        },
        "groupB1": {
          "name": "Sam Burns",
          "earnings": 0
        },
        "groupB2": {
          "name": "Joaquín Niemann",
          "earnings": 175500
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Tyrrell Hatton",
          "earnings": 540000
        },
        "groupD": {
          "name": "Nick Dunlap",
          "earnings": 0
        }
      }
    },
    {
      "id": 80,
      "name": "Rob Frawley",
      "owner": "Rob Frawley",
      "totalEarnings": 1185100,
      "finalRank": 80,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupA2": {
          "name": "Cameron Smith",
          "earnings": 695000
        },
        "groupB1": {
          "name": "Dustin Johnson",
          "earnings": 0
        },
        "groupB2": {
          "name": "Jordan Spieth",
          "earnings": 0
        },
        "groupB3": {
          "name": "Corey Conners",
          "earnings": 86000
        },
        "groupC1": {
          "name": "Russell Henley",
          "earnings": 86000
        },
        "groupC2": {
          "name": "Akshay Bhatia",
          "earnings": 103000
        },
        "groupD": {
          "name": "Tiger Woods",
          "earnings": 39600
        }
      }
    },
    {
      "id": 81,
      "name": "Ange Palantzas 2",
      "owner": "Ange Palantzas 2",
      "totalEarnings": 1131600,
      "finalRank": 81,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Rory McIlroy",
          "earnings": 175500
        },
        "groupB1": {
          "name": "Matt Fitzpatrick",
          "earnings": 175500
        },
        "groupB2": {
          "name": "Cameron Young",
          "earnings": 540000
        },
        "groupB3": {
          "name": "Justin Thomas",
          "earnings": 0
        },
        "groupC1": {
          "name": "Shane Lowry",
          "earnings": 72000
        },
        "groupC2": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupD": {
          "name": "Erik Van Rooyen",
          "earnings": 44400
        }
      }
    },
    {
      "id": 82,
      "name": "Ken Broaderip",
      "owner": "Ken Broaderip",
      "totalEarnings": 994000,
      "finalRank": 82,
      "tiebreaker": -11,
      "players": {
        "groupA1": {
          "name": "Viktor Hovland",
          "earnings": 0
        },
        "groupA2": {
          "name": "Brooks Koepka",
          "earnings": 57200
        },
        "groupB1": {
          "name": "Sahith Theegala",
          "earnings": 57200
        },
        "groupB2": {
          "name": "Tony Finau",
          "earnings": 44400
        },
        "groupB3": {
          "name": "Will Zalatoris",
          "earnings": 540000
        },
        "groupC1": {
          "name": "Si Woo Kim",
          "earnings": 124200
        },
        "groupC2": {
          "name": "Jason Day",
          "earnings": 124200
        },
        "groupD": {
          "name": "Adam Hadwin",
          "earnings": 46800
        }
      }
    }
  ]
};
