/*
  given obj of names and scores over semester
  return list of students who passed in abc order
  the pass mark is 100% in everything

  input: obj where each student's name is key and array of strings which represent
    their grades is the value
  output: array of strings of names in ABC order

  iterate through each student
    - when access the array of scores, can use every method on score and convert each string to number and 
    divide num / denominator
    determine if all scores are 100%
    if so, add to result array
  sort result and return

*/

function whoPassed(students) {
  let result = [];

  for (let key in students) {
    if (students[key].every(score => {
      return Number(score.split('/')[0]) / Number(score.split('/')[1]) === 1;
    })) {
      result.push(key);
    }
  }

  return result.sort();
}

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}));