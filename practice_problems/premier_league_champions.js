/*
  array of football clubs with properties
  return team name with highest num points
  if two or more have same points, return with largest goal diff

  points = 3 * win + 0 * loss + 1 * draw
  goal diff = scored - conceded


  record current highest and the goal diff
  iterate through teams and determine number of points
    forEach
    points is sum up and apply formula
    also find goal diff
  compare to current highest points
  if same, find one with highest goal diff and store that as current highest
  overwrite relevant variables when new highest found
*/

function champions(teams) {
  let currHighPoints = findPoints(teams[0]);
  let currGoalDiff = findGoalDiff(teams[0]);
  let currTeamName = teams[0]['name'];

  teams.forEach(team => {
    if (findPoints(team) > currHighPoints) {
      currHighPoints = findPoints(team);
      currGoalDiff = findGoalDiff(team);
      currTeamName = team['name'];
    } else if (findPoints(team) === currHighPoints) {
      if (findGoalDiff(team) > currGoalDiff) {
        currHighPoints = findPoints(team);
        currGoalDiff = findGoalDiff(team);
        currTeamName = team['name'];
      }
    }
  })

  return currTeamName;
}

function findPoints(team) {
  return team['wins'] * 3 + team['draws'];
}

function findGoalDiff(team) {
  return team['scored'] - team['conceded'];
}


console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]));