/*
  take array of students
  return obj represetning notes distribution (number of notes)
  do not include invalid notes !(1, 2, 3, 4, 5)

  students are obj with name and notes: array

  iterate through each student
  students' notes
    check for validity
    add to running array of valid notes
  iterate through valid notes and record sum into obj
*/

function getNotesDistribution(students) {
  let validNotes = students.map(student => {
    return student['notes'].filter(note => [1, 2, 3, 4, 5].includes(note));
  }).flat()
  let result = {};

  return validNotes.reduce((obj, key) => {
    obj[key] = obj[sum] || 0;
    obj[key] += 1;
    return obj;
  }, {});
}


console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));