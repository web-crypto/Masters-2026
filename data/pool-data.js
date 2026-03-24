// Masters Charity Pool 2026 — Data Layer
// Last updated manually or via API integration

const poolData = {
  lastUpdated: "2026-04-13T18:30:00",
  tournamentYear: 2026,
  tournamentName: "The Masters Tournament",
  charityName: "Ride to Conquer Cancer",
  entryFee: 30,
  charityPerEntry: 5,
  totalEntries: 89,
  totalCharityRaised: 445,
  prizePool: 2225,
  payoutStructure: {
    first: 1000,
    second: 500,
    third: 300,
    fourth: 200,
    fifth: 125,
    lastPlace: 100
  },

  // All available players by group
  playerGroups: {
    groupA: {
      label: "Group A",
      description: "Elite Tier",
      players: [
        "Scottie Scheffler", "Rory McIlroy", "Xander Schauffele",
        "Jon Rahm", "Collin Morikawa", "Ludvig Åberg"
      ]
    },
    groupB1: {
      label: "Group B-1",
      description: "Strong Contenders",
      players: [
        "Brooks Koepka", "Viktor Hovland", "Patrick Cantlay",
        "Tommy Fleetwood", "Bryson DeChambeau", "Shane Lowry"
      ]
    },
    groupB2: {
      label: "Group B-2",
      description: "Strong Contenders",
      players: [
        "Hideki Matsuyama", "Dustin Johnson", "Justin Thomas",
        "Cameron Smith", "Tony Finau", "Sahith Theegala"
      ]
    },
    groupB3: {
      label: "Group B-3",
      description: "Strong Contenders",
      players: [
        "Jordan Spieth", "Sam Burns", "Sungjae Im",
        "Russell Henley", "Corey Conners", "Robert MacIntyre"
      ]
    },
    groupC1: {
      label: "Group C-1",
      description: "Mid-Tier",
      players: [
        "Min Woo Lee", "Sepp Straka", "Tom Kim",
        "Keegan Bradley", "Adam Scott", "Matt Fitzpatrick"
      ]
    },
    groupC2: {
      label: "Group C-2",
      description: "Mid-Tier",
      players: [
        "Jason Day", "Tyrrell Hatton", "Si Woo Kim",
        "Brian Harman", "Wyndham Clark", "Cam Young"
      ]
    },
    groupC3: {
      label: "Group C-3",
      description: "Mid-Tier",
      players: [
        "Will Zalatoris", "Joaquín Niemann", "Nick Dunlap",
        "Chris Kirk", "Taylor Moore", "Denny McCarthy"
      ]
    },
    groupD: {
      label: "Group D",
      description: "Longshot / Value Pick",
      players: [
        "Justin Rose", "Fred Couples", "Tiger Woods",
        "Phil Mickelson", "José María Olazábal", "Bernhard Langer",
        "Sandy Lyle", "Larry Mize", "Vijay Singh", "Mike Weir"
      ]
    }
  },

  entries: [
    {
      id: 1,
      name: "I Like Big Putts",
      owner: "James W.",
      totalEarnings: 8381100,
      previousRank: 2,
      players: {
        groupA: { name: "Scottie Scheffler", earnings: 3780000 },
        groupB1: { name: "Brooks Koepka", earnings: 798000 },
        groupB2: { name: "Hideki Matsuyama", earnings: 703500 },
        groupB3: { name: "Jordan Spieth", earnings: 336000 },
        groupC1: { name: "Min Woo Lee", earnings: 168000 },
        groupC2: { name: "Jason Day", earnings: 75600 },
        groupC3: { name: "Will Zalatoris", earnings: 252000 },
        groupD: { name: "Justin Rose", earnings: 2268000 }
      }
    },
    {
      id: 2,
      name: "Fore! Play",
      owner: "Mike D.",
      totalEarnings: 7546500,
      previousRank: 1,
      players: {
        groupA: { name: "Rory McIlroy", earnings: 4200000 },
        groupB1: { name: "Tommy Fleetwood", earnings: 504000 },
        groupB2: { name: "Dustin Johnson", earnings: 168000 },
        groupB3: { name: "Sam Burns", earnings: 703500 },
        groupC1: { name: "Adam Scott", earnings: 336000 },
        groupC2: { name: "Brian Harman", earnings: 0 },
        groupC3: { name: "Joaquín Niemann", earnings: 504000 },
        groupD: { name: "Tiger Woods", earnings: 1131000 }
      }
    },
    {
      id: 3,
      name: "Grip It & Sip It",
      owner: "Sarah K.",
      totalEarnings: 6892200,
      previousRank: 4,
      players: {
        groupA: { name: "Xander Schauffele", earnings: 2520000 },
        groupB1: { name: "Viktor Hovland", earnings: 336000 },
        groupB2: { name: "Cameron Smith", earnings: 1131000 },
        groupB3: { name: "Sungjae Im", earnings: 504000 },
        groupC1: { name: "Sepp Straka", earnings: 168000 },
        groupC2: { name: "Tyrrell Hatton", earnings: 252000 },
        groupC3: { name: "Chris Kirk", earnings: 0 },
        groupD: { name: "Phil Mickelson", earnings: 1981200 }
      }
    },
    {
      id: 4,
      name: "The Back Nine Lives",
      owner: "Chris P.",
      totalEarnings: 6340800,
      previousRank: 3,
      players: {
        groupA: { name: "Scottie Scheffler", earnings: 3780000 },
        groupB1: { name: "Shane Lowry", earnings: 252000 },
        groupB2: { name: "Justin Thomas", earnings: 504000 },
        groupB3: { name: "Corey Conners", earnings: 168000 },
        groupC1: { name: "Tom Kim", earnings: 336000 },
        groupC2: { name: "Wyndham Clark", earnings: 798000 },
        groupC3: { name: "Nick Dunlap", earnings: 252000 },
        groupD: { name: "Fred Couples", earnings: 250800 }
      }
    },
    {
      id: 5,
      name: "Shanks A Lot",
      owner: "Dave T.",
      totalEarnings: 5967000,
      previousRank: 6,
      players: {
        groupA: { name: "Collin Morikawa", earnings: 1680000 },
        groupB1: { name: "Bryson DeChambeau", earnings: 798000 },
        groupB2: { name: "Tony Finau", earnings: 336000 },
        groupB3: { name: "Robert MacIntyre", earnings: 798000 },
        groupC1: { name: "Keegan Bradley", earnings: 504000 },
        groupC2: { name: "Si Woo Kim", earnings: 168000 },
        groupC3: { name: "Denny McCarthy", earnings: 75600 },
        groupD: { name: "Tiger Woods", earnings: 1131000 }
      }
    },
    {
      id: 6,
      name: "Putt Pirates",
      owner: "Rob F.",
      totalEarnings: 5628000,
      previousRank: 5,
      players: {
        groupA: { name: "Ludvig Åberg", earnings: 1260000 },
        groupB1: { name: "Patrick Cantlay", earnings: 1131000 },
        groupB2: { name: "Sahith Theegala", earnings: 798000 },
        groupB3: { name: "Russell Henley", earnings: 252000 },
        groupC1: { name: "Matt Fitzpatrick", earnings: 504000 },
        groupC2: { name: "Cam Young", earnings: 336000 },
        groupC3: { name: "Taylor Moore", earnings: 0 },
        groupD: { name: "José María Olazábal", earnings: 1347000 }
      }
    },
    {
      id: 7,
      name: "Bogey Nights",
      owner: "Amanda L.",
      totalEarnings: 5334600,
      previousRank: 8,
      players: {
        groupA: { name: "Rory McIlroy", earnings: 4200000 },
        groupB1: { name: "Viktor Hovland", earnings: 336000 },
        groupB2: { name: "Justin Thomas", earnings: 504000 },
        groupB3: { name: "Sam Burns", earnings: 703500 },
        groupC1: { name: "Tom Kim", earnings: 336000 },
        groupC2: { name: "Tyrrell Hatton", earnings: 252000 },
        groupC3: { name: "Nick Dunlap", earnings: 252000 },
        groupD: { name: "Vijay Singh", earnings: 0 }
      }
    },
    {
      id: 8,
      name: "Albatross Soup",
      owner: "Greg M.",
      totalEarnings: 5103000,
      previousRank: 7,
      players: {
        groupA: { name: "Jon Rahm", earnings: 2100000 },
        groupB1: { name: "Tommy Fleetwood", earnings: 504000 },
        groupB2: { name: "Hideki Matsuyama", earnings: 703500 },
        groupB3: { name: "Jordan Spieth", earnings: 336000 },
        groupC1: { name: "Keegan Bradley", earnings: 504000 },
        groupC2: { name: "Wyndham Clark", earnings: 798000 },
        groupC3: { name: "Will Zalatoris", earnings: 252000 },
        groupD: { name: "Sandy Lyle", earnings: 0 }
      }
    },
    {
      id: 9,
      name: "Par-Tee Animals",
      owner: "Jen H.",
      totalEarnings: 4838400,
      previousRank: 10,
      players: {
        groupA: { name: "Xander Schauffele", earnings: 2520000 },
        groupB1: { name: "Brooks Koepka", earnings: 798000 },
        groupB2: { name: "Cameron Smith", earnings: 1131000 },
        groupB3: { name: "Corey Conners", earnings: 168000 },
        groupC1: { name: "Adam Scott", earnings: 336000 },
        groupC2: { name: "Jason Day", earnings: 75600 },
        groupC3: { name: "Chris Kirk", earnings: 0 },
        groupD: { name: "Larry Mize", earnings: 0 }
      }
    },
    {
      id: 10,
      name: "The Green Jackets",
      owner: "Tom B.",
      totalEarnings: 4687200,
      previousRank: 9,
      players: {
        groupA: { name: "Collin Morikawa", earnings: 1680000 },
        groupB1: { name: "Patrick Cantlay", earnings: 1131000 },
        groupB2: { name: "Dustin Johnson", earnings: 168000 },
        groupB3: { name: "Sungjae Im", earnings: 504000 },
        groupC1: { name: "Sepp Straka", earnings: 168000 },
        groupC2: { name: "Brian Harman", earnings: 0 },
        groupC3: { name: "Joaquín Niemann", earnings: 504000 },
        groupD: { name: "Mike Weir", earnings: 532200 }
      }
    },
    {
      id: 11,
      name: "Hole In Fun",
      owner: "Lisa N.",
      totalEarnings: 4284000,
      previousRank: 12,
      players: {
        groupA: { name: "Scottie Scheffler", earnings: 3780000 },
        groupB1: { name: "Shane Lowry", earnings: 252000 },
        groupB2: { name: "Tony Finau", earnings: 336000 },
        groupB3: { name: "Russell Henley", earnings: 252000 },
        groupC1: { name: "Min Woo Lee", earnings: 168000 },
        groupC2: { name: "Si Woo Kim", earnings: 168000 },
        groupC3: { name: "Taylor Moore", earnings: 0 },
        groupD: { name: "Bernhard Langer", earnings: 0 }
      }
    },
    {
      id: 12,
      name: "Caddy Shack Attack",
      owner: "Pete R.",
      totalEarnings: 3897000,
      previousRank: 11,
      players: {
        groupA: { name: "Jon Rahm", earnings: 2100000 },
        groupB1: { name: "Bryson DeChambeau", earnings: 798000 },
        groupB2: { name: "Sahith Theegala", earnings: 798000 },
        groupB3: { name: "Robert MacIntyre", earnings: 798000 },
        groupC1: { name: "Matt Fitzpatrick", earnings: 504000 },
        groupC2: { name: "Cam Young", earnings: 336000 },
        groupC3: { name: "Denny McCarthy", earnings: 75600 },
        groupD: { name: "Vijay Singh", earnings: 0 }
      }
    },
    {
      id: 13,
      name: "Tee Rex",
      owner: "Nick S.",
      totalEarnings: 3528000,
      previousRank: 14,
      players: {
        groupA: { name: "Ludvig Åberg", earnings: 1260000 },
        groupB1: { name: "Tommy Fleetwood", earnings: 504000 },
        groupB2: { name: "Justin Thomas", earnings: 504000 },
        groupB3: { name: "Sam Burns", earnings: 703500 },
        groupC1: { name: "Keegan Bradley", earnings: 504000 },
        groupC2: { name: "Jason Day", earnings: 75600 },
        groupC3: { name: "Chris Kirk", earnings: 0 },
        groupD: { name: "Sandy Lyle", earnings: 0 }
      }
    },
    {
      id: 14,
      name: "Augusta Wind",
      owner: "Karen J.",
      totalEarnings: 3276000,
      previousRank: 13,
      players: {
        groupA: { name: "Rory McIlroy", earnings: 4200000 },
        groupB1: { name: "Viktor Hovland", earnings: 336000 },
        groupB2: { name: "Dustin Johnson", earnings: 168000 },
        groupB3: { name: "Corey Conners", earnings: 168000 },
        groupC1: { name: "Adam Scott", earnings: 336000 },
        groupC2: { name: "Brian Harman", earnings: 0 },
        groupC3: { name: "Taylor Moore", earnings: 0 },
        groupD: { name: "Larry Mize", earnings: 0 }
      }
    },
    {
      id: 15,
      name: "Wedge Issues",
      owner: "Steve C.",
      totalEarnings: 2932200,
      previousRank: 15,
      players: {
        groupA: { name: "Xander Schauffele", earnings: 2520000 },
        groupB1: { name: "Shane Lowry", earnings: 252000 },
        groupB2: { name: "Tony Finau", earnings: 336000 },
        groupB3: { name: "Sungjae Im", earnings: 504000 },
        groupC1: { name: "Sepp Straka", earnings: 168000 },
        groupC2: { name: "Tyrrell Hatton", earnings: 252000 },
        groupC3: { name: "Denny McCarthy", earnings: 75600 },
        groupD: { name: "Bernhard Langer", earnings: 0 }
      }
    }
  ]
};

