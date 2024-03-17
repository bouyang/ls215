/*
  
  takes ab obj and returns obj with all entries having unique marks
  if marks are same, take who is eldest

  care only about the marks value and if two have same then only take oldest

  what to do if is all info is not given?
    - input obj empty?
    - entry without mark
    - entry without age
  wrong data type?
    - marks always be string of "number"
    - age always be number
  output
    - how should it be ordered? (by input order w/ dupes removed)
  
  input: obj with multiple entries +

  output: obj with multiple entries +

  intermediate: array of entries could be easier to overwrite data


  - convert input obj to entries arr
  - iterate through all entries
  - deteremine the marks value
  - if it does not exist, add to result obj
  - if it does exist, compmare the ages and take the larger age one (overwrite)
  - convert result obj to output format if necessary
*/

function getObject(args) {
  let input = Object.entries(args);
  let result = [];

  input.forEach(entry => {
    let markVal = Number(entry[1]['marks']);
    let added = false;

    result.forEach((ele, idx) => {
      if (Number(ele['marks']) === markVal) {
        added = true;
        if (ele['age'] < entry[1]['age']) {
          result.splice(idx, 1, entry[1]['age']);
        }
      }
    })

    if (!added) {
      result.push(entry[1]);
    }
  });

  let resultObj = {};
  for (let idx = 0; idx < result.length; idx += 1) {
    resultObj[String(idx)] = result[idx];
  }

  return resultObj;
}

console.log(getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}));