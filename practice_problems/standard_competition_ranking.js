/*
  assign same rank to matching values
  rank numbers are increased so some ranks are skipped

  given obj containing names and scores; given name return the rank

  runningRank
  assignedRank

  create new obj to hold name and rank
  change obj to array of entries and sort by score
  iterate through each entry using while loop,
  keeping track of running and assigned rank
    when reach one entry, record the score
    give it the assigned rank (in new obj)
    iterate running rank
    iterate index
    if next entry score is the same, repeat loop, otherwise increment assignedRank to runningRank and start next loop
  search for person's name in new obj and return rank
*/

function competitionRank(results, person) {
  let result = {};

  let resultArr = Object.entries(results).sort((a, b) => b[1] - a[1]);
  let idx = 0;
  let runningRank = 1;
  let assignedRank;
  while (idx < resultArr.length) {
    assignedRank = runningRank;
    let score = resultArr[idx][1];

    while (idx < resultArr.length && resultArr[idx][1] === score) {
      result[resultArr[idx][0]] = assignedRank;
      runningRank += 1;
      idx += 1;
    }
  }

  return result[person];
}

console.log(competitionRank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce"));

console.log(competitionRank({
  Aria: 90,
  Brooke: 90,
  Olivia: 90,
  Eve: 74,
  Ellie: 87
}, "Ellie"));