// Recalculate totalEarnings from player data to ensure consistency
poolData.entries.forEach(entry => {
  const calculated = Object.values(entry.players).reduce((sum, p) => sum + p.earnings, 0);
  entry.totalEarnings = calculated;
});

// Sort by totalEarnings descending and assign current ranks
poolData.entries.sort((a, b) => b.totalEarnings - a.totalEarnings);
poolData.entries.forEach((entry, i) => {
  entry.currentRank = i + 1;
});

// Helper functions
function formatCurrency(amount) {
  return '$' + amount.toLocaleString('en-US');
}

function getRankChange(entry) {
  const change = entry.previousRank - entry.currentRank;
  if (change > 0) return { direction: 'up', amount: change };
  if (change < 0) return { direction: 'down', amount: Math.abs(change) };
  return { direction: 'same', amount: 0 };
}

function getTimeSinceUpdate() {
  const updated = new Date(poolData.lastUpdated);
  const now = new Date();
  const diffMs = now - updated;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffMins > 0) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  return 'Just now';
}

function getAllPlayers() {
  const playerMap = {};
  poolData.entries.forEach(entry => {
    Object.entries(entry.players).forEach(([group, player]) => {
      if (!playerMap[player.name]) {
        playerMap[player.name] = {
          name: player.name,
          group: group,
          earnings: player.earnings,
          entries: []
        };
      }
      playerMap[player.name].entries.push(entry.name);
    });
  });
  return Object.values(playerMap).sort((a, b) => b.earnings - a.earnings);
}

function getGroupLabel(groupKey) {
  const labels = {
    groupA: 'Group A',
    groupB1: 'Group B-1',
    groupB2: 'Group B-2',
    groupB3: 'Group B-3',
    groupC1: 'Group C-1',
    groupC2: 'Group C-2',
    groupC3: 'Group C-3',
    groupD: 'Group D'
  };
  return labels[groupKey] || groupKey;
}